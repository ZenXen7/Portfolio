"use client";

import { DATA } from "@/data/resume";
import { snappySpring } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#activity", label: "Activity" },
  { href: "/#credentials", label: "Certificates" },
  { href: "/#research", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--page)]/90 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="min-w-0 truncate text-sm font-semibold tracking-tight text-[var(--ink)]"
          onClick={() => setOpen(false)}
        >
          <span className="sm:hidden">{DATA.initials}</span>
          <span className="hidden sm:inline">
            {DATA.name.split(" ").slice(0, 2).join(" ")}
            <span className="text-[var(--muted)]"> / {DATA.initials}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-[13px] font-semibold text-[var(--ink)]/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-[var(--ink)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--ink)] after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={snappySpring}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--page)] md:hidden"
          >
            <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...snappySpring, delay: 0.04 * index }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface)]"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
