"use client";

import dynamic from "next/dynamic";
import { DeferUntilVisible } from "@/components/ui/DeferredMount";

const StatsCounter = dynamic(() => import("@/components/home/StatsCounter"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 120 }} aria-hidden="true" />,
});

const FeaturedProjects = dynamic(
  () => import("@/components/home/FeaturedProjects"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: 320 }} aria-hidden="true" />,
  },
);

const ExperienceTimeline = dynamic(
  () => import("@/components/home/ExperienceTimeline"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: 400 }} aria-hidden="true" />,
  },
);

/** Heavy Framer sections — hydrate only when near the viewport. */
export default function HomeBelowFold() {
  return (
    <>
      <DeferUntilVisible minHeight={120}>
        <StatsCounter />
      </DeferUntilVisible>
      <DeferUntilVisible minHeight={320}>
        <FeaturedProjects />
      </DeferUntilVisible>
      <DeferUntilVisible minHeight={400} rootMargin="280px">
        <ExperienceTimeline />
      </DeferUntilVisible>
    </>
  );
}
