"use client";

import { useState, useEffect } from "react";
import { navLinks } from "../data/portfolio";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-[var(--border)]"
            : "bg-background/50 backdrop-blur-sm"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom section-padding !py-4 md:!py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              className={`text-2xl md:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity ${
                isMobileMenuOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AD
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base hover:text-[var(--primary)] transition-all duration-300 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl relative p-2 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[var(--background)] z-[70] md:hidden shadow-2xl animate-slide-in-right"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl hover:text-[var(--primary)] transition-all duration-300 font-medium hover:translate-x-2 transform"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      animation: `slideInRight 0.3s ease-out ${
                        index * 0.1
                      }s both`,
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
