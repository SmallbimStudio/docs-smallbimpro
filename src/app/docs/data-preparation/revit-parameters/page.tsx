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

export default function ParametersPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Header */}
        <header className="space-y-3 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Revit Parameters
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            การกำหนดและจัดการ Parameters สำหรับโมเดล Revit เพื่อให้รองรับงานถอดปริมาณและประมาณราคา
          </p>
        </header>

        <Separator />

        {/* Layout: Image Left - Content Right */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Big Image */}
          <ImageBlock
            src="/images/docs/data-preparation/revit-parameters-01.png"
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
                  <li>ใช้ Parameters ที่มีอยู่แล้วของ Revit สำหรับการกำหนด รหัสต้นทุน (Keynote), ชื่อรายการวัสดุ (Type Comment), หมายเลขลำดับของโมเดล (Type Mark)(ถ้ามี)</li>
                  <li>สำหรับงานประมาณราคา ใช้ Parameters แค่บางตัวเท่านั้น ไม่ได้ใช้งานทั้งหมด ดังนั้น สามารถมั่นใจได้ว่า การกำหนดข้อมูลเบื้องต้น จะสะดวกและไม่ซับซ้อนนั่นเอง อาศัยเพียงแค่ Keynote และ Type Comment เท่านั้น</li>
                  <li>ภายใน RSB_PROFESSIONAL Template กำหนดค่าเริ่มต้น (Default Value) สำหรับ Family ที่ใช้งานบ่อย ทุกหมวดหมู่แล้ว สามารถนำไปอ้างอิงราคาได้เลย</li>
                  <li>สำหรับ Family ชนิดใหม่ ที่อยู่นอกเหนือภายในเทมเพลท ให้ทำการอ้างอิง Keynote ตามหมวดงานที่ต้องการ เพื่อให้ Add-in สามารถตรวจสอบราคาได้</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">การกำหนดข้อมูลตัวอย่าง (ภาพด้านซ้าย)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p><strong>Keynote (รหัสต้นุทน หรือ Cost Code) :</strong>  <br/> 
                (รหัสอ้างอิงสำหรับดึงข้อมูลราคาจากฐานข้อมูล)</p><br/>
                <pre className="rounded-lg bg-muted p-3 overflow-auto text-xs">
                  {`Keynote = A3000.1`}
                </pre><br/>
                <p><strong>Type Comment (ชื่อรายการวัสดุ) :</strong> <br/> 
                (ชื่อรายการวัสดุที่กำหนด จะไปปรากฎบนรายการ BOQ)</p><br/>
                <pre className="rounded-lg bg-muted p-3 overflow-auto text-xs">
                  {`Type Comment = คอนกรีตโครงสร้างฐานราก`}
                </pre><br/>
                <p><strong>Type Mark (หมายเลขกำกับโมเดล) :</strong> <br/> 
                (ในส่วนนี้จะมีผลกับรายการ BOQ ถ้าหากมีการกำหนด ชื่อจะได้ปรากฎคู่กับ Type Comment เช่น <strong>F1 - คอนกรีตโครงสร้างฐานราก)</strong></p><br/>
                <pre className="rounded-lg bg-muted p-3 overflow-auto text-xs">
                  {`Type Mark = F1`}<br/>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
