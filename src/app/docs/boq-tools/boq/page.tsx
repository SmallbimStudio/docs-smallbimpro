// src/app/docs/boq-tools/boq/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Calculator,
  FileSpreadsheet,
  ClipboardList,
  Database,
  Settings2,
  Info,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"

/** ---------- Small UI atoms ---------- */
function Step({
  n,
  title,
  children,
}: {
  n: number
  title: string
  children: React.ReactNode
}) {
  return (
    <Card className="rounded-2xl shadow-sm border">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-base font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-muted text-foreground">
            {n}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-2">
        {children}
      </CardContent>
    </Card>
  )
}

/** ภาพประกอบ */
function ImageBlock({
  imagesrc,
  aspect = "aspect-video",
}: {
  imagesrc?: string
  aspect?: string
}) {
  return (
    <div className="w-full flex justify-center">
      <div className={`${aspect} w-full max-w-5xl relative`}>
        {imagesrc ? (
          <Image
            src={imagesrc}
            alt=""
            fill
            className="object-contain rounded-xl"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-muted-foreground">
            [ Image Placeholder ]
          </div>
        )}
      </div>
    </div>
  )
}


export default function BoqCommandGuidePage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-12 space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            BOQ Command — User Guide
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            คู่มือการใช้งานคำสั่ง BOQ ของ <b>Small BIM PRO</b> —  
            ตั้งค่า → ถอดปริมาณ → จับคู่ราคา → ส่งออกเอกสาร  
            ทั้งหมดใน Workflow เดียวที่เรียบง่ายและแม่นยำ
          </p>
        </header>

        <Separator />

        {/* Main Screenshot */}
        <ImageBlock imagesrc="/images/guides/boq-main-window.png" />

        {/* Quick Start */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-center">Quick Start</h2>
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            เริ่มใช้งานได้ในไม่กี่ขั้นตอนง่ายๆ: เลือกหมวดงาน → ตั้งกฎ → แม็พข้อมูล → เช็กราคา → สร้าง BOQ
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Step n={1} title="เลือกหมวดงาน (Category)">
              <p>เลือก Discipline และ Work Package เช่น โครงสร้าง, สถาปัตย์ หรือ MEP</p>
              <p className="text-xs">ระบบจะกรอง Rules ที่เกี่ยวข้องให้อัตโนมัติ</p>
            </Step>
            <Step n={2} title="กำหนดกฎการถอด (Rules)">
              <p>ตั้งค่า Waste, Lap, หรือสูตรคำนวณพิเศษ</p>
              <p className="text-xs">บันทึกเป็น Preset เพื่อนำกลับมาใช้ซ้ำ</p>
            </Step>
            <Step n={3} title="แม็พ Category → รายการ BOQ">
              <p>จับคู่ Revit Category/Family/Type กับรหัส BOQ ขององค์กร</p>
            </Step>
            <Step n={4} title="เช็กราคา / เลือก Price Profile">
              <p>เลือกฐานราคาวัสดุ และกำหนดวันที่อ้างอิง</p>
            </Step>
            <Step n={5} title="Generate & Review">
              <p>ระบบสร้างตารางสรุปปริมาณ + ราคา ตรวจสอบ Warning ก่อนส่งออก</p>
            </Step>
          </div>
        </section>
        <Separator />

        {/* Tips & Best Practices */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>ใช้ “Modeling for Takeoff” ให้ตรงกับ Rules ที่องค์กรกำหนด</li>
                <li>ล็อก Price Profile ต่อโครงการเพื่อลดความคลาดเคลื่อน</li>
                <li>ตั้ง Preset สำหรับหมวดงานที่ใช้บ่อย</li>
                <li>เก็บ QTO Log ทุกครั้งเพื่อเทียบย้อนหลัง</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <AlertTriangle className="h-4 w-4" />
                Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>รายการหาย: ตรวจสอบ Category/Filter และ Phase</li>
                <li>ตัวเลขผิด: ตรวจ Rules เผื่อ/สูตรคำนวณ</li>
                <li>ราคาว่าง: ตรวจสิทธิ์ฐานข้อมูลหรือ API</li>
                <li>Export เพี้ยน: ใช้ Template เวอร์ชันที่ตรงกัน</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </SidebarInset>
  )
}
