"use client";

import { useEffect, useState, type ReactNode } from "react";

type Strategy = "skip" | "defer-long" | "defer";

/** Detect devices where early WebGL / heavy JS hurts first paint (esp. Safari). */
export function getHeavyFxStrategy(): Strategy {
  if (typeof window === "undefined") return "defer";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return "skip";

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  };
  if (nav.connection?.saveData) return "skip";
  if (nav.connection?.effectiveType === "2g" || nav.connection?.effectiveType === "slow-2g") {
    return "skip";
  }

  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  // iOS Safari: skip WebGL on first visit — CSS blobs remain
  if (isIOS) return "skip";

  const isSafari =
    /Safari/i.test(ua) &&
    !/Chrome|CriOS|Chromium|Edg|EdgiOS|OPR|Firefox|FxiOS/i.test(ua);
  if (isSafari) return "defer-long";

  return "defer";
}

function whenIdle(cb: () => void, timeoutMs: number) {
  const w = window;
  if ("requestIdleCallback" in w) {
    const id = w.requestIdleCallback(cb, { timeout: timeoutMs });
    return () => w.cancelIdleCallback(id);
  }
  const t = globalThis.setTimeout(cb, Math.min(timeoutMs, 1200));
  return () => globalThis.clearTimeout(t);
}

/**
 * Mount children only after first paint / idle so LCP & Safari don't stutter.
 * `delayMs` is a floor wait after mount (load event preferred).
 */
export function DeferredMount({
  children,
  delayMs = 0,
  strategy,
  fallback = null,
}: {
  children: ReactNode;
  delayMs?: number;
  /** Override auto strategy (e.g. force skip 3D). */
  strategy?: Strategy;
  fallback?: ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const resolved = strategy ?? getHeavyFxStrategy();
    if (resolved === "skip") {
      setSkipped(true);
      return;
    }

    const idleTimeout = resolved === "defer-long" ? 3500 : 1800;
    const floorDelay = delayMs || (resolved === "defer-long" ? 1600 : 400);

    let cancelIdle: (() => void) | undefined;
    let floorTimer: number | undefined;

    const arm = () => {
      floorTimer = window.setTimeout(() => {
        cancelIdle = whenIdle(() => setReady(true), idleTimeout);
      }, floorDelay);
    };

    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }

    return () => {
      window.removeEventListener("load", arm);
      if (floorTimer) window.clearTimeout(floorTimer);
      cancelIdle?.();
    };
  }, [delayMs, strategy]);

  if (skipped) return <>{fallback}</>;
  if (!ready) return <>{fallback}</>;
  return <>{children}</>;
}

/** Mount when near viewport — for below-the-fold heavy sections. */
export function DeferUntilVisible({
  children,
  rootMargin = "200px",
  minHeight = 120,
}: {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number;
}) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!node || visible) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [node, rootMargin, visible]);

  return (
    <div ref={setNode} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}
