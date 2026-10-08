import { GithubActivity } from "@/components/github-activity";
import { ProjectsSection } from "@/components/projects-section";
import { Reveal } from "@/components/reveal";
import { TypewriterText } from "@/components/typewriter-text";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:flex-row md:items-start md:justify-between md:gap-16 md:pb-28 md:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-8 h-64 bg-[radial-gradient(ellipse_at_top,rgba(17,17,17,0.06),transparent_65%)]"
        />
        <Reveal className="order-2 w-full max-w-2xl flex-1 text-center md:order-1 md:text-left">
          <p className="section-kicker mb-4 justify-center md:mb-5 md:justify-start">
            Full Stack Developer · Cebu
          </p>
          <h1 className="font-display text-[clamp(2.25rem,9vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            <TypewriterText
              text={"I build products\nthat actually matter."}
              delay={250}
              speed={48}
            />
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-base md:mx-0 md:text-lg">
            {DATA.summary}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold md:mt-8 md:justify-start">
            <Link
              href={DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-white transition-all duration-300 hover:opacity-90"
            >
              View resume
            </Link>
            <Link
              href={DATA.contact.social.GitHub.url}
              className="rounded-full border-2 border-[var(--ink)] bg-white px-5 py-2.5 text-[var(--ink)] transition-all duration-300 hover:bg-[var(--ink)] hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              className="rounded-full border-2 border-[var(--line)] bg-white px-5 py-2.5 text-[var(--ink)] transition-all duration-300 hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12} y={36} className="order-1 shrink-0 pt-2 md:order-2 md:mt-10 md:pt-6">
          <div className="relative mx-auto size-40 overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:size-48 md:mx-0 md:size-56">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              priority
              className="object-cover object-top grayscale transition-transform duration-700 ease-out hover:scale-105"
              sizes="(max-width: 768px) 192px, 224px"
            />
          </div>
        </Reveal>
      </section>

      <section id="work" className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-14 xl:gap-16">
            <div>
              <Reveal>
                <p className="section-kicker">The journey</p>
                <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
                  Work Experience
                </h2>
              </Reveal>

              <div className="relative mt-8 border-l border-[var(--line)] sm:mt-10">
                {DATA.work.map((job, index) => (
                  <Reveal
                    key={job.company}
                    delay={Math.min(index * 0.04, 0.16)}
                    className="pb-8 last:pb-0 sm:pb-10"
                  >
                    <article className="relative pl-6 sm:pl-8">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-[var(--ink)] bg-[var(--surface)]"
                      />
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                        {job.start} – {job.end}
                      </p>
                      <div className="mt-2 flex items-center gap-2.5">
                        {job.logoUrl ? (
                          <Image
                            src={job.logoUrl}
                            alt=""
                            width={24}
                            height={24}
                            className="size-6 shrink-0 rounded object-contain"
                          />
                        ) : null}
                        <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                          {job.company}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-[var(--muted)]">{job.title}</p>
                      <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
                        {job.description.map((point) => (
                          <li
                            key={point}
                            className="relative pl-3.5 before:absolute before:left-0 before:top-[0.65em] before:size-1 before:rounded-full before:bg-[var(--ink)]"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="space-y-10 lg:sticky lg:top-20 lg:self-start lg:space-y-12">
              <div id="stack">
                <Reveal delay={0.06}>
                  <p className="section-kicker">Toolkit</p>
                  <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
                    Technology Stack
                  </h2>
                </Reveal>
                <div className="mt-7 space-y-3 sm:mt-9">
                  {DATA.skillGroups.map((group, index) => (
                    <Reveal key={group.category} delay={Math.min(0.08 + index * 0.04, 0.24)}>
                      <div className="rounded-2xl border border-[var(--line)] bg-white p-4 transition-all duration-500 hover:border-[var(--ink)]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-5">
                        <h3 className="text-sm font-semibold tracking-tight text-[var(--ink)]">
                          {group.category}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                          {group.items.join(" · ")}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div id="credentials">
                <Reveal delay={0.1}>
                  <p className="section-kicker">The proof</p>
                  <h2 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
                    Certificates
                  </h2>
                </Reveal>
                <ol className="mt-6 space-y-2 sm:mt-7">
                  {DATA.certificates.map((item, index) => (
                    <Reveal key={item} delay={Math.min(0.12 + index * 0.03, 0.24)}>
                      <li className="group flex gap-3 rounded-2xl border border-[var(--line)] bg-white p-3.5 transition-all duration-500 hover:border-[var(--ink)]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:gap-3.5 sm:p-4">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-xs font-semibold tabular-nums text-[var(--muted)] transition-colors duration-300 group-hover:bg-[var(--ink)] group-hover:text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="pt-1 text-sm font-medium leading-snug text-[var(--ink)]">
                          {item}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div id="education">
                <Reveal delay={0.12}>
                  <p className="section-kicker">Background</p>
                  <h2 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
                    Education
                  </h2>
                </Reveal>
                <ul className="mt-6 space-y-2 sm:mt-7">
                  {DATA.education.map((school, index) => (
                    <Reveal key={school.school} delay={Math.min(0.14 + index * 0.03, 0.22)}>
                      <li className="rounded-2xl border border-[var(--line)] bg-white p-4 transition-all duration-500 hover:border-[var(--ink)]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-4.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-semibold tracking-tight text-[var(--ink)] sm:text-[15px]">
                                {school.school}
                              </p>
                              {school.status ? (
                                <span className="rounded-full bg-[var(--ink)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                                  {school.status}
                                </span>
                              ) : null}
                            </div>
                            <p className="mt-1 text-sm text-[var(--muted)]">{school.degree}</p>
                          </div>
                          <p className="shrink-0 text-xs tabular-nums text-[var(--muted)]">
                            {school.start} – {school.end}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ProjectsSection />

      <GithubActivity username={DATA.githubUsername} />

      <section id="research" className="border-t border-[var(--line)] bg-[var(--page)]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
          <Reveal>
            <p className="section-kicker">Research</p>
            {DATA.research.map((item) => (
              <div key={item.title} className="mt-5 max-w-3xl sm:mt-6">
                <h2 className="font-display text-[1.65rem] leading-tight tracking-tight text-[var(--ink)] sm:text-3xl md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-[var(--muted)] sm:mt-4">
                  {item.date} · {item.venue}
                </p>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--muted)] sm:mt-8 sm:text-base md:text-lg">
                  {item.description.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90 sm:mt-8 sm:text-[15px]"
                >
                  View on IEEE Xplore
                  <span aria-hidden="true" className="ml-1">
                    ›
                  </span>
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[var(--ink)] text-white">
        <Reveal className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Contact
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/55 sm:text-base">
              Open to roles, collaborations, and interesting problems.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 text-left transition-all duration-300 hover:border-white/35 hover:bg-white/[0.1]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Email
              </p>
              <p className="mt-2 break-all text-sm font-semibold text-white sm:text-base">
                {DATA.contact.email}
              </p>
            </Link>
            <Link
              href={`tel:${DATA.contact.telHref}`}
              className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 text-left transition-all duration-300 hover:border-white/35 hover:bg-white/[0.1]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Phone
              </p>
              <p className="mt-2 text-sm font-semibold text-white sm:text-base">
                {DATA.contact.tel}
              </p>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
            <Link
              href={DATA.contact.social.GitHub.url}
              className="rounded-full bg-white px-4 py-2 text-[var(--ink)] transition-opacity duration-300 hover:opacity-90"
            >
              GitHub
            </Link>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              className="rounded-full border border-white/25 px-4 py-2 text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              LinkedIn
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 bg-[var(--ink)] px-4 py-8 text-center text-xs text-white/40 sm:px-6">
        © {new Date().getFullYear()} {DATA.name} · {DATA.location}
      </footer>
    </main>
  );
}
