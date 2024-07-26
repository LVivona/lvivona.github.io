import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";

const robot_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vivona.xyz/"),
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
  openGraph: {
    type: "website",
    url: "https://vivona.xyz",
    title: "Luca Vivona",
    description: "Luca Vivona personal website. Here you can find information about me, blog posts, and current projects.",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Luca Vivona personal website.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LucaVVivona", // Replace with your actual Twitter handle
    title: "Luca Vivona",
    description: "Luca Vivona personal website. Here you can find information about me, blog posts, and current projects.",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Luca Vivona personal website.",
      },
    ],
  },
  // Add more metadata as needed
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overscroll-none">
        <body className={`dark:bg-black bg-white`}>
          <ThemeProvider>
          {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
