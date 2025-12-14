import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-[var(--muted-foreground)]">
            {about.summary}
          </p>

          <div className="grid gap-4 mt-8">
            {about.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
