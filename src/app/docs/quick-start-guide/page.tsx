"use client"

import Link from "next/link"
import Image from "next/image" // เพิ่ม import
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// ==== Types ====
type GuideItem = {
  title: string
  href: string
  video?: string
  image?: string // เพิ่ม image property
}

type GuideCategory = {
  title: string
  items: GuideItem[]
}

// ==== Data ====
const CATEGORIES: GuideCategory[] = [
  {
    title: "Get Small BIM PRO (การสั่งซื้อและฟีเจอร์)",
    items: [
      { 
        title: "Get Small BIM PRO (การสั่งซื้อ)", 
        href: "/get-smallbimpro/buy",
        image: "/images/guides/Guide-getsmallbimpro.png"
      },
      { 
        title: "Feature Lists (รายการฟีเจอร์)", 
        href: "/get-smallbimpro/feature-lists",
        image: "/images/guides/Guide-featurelists.png"
      },
    ],
  },
  {
    title: "Download and Installation (การดาวน์โหลดและติดตั้ง)",
    items: [
      {
        title: "Download & Installation (การดาวน์โหลดและติดตั้ง)",
        href: "/docs/download-installation",
        video: "https://www.youtube.com/embed/YidRgoNOh5M",
      },
      {
        title: "Activate License (การเปิดใช้งานลิขสิทธิ์)",
        href: "/docs/activate-license",
        video: "https://www.youtube.com/embed/e1df1ntb8NQ",
      },
      {
        title: "Update & Uninstall (การอัปเดตและถอนการติดตั้ง)",
        href: "/docs/uninstall",
        video: "https://www.youtube.com/embed/BxcIrjYSKrA",
      },
    ],
  },
  {
    title: "Data Preparation (การเตรียมข้อมูล)",
    items: [
      {
        title: "Data Preparation and Revit Template (การใช้งาน Revit Template)",
        href: "/docs/data-preparation/revit-template",
        video: "https://www.youtube.com/embed/dL7ADTowG6U",
      },
      {
        title: "Revit Parameters (การใช้งาน Parameters)",
        href: "/docs/data-preparation/revit-parameters",
        video: "https://www.youtube.com/embed/10C9VBol4e8",
      },
      {
        title: "Revit Shared Parameters (การตั้งค่า Shared Parameters)",
        href: "/docs/data-preparation/shared-parameters",
        video: "https://www.youtube.com/embed/P90X0bjHq04",
      },
      {
        title: "Revit Keynote (การตั้งค่า Keynote)",
        href: "/docs/data-preparation/revit-keynote",
        video: "https://www.youtube.com/embed/2fL4tHIx0ns",
      },
      {
        title: "Database (การเชื่อมต่อฐานข้อมูล)",
        href: "/docs/data-preparation/database",
        video: "https://www.youtube.com/embed/OlBYQdSLNF0",
      },
    ],
  },
  {
    title: "Main Features (ฟีเจอร์หลัก)",
    items: [
      { 
        title: "BOQ Tools (เครื่องมือสำหรับการประมาณราคา)", 
        href: "/docs/boq-tools/boq",
        image: "/images/guides/Guide-BOQ-Tools.png"
      },
      { 
        title: "Modeling Tools (เครื่องมือสำหรับการสร้างโมเดล)", 
        href: "/docs/modeling-tools/grid-layout",
        image: "/images/guides/Guide-Modeling-Tools.png"
      },
      { 
        title: "Drawing Tools (เครื่องมือสำหรับการเขียนแบบ)", 
        href: "/docs/drawing-tools/fast-plan",
        image: "/images/guides/Guide-Drawing-Tools.png"
      },
    ],
  },
  {
    title: "Other Guides (คู่มืออื่น ๆ )",
    items: [
      {
        title: "Online BOQ Transfer (การใช้งาน BOQ ออนไลน์)",
        href: "/docs/online-boq",
        image: "/images/guides/Guide-Online-BOQ.png"
      },
      { 
        title: "Background and Research (จุดเริ่มต้นของ Small BIM PRO)", 
        href: "/docs/background-research",
        image: "/images/guides/Guide-background.png"
      },
      {
        title: "Troubleshooting & FAQ (ปัญหาและคำถามที่พบบ่อย)",
        href: "/docs/troubleshooting-faq/faq",
        image: "/images/guides/Guide-FAQ.png"
      },
     
    ],
  },
]

export default function QuickStartGuidePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold">Quick Start Guide</h1>
        <p className="text-muted-foreground text-lg">
          รวมขั้นตอนสำคัญในการใช้งาน Small BIM PRO แบบรวดเร็ว
        </p>
      </div>

      {/* Render Categories */}
      {CATEGORIES.map((cat, idx) => (
        <div key={idx} className="space-y-6">
          {/* Section Title */}
          <h2 className="text-2xl font-bold border-b pb-2">{cat.title}</h2>

          {/* Grid of Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {cat.items.map((g, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{g.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  {g.video ? (
                    <div className="w-full aspect-video rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src={g.video}
                        title={g.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : g.image ? (
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                      <Image
                        src={g.image}
                        alt={g.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-lg">
                      <span className="text-sm text-muted-foreground">[ รูปภาพ/วิดีโอสาธิต ]</span>
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={g.href}>ดูรายละเอียด</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
