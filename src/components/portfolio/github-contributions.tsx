import { USER } from "@/data/user";
import { Panel } from "@/components/portfolio/panel";
import {
  getGitHubContributions,
  type Activity,
} from "@/lib/github-contributions";

const LEVEL_FILLS = [
  "hsl(var(--border))",
  "var(--contrib-1)",
  "var(--contrib-2)",
  "var(--contrib-3)",
  "var(--contrib-4)",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Parse yyyy-MM-dd as UTC to keep SSR and client calendars identical. */
function parts(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return { y, m, d, dayOfWeek: new Date(Date.UTC(y, m - 1, d)).getUTCDay() };
}

function formatLabel(date: string) {
  const { y, m, d } = parts(date);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

function ContributionGraph({ data }: { data: Activity[] }) {
  const weeks: Activity[][] = [];
  let week: Activity[] = [];

  data.forEach((day, index) => {
    const dayOfWeek = parts(day.date).dayOfWeek;
    if (index === 0 && dayOfWeek !== 0) {
      for (let i = 0; i < dayOfWeek; i++) {
        week.push({ date: "", count: -1, level: -1 });
      }
    }
    week.push(day);
    if (dayOfWeek === 6) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length > 0) weeks.push(week);

  const months: { weekIndex: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((weekDays, wi) => {
    const firstReal = weekDays.find((d) => d.date);
    if (!firstReal) return;
    const month = parts(firstReal.date).m;
    if (month !== lastMonth) {
      lastMonth = month;
      months.push({ weekIndex: wi, label: MONTHS[month - 1] });
    }
  });

  const totalCount = data.reduce((sum, d) => sum + d.count, 0);
  const size = 10;
  const margin = 3;
  const graphWidth = weeks.length * (size + margin);
  const graphHeight = 7 * (size + margin) + 18;

  return (
    <figure className="px-4 pb-2 pt-4">
      <svg
        viewBox={`0 0 ${graphWidth} ${graphHeight}`}
        role="img"
        aria-label="GitHub contributions graph"
        className="block h-auto w-full"
      >
        {months.map(({ weekIndex, label }) => (
          <text
            key={`${weekIndex}-${label}`}
            x={weekIndex * (size + margin)}
            y={10}
            className="fill-muted-foreground text-[10px]"
          >
            {label}
          </text>
        ))}
        {weeks.map((weekDays, wi) =>
          weekDays.map((day, di) => {
            if (day.count < 0 || !day.date) return null;
            const label = `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatLabel(day.date)}`;
            return (
              <rect
                key={day.date}
                x={wi * (size + margin)}
                y={16 + di * (size + margin)}
                width={size}
                height={size}
                rx={2}
                fill={LEVEL_FILLS[day.level] ?? LEVEL_FILLS[0]}
              >
                <title dangerouslySetInnerHTML={{ __html: label }} />
              </rect>
            );
          }),
        )}
      </svg>

      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm tabular-nums">
        <span className="text-muted-foreground">
          {totalCount.toLocaleString("en")} contributions in the last year on{" "}
          <a
            href={`https://github.com/${USER.githubUsername}`}
            target="_blank"
            rel="noopener"
            className="link-underline"
          >
            GitHub
          </a>
          .
        </span>

        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className="size-[10px] rounded-[2px]"
              style={{ backgroundColor: LEVEL_FILLS[level] }}
            />
          ))}
          More
        </span>
      </figcaption>
    </figure>
  );
}

export async function GitHubContributions() {
  const data = await getGitHubContributions();

  return (
    <Panel id="contributions" className="screen-line-top-none">
      <h2 className="sr-only">GitHub Contributions</h2>
      {data.length > 0 ? (
        <ContributionGraph data={data} />
      ) : (
        <div className="flex h-32 w-full items-center justify-center px-4">
          <span className="text-sm text-muted-foreground">
            Contributions unavailable right now.
          </span>
        </div>
      )}
    </Panel>
  );
}
