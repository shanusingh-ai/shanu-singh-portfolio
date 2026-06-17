'use client';

import { type SocialLink } from '@/lib/data';

// ─── Platform Brand Config ──────────────────────────────────────────────────
interface BrandConfig {
  color: string;
  colorLight: string; // separate color for light mode (visibility fix)
  glow: string;
  glowLight: string;
  border: string;
  borderLight: string;
}

const brandConfig: Record<string, BrandConfig> = {
  GitHub: {
    color: '#FFFFFF',
    colorLight: '#24292F',
    glow: 'rgba(255, 255, 255, 0.12)',
    glowLight: 'rgba(36, 41, 47, 0.15)',
    border: 'rgba(255, 255, 255, 0.25)',
    borderLight: 'rgba(36, 41, 47, 0.30)',
  },
  LinkedIn: {
    color: '#0A66C2',
    colorLight: '#0A66C2',
    glow: 'rgba(10, 102, 194, 0.18)',
    glowLight: 'rgba(10, 102, 194, 0.18)',
    border: 'rgba(10, 102, 194, 0.35)',
    borderLight: 'rgba(10, 102, 194, 0.35)',
  },
  Email: {
    color: '#06B6D4',
    colorLight: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.18)',
    glowLight: 'rgba(6, 182, 212, 0.18)',
    border: 'rgba(6, 182, 212, 0.35)',
    borderLight: 'rgba(6, 182, 212, 0.35)',
  },
};

const defaultBrand: BrandConfig = {
  color: '#06B6D4',
  colorLight: '#06B6D4',
  glow: 'rgba(6, 182, 212, 0.18)',
  glowLight: 'rgba(6, 182, 212, 0.18)',
  border: 'rgba(6, 182, 212, 0.35)',
  borderLight: 'rgba(6, 182, 212, 0.35)',
};

interface SocialIconProps {
  link: SocialLink;
  size?: 'sm' | 'md';
}

export function SocialIcon({ link, size = 'md' }: SocialIconProps) {
  const Icon = link.icon;
  const brand = brandConfig[link.name] || defaultBrand;

  const dimensions = size === 'sm' ? 'w-10 h-10' : 'w-11 h-11';
  const iconSize = size === 'sm' ? 18 : 20;
  const radius = size === 'sm' ? 'rounded-lg' : 'rounded-xl';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.name}
      className={`social-icon-link group ${dimensions} ${radius} glass flex items-center justify-center transition-all duration-300`}
      style={
        {
          '--brand-color': brand.color,
          '--brand-color-light': brand.colorLight,
          '--brand-glow': brand.glow,
          '--brand-glow-light': brand.glowLight,
          '--brand-border': brand.border,
          '--brand-border-light': brand.borderLight,
        } as React.CSSProperties
      }
    >
      <Icon
        size={iconSize}
        className="text-slate-500 dark:text-slate-400 transition-colors duration-300"
      />
    </a>
  );
}

