// src/app/docs/boq-tools/model-data-management/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Database,
  Settings2,
  Info,
  CheckCircle2,
  AlertTriangle,
  ListChecks,
  Filter,
  Upload,
  Download,
  ScanSearch,
  Wand2,
  Calculator,
  FileSpreadsheet,
} from "lucide-react"

/** ---------- Small UI atoms (reuse style from BOQ page) ---------- */
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

export default function ModelDataManagementPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Model Data Management — User Guide
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            เครื่องมือจัดการ “คุณภาพข้อมูลโมเดล” ก่อนถอด BOQ: ซิงก์พารามิเตอร์ ตรวจความครบถ้วน
            มาตรฐานการตั้งชื่อ/หน่วย/เฟส และสร้างรายงานสรุปสภาพโมเดล
          </p>
        </header>

        <Separator />

        {/* Command palette (จำลองปุ่ม) */}
        <section aria-label="Available Commands" className="space-y-3">
          <h2 className="text-lg font-semibold">Commands</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* ปุ่มนี้ active */}
            <FeatureButton
              label="Model Data Management"
              icon={Database}
              active
              hint="ซิงก์/ตรวจ/แก้ข้อมูลโมเดลให้พร้อมสำหรับ QTO"
            />
            {/* ปุ่มอื่น — เผื่อสลับไปหน้าคำสั่งอื่น */}
            <FeatureButton
              label="BOQ"
              icon={Calculator}
              hint="สร้าง BOQ อัตโนมัติจากโมเดลที่ผ่านการทำความสะอาดแล้ว"
            />
            <FeatureButton
              label="Price Library"
              icon={FileSpreadsheet}
              hint="กำหนด/อัปเดตราคาวัสดุ–ค่าแรง และโปรไฟล์ราคา"
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
                <li>เปิดไฟล์โมเดล Revit ที่ต้องการตรวจสอบและบันทึกล่าสุด</li>
                <li>ติดตั้ง Shared Parameters และ Template ตามมาตรฐานองค์กร</li>
                <li>ตั้งค่า Units / Phases / Levels ให้สอดคล้องกับโครงการ</li>
              </ul>
            </CardContent>
          </Card>

          <ImageBlock
            label="MDM — Dashboard"
            caption="แดชบอร์ดสรุปคุณภาพข้อมูลโมเดล (ตัวอย่าง UI/รายงาน)"
          />
        </section>

        {/* Quick Start — Steps */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Step n={1} title="เลือก Profile มาตรฐาน">
              <p>เลือก <em>Parameter Profile</em> ที่กำหนดรายการพารามิเตอร์/กฎตรวจสอบขององค์กร</p>
              <p className="text-xs">โปรไฟล์ช่วยให้หลายโครงการใช้มาตรฐานเดียวกัน</p>
            </Step>
            <Step n={2} title="สแกนโมเดล (Scan)">
              <p>สั่งสแกนเพื่อหา Missing Parameters, ค่า default ว่าง, หน่วย/เฟส/เลเวลที่ไม่สอดคล้อง และ Warning สำคัญ</p>
            </Step>
            <Step n={3} title="Sync & Fill">
              <p>ซิงก์ Shared Parameters, ผูก Category, เติมค่าเริ่มต้น/คำนวณอัตโนมัติตามกฎ</p>
            </Step>
            <Step n={4} title="Normalize & Validate">
              <p>ปรับมาตรฐานการตั้งชื่อ Type/Family, หน่วย/การปัดเศษ, ค่า enum ให้สอดคล้อง; ตรวจซ้ำ</p>
            </Step>
            <Step n={5} title="Export Report">
              <p>สร้างรายงานคุณภาพข้อมูล (Excel/PDF) และ Log การแก้ไข เพื่อส่งต่อทีม/เก็บเป็นหลักฐาน</p>
            </Step>
          </div>
        </section>

        {/* Capabilities */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <ListChecks className="h-4 w-4" />
                Parameter Profiles & Sync
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>เพิ่ม/ผูก Shared Parameters ให้กับ Category ที่กำหนด</li>
                <li>ตั้งค่า Default/คำนวณค่าอัตโนมัติตามสูตรกฎองค์กร</li>
                <li>รองรับ Import/Export โปรไฟล์ (.json) เพื่อใช้ซ้ำ</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <ScanSearch className="h-4 w-4" />
                Data Audit & Health Check
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>สแกน Missing/Empty/Invalid values ต่อพารามิเตอร์สำคัญ</li>
                <li>นับองค์ประกอบตาม Category/Type และสรุป Warning สำคัญ</li>
                <li>ไฮไลต์รายการที่กระทบ QTO เช่น หน่วย/เฟสไม่ตรง</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Filter className="h-4 w-4" />
                Normalization Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>มาตรฐานการตั้งชื่อ Type/Family/Level/Phase</li>
                <li>Mapping ค่าข้อความ → ค่า enum มาตรฐานองค์กร</li>
                <li>หน่วย/การปัดเศษ/ความแม่นยำของตัวเลขให้สอดคล้อง</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Wand2 className="h-4 w-4" />
                Auto-Fix Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>เติมค่าอัตโนมัติ/คำนวณย้อนกลับจากมิติเรขาคณิต</li>
                <li>ผูกพารามิเตอร์และโครงสร้างตารางสำหรับ QTO</li>
                <li>Batch apply ตาม Selection / Filter / View ปัจจุบัน</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Visual flow & Outputs */}
        <section className="grid md:grid-cols-2 gap-4">
          <ImageBlock
            label="Flow: Profile → Scan → Fix → Normalize → Validate → Report"
            caption="ไดอะแกรมเวิร์กโฟลว์ Model Data Management"
          />
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Settings2 className="h-4 w-4" />
                Outputs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Data Quality Report (Excel/PDF)</li>
                <li>Change Log — รายการ Sync/Auto-Fix ทั้งหมด</li>
                <li>Export/Import Profiles <em>(JSON)</em></li>
              </ul>
              <div className="flex gap-2 pt-2">
                <span className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs">
                  <Download className="h-3.5 w-3.5" /> Export Report
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs">
                  <Upload className="h-3.5 w-3.5" /> Import Profile
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Tips & Troubleshooting */}
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
                <li>รันสแกนทุกครั้งก่อนสั่งถอด BOQ เพื่อคงคุณภาพข้อมูล</li>
                <li>ล็อกเวอร์ชันของ Profile ต่อโครงการเพื่อความสม่ำเสมอ</li>
                <li>เก็บรายงาน/Log เข้าโฟลเดอร์เดียวกับไฟล์โมเดล</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="h-4 w-4" />
                Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>พารามิเตอร์ไม่ถูกผูก: ตรวจ Shared Parameter GUID ให้ตรง</li>
                <li>ค่าคำนวณผิด: ตรวจสูตร/หน่วย/การปัดเศษใน Profile</li>
                <li>สแกนไม่เจอรายการ: ตรวจ Filter/View/Phase ที่ใช้งาน</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Screenshot placeholder */}
        <ImageBlock
          label="Audit Result Preview"
          caption="ตัวอย่างหน้ารวมผลการตรวจคุณภาพข้อมูลและรายการแก้ไข"
        />
      </div>
    </SidebarInset>
  )
}
