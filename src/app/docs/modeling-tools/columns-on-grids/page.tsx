// src/app/docs/modeling-tools/columns-on-grids/page.tsx
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

export default function ColumnsOnGridsPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Columns on Grids</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            วางคอลัมน์อัตโนมัติที่จุดตัดกริด เลือก Family/Type ระดับฐาน–ยอด และการเยื้องศูนย์ได้
          </p>
        </header>
        <Separator />
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>เลือกช่วงแกนหรือทั้งชุด แล้ววางคอลัมน์อัตโนมัติ</li>
              <li>ตั้ง Base/Top Level, Base/Top Offset, และ Orientation</li>
              <li>ตัวเลือกเว้นจุด (Skip) และแทนที่เฉพาะบางตำแหน่ง</li>
            </ul>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> ชุด Grid, Column Family/Type, ระดับ</li>
              <li><strong>Output:</strong> คอลัมน์ถูกวางครบตามเกณฑ์</li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageBlock label="Grid Selection" caption="เลือกกริดหรือช่วงแกนที่ต้องการ" />
            <ImageBlock label="Columns Placed" caption="ผลลัพธ์หลังสั่งวางคอลัมน์" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
