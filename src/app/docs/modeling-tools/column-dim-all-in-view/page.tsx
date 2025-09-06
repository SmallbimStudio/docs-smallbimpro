// src/app/docs/modeling-tools/column-dim-all-in-view/page.tsx
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

export default function ColumnDimAllInViewPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Column Dim – All in View</h1>
          <p className="text-base md:text-lg text-muted-foreground">สร้างมิติให้คอลัมน์ทั้งหมดในวิวปัจจุบันแบบรวดเดียว</p>
        </header>
        <Separator />
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>สแกนคอลัมน์ทุกตัวใน View และสร้าง Dimension ตามแนวที่กำหนด</li>
              <li>รองรับการข้าม (Skip) จุดทับซ้อนและการจัดระยะซ้อน</li>
              <li>ตั้งค่ารูปแบบมิติ (Type) และสเกลงาน</li>
            </ul>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> View ปัจจุบัน, แนวอ้างอิง, รูปแบบมิติ</li>
              <li><strong>Output:</strong> แนวมิติคอลัมน์ครบถ้วนใน View</li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageBlock label="All Columns Detected" caption="สแกนคอลัมน์อัตโนมัติในวิว" />
            <ImageBlock label="Batch Dimensions" caption="แนวมิติถูกวางให้ครบถ้วน" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
