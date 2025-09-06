// src/app/docs/modeling-tools/tag-all-columns/page.tsx
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

export default function TagAllColumnsPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 space-y-8">
        <header className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Tag All Columns</h1>
          <p className="text-base md:text-lg text-muted-foreground">ใส่แท็กคอลัมน์ทั้งหมดในวิวปัจจุบันโดยอัตโนมัติ เลือก Tag Family ได้</p>
        </header>
        <Separator />
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3>ทำอะไรได้บ้าง</h3>
            <ul>
              <li>แท็กคอลัมน์ทั้งหมดใน View ปัจจุบันทันที</li>
              <li>เลือก Tag Family/Type และการวางแนวแท็ก</li>
              <li>ข้ามคอลัมน์ที่ถูกแท็กอยู่แล้ว (ไม่ซ้ำซ้อน)</li>
            </ul>
            <h4>อินพุต & เอาต์พุต</h4>
            <ul>
              <li><strong>Input:</strong> View ปัจจุบัน, Tag Family/Type</li>
              <li><strong>Output:</strong> แท็กคอลัมน์ครบถ้วนตามมาตรฐาน</li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageBlock label="Tag Settings" caption="เลือกตระกูลแท็กและตัวเลือกวาง" />
            <ImageBlock label="Tagged Columns" caption="ผลลัพธ์การแท็กอัตโนมัติ" />
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
