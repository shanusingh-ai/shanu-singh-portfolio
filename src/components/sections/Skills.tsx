'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-800 dark:text-slate-300">
          {name}
        </span>
        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
          {level}%
        </span>
      </div>

      <div className="h-[5px] rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{
            duration: 1,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative pt-8 md:pt-10 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="What I Work With"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;

            return (
              <RevealOnScroll
                key={category.title}
                delay={catIndex * 0.1}
              >
                <GlassCard padding="md" className="h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] flex items-center justify-center">
                      <Icon
                        size={18}
                        className={`${category.iconColor.replace('-400', '-600')} dark:${category.iconColor}`}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Bars */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={
                          catIndex * 0.1 +
                          skillIndex * 0.12
                        }
                      />
                    ))}
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