'use client';

import { certifications } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="relative pt-8 md:pt-10 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Certifications" subtitle="Continuous Learning" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <RevealOnScroll key={cert.title} delay={index * 0.1}>
              <GlassCard padding="md" className="h-full group">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-xl bg-white dark:bg-background-secondary flex items-center justify-center">
                      <Award size={22} className="text-primary dark:text-white/80" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {cert.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      {cert.organization}
                    </p>

                    {/* Date & Verify */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={12} />
                        {cert.date}
                      </span>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-white transition-colors"
                      >
                        Verify
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="section-divider mt-8 md:mt-10" />
    </section>
  );
}
