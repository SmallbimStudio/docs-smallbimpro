// src/app/docs/data-preparation/about/page.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type LucideIcon, FileCode, FileSpreadsheet, Database, FileText, FileCog } from "lucide-react"

type FileItem = {
  name: string
  desc: string
  href: string
  icon: LucideIcon
}

const requiredFiles: FileItem[] = [
  {
    name: "Revit Template",
    desc: "ไฟล์ Revit Template ที่ใช้งานกับ Small BIM PRO ได้อย่างลงตัว",
    href: "/docs/data-preparation/revit-template",
    icon: FileCode,
  },
  {
    name: "Revit Parameters",
    desc: "Parameters ที่จำเป็นสำหรับงานประมาณราคา",
    href: "/docs/data-preparation/revit-parameters",
    icon: FileCog,
  },
  {
    name: "Revit Shared Parameters",
    desc: "Shared Parameter ที่จำเป็นสำหรับงานประมาณราคา",
    href: "/docs/data-preparation/shared-parameters",
    icon: FileText,
  },
  {
    name: "Revit Keynote",
    desc: "มาตรฐานการกำหนดรหัสต้นทุน (Cost Code) ให้กับโมเดล",
    href: "/docs/data-preparation/revit-keynote",
    icon: FileSpreadsheet,
  },
  {
    name: "Database",
    desc: "มาตรฐานรหัสต้นทุน พร้อมราคากลาง ที่ใช้ในการประมาณราคา",
    href: "/docs/data-preparation/database",
    icon: Database,
  },
]

export default function AboutDataPreparationPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            About Data Preparation
          </h1>
          <p className="text-base text-muted-foreground">
            สิ่งที่ต้องเตรียม ก่อนใช้งาน Small BIM PRO: โครงสร้างไฟล์ พารามิเตอร์ และมาตรฐานข้อมูล
          </p>
        </header>

        <Separator />
        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dL7ADTowG6U"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>


        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT CONTENT */}
          <section className="space-y-5">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">เป้าหมาย</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                สำหรับการประมาณราคาด้วย Revit การจะทำให้การทำงานครบถ้วนสมบูรณ์ ได้รายการประมาณราคาจาก Small BIM PRO จำเป็นต้องทำการกำหนดข้อมูลให้กับโมเดลทุกชิ้นใน Revit ให้โมเดลมีข้อมูลที่พร้อมต่อการถอดปริมาณ และคำนวณต้นทุน
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Checklist เริ่มต้น</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>เลือกใช้ RSB_PROFESSIONAL Template เทมเพลทเวอร์ชั่นล่าสุดจากทาง Small BIM Studio</li>
                  <li>โหลด/ผูก Shared Parameters ที่จำเป็น (ทำความเข้าใจเกี่ยวกับ Shared Parameters)</li>
                  <li>กำหนด Keynote/รหัสหมวดงาน เพื่อใช้อ้างอิงรหัสต้นทุนเดียวกันทั้งองค์กร</li>
                  <li>เชื่อมฐานข้อมูลราคาหรือกำหนดที่เก็บไฟล์ราคา อัพเดตราคาได้ทั้งออนไลน์ และออฟไลน์</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* RIGHT CONTENT */}
          <aside className="space-y-6">
            <h2 className="text-lg font-bold text-center">ไฟล์ที่ต้องเตรียม</h2>
            <div className="grid gap-4">
              {requiredFiles.map((file) => (
                <div key={file.name} className="space-y-2">
                  <Link href={file.href} className="block">
                    <div className="flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-3 text-sm font-medium hover:bg-gray-800 transition">
                      <file.icon className="h-4 w-4" />
                      {file.name}
                    </div>
                  </Link>
                  <p className="text-xs text-muted-foreground text-center leading-snug">
                    {file.desc}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </SidebarInset>
  )
}
