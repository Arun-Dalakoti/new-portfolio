import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="section-padding bg-[var(--muted)] border-t border-[var(--border)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <div
            className="flex gap-6"
            role="navigation"
            aria-label="Social media links"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="Visit GitHub profile"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
