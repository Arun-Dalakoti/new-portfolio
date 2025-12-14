"use client";

import { experience } from "../data/portfolio";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "-80px",
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Calculate progress (0 to 100)
      const start = sectionTop;
      const end = sectionTop + sectionHeight;
      const progress = Math.min(
        Math.max(((scrollPosition - start) / (end - start)) * 100, 0),
        100
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-padding relative overflow-hidden bg-[var(--muted)]"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line - Background (Gray) */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-[var(--border)] rounded-full" />

          {/* Vertical Timeline Line - Progress Fill (Gradient) */}
          <div
            className="hidden md:block absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />

          {/* Experience Cards - All on Right Side */}
          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isVisible = visibleCards.has(index);

              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="relative md:pl-20"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0) scale(1)"
                      : "translateX(-30px) scale(0.98)",
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Card Content */}
                  <div>
                    {/* Company Card */}
                    <div className="card rounded-2xl p-4 sm:p-5 md:p-8 transition-all duration-500 relative">
                      <div className="relative">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-[var(--border)]">
                          <div className="flex-1">
                            {/* Company Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg text-white text-sm font-bold mb-3 shadow-lg">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                              {exp.company}
                            </div>

                            {/* Role */}
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                              {exp.role}
                            </h3>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm md:text-base text-[var(--muted-foreground)]">
                              <span className="flex items-center gap-2">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {exp.location}
                              </span>
                              <span className="flex items-center gap-2">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-6">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="relative bg-[var(--background)]/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-[var(--border)] hover:border-[var(--primary)]/40 hover:shadow-lg transition-all duration-300"
                              style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                  ? "translateY(0)"
                                  : "translateY(20px)",
                                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
                                  0.3 + achIndex * 0.15
                                }s`,
                              }}
                            >
                              <div className="flex flex-col sm:flex-row items-start gap-3">
                                {/* Achievement Icon */}
                                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center text-lg sm:text-2xl md:text-3xl shadow-md">
                                  {achIndex === 0
                                    ? "🚀"
                                    : achIndex === 1
                                    ? "⚡"
                                    : achIndex === 2
                                    ? "💎"
                                    : "✨"}
                                </div>

                                <div className="flex-1 w-full">
                                  {/* Achievement Title */}
                                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 gradient-text">
                                    {achievement.title}
                                  </h4>

                                  {/* Description */}
                                  <p className="text-sm md:text-base text-[var(--muted-foreground)] mb-4 leading-relaxed">
                                    {achievement.description}
                                  </p>

                                  {/* Impact Points */}
                                  {achievement.impact.length > 0 && (
                                    <ul className="space-y-2">
                                      {achievement.impact.map(
                                        (item, impIndex) => (
                                          <li
                                            key={impIndex}
                                            className="flex items-start gap-2 sm:gap-3 text-sm md:text-base"
                                          >
                                            <div className="mt-1.5 flex-shrink-0">
                                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                                            </div>
                                            <span className="text-[var(--foreground)]">
                                              {item}
                                            </span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
