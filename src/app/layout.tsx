import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Kinjal Desai, PhD - Senior Research Associate",
  description: "Dr. Kinjal Desai is a Senior Research Associate specializing in cancer biology, developmental stem cell biology, and pediatric neuro-oncology at The Hospital for Sick Children.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
