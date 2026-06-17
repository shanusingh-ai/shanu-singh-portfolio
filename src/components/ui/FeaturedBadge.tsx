'use client';

import { cn } from '@/lib/utils';

interface FeaturedBadgeProps {
  className?: string;
}

export function FeaturedBadge({ className }: FeaturedBadgeProps) {
  return (
    <div className={cn('absolute top-3 right-3 z-10', className)}>
      <span
        className={cn(
          // Layout & Size (pixel-perfect standardization)
          'flex items-center justify-center w-[84px] h-[28px]',
          // Style & Background (purple/blue theme matching)
          'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md rounded-lg border border-primary/40',
          // Typography (perfect centering)
          'text-[11px] font-semibold text-primary-light dark:text-primary-light tracking-wide select-none',
          // Premium Glow & Shadow
          'shadow-[0_0_10px_rgba(99,102,241,0.25)] dark:shadow-[0_0_12px_rgba(129,140,248,0.3)]'
        )}
      >
        Featured
      </span>
    </div>
  );
}
