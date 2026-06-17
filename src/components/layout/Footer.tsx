"use client";

import { navItems, socialLinks } from "@/lib/data";
import { Heart } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 88;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold tracking-tight mb-3">
              <span className="gradient-text">Shanu Singh</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
              Aspiring AI Engineer passionate about building intelligent systems
              that solve real-world problems.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Let&apos;s Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialIcon key={link.name} link={link} size="sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-white/5 flex flex-col items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Shanu Singh. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-slate-500 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400" />
            AI, Code & Creativity
          </p>
        </div>
      </div>
    </footer>
  );
}
