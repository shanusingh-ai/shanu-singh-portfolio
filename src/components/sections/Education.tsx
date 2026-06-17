'use client';

import { education } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic Journey" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-px" />

          {education.map((edu, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-[13px] top-2 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/30 animate-ping" />
                </div>

                {/* Content Card — positioned on the right for desktop */}
                <div className="md:col-start-2">
                  <div className="glass glass-hover rounded-2xl p-6 md:p-8 group">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                        {edu.status}
                      </span>
                    </div>

                    {/* Degree */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap size={20} className="text-primary dark:text-primary-light" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>

                    {/* Institution */}
                    <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-3">
                      {edu.institution}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-400 dark:text-slate-400" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-400 dark:text-slate-400" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                        <BookOpen size={12} />
                        Key Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="primary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
