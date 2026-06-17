"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, ChevronDown } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import Image from "next/image";

export function Hero() {
  const { text } = useTypewriter({
    words: personalInfo.typewriterRoles,
    typeSpeed: 80,
    deleteSpeed: 50,
    delayBetweenWords: 2000,
  });


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-14 md:pt-18 pb-6 md:pb-8"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[160px] animate-float pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[150px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.015] blur-[180px] pointer-events-none" />

      {/* Subtle radial depth behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none dark:bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04)_0%,transparent_70%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Profile Photo */}
        <motion.div variants={item} className="mb- mt-2 md:mt-3">
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent animate-spin-slow opacity-35 blur-lg" />
            <div className="relative w-full h-full rounded-full bg-slate-50 dark:bg-background-secondary border-2 border-slate-200/50 dark:border-white/10 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/shanu_singh_prof.png"
                alt="Shanu Singh"
                fill
                priority
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={item} className="mb-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-sm text-slate-600 dark:text-slate-300 backdrop-blur-sm">
            <Sparkles size={14} className="text-primary-light" />
            Available for Internships &amp; Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
        >
          <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={item}
          className="h-10 md:h-12 flex items-center justify-center mb-4"
        >
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light">
            <span className="text-primary-light font-mono">&lt;</span>{" "}
            <span>{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-primary-light font-mono ml-0.5"
            >
              |
            </motion.span>{" "}
            <span className="text-primary-light font-mono">/&gt;</span>
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5"
        >
          {personalInfo.shortBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <Button
            variant="primary"
            size="lg"
            icon={<Download size={18} />}
            href={personalInfo.resumeUrl}
            external
          >
            Download Resume
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#contact");
              if (el) {
                const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
                const top = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: top - navbarHeight, behavior: 'smooth' });
              }
            }}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} link={link} />
          ))}
        </motion.div>

        {/* Scroll Arrow */}
        <div className="relative mt-1 flex justify-center">
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.15,
              filter: "brightness(1.2) drop-shadow(0 0 12px rgba(99, 102, 241, 0.6))",
            }}
            className="cursor-pointer transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#about");
              if (el) {
                const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
                const top = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: top - navbarHeight, behavior: "smooth" });
              }
            }}
          >
            <ChevronDown
              size={28}
              strokeWidth={3}
              stroke="url(#blue-purple-gradient)"
              className="drop-shadow-[0_0_8px_rgba(99, 102, 241, 0.4)] dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
