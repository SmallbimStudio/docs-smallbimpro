import type { Metadata } from "next"
import { Anuphan } from "next/font/google"
import "./globals.css"
import AppShell from "@/components/app-shell"

//  โหลด Anuphan (Regular และ Bold เช่น 400/700)
const anuphan = Anuphan({
  subsets: ["latin", "thai"],
  weight: ["300", "700"],  // เลือกน้ำหนักที่ต้องการ
  display: "swap",
})

export const metadata: Metadata = {
  title: "SmallBIM Studio Documentation",
  description: "เอกสารประกอบการใช้งาน SmallBIM Studio",
  keywords: ["SmallBIM", "BIM", "Documentation", "การใช้งาน"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        {/* โหลด Material Symbols Outlined สำหรับ icon */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${anuphan.className} antialiased min-h-dvh`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
