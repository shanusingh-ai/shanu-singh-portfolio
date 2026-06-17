'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Layers } from 'lucide-react';
import { projects, projectCategories } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { FeaturedBadge } from '@/components/ui/FeaturedBadge';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setHasError(true)}
    />
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative pt-8 md:pt-10 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="What I've Built" />

        {/* Filter Buttons */}
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.value
                    ? 'bg-primary/20 text-slate-900 dark:text-white border border-primary/30 shadow-lg shadow-primary/10'
                    : 'glass text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex"
              >
                <GlassCard
                  padding="sm"
                  className={`flex flex-col w-full h-full group ${
                    project.featured ? 'gradient-border' : ''
                  }`}
                  as="article"
                >
                  {/* Project Image */}
                  <div className="relative h-44 rounded-xl overflow-hidden mb-5 flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-background-secondary dark:to-background-tertiary">
                    <ProjectImage src={project.image} alt={project.title} />
                    {/* Featured Tag */}
                    {project.featured && <FeaturedBadge />}
                  </div>

                  <div className="px-2 pb-2 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-primary/30 transition-all duration-200"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-primary text-sm text-white"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="section-divider mt-8 md:mt-10" />
    </section>
  );
}
