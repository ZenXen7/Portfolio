"use client";

import { Reveal } from "@/components/reveal";
import { DATA } from "@/data/resume";
import { snappySpring, softSpring } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const filters = ["All", "Web", "Mobile"] as const;
type Filter = (typeof filters)[number];

function cardOffsetLeft(scroller: HTMLElement, card: HTMLElement) {
  const scrollerRect = scroller.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  return cardRect.left - scrollerRect.left + scroller.scrollLeft;
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef(0);
  const wheelLock = useRef(false);

  const projects = useMemo(() => {
    if (filter === "All") return [...DATA.projects];
    return DATA.projects.filter((project) => project.category === filter);
  }, [filter]);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const card = cardRefs.current[index];
    if (!scroller || !card) return;

    const next = Math.max(0, Math.min(index, cardRefs.current.length - 1));
    const left =
      cardOffsetLeft(scroller, card) -
      (scroller.clientWidth - card.offsetWidth) / 2;

    scroller.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    activeRef.current = next;
    setActive(next);
  }, []);

  const syncActive = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = cardOffsetLeft(scroller, card) + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });

    activeRef.current = best;
    setActive(best);
  }, []);

  useEffect(() => {
    activeRef.current = 0;
    setActive(0);
    const scroller = scrollerRef.current;
    if (scroller) scroller.scrollTo({ left: 0, behavior: "auto" });
  }, [filter]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const frame = requestAnimationFrame(syncActive);

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

      const atStart = activeRef.current <= 0;
      const atEnd = activeRef.current >= projects.length - 1;

      if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
        return;
      }

      event.preventDefault();
      if (wheelLock.current) return;

      wheelLock.current = true;
      const direction = event.deltaY > 0 ? 1 : -1;
      scrollToIndex(activeRef.current + direction);

      window.setTimeout(() => {
        wheelLock.current = false;
      }, 420);
    };

    scroller.addEventListener("scroll", syncActive, { passive: true });
    scroller.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", syncActive);

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", syncActive);
      scroller.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", syncActive);
    };
  }, [projects.length, scrollToIndex, syncActive]);

  return (
    <section id="projects" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 sm:pt-20 md:pt-28">
        <Reveal>
          <p className="section-kicker">The work</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Relevant Projects
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[var(--muted)] sm:text-base">
                Scroll, swipe, or use the arrows.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => scrollToIndex(active - 1)}
                disabled={active === 0}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] transition-all duration-300 hover:border-[var(--ink)] disabled:pointer-events-none disabled:opacity-35"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => scrollToIndex(active + 1)}
                disabled={active >= projects.length - 1}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] transition-all duration-300 hover:border-[var(--ink)] disabled:pointer-events-none disabled:opacity-35"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-300",
                filter === item
                  ? "text-white"
                  : "border border-[var(--line)] bg-white text-[var(--muted)] hover:border-[var(--ink)]/40 hover:text-[var(--ink)]"
              )}
            >
              {filter === item ? (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-[var(--ink)]"
                  transition={snappySpring}
                />
              ) : null}
              <span className="relative z-10">{item}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="projects-scroller mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-3 sm:mt-10 sm:gap-6 sm:px-6 lg:px-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))]"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {projects.map((project, i) => {
            const isActive = i === active;
            return (
              <motion.article
                key={`${filter}-${project.title}`}
                ref={(node) => {
                  cardRefs.current[i] = node;
                }}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  y: 0,
                  scale: isActive ? 1 : 0.97,
                }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={softSpring}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "w-[min(86vw,36rem)] shrink-0 snap-center overflow-hidden rounded-2xl border bg-white sm:w-[min(72vw,40rem)] sm:rounded-3xl",
                  isActive
                    ? "border-[var(--ink)]/20 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                    : "border-[var(--line)]"
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)] sm:aspect-[16/9]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 86vw, 640px"
                      priority={i < 2}
                    />
                  ) : null}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--ink)] backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl tracking-tight sm:text-2xl">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-xs tabular-nums text-[var(--muted)]">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="line-clamp-3 text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                    {project.description}
                  </p>
                  <p className="text-xs text-[var(--muted)] sm:text-sm">
                    {project.technologies.slice(0, 5).join(" · ")}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
                    {project.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 transition-colors hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.type}
                        <span aria-hidden="true" className="ml-0.5">
                          ↗
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 pb-14 pt-6 sm:px-6 sm:pb-20 md:pb-28">
        <div className="flex gap-1.5">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Go to ${project.title}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === active
                  ? "w-6 bg-[var(--ink)]"
                  : "w-1.5 bg-[var(--line)] hover:bg-[var(--muted)]"
              )}
            />
          ))}
        </div>
        <p className="text-xs tabular-nums text-[var(--muted)] sm:text-sm">
          {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
