import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="card rounded-lg p-4 sm:p-6 md:p-10">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold mb-2">
                  {education.degree}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--primary)] font-semibold mb-3">
                  {education.institution}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {education.location}
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {education.period}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6 pt-6 border-t border-[var(--border)]">
              <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg">
                GPA: {education.gpa}
              </div>
              <p className="text-sm sm:text-base text-[var(--muted-foreground)]">Overall Academic Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
