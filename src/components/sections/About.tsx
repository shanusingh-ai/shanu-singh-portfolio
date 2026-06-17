'use client';

import { personalInfo } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Target, Rocket, Code2, Brain } from 'lucide-react';

const passionAreas = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Fascinated by intelligent systems that can learn, reason, and make decisions autonomously.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Target,
    title: 'Machine Learning',
    description: 'Building predictive models and data-driven solutions that improve with experience.',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Crafting clean, scalable, and production-ready software with modern best practices.',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: Rocket,
    title: 'Problem Solving',
    description: 'Approaching complex challenges with analytical thinking and creative engineering solutions.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
];

export function About() {
  return (
    <section id="about" className="relative pt-8 md:pt-10 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}

            {/* Highlights */}
            <RevealOnScroll delay={0.3}>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {personalInfo.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl p-4 text-center"
                  >
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Passion Areas */}
          <div className="lg:col-span-2 space-y-4">
            {passionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <RevealOnScroll key={area.title} direction="right" delay={index * 0.1}>
                  <GlassCard padding="md" className="flex items-start gap-4 group">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg ${area.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={20} className={area.color} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-8 md:mt-10" />
    </section>
  );
}
