"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

/** Hide the site footer on contact — that page is a single no-scroll viewport. */
export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <Footer />;
}
