"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  showUnderline?: boolean;
}

export function TypewriterText({
  text,
  className,
  delay = 0,
  speed = 55,
  showUnderline = false,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const isDone = currentIndex >= text.length && isStarted;

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isStarted]);

  const lines = displayText.split("\n");
  const fullLines = text.split("\n");

  return (
    <span className={cn("relative inline-block w-full", className)}>
      <span aria-hidden className="invisible block">
        {fullLines.map((line, index) => (
          <span key={index}>
            {index > 0 ? <br /> : null}
            <span className="relative inline-block">{line}</span>
          </span>
        ))}
      </span>

      <span className="absolute inset-0" aria-live="polite">
        {lines.map((line, index) => {
          const isLastLine = index === lines.length - 1;
          const isSecondLine = index === 1;

          return (
            <span key={index}>
              {index > 0 ? <br /> : null}
              <span className="relative inline-block">
                {line}
                {showUnderline && isSecondLine && isDone ? (
                  <span className="hero-line absolute -bottom-1 left-0 h-[3px] w-full rounded-full" />
                ) : null}
                {isLastLine && !isDone ? (
                  <span
                    aria-hidden
                    className="ml-0.5 inline-block h-[0.9em] w-[0.08em] translate-y-[0.08em] animate-pulse bg-[var(--ink)] align-baseline"
                  />
                ) : null}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
