"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BotAvatar from "./BotAvatar";
import styles from "./ChatWidget.module.css";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setMobile(mq.matches);
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return mobile;
}

/**
 * Keep fullscreen chat locked to the *visual* viewport so iOS/Android
 * keyboards don't shove the fixed panel up and break the layout.
 */
function useVisualViewportLock(
  active: boolean,
  panelRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    if (!active) return;

    const panel = panelRef.current;
    const vv = window.visualViewport;
    const scrollY = window.scrollY;

    const sync = () => {
      if (!panel) return;
      const top = vv?.offsetTop ?? 0;
      const height = vv?.height ?? window.innerHeight;
      panel.style.setProperty("--vv-top", `${top}px`);
      panel.style.setProperty("--vv-height", `${height}px`);
      // Mark keyboard-open when the visual viewport is clearly shorter
      const keyboardOpen = height < window.innerHeight * 0.85;
      panel.dataset.keyboard = keyboardOpen ? "open" : "closed";
    };

    // Freeze document scroll — iOS otherwise pushes the page with the keyboard
    const body = document.body;
    const html = document.documentElement;
    const prev = {
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
      bodyOverflow: body.style.overflow,
      htmlOverflow: html.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    sync();
    vv?.addEventListener("resize", sync);
    vv?.addEventListener("scroll", sync);
    window.addEventListener("resize", sync);

    return () => {
      vv?.removeEventListener("resize", sync);
      vv?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);

      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.left = prev.bodyLeft;
      body.style.right = prev.bodyRight;
      body.style.width = prev.bodyWidth;
      body.style.overflow = prev.bodyOverflow;
      html.style.overflow = prev.htmlOverflow;
      window.scrollTo(0, scrollY);

      if (panel) {
        panel.style.removeProperty("--vv-top");
        panel.style.removeProperty("--vv-height");
        delete panel.dataset.keyboard;
      }
    };
  }, [active, panelRef]);
}

export default function ChatWidget() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const isMobile = useIsMobile();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const t = {
    title: isEn ? "Ask about Gerar" : "Pregúntale a Gerar",
    subtitle: isEn ? "Online · Virtual assistant" : "En línea · Asistente virtual",
    placeholder: isEn ? "Ask about a project, stack…" : "Pregunta por un proyecto, stack…",
    open: isEn ? "Open assistant" : "Abrir asistente",
    close: isEn ? "Close" : "Cerrar",
    send: isEn ? "Send" : "Enviar",
    greeting: isEn
      ? "Hi — I'm Gerar's virtual assistant. Ask me about his projects, stack or experience."
      : "Hola — Soy el asistente virtual de Gerar. Pregúntame sobre sus proyectos, stack o experiencia.",
    error: isEn
      ? "Something went wrong. Try again or email me@gcoder.dev."
      : "Algo salió mal. Intenta de nuevo o escribe a me@gcoder.dev.",
    emptyHint: isEn ? "Try a quick question" : "Prueba una pregunta rápida",
  };

  const suggestions = isEn
    ? ["What is his strongest project?", "What's his tech stack?", "Is he available to hire?"]
    : ["¿Cuál es su proyecto más fuerte?", "¿Qué tecnologías domina?", "¿Está disponible para trabajar?"];

  useVisualViewportLock(open && isMobile, panelRef);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!open) {
      setAnimDone(false);
      return;
    }
    // After open animation, drop Framer transforms so keyboard can't fight them
    const id = window.setTimeout(() => setAnimDone(true), 320);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open || !isMobile) return;
    // Don't steal focus on open — let user tap the input. Avoids keyboard
    // shoving the layout before the visualViewport lock is ready.
  }, [open, isMobile]);

  useEffect(() => {
    if (!open || isMobile) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 280);
    return () => window.clearTimeout(id);
  }, [open, isMobile]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply = res.ok && data.reply ? data.reply : data.error || t.error;
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  const panelVariants = isMobile
    ? {
        initial: { opacity: 0, y: "100%" },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "100%" },
      }
    : {
        initial: { opacity: 0, y: 20, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.96 },
      };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            className={styles.fab}
            onClick={() => setOpen(true)}
            aria-label={t.open}
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 8 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
          >
            <BotAvatar size={56} mood="idle" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            key="backdrop"
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            className={`${styles.panel} ${isMobile ? styles.panelMobile : ""} ${animDone && isMobile ? styles.panelSettled : ""}`}
            initial={panelVariants.initial}
            animate={panelVariants.animate}
            exit={panelVariants.exit}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={t.title}
          >
            <header className={styles.header}>
              <span className={styles.avatar}>
                <BotAvatar size={isMobile ? 40 : 36} mood={loading ? "typing" : "idle"} />
              </span>
              <span className={styles.headerText}>
                <strong className={styles.headerTitle}>{t.title}</strong>
                <span className={styles.headerSub}>
                  <span className={styles.dot} /> {t.subtitle}
                </span>
              </span>
              <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label={t.close}>
                <X size={20} />
              </button>
            </header>

            <div className={styles.messages} ref={scrollRef}>
              <div className={`${styles.bubble} ${styles.assistant}`}>{t.greeting}</div>

              {messages.length === 0 && (
                <div className={styles.suggestionsBlock}>
                  <span className={styles.suggestionsLabel}>{t.emptyHint}</span>
                  <div className={styles.suggestions}>
                    {suggestions.map((s) => (
                      <button key={s} className={styles.suggestion} onClick={() => send(s)} type="button">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`${styles.bubble} ${m.role === "user" ? styles.user : styles.assistant}`}>
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className={`${styles.bubble} ${styles.assistant} ${styles.typing}`}>
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            <form
              className={styles.inputRow}
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                ref={inputRef}
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => {
                  // After keyboard animation, scroll to latest message
                  window.setTimeout(() => {
                    scrollRef.current?.scrollTo({
                      top: scrollRef.current.scrollHeight,
                      behavior: "smooth",
                    });
                  }, 300);
                }}
                placeholder={t.placeholder}
                maxLength={500}
                disabled={loading}
                enterKeyHint="send"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="sentences"
              />
              <button className={styles.sendBtn} type="submit" disabled={loading || !input.trim()} aria-label={t.send}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
