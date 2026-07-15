"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/ui/DeferredMount";

const ChatWidget = dynamic(() => import("./ChatWidget"), {
  ssr: false,
  loading: () => null,
});

/** Chat loads after first paint so it never competes with LCP / Safari startup. */
export default function DeferredChatWidget() {
  return (
    <DeferredMount delayMs={900} strategy="defer">
      <ChatWidget />
    </DeferredMount>
  );
}
