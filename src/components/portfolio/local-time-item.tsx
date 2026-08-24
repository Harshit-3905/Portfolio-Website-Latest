"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function formatDiff(timeZone: string) {
  const now = new Date();
  const viewerOffset = -now.getTimezoneOffset();
  const targetOffset =
    (new Date(now.toLocaleString("en-US", { timeZone })).getTime() -
      new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) /
    60000;
  const hoursDiff = Math.abs(targetOffset - viewerOffset) / 60;

  if (hoursDiff < 1) return "same time";

  return `${Math.floor(hoursDiff)}h ${
    targetOffset > viewerOffset ? "ahead" : "behind"
  }`;
}

export function LocalTimeItem({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("");
  const [diff, setDiff] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
      setDiff(formatDiff(timeZone));
    };

    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <div className="flex items-center gap-2.5 text-sm">
      <Clock className="size-4 shrink-0 text-muted-foreground" />
      <span className="tabular-nums" suppressHydrationWarning>
        {time}
      </span>
      <span className="text-muted-foreground" suppressHydrationWarning>
        ({diff})
      </span>
    </div>
  );
}
