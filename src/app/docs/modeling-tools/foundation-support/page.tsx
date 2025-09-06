"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

function ImageBlock({ label, caption }: { label: string; caption?: string }) {
  return (
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className="aspect-video w-full grid place-items-center text-sm text-muted-foreground">[ Image — {label} ]</div>
      {caption ? <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t">{caption}</figcaption> : null}
    </figure>
  )
}

export default function FoundationSupportPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Foundation Support</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            วางฐานราก/ฐานเทรองรับอัตโนมัติที่จุดตัดแกนหรือใต้เสาที่เลือก พร้อมตั้งค่าชนิด ขนาด ระดับ และการจัดวาง
          </p>
        </header>
        <Separator />
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>วางฐานรากแบบเดี่ยว/ฐานแผ่ตามจุดตัด Grid หรือจุดฐานเสา</li>
              <li>ตั้งค่าระดับ Base/Top, Cover, และ Family Type</li>
              <li>รองรับการเว้นจุด/คัดกรองตามชั้น/เฟส</li>
            </ul>
            <h4>ใช้เมื่อไร</h4>
            <p>เริ่มขึ้นงานฐานรากโครงสร้างเพื่อเตรียม QTO และแบบวิศวกรรม</p>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> จุดอ้างอิง (Grid/Columns), ชนิดฐานราก, ระดับ</li>
              <li><strong>Output:</strong> ฐานรากถูกวางครบพร้อมพารามิเตอร์</li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageBlock label="Pick Grids/Columns" caption="เลือกจุดตัดหรือเสาที่ต้องการวางฐานราก" />
            <ImageBlock label="Footing Placed" caption="ผลลัพธ์การวางฐานรากอัตโนมัติ" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
