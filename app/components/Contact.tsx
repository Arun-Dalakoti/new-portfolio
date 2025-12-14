"use client";

import { useState } from "react";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Please enter your name";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters long";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Please enter your email address";
        } else if (!validateEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "message":
        // Message is optional, only validate if user has entered something
        if (value.trim() && value.trim().length < 10) {
          error = "Message must be at least 10 characters long";
        }
        break;
    }

    return error;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      // Create mailto link
      const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
      window.location.href = mailtoLink;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change if field has been touched
    if (touched[name as keyof typeof touched]) {
      setErrors({
        ...errors,
        [name]: validateField(name, value),
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-xl text-[var(--muted-foreground)] mb-16 max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations,
          or just having a chat about technology!
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="flex items-center gap-4 p-4 card rounded-lg  group relative">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[var(--muted-foreground)]">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-semibold group-hover:text-[var(--primary)] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(personalInfo.email, "email");
                }}
                className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors relative cursor-pointer"
                aria-label="Copy email"
              >
                {copiedField === "email" ? (
                  <svg
                    className="w-5 h-5 text-green-500"
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
                ) : (
                  <svg
                    className="w-5 h-5 text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
              {copiedField === "email" && (
                <div className="absolute -top-10 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-lg shadow-lg">
                  Copied!
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 p-4 card rounded-lg  group relative">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[var(--muted-foreground)]">Phone</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="font-semibold group-hover:text-[var(--primary)] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(personalInfo.phone, "phone");
                }}
                className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors relative cursor-pointer"
                aria-label="Copy phone"
              >
                {copiedField === "phone" ? (
                  <svg
                    className="w-5 h-5 text-green-500"
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
                ) : (
                  <svg
                    className="w-5 h-5 text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
              {copiedField === "phone" && (
                <div className="absolute -top-10 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-lg shadow-lg">
                  Copied!
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 p-4 card rounded-lg">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Location
                </p>
                <p className="font-semibold">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 card rounded-lg hover:shadow-lg transition-colors hover:text-[var(--primary)]"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 card rounded-lg hover:shadow-lg transition-colors hover:text-[var(--primary)]"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="card rounded-lg p-4 sm:p-6 md:p-8 space-y-6"
            noValidate
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
                className={`w-full px-4 py-3 rounded-lg border ${
                  touched.name && errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[var(--border)] focus:ring-[var(--primary)]"
                } bg-[var(--background)] focus:outline-none focus:ring-2 transition-all`}
                placeholder="Your name"
              />
              {touched.name && errors.name && (
                <p
                  className="mt-2 text-sm text-red-500 flex items-center gap-1"
                  role="alert"
                  aria-live="polite"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                className={`w-full px-4 py-3 rounded-lg border ${
                  touched.email && errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[var(--border)] focus:ring-[var(--primary)]"
                } bg-[var(--background)] focus:outline-none focus:ring-2 transition-all`}
                placeholder="your.email@example.com"
              />
              {touched.email && errors.email && (
                <p
                  className="mt-2 text-sm text-red-500 flex items-center gap-1"
                  role="alert"
                  aria-live="polite"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message{" "}
                <span className="text-[var(--muted-foreground)] font-normal">
                  (Optional)
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  touched.message && errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[var(--border)] focus:ring-[var(--primary)]"
                } bg-[var(--background)] focus:outline-none focus:ring-2 transition-all resize-none`}
                placeholder="Your message..."
              />
              {touched.message && errors.message && (
                <p
                  className="mt-2 text-sm text-red-500 flex items-center gap-1"
                  role="alert"
                  aria-live="polite"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg gradient-bg text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
