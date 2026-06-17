'use client';

import { RevealOnScroll } from './RevealOnScroll';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={`mb-10 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <p className="text-sm font-mono tracking-widest uppercase text-primary-light mb-3">
        {subtitle}
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>

      <div
        className={`h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </RevealOnScroll>
  );
}