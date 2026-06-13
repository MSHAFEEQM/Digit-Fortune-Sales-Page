import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown({ hours = 0, minutes = 0 }: { hours?: number; minutes?: number }) {
  const [end] = useState(() => Date.now() + hours * 60 * 60 * 1000 + minutes * 60 * 1000);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);

  const blocks = [
    { label: "Hours", value: pad(h) },
    { label: "Minutes", value: pad(m) },
    { label: "Seconds", value: pad(s) },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-2 sm:gap-3">
          <div className="glass-strong rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-center min-w-[64px] sm:min-w-[78px]">
            <div className="font-display text-2xl sm:text-3xl font-bold text-primary tabular-nums">
              {b.value}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {b.label}
            </div>
          </div>
          {i < blocks.length - 1 && <span className="text-primary text-2xl font-bold">:</span>}
        </div>
      ))}
    </div>
  );
}
