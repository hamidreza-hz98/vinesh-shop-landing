"use client";

import React, { useMemo, useRef, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils"; // If you don't have cn, replace with a simple join

/**
 * Rating component (5 stars) with fractional fill support.
 * - Fully accessible (keyboard + screen readers)
 * - Accepts floats (e.g., 3.7). Rounded to given `precision` for interactions
 * - Read-only or interactive modes
 * - Tailwind + lucide-react only (works great with shadcn projects)
 */

export type RatingProps = {
  /** Current value: 0..max (e.g. 3.7) */
  value?: number;
  /** Called when user selects a value */
  onChange?: (next: number) => void;
  /** Number of stars (default 5) */
  max?: number;
  /** Decimal precision for interactions (default 0.1 => one decimal) */
  precision?: number;
  /** Size in pixels for each star (default 24) */
  size?: number;
  /** When true, user cannot change the value */
  readOnly?: boolean;
  /** Optional aria-label; otherwise an accessible name is computed */
  ariaLabel?: string;
  /** Optional className applied to wrapper */
  className?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function roundTo(n: number, step: number) {
  const inv = 1 / step;
  return Math.round(n * inv) / inv;
}

export function Rating({
  value = 0,
  onChange,
  max = 5,
  precision = 0.1, // one decimal default
  size = 24,
  readOnly = false,
  ariaLabel,
  className,
}: RatingProps) {
  const [hover, setHover] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const displayValue = clamp(hover ?? value, 0, max);

  const label = useMemo(() => {
    const v = roundTo(displayValue, precision);
    return `${v} out of ${max} stars`;
  }, [displayValue, max, precision]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (readOnly || !onChange) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left; // within [0, width]
    const width = rect.width;
    const raw = (x / width) * max;
    const next = clamp(roundTo(raw, precision), 0, max);
    setHover(next);
  };

  const handlePointerLeave = () => {
    if (readOnly || !onChange) return;
    setHover(null);
  };

  const handleClick = () => {
    if (readOnly || !onChange) return;
    const next = clamp(roundTo(displayValue, precision), 0, max);
    onChange(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (readOnly || !onChange) return;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange(clamp(roundTo((value ?? 0) + precision, precision), 0, max));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange(clamp(roundTo((value ?? 0) - precision, precision), 0, max));
    } else if (e.key === "Home") {
      e.preventDefault();
      onChange(0);
    } else if (e.key === "End") {
      e.preventDefault();
      onChange(max);
    }
  };

  // Build star fill percentages for displayValue
  const fills = Array.from({ length: max }, (_, i) => {
    const starIndex = i + 1; // 1..max
    const diff = displayValue - (starIndex - 1);
    return clamp(diff, 0, 1); // 0..1 how much of this star is filled
  });

  return (
    <div
      ref={rootRef}
      className={cn(
        "inline-flex select-none items-center gap-1",
        readOnly ? "cursor-default" : "cursor-pointer",
        className
      )}
      role={onChange && !readOnly ? "slider" : undefined}
      aria-label={ariaLabel ?? "Rating"}
      aria-valuemin={onChange && !readOnly ? 0 : undefined}
      aria-valuemax={onChange && !readOnly ? max : undefined}
      aria-valuenow={
        onChange && !readOnly
          ? Number(roundTo(value, precision)).toString()
          : undefined
      }
      aria-valuetext={onChange && !readOnly ? label : undefined}
      tabIndex={onChange && !readOnly ? 0 : -1}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {fills.map((fill, i) => (
        <StarItem key={i} size={size} fillRatio={fill} />
      ))}
      {/* Visually hidden label for screen readers in readOnly mode */}
      {readOnly && <span className="sr-only">{label}</span>}
    </div>
  );
}

function StarItem({ size, fillRatio }: { size: number; fillRatio: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Empty star (background) */}
      <Star
        className="opacity-30"
        strokeWidth={2}
        style={{ width: size, height: size }}
      />
      {/* Filled star overlay clipped by width */}
      <div
        className="absolute left-0 top-0 overflow-hidden"
        style={{ width: `${fillRatio * 100}%`, height: size }}
        aria-hidden
      >
        <Star
          // Use currentColor so it inherits text color
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2}
          style={{ width: size, height: size }}
        />
      </div>
    </div>
  );
}

/** Demo Usage (controlled) */
export default function Demo() {
  const [rating, setRating] = useState(3.7);
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Rating Component (with fractional fill)
      </h2>
      <div className="flex items-center gap-3">
        <Rating value={rating} onChange={setRating} precision={0.1} />
        <span className="text-sm text-muted-foreground">
          {rating.toFixed(1)} / 5
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-sm text-muted-foreground">
          Try keyboard: ←/→ to adjust, Home/End for 0/5
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sizes:</span>
          <Rating value={rating} readOnly size={16} />
          <Rating value={rating} readOnly size={24} />
          <Rating value={rating} readOnly size={32} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Read-only:</span>
          <Rating value={4.3} readOnly />
        </div>
      </div>
    </div>
  );
}
