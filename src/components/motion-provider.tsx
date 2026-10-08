"use client";

import { softSpring } from "@/lib/motion";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={softSpring}>
      {children}
    </MotionConfig>
  );
}
