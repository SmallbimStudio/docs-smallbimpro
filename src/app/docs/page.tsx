// src/app/docs/page.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { BookOpen, Search, ArrowRight, Circle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import RevenueCard from "@/components/cards/DatabaseCount"
import SubscriptionsCard from "@/components/cards/CostCount"
import MacLeamyChartCard from "@/components/cards/MacLeamyChartCard"
import DatabaseCard from "@/components/cards/DatabaseCard"
import FeeAdvisorChart from "@/components/fee-advisor-chart"
import Image from "next/image"

export default function DocsOverview() {
  return (
    <section className="mx-auto w-full max-w-7xl text-center px-4 md:px-6 py-10 space-y-10">
      {/* ===== HERO ===== */}
      <header className="mx-auto max-w-3xl text-center space-y-4">
        <span className="inline-flex items-center rounded-full border px-3 py-0 text-xs text-muted-foreground">
          Small BIM Studio • Documentation
      </span>
        <h1 className="text-4xl font-bold tracking-tight">
          ยินดีต้อนรับสู่เอกสาร <span className="whitespace-nowrap">Small BIM PRO</span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          เริ่มต้นใช้งาน Add-in และทำความเข้าใจ BOQ workflow เพื่อคุมงบประมาณแม่นยำตั้งแต่ต้นทาง
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button asChild>
            <Link href="/docs/download-installation">
              <BookOpen className="mr-2 h-4 w-4" />
              Getting Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search">
              <Search className="mr-2 h-4 w-4" />
              ค้นหาเอกสาร
            </Link>
          </Button>
        </div>
      </header>
      
      {/* ===== HERO IMAGE ===== */}
      <div className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden border border-gray-300">
        <Image
          src="/images/docs//getting-started/title.jpg" // เปลี่ยน path เป็นไฟล์รูปของคุณ
          alt="Small BIM PRO Cover"
          fill
          className="object-cover"
          priority
        />
      </div>

      

      <Separator />

      {/* ===== QUICK SECTIONS ===== */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
        {/* Getting started */}
        <Card className="md:col-span-2 lg:col-span-1 h-full">
          <CardHeader className="pb-3">
            <CardTitle>เริ่มต้นอย่างรวดเร็ว</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              ติดตั้ง Add-in, โหลด Template, และตั้งค่า Keynote + ราคากลาง ให้ BOQ พร้อมใช้งาน
            </p>
            <div className="flex gap-2">
              <Button asChild size="sm">
                <Link href="/docs/download-installation">ดาวน์โหลด และติดตั้ง</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/docs">อ่านคู่มือ</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick links */}
        <Card className="h-full">
          <CardHeader className="pb-3">
            <CardTitle>ลิงก์ทางลัด</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {[
              { href: "/docs/workflow/overview", label: "BOQ Workflow Overview" },
              { href: "/docs/template/overview", label: "Revit Template (ราคา/Keynote)" },
              { href: "/docs/addin/ui", label: "Small BIM PRO Add-in (UI & การตั้งค่า)" },
              { href: "/docs/faq", label: "FAQ / Troubleshooting" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-md border p-3 hover:bg-accent"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* What's new (timeline style) */}
        <Card className="md:col-span-2 xl:col-span-2 h-full">
          <CardHeader className="pb-3">
            <CardTitle>กำลังพัฒนาอะไรอยู่บ้าง</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 h-[calc(100%-0.5rem)] w-px bg-border" />
              <div className="space-y-4">
                <div className="relative">
                  <Circle className="absolute -left-[22px] top-1 h-4 w-4 text-muted-foreground" />
                  <div className="flex items-start justify-between gap-4 rounded-md border p-3">
                    <div>
                      <div className="font-medium">Development (Version 1.0.0)</div>
                      <p className="text-sm text-muted-foreground">
                        พัฒนาต้นแบบเครื่องมือประมาณราคา สำหรับ Revit 2024 (รองรับ 2025–2026 ในเฟสถัดไป)
                      </p>
                    </div>
                    <time className="shrink-0 text-xs text-muted-foreground">Aug 2025</time>
                  </div>
                </div>

                <div className="relative">
                  <Circle className="absolute -left-[22px] top-1 h-4 w-4 text-muted-foreground" />
                  <div className="flex items-start justify-between gap-4 rounded-md border p-3">
                    <div>
                      <div className="font-medium">RSB-PROFESSIONAL Template (2024) • Keynote + ราคากลาง</div>
                      <p className="text-sm text-muted-foreground">
                        เพิ่มหมวดหมู่และโครงสร้าง Family เพื่อฝังข้อมูลราคา รองรับงานเขียนแบบและประมาณราคาทันที
                      </p>
                    </div>
                    <time className="shrink-0 text-xs text-muted-foreground">Oct 2025</time>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ===== MacLeamy intro ===== */}
      <section className="mx-auto max-w-3xl text-center space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight">
          ทำความเข้าใจ <span className="whitespace-nowrap">MacLeamy Curve</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          ความสัมพันธ์ระหว่างความสามารถในการปรับเปลี่ยนแบบกับต้นทุนตลอดอายุโครงการ — ช่วงต้นปรับง่ายต้นทุนต่ำ,
          ช่วงก่อสร้างต้นทุนพุ่งเร็ว
        </p>
      </section>

      {/* กราฟ MacLeamy */}
      <div className="rounded-2xl border p-3 md:p-4">
        <MacLeamyChartCard />
      </div>

      {/* ===== Fee advisor ===== */}
      <section className="mx-auto max-w-3xl text-center space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight">
          งบลูกค้ากับค่าแบบสถาปนิก <span className="whitespace-nowrap">ควรอยู่ตรงไหน?</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          ประเมินขนาดพื้นที่ งบก่อสร้าง และกรอบค่าบริการอย่างเหมาะสม เพื่อความคุ้มค่าของทั้งเจ้าของงานและผู้ออกแบบ
        </p>
      </section>

      <Card className="h-full overflow-hidden">
        <CardContent className="p-2 md:p-4">
          <FeeAdvisorChart />
        </CardContent>
      </Card>

      {/* ===== Data widgets + Database ===== */}
      <section className="space-y-6">
        <div className="mx-auto max-w-3xl text-center space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            ลงลึกงานประมาณราคา <span className="whitespace-nowrap">ด้วย Small BIM PRO</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Revit Add-in สำหรับประมาณราคาอย่างมีประสิทธิภาพ เชื่อมฐานข้อมูลออนไลน์คำนวณจริงในโมเดล
          </p>
        </div>

        {/* Widgets */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          <div className="lg:col-span-1 min-w-0">
            <div className="h-full">
              <RevenueCard />
            </div>
          </div>
          <div className="lg:col-span-1 min-w-0">
            <div className="h-full">
              <SubscriptionsCard />
            </div>
          </div>
          {/* ช่องว่างเผื่อการ์ดเพิ่มในอนาคต หรือเว้นให้โปร่ง */}
          <div className="md:col-span-2 lg:col-span-2 min-w-0">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle>ภาพรวมฐานข้อมูล</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                ช่องนี้เผื่อสำหรับสรุป dataset / schema / วิธี mapping Keynote → ราคากลาง (เพิ่มภายหลัง)
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Database explorer */}
        <div className="rounded-2xl border p-2 md:p-4">
          <DatabaseCard />
        </div>
      </section>
    </section>
  )
}
