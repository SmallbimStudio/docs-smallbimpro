// src/app/docs/modeling-tools/foundation-rebar/page.tsx
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

export default function FoundationRebarPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Foundation Rebar</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            สร้างเหล็กเสริมฐานรากอัตโนมัติด้วยกฎมาตรฐาน: ขนาดระยะหุ้ม ระยะทาบ ระยะเรียง และรูปแบบวาง
          </p>
        </header>
        <Separator />
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>กำหนดระยะหุ้ม (Cover), ระยะทาบ, Spacing และ Bar Size</li>
              <li>รูปแบบ Single/Dual Layer และทิศทางวาง</li>
              <li>รองรับฐานเดี่ยว ฐานแผ่ และฐานต่อเนื่อง</li>
            </ul>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> ชนิดฐานราก, กฎเหล็กเสริม, ขนาดแท่ง/ระยะ</li>
              <li><strong>Output:</strong> เหล็กเสริมถูกวางครบพร้อมตาราง QTO</li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageBlock label="Rebar Rules" caption="ตั้งค่ากฎมาตรฐานเหล็กเสริม" />
            <ImageBlock label="Footing Rebar" caption="เหล็กเสริมฐานพร้อมนับปริมาณ" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
