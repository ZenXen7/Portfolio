import { Reveal } from "@/components/reveal";
import { TypewriterText } from "@/components/typewriter-text";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:flex-row md:items-start md:justify-between md:gap-16 md:pb-28 md:pt-28">
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
              className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-white transition-opacity hover:opacity-90"
            >
              View resume
            </Link>
            <Link
              href={DATA.contact.social.GitHub.url}
              className="rounded-full border-2 border-[var(--ink)] bg-white px-5 py-2.5 text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              className="rounded-full border-2 border-[var(--line)] bg-white px-5 py-2.5 text-[var(--ink)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="order-1 shrink-0 pt-2 md:order-2 md:mt-10 md:pt-6">
          <div className="relative mx-auto size-40 overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface)] sm:size-48 md:mx-0 md:size-56">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              priority
              className="object-cover object-top grayscale"
              sizes="(max-width: 768px) 192px, 224px"
            />
          </div>
        </Reveal>
      </section>

      <section id="work" className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
          <Reveal>
            <p className="section-kicker">Experience</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl md:text-5xl">Work</h2>
          </Reveal>
          <div className="mt-8 space-y-0 sm:mt-12">
            {DATA.work.map((job, index) => (
              <Reveal key={job.company} delay={Math.min(index * 0.04, 0.16)}>
                <article className="grid gap-4 border-t border-[var(--line)] py-8 sm:gap-6 sm:py-10 md:grid-cols-[220px_1fr] md:gap-12">
                  <div>
                    <div className="flex items-center gap-3">
                      {job.logoUrl ? (
                        <Image
                          src={job.logoUrl}
                          alt=""
                          width={32}
                          height={32}
                          className="size-8 shrink-0 rounded-md object-contain"
                        />
                      ) : null}
                      <h3 className="text-base font-semibold tracking-tight sm:text-lg">{job.company}</h3>
                    </div>
                    <p className="mt-2 text-sm text-[var(--ink)]">{job.title}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {job.start} – {job.end}
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                    {job.description.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-[var(--ink)]"
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
      </section>

      <section id="projects" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
          <Reveal>
            <p className="section-kicker">Selected work</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
              Web, mobile, and machine learning work built for real users.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8">
            {DATA.projects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 2) * 0.04}>
                <article className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-2.5 sm:rounded-3xl sm:p-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--surface)] sm:rounded-2xl">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 480px"
                      />
                    ) : null}
                  </div>
                  <div className="mt-3 flex flex-1 flex-col px-1 pb-1.5 sm:mt-4 sm:pb-2">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>
                      <span className="text-xs text-[var(--muted)]">{project.dates}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-[var(--ink)] sm:mt-4">
                      {project.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="underline-offset-4 hover:underline"
                        >
                          {link.type}
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="border-t border-[var(--line)] bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Research</p>
            {DATA.research.map((item) => (
              <div key={item.title} className="mt-5 max-w-3xl sm:mt-6">
                <h2 className="font-display text-[1.65rem] leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-white/55 sm:mt-4">
                  {item.date} · {item.venue}
                </p>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/80 sm:mt-8 sm:text-base md:text-lg">
                  {item.description.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink)] sm:mt-8 sm:text-[15px]"
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

      <section id="education" className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="section-kicker">Background</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">Education</h2>
              <ul className="mt-8 space-y-5 sm:mt-10 sm:space-y-8">
                {DATA.education.map((school) => (
                  <li key={school.school} className="rounded-2xl border border-[var(--line)] bg-white p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-semibold tracking-tight sm:text-lg">{school.school}</p>
                      {school.status ? (
                        <span className="rounded-full bg-[var(--ink)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                          {school.status}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-[var(--muted)]">{school.degree}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {school.start} – {school.end}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="section-kicker">Toolkit</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">Skills</h2>
              <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
                {DATA.skillGroups.map((group) => (
                  <div
                    key={group.category}
                    className="rounded-2xl border border-[var(--line)] bg-white p-4 sm:p-5"
                  >
                    <h3 className="text-sm font-semibold tracking-tight text-[var(--ink)]">
                      {group.category}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--line)]">
        <Reveal className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24 md:py-32">
          <p className="section-kicker mx-auto justify-center">Contact</p>
          <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl md:text-6xl">Get in touch</h2>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="mt-5 inline-block max-w-full break-all text-base font-medium text-[var(--ink)] transition-opacity hover:opacity-70 sm:mt-6 sm:text-lg"
          >
            {DATA.contact.email}
          </Link>
        </Reveal>
      </section>

      <footer className="border-t border-[var(--line)] px-4 py-8 text-center text-xs text-[var(--muted)] sm:px-6">
        © {new Date().getFullYear()} {DATA.name} · {DATA.location}
      </footer>
    </main>
  );
}
