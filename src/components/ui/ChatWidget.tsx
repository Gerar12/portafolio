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

export default function ChatWidget() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const isMobile = useIsMobile();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      // Defer focus so mobile keyboard/layout settle after fullscreen open
      const id = window.setTimeout(() => inputRef.current?.focus(), 280);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    if (!open || !isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
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
            className={styles.panel}
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
                placeholder={t.placeholder}
                maxLength={500}
                disabled={loading}
                enterKeyHint="send"
                autoComplete="off"
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
