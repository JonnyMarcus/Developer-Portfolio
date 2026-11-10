'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Context for easy cleanup
    const ctx = gsap.context(() => {
      // ====================================================================
      // 1. ENTRANCE ANIMATION TIMELINE (Page Load)
      // ====================================================================
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Navbar slide down
      tl.from('.nav2', {
        y: -40,
        opacity: 0,
        duration: 0.8,
      });

      // Sidebar shortcuts fade in from left (if desktop)
      tl.from(
        '.side',
        {
          x: -30,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.5'
      );

      // Hero Elements
      tl.from(
        '.hero2 .badge',
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.8)',
        },
        '-=0.3'
      );

      tl.from(
        ['.hero2 h1', '.hero2 p'],
        {
          y: 25,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
        },
        '-=0.3'
      );

      tl.from(
        '.hero-ctas .btn',
        {
          y: 15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        '-=0.4'
      );

      tl.from(
        '.hero2 .soc a',
        {
          scale: 0.7,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(2)',
        },
        '-=0.3'
      );

      tl.from(
        '.hero2 .stats .chip',
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
        },
        '-=0.3'
      );

      tl.from(
        '.hero2 .fl',
        {
          scale: 0.92,
          y: 25,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        },
        '-=0.7'
      );

      // ====================================================================
      // 2. SCROLLTRIGGER SECTION REVEALS
      // ====================================================================

      // Section Titles & Subtitles
      const sectionHeadings = document.querySelectorAll<HTMLElement>(
        'section h2, .cont > section > .row'
      );
      sectionHeadings.forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          x: -30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });

      // Projects Section
      gsap.from('#projetos .mq', {
        scrollTrigger: {
          trigger: '#projetos',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Technologies Category Cards
      gsap.from('#tec .sub', {
        scrollTrigger: {
          trigger: '#tec',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
      });

      // Technologies Icons Ripple
      const techIcons = document.querySelectorAll<HTMLElement>('#tec .ic');
      if (techIcons.length > 0) {
        gsap.from(techIcons, {
          scrollTrigger: {
            trigger: '#tec',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          scale: 0.6,
          opacity: 0,
          duration: 0.4,
          stagger: 0.015,
          ease: 'back.out(1.5)',
        });
      }

      // About Me Cards
      gsap.from('#sobre .ab > div', {
        scrollTrigger: {
          trigger: '#sobre',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('#sobre .g3 .sub', {
        scrollTrigger: {
          trigger: '#sobre .g3',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Journey Timeline
      gsap.from('#exp .tl2 li', {
        scrollTrigger: {
          trigger: '#exp',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: -25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
      });

      // GitHub Repositories List
      gsap.from('#github .gl a', {
        scrollTrigger: {
          trigger: '#github',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 18,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
      });

      // Education Cards
      gsap.from('#formacao .fgrid > div', {
        scrollTrigger: {
          trigger: '#formacao',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });

      // Terminal & Currently Studying
      gsap.from('.r2 > section', {
        scrollTrigger: {
          trigger: '.r2',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Portfolios Cards
      gsap.from('#portfolios article', {
        scrollTrigger: {
          trigger: '#portfolios',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Contact Cards
      gsap.from('#contato .cg .ct', {
        scrollTrigger: {
          trigger: '#contato',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
