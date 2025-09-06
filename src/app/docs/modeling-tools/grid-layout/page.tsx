// src/app/docs/modeling-tools/grid-layout/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

/** ภาพ Placeholder: แทนด้วย <img src="/images/..." /> ได้เลย */
function ImageBlock({ label, caption }: { label: string; caption?: string }) {
  return (
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className="aspect-video w-full grid place-items-center text-sm text-muted-foreground">
        [ Image Placeholder — {label} ]
      </div>
      {caption ? <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t">{caption}</figcaption> : null}
    </figure>
  )
}

export default function GridLayoutPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Grid Layout</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            สร้างกริดอัตโนมัติจากค่าระยะ/จำนวน/รูปแบบการตั้งชื่อแกน ช่วยตั้งต้นเลย์เอาต์งานโครงสร้างได้รวดเร็วและมาตรฐาน
          </p>
        </header>

        <Separator />

        <section className="grid lg:grid-cols-2 gap-6">
          {/* ซ้าย: คำอธิบาย */}
          <div className="prose max-w-none prose-p:leading-relaxed">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>กำหนดจำนวนแกน X/Y และระยะห่าง (เท่ากัน/ไม่เท่ากันก็ได้)</li>
              <li>รูปแบบการตั้งชื่อ: A, B, C … / 1, 2, 3 … / ผสม</li>
              <li>เลือกจุดอ้างอิง (Base Point / Project Base Point) และแนวหมุน</li>
            </ul>
            <h4>ใช้เมื่อไร</h4>
            <p>เริ่มตั้งต้นโมเดลโครงสร้างหรือปรับเลย์เอาต์แกนก่อนวางเสา/ฐานราก</p>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> จำนวนแกน, ระยะ, รูปแบบชื่อ, มุมหมุน</li>
              <li><strong>Output:</strong> ระบบ Grid พร้อมตั้งชื่อครบอัตโนมัติ</li>
            </ul>
          </div>

          {/* ขวา: ช่องภาพ 2 ช่อง */}
          <div className="space-y-4">
            <ImageBlock label="Grid Options Dialog" caption="กล่องตั้งค่าระยะ/จำนวน/การตั้งชื่อ" />
            <ImageBlock label="Generated Grids" caption="ผลลัพธ์กริดบนแปลนพร้อมใช้งาน" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
