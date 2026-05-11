import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Font optimization prevents Cumulative Layout Shift (CLS)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: '%s | Antigravity',
    default: 'Antigravity - AI-Powered Hiring Protocol',
  },
  description: "Reverse engineer your dream career with digital twins, CQ scoring, and proof-of-work portfolios.",
  openGraph: {
    title: 'Antigravity Protocol',
    description: 'The next-generation AI hiring platform.',
    url: 'https://antigravity.ai',
    siteName: 'Antigravity',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
