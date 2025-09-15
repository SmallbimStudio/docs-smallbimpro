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
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            BOQ — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง BOQ สำหรับการถอดปริมาณและประมาณราคาจากโมเดล Revit
            ทั้งหมดใน Workflow เดียวที่เรียบง่ายและแม่นยำ
          </p>
        </header>

        <Separator />

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BxcIrjYSKrA"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <Separator />


        {/* Main Screenshot */}
        <ImageBlock imagesrc="/images/guides/boq-main-window.png" />

        <Separator />

        {/* Prerequisites */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Info className="h-4 w-4" />
                หมายเหตุ
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
        </section>



      </div>
    </SidebarInset>
  )
}
