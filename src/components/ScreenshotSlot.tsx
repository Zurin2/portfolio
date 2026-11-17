// Browser-chrome placeholder for the Projects page screenshot slot.
// Replaced by a real screenshot by adding `screenshot: "/path"` to the project entry.

export function ScreenshotSlot({ title, label }: { title: string; label: string }) {
  const initials = title
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-white/[0.08] bg-[#12141a] transition-colors duration-150 ease-out group-hover:border-white/[0.16]">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/40" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/40" />
          <span className="h-2 w-2 rounded-full bg-green-400/40" />
        </span>
        <span className="truncate rounded-sm bg-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-muted">
          {label}
        </span>
      </div>
      {/* Placeholder body */}
      <div className="flex h-[calc(100%-33px)] items-center justify-center">
        <span className="font-display text-5xl tracking-tight text-accent/25 md:text-6xl">
          {initials}
        </span>
      </div>
    </div>
  );
}
