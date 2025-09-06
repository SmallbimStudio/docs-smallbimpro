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

/** ---------- Small UI atoms ---------- */
function FeatureButton({
  label,
  icon: Icon,
  active = false,
  hint,
}: {
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  active?: boolean
  hint?: string
}) {
  return (
    <button
      type="button"
      className={[
        "w-full rounded-xl border px-4 py-3 text-left transition-colors",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "hover:bg-muted",
      ].join(" ")}
      // TODO: onClick → เชื่อมกับ UI จริงของแอป
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            "inline-flex h-9 w-9 items-center justify-center rounded-lg border",
            active
              ? "border-white/70 bg-white/15"
              : "border-foreground/20 bg-background",
          ].join(" ")}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <div className="font-medium">{label}</div>
          {hint ? (
            <div
              className={[
                "text-xs",
                active ? "text-primary-foreground/80" : "text-muted-foreground",
              ].join(" ")}
            >
              {hint}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  )
}

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
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-base">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white text-black dark:text-black dark:bg-white">
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

/** ภาพประกอบ/Placeholder */
function ImageBlock({
  label,
  caption,
  aspect = "aspect-video",
}: {
  label: string
  caption?: string
  aspect?: string
}) {
  return (
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className={`${aspect} w-full grid place-items-center text-sm text-muted-foreground`}>
        [ Image Placeholder — {label} ]
      </div>
      {caption ? (
        <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default function BoqCommandGuidePage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            BOQ Command — User Guide
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            คำสั่งหลักสำหรับสร้าง BOQ อัตโนมัติจากโมเดล Revit: ตั้งค่า → ถอดปริมาณตามกฎ → จับคู่ราคา → ส่งออกเอกสารมาตรฐาน
          </p>
        </header>

        <Separator />

        {/* Command palette (จำลองปุ่ม) */}
        <section aria-label="Available Commands" className="space-y-3">
          <h2 className="text-lg font-semibold">Commands</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* ปุ่มแรก: BOQ (active) */}
            <FeatureButton
              label="BOQ"
              icon={Calculator}
              active
              hint="สร้าง BOQ อัตโนมัติ จากโมเดลที่เปิดอยู่"
            />
            {/* ปุ่มอื่น — ตัวอย่างเผื่ออนาคต */}
            <FeatureButton
              label="Model Data Management"
              icon={Database}
              
              hint="ตรวจสอบความพร้อมของข้อมูลโมเดล"
            />
         
          </div>
        </section>

        <Separator />

        {/* Prerequisites */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Info className="h-4 w-4" />
                ข้อกำหนดก่อนใช้งาน (Prerequisites)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>โมเดล Revit เปิดอยู่ และบันทึกล่าสุด</li>
                <li>ติดตั้ง Template/Shared Parameters ที่โปรเจ็กต์กำหนด</li>
                <li>ตั้งค่า Project Units และ Phase ให้ถูกต้อง</li>
                <li>(ถ้ามี) เลือก Price Profile และเชื่อมฐานข้อมูลราคา</li>
              </ul>
            </CardContent>
          </Card>

          <ImageBlock
            label="BOQ — Settings Overview"
            caption="หน้าต่างตั้งค่าเริ่มต้นของคำสั่ง BOQ (ตัวอย่าง UI)"
          />
        </section>

        {/* Quick Start — Steps */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Step n={1} title="เลือกหมวดงาน / Scope">
              <p>เลือก Discipline และ Work Package ที่ต้องการถอด เช่น โครงสร้าง, สถาปัตย์ หรือ MEP</p>
              <p className="text-xs">ระบบจะกรองกฎ (Rules) ที่เกี่ยวข้องมาให้โดยอัตโนมัติ</p>
            </Step>
            <Step n={2} title="กำหนดกฎการถอด (Rules)">
              <p>ตั้งค่าเช่น “Concrete Waste 5%”, “Rebar Lap ตาม DB”, “หักช่องเปิด 0.3 m²”</p>
              <p className="text-xs">บันทึกเป็น Preset ได้เพื่อนำกลับมาใช้ซ้ำ</p>
            </Step>
            <Step n={3} title="แม็พ Category → รายการ BOQ">
              <p>จับคู่ Revit Category/Family/Type กับรหัสรายการ BOQ ตามมาตรฐานองค์กร/CGD</p>
            </Step>
            <Step n={4} title="เช็กราคา / เลือก Price Profile">
              <p>เลือกแหล่งราคา (ฐานข้อมูลองค์กร หรือ API ราคาวัสดุ) และวันที่อ้างอิง</p>
            </Step>
            <Step n={5} title="Generate & Review">
              <p>สั่งคำนวณ ระบบสร้างตารางสรุปปริมาณ+ราคา ตรวจรายการที่ติด Warning แล้วแก้ไขจุดตกหล่น</p>
            </Step>
          </div>
        </section>

        {/* Visual flow */}
        <section className="grid md:grid-cols-2 gap-4">
          <ImageBlock
            label="Flow: Model → Rules → Mapping → Pricing → BOQ"
            caption="ไดอะแกรมเวิร์กโฟลว์การทำ BOQ อัตโนมัติ"
          />
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Settings2 className="h-4 w-4" />
                Output & Export
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>BOQ (Excel) — โครงสร้างตามมาตรฐาน CGD/องค์กร</li>
                <li>Summary PDF — แผ่นสรุปงบ/กราฟหมวดงาน</li>
                <li>Change Report — เปรียบเทียบโมเดล Version A/B</li>
                <li>QTO Log — บันทึกกฎ/เวอร์ชันและแหล่งราคา</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Tips & Best Practices */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2 className="h-4 w-4" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>ใช้ “Modeling for Takeoff” ให้สอดคล้องกับ Rules ที่องค์กรกำหนด</li>
                <li>ล็อก Price Profile ต่อโครงการเพื่อลดความคลาดเคลื่อน</li>
                <li>ตั้ง Preset สำหรับหมวดงานยอดนิยม (เช่น โครงสร้างคสล., งานผนังเบา)</li>
                <li>เก็บ QTO Log ทุกครั้งเพื่อเทียบย้อนหลัง/ตรวจสอบได้</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="h-4 w-4" />
                Troubleshooting (ทั่วไป)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>รายการหาย: ตรวจสอบการแม็พ Category/Filter และ Phase</li>
                <li>ตัวเลขผิด: ตรวจ Rules เผื่อ/สูตรคำนวณ และหน่วย (Units)</li>
                <li>ราคาว่าง: ตรวจสิทธิ์/การเชื่อมต่อฐานข้อมูลหรือ API</li>
                <li>Export เพี้ยน: ใช้ Template เวอร์ชันเดียวกับองค์กร</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Screenshot placeholder */}
        <ImageBlock
          label="BOQ Preview Table"
          caption="พรีวิวตาราง BOQ ที่สร้างจากระบบ (ใส่ภาพจริงภายหลัง)"
        />
      </div>
    </SidebarInset>
  )
}
