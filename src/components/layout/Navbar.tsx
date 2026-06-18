"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));
  const scrollActiveId = useScrollSpy(sectionIds);
  const [clickedSection, setClickedSection] = useState<string | null>(null);
  
  useEffect(() => {
    if (scrollActiveId) {
      setClickedSection(null);
    }
  }, [scrollActiveId]);

  const activeId = clickedSection || scrollActiveId || "home";
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const sectionName = href.replace("#", "");
    setClickedSection(sectionName);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          (isScrolled || isOpen)
            ? "bg-white/80 dark:bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.06] shadow-lg shadow-slate-200/20 dark:shadow-black/20"
            : "bg-transparent",
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="relative z-10 group flex-shrink-0"
            >
              <span className="text-xl font-extrabold tracking-tight gradient-text hover:brightness-110 transition-all duration-300">
                Shanu Singh
              </span>
            </a>

            {/* Desktop Nav - Centered */}
            <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                      isActive
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-slate-100 dark:bg-white/[0.10] rounded-lg border border-slate-200/60 dark:border-white/[0.12]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Side: Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-2 relative z-10">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex p-2 md:p-2.5 rounded-xl text-white border border-white/15 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%)',
                  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.12), 0 1px 3px rgba(0, 0, 0, 0.06)',
                }}
                aria-label="Toggle Theme"
              >
                {mounted && (
                  theme === "dark" ? (
                    <Sun className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  ) : (
                    <Moon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  )
                )}
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/30 dark:bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-16 bottom-0 z-40 w-full max-w-[300px] h-[calc(100vh-64px)] bg-white/95 dark:bg-[#0a0a0f]/95 border-l border-slate-200/60 dark:border-white/[0.06] shadow-2xl flex flex-col md:hidden"
            >
              {/* Navigation Items */}
              <nav className="flex flex-col gap-1 p-6 overflow-y-auto">
                {navItems.map((item, index) => {
                  const isActive = activeId === item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: index * 0.04, duration: 0.2 }}
                      className={cn(
                        "flex items-center w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 border border-transparent hover:text-slate-900 dark:hover:text-white",
                        isActive
                          ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-white/[0.06] border-slate-200/60 dark:border-white/[0.08] shadow-sm"
                          : "text-slate-600 dark:text-slate-300"
                      )}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
