import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arun Dalakoti | Senior Front-End Developer",
  description: "Senior Front-End Developer specializing in building scalable, high-performance web applications using Next.js, React, and TypeScript. Expert in microservices architecture and international expansion.",
  keywords: ["Arun Dalakoti", "Frontend Developer", "Next.js", "React", "TypeScript", "Web Development", "Software Engineer"],
  authors: [{ name: "Arun Dalakoti" }],
  openGraph: {
    title: "Arun Dalakoti | Senior Front-End Developer",
    description: "Building scalable, high-performance web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
