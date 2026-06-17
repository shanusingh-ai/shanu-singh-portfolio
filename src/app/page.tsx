'use client';

import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/sections/LoadingScreen';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';

import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />

        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
