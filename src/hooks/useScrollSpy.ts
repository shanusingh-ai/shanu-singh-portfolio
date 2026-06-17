'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 20) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 88;
      let currentId = sectionIds[0] || '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is at or above the navbar plus a threshold (offset),
          // it means the user has scrolled into or past this section.
          if (rect.top <= navbarHeight + offset) {
            currentId = id;
          }
        }
      }

      // Force last section to be active when at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      
      if (isAtBottom && sectionIds.length > 0) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveId(currentId);
    };

    handleScroll(); // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

