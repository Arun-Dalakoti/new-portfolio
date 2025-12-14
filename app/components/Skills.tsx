"use client";

import { skills } from "../data/portfolio";
import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Proficiency levels based on real-world experience and project delivery
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.categories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="card rounded-xl p-6 md:p-8 group hover:shadow-2xl transition-all duration-300"
              style={{
                animation: "fadeIn 0.6s ease-out",
                animationDelay: `${categoryIndex * 0.1}s`,
                animationFillMode: "both"
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold gradient-text">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm md:text-base text-[var(--foreground)]">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs md:text-sm font-bold transition-all duration-300 ${
                          hoveredSkill === skill.name
                            ? "text-[var(--primary)] scale-110"
                            : "text-[var(--muted-foreground)]"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Background */}
                    <div className="h-2.5 bg-[var(--background)] rounded-full overflow-hidden">
                      {/* Progress Bar Fill */}
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      >
                        {/* Animated Shimmer Effect */}
                        <div
                          className="absolute inset-0 opacity-50"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                            animation: hoveredSkill === skill.name ? "shimmer 1.5s infinite" : "none"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 card rounded-lg">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">18+</div>
            <div className="text-sm md:text-base text-[var(--muted-foreground)]">Technologies</div>
          </div>
          <div className="text-center p-6 card rounded-lg">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2.5+</div>
            <div className="text-sm md:text-base text-[var(--muted-foreground)]">Years Experience</div>
          </div>
          <div className="text-center p-6 card rounded-lg">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-sm md:text-base text-[var(--muted-foreground)]">Markets Deployed</div>
          </div>
          <div className="text-center p-6 card rounded-lg">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">95%+</div>
            <div className="text-sm md:text-base text-[var(--muted-foreground)]">Test Coverage</div>
          </div>
        </div>
      </div>

      {/* Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
