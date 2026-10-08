import { Reveal } from "@/components/reveal";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  total: { lastYear: number };
  contributions: ContributionDay[];
};

const LEVEL_COLORS = [
  "bg-white/10",
  "bg-white/25",
  "bg-white/45",
  "bg-white/70",
  "bg-white",
];

async function getContributions(username: string): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    return (await res.json()) as ContributionsResponse;
  } catch {
    return null;
  }
}

function chunkWeeks(days: ContributionDay[]) {
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

export async function GithubActivity({ username }: { username: string }) {
  const data = await getContributions(username);
  if (!data?.contributions?.length) return null;

  const weeks = chunkWeeks(data.contributions);
  const total = data.total.lastYear;

  return (
    <section id="activity" className="border-t border-white/10 bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
            Activity
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl md:text-5xl">
            GitHub
          </h2>
          <p className="mt-3 text-sm text-white/55 sm:text-base">
            {total.toLocaleString()} contributions in the last year
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-8 sm:mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/12 bg-white/[0.04] p-4 sm:p-5">
            <div className="inline-flex min-w-full gap-[3px] pb-1">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                      className={`size-[11px] rounded-[2px] sm:size-[12px] ${LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-white/45">
              <span>Less</span>
              {LEVEL_COLORS.map((color) => (
                <span key={color} className={`size-2.5 rounded-[2px] ${color}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
