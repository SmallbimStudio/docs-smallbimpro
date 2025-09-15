// src/app/docs/data-preparation/parameters/page.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function ImageBlock({
  src,
  label,
  caption,
  aspect = "aspect-video",
}: {
  src?: string
  label?: string
  caption?: string
  aspect?: string
}) {
  return (
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden h-full">
      <div className="w-full h-full">
        {src ? (
          <Image
            src={src}
            alt={label ?? caption ?? "image"}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="grid place-items-center h-full text-sm text-muted-foreground">
            [ Image Placeholder — {label ?? "Image"} ]
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default function RevitKeynotePage() {
  return (
    <SidebarInset>
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
            {/* Headline */}
            <header className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Revit Keynote
          </h1>
          <p className="text-base text-muted-foreground">
            การจัดการ Keynote สำหรับโมเดล Revit เพื่อ Mapping ราคาต้นทุนวัสดุได้
          </p>
        </header>

        <Separator />

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2fL4tHIx0ns"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Layout: Image Left - Content Right */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Big Image */}
          <ImageBlock
            src="/images/docs/data-preparation/revit-keynote.png"
            label="Parameters Overview"
            caption="ภาพรวมของการกำหนด Parameters ใน Revit"
            aspect="aspect-square"
          />

          {/* Right: Content */}
          <div className="space-y-6">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">หลักปฏิบัติที่แนะนำ</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Rervit Keynote หรือ Parameter (Default) ของ Revit มีให้ใช้งานในทุกๆ Elements</li>
                  <li>สำหรับงานประมาณราคา ใช้ Keynote เพื่อระบุรหัสเพื่ออ้างอิงถึงระบบฐานข้อมูลเป็นหลัก เพียงกำหนด Keynote ให้ตรงกับหมวดงานที่ต้องการ ก็สามารถดึงข้อมูลวัสดุ ทั้งค่าวัสดุ ค่าแรง และ %เผื่อ มาใช้งานใน Small BIM PRO ได้ทันที </li>
                  <li>ภายใน RSB_PROFESSIONAL Template มีการฝัง Keynote ให้กับทุก Family ที่ใช้งานบ่อยแล้ว สามารถนำไปอ้างอิงราคาได้เลย</li>
                  <li>สำหรับ Family ชนิดใหม่ ต้องทำการกำหนดข้อมูล Keynote ให้กับโมเดลทุกครั้ง ตามหมวดงานที่ต้องการ เพื่อให้ Add-in สามารถตรวจสอบราคาได้</li>
                </ul>
              </CardContent>
            </Card>

         </div>
        </div>
      </div>
    </SidebarInset>
  )
}
