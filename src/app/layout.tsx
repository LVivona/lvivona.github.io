import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";

const robot_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Vivona",
  description:
    "Luca Vivona personal website. Here you can find information about me, blog posts, and current projects.",
  keywords: "Luca Vivona, personal website, portfolio, contact",
  authors: { name: "Luca Vivona" },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  },
  // Add more metadata as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robot_mono.className}`}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
