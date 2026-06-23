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

export default function ChatWidget() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = {
    title: isEn ? "Ask about Gerar" : "Pregúntale a Gerar",
    subtitle: isEn ? "Virtual assistant" : "Asistente virtual",
    placeholder: isEn ? "Ask about a project, stack…" : "Pregunta por un proyecto, stack…",
    open: isEn ? "Open assistant" : "Abrir asistente",
    close: isEn ? "Close" : "Cerrar",
    send: isEn ? "Send" : "Enviar",
    greeting: isEn
      ? "Hi 👋 I'm Gerar's virtual assistant. Ask me about his projects, stack or experience."
      : "Hola 👋 Soy el asistente virtual de Gerar. Pregúntame sobre sus proyectos, stack o experiencia.",
    error: isEn
      ? "Something went wrong. Try again or email me@gcoder.dev."
      : "Algo salió mal. Intenta de nuevo o escribe a me@gcoder.dev.",
  };

  const suggestions = isEn
    ? ["What is his strongest project?", "What's his tech stack?", "Is he available to hire?"]
    : ["¿Cuál es su proyecto más fuerte?", "¿Qué tecnologías domina?", "¿Está disponible para trabajar?"];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

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

  return (
    <>
      <motion.button
        className={styles.fab}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.close : t.open}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
              <BotAvatar size={44} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-label={t.title}
          >
            <header className={styles.header}>
              <span className={styles.avatar}>
                <BotAvatar size={32} />
              </span>
              <span className={styles.headerText}>
                <strong className={styles.headerTitle}>{t.title}</strong>
                <span className={styles.headerSub}>
                  <span className={styles.dot} /> {t.subtitle}
                </span>
              </span>
              <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label={t.close}>
                <X size={18} />
              </button>
            </header>

            <div className={styles.messages} ref={scrollRef}>
              <div className={`${styles.bubble} ${styles.assistant}`}>{t.greeting}</div>

              {messages.length === 0 && (
                <div className={styles.suggestions}>
                  {suggestions.map((s) => (
                    <button key={s} className={styles.suggestion} onClick={() => send(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`${styles.bubble} ${m.role === "user" ? styles.user : styles.assistant}`}>
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className={`${styles.bubble} ${styles.assistant} ${styles.typing}`}>
                  <span /><span /><span />
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
                placeholder={t.placeholder}
                maxLength={500}
                disabled={loading}
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
