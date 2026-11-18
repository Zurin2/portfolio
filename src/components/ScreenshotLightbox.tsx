"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Client island per project screenshot: click thumbnail -> modal lightbox.
// Click image: toggle zoom (fit -> natural size with native pan). Click backdrop
// or Escape or Close button: exit. Focus is moved in and restored on close.
export function ScreenshotLightbox({ src, title }: { src: string; title: string }) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${title} screenshot fullscreen`}
        className="relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg border border-white/[0.08] transition-colors duration-150 ease-out group-hover:border-white/[0.16]"
      >
        <Image
          src={src}
          alt={`${title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="object-cover"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot`}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-10"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close screenshot"
            className="absolute top-4 right-4 z-10 rounded-md border border-white/[0.08] bg-[#12141a] px-3 py-1.5 font-mono text-xs text-muted transition-colors duration-150 ease-out hover:text-foreground active:scale-[0.98]"
          >
            esc · close
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className={
              zoomed
                ? "max-h-full max-w-full cursor-zoom-out overflow-auto"
                : "flex h-full w-full cursor-zoom-in items-center justify-center"
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- natural-size lightbox: dimensions are unknown at build, next/image fill would letterbox the click-outside target */}
            <img
              src={src}
              alt={`${title} screenshot, zoomed view`}
              onClick={() => setZoomed((z) => !z)}
              className={
                zoomed
                  ? "max-w-none"
                  : "max-h-[85vh] max-w-full object-contain"
              }
            />
          </div>

          {!zoomed && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-muted/70">
              click image to zoom · click outside to close
            </p>
          )}
        </div>
      )}
    </>
  );
}
