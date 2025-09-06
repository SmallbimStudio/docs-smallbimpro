// src/app/docs/background-research/overview/page.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type Toc = {
  title: string
  href: string
  desc: string
}

const TOC: Toc[] = [
  {
    title: "Why It Matters",
    href: "/docs/background-research/why-it-matters",
    desc:
      "ตั้งคำถามสำคัญและกรอบคิดว่าทำไมเวลาของการ ‘เห็นงบ’ จึงกำหนดผลลัพธ์ของทั้งโครงการ",
  },
  {
    title: "Problems in Estimation",
    href: "/docs/background-research/estimation-problems",
    desc:
      "สภาพปัญหากระบวนการประมาณราคาแบบดั้งเดิม: คลาดเคลื่อนสูง ใช้เวลามาก และพึ่งพาบุคคล",
  },
  {
    title: "Challenges and Opportunities",
    href: "/docs/background-research/challenges-opportunities",
    desc:
      "ภูมิทัศน์ของ BIM 5D ในไทย—แรงขับเคลื่อน ประโยชน์จริง และอุปสรรคที่หยั่งรากลึก",
  },
  {
    title: "Revit QTO Limitations",
    href: "/docs/background-research/revit-qto-limitations",
    desc:
      "ข้อจำกัดเชิงเทคนิคของ Revit (out-of-the-box) ที่ทำให้เกิด ‘Accuracy Paradox’",
  },
  {
    title: "BOQ: Traditional vs Automated",
    href: "/docs/background-research/traditional-vs-automated",
    desc:
      "เปรียบเทียบข้อดี/ข้อจำกัดของ Manual, Revit Schedule และ Dynamo—ทำไมจึงไม่พอ",
  },
  {
    title: "Our Solution: Revit Add-in",
    href: "/docs/background-research/our-solution",
    desc:
      "ออกแบบสถาปัตยกรรม Add-in: Rule-based QTO/Costing, เชื่อมฐานข้อมูลราคาไทย และส่งออก CGD BOQ",
  },
  {
    title: "Empirical Comparison",
    href: "/docs/background-research/empirical-comparison",
    desc:
      "พิสูจน์เชิงประจักษ์—เทียบความแม่นยำและเวลา: Manual vs Revit OOTB vs Revit+Add-in",
  },
  {
    title: "Beyond BOQ: Data & Future",
    href: "/docs/background-research/beyond-boq",
    desc:
      "ต่อยอดสู่ Power BI, AI/ML และ Real-time Price API—จากงาน BOQ สู่สินทรัพย์ข้อมูล",
  },
  {
    title: "Research Summary",
    href: "/docs/background-research/research-summary",
    desc:
      "จับประเด็นทั้งหมดแบบโดนๆ—ข้อค้นพบหลัก ข้อเสนอแนะ และบทสรุปเชิงกลยุทธ์",
  },
  {
    title: "Appendix & References",
    href: "/docs/background-research/appendix",
    desc: "รวมแหล่งอ้างอิงทั้งหมดที่ใช้ในงานวิจัย/เอกสารฉบับนี้",
  },
]

export default function ResearchOverviewTocPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Overview & Table of Contents
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            ภาพรวมงานวิจัยทั้งชุดแบบสั้น กระชับ พร้อมลิงก์ไปยังแต่ละบทเรียงลำดับการอ่าน
          </p>
        </header>

        <Separator />

        {/* TOC Cards */}
        <section aria-label="สารบัญ" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOC.map(({ title, href, desc }, idx) => (
            <Link key={href} href={href} className="group">
              <Card className="h-full transition-colors group-hover:bg-muted/50 rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-base">
                    {/* หมายเลขลำดับในวงกลมสีขาว กรอบดำมินิมอล */}
                    <span
                      aria-hidden
                      className="
                        inline-flex h-6 w-6 shrink-0 items-center justify-center
                        rounded-full border border-black bg-white text-black
                        text-sm font-semibold leading-none
                        dark:border-black dark:bg-white dark:text-black
                      "
                    >
                      {idx + 1}
                    </span>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {desc}
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </div>
    </SidebarInset>
  )
}
