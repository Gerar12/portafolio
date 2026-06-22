import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/assistantContext";

export const runtime = "nodejs";

const MINIMAX_URL = "https://api.minimax.io/v1/chat/completions";
const MODEL = process.env.MINIMAX_MODEL || "MiniMax-M2.5";

// Límites para controlar costo y abuso
const MAX_MESSAGE_LEN = 500; // caracteres por pregunta
const MAX_HISTORY = 8; // últimos N mensajes que enviamos como contexto
const MAX_TOKENS = 400; // tope de respuesta
const RATE_LIMIT = 20; // peticiones
const RATE_WINDOW_MS = 60_000; // por minuto, por IP

// Rate-limit simple en memoria (suficiente para un portafolio)
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  if (!process.env.MINIMAX_API_KEY) {
    return NextResponse.json(
      { error: "Assistant no configurado." },
      { status: 500 }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas preguntas seguidas. Intenta en un momento." },
      { status: 429 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Petición inválida." }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const lastUser = [...incoming].reverse().find((m) => m.role === "user");
  if (!lastUser || !lastUser.content?.trim()) {
    return NextResponse.json({ error: "Mensaje vacío." }, { status: 400 });
  }
  if (lastUser.content.length > MAX_MESSAGE_LEN) {
    return NextResponse.json(
      { error: `La pregunta es muy larga (máx. ${MAX_MESSAGE_LEN} caracteres).` },
      { status: 400 }
    );
  }

  // Sanea historial: solo roles válidos, recorta longitud y cantidad
  const history = incoming
    .filter((m) => (m.role === "user" || m.role === "assistant") && m.content?.trim())
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LEN) }));

  const payload = {
    model: MODEL,
    messages: [{ role: "system", content: buildSystemPrompt() }, ...history],
    max_tokens: MAX_TOKENS,
    temperature: 0.6,
    top_p: 0.9,
  };

  try {
    const res = await fetch(MINIMAX_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MINIMAX_API_KEY}`,
      },
      body: JSON.stringify(payload),
      // Evita colgar al usuario si MiniMax tarda
      signal: AbortSignal.timeout(30_000),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("MiniMax error", res.status, detail);
      return NextResponse.json(
        { error: "El asistente no está disponible ahora. Escríbele a me@gcoder.dev." },
        { status: 502 }
      );
    }

    const data = await res.json();

    // MiniMax a veces responde 200 con un cuerpo de error
    if (data?.error || (data?.base_resp && data.base_resp.status_code !== 0)) {
      console.error("MiniMax body error", JSON.stringify(data?.error || data?.base_resp));
      return NextResponse.json(
        { error: "El asistente no está disponible ahora. Escríbele a me@gcoder.dev." },
        { status: 502 }
      );
    }

    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Lo siento, no pude generar una respuesta. Escríbele a me@gcoder.dev.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("MiniMax fetch failed", err);
    return NextResponse.json(
      { error: "El asistente no está disponible ahora. Escríbele a me@gcoder.dev." },
      { status: 502 }
    );
  }
}
