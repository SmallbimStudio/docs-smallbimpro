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

export default function ColumnDimSelectedPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Column Dim – Selected</h1>
          <p className="text-base md:text-lg text-muted-foreground">สร้างมิติระหว่างคอลัมน์เฉพาะที่เลือก อิงแนวแกน/เส้นอ้างอิง</p>
        </header>
        <Separator />
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>เลือกคอลัมน์เป็นชุด แล้วสร้างแนวมิติอัตโนมัติ</li>
              <li>กำหนดเส้นฐาน Dimension Line และระยะ Offset</li>
              <li>สนับสนุน Horizontal/Vertical และ Chain Dimension</li>
            </ul>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> คอลัมน์ที่เลือก, แนวอ้างอิง, ค่า Offset</li>
              <li><strong>Output:</strong> มิติระหว่างคอลัมน์ตามแนวที่กำหนด</li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageBlock label="Pick Columns" caption="เลือกคอลัมน์ตามลำดับ" />
            <ImageBlock label="Dimension Result" caption="แนวมิติที่สร้างอัตโนมัติ" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
