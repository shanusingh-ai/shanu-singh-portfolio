'use client';

import { achievements } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function Achievements() {
  return (
    <section id="achievements" className="relative pt-8 md:pt-10 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Milestones & Recognition" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <RevealOnScroll key={achievement.title} delay={index * 0.1}>
                <GlassCard padding="lg" className="h-full group relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${achievement.color} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Category Tag */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-500 uppercase tracking-wider mb-4">
                      {achievement.category}
                    </span>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${achievement.color} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full rounded-xl bg-white dark:bg-background-secondary flex items-center justify-center">
                          <Icon size={20} className="text-primary dark:text-white/80" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors pt-1">
                        {achievement.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      <div className="section-divider mt-8 md:mt-10" />
    </section>
  );
}
