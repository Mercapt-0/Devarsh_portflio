import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devarsh Soni | ML Engineer & CS Grad Student",
  description:
    "MS Computer Science candidate at UT Arlington. Experienced in machine learning, computer vision, and applied AI. Seeking software engineering and ML internships.",
  keywords: [
    "Devarsh Soni",
    "Machine Learning",
    "Computer Vision",
    "Portfolio",
    "UT Arlington",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
