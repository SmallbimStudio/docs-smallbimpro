// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmallBIM Studio Documentation",
  description: "เอกสารประกอบการใช้งาน SmallBIM Studio",
  keywords: ["SmallBIM", "BIM", "Documentation", "การใช้งาน"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}