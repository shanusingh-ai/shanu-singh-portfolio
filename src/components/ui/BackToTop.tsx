"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Sirf last 15% page me button show hoga
      if (scrollPosition > pageHeight * 0.85) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
    >
      <span className="flex items-center gap-1.5">
        <ArrowUp size={16} />
        Back to Top
      </span>
    </button>
  );
}