// src/app/docs/modeling-tools/toggle-rebar-visibility/page.tsx
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

export default function ToggleRebarVisibilityPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Toggle Rebar Visibility</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            เปิด/ปิดการแสดงผลเหล็กเสริมใน View ปัจจุบันอย่างรวดเร็ว (ทั้งหมด หรือเฉพาะที่เลือก)
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
        
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>สลับการมองเห็น Rebar ทั้งวิว หรือเฉพาะ Selection</li>
              <li>บันทึกสถานะก่อนหน้าเพื่อย้อนกลับได้</li>
              <li>รองรับ View Template/Detail Level เฉพาะงานโครงสร้าง</li>
            </ul>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> View/Selection, โหมดแสดงผล</li>
              <li><strong>Output:</strong> สถานะการมองเห็น Rebar ถูกสลับตามคำสั่ง</li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageBlock label="Visibility Toggle" caption="ปุ่มสลับการแสดงผล" />
            <ImageBlock label="Before/After" caption="ตัวอย่างผลก่อน–หลังสลับ" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
