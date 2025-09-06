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

export default function SharedParametersPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Header */}
        <header className="space-y-3 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Revit Shared Parameters
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            การจัดการ Shared Parameters สำหรับโมเดล Revit เพื่อให้รองรับงานถอดปริมาณและประมาณราคา
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
                  <li>Shared Parameters เป็น Parameter ที่ต้องอาศัยไฟล์ .txt ภายนอก เพื่อเป็นแหล่งรวมของ Parameters ที่ไม่ใช้ Default Parameter ของโปรแกรม ดังนั้น ต้องกำหนดตำแหน่งไฟล์อย่างถูกต้อง</li>
                  <li>สำหรับงานประมาณราคา ใช้ Shared Parameters เพื่อกำหนดข้อมูลส่วนที่เกี่ยวข้องกับราคาให้กับโมเดลเป็นหลัก</li>
                  <li>ภายใน RSB_PROFESSIONAL Template มีการฝัง Shared Parameter ให้กับทุก Family ที่ใช้งานบ่อยแล้ว สามารถนำไปอ้างอิงราคาได้เลย</li>
                  <li>สำหรับ Family ชนิดใหม่ ที่อยู่นอกเหนือภายในเทมเพลท ให้ทำการอ้างอิง Keynote ตามหมวดงานที่ต้องการ เพื่อให้ Add-in สามารถตรวจสอบราคาได้</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">การกำหนดข้อมูลตัวอย่าง (ภาพด้านซ้าย)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p><strong>RSB_LossPercentage :</strong> (ค่าเปอร์เซ็นต์เผื่อความสูญเสียหน้างาน)</p><br/>
                <p><strong>RSB_LabourUnitCost :</strong> (ราคาค่าแรงต่อหน่วย)</p><br/>  
                <p><strong>RSB_MaterialUnitCost :</strong> (ราคาค่าวัสดุต่อหน่วย)</p><br/> 
                <p><strong>RSB_ProductImage :</strong> (สำหรับฝังภาพให้กับโมเดล)</p><br/>
                <p><strong>RSB_Updated :</strong> (สำหรับทำเป็น Progress ความคืบหน้า)</p><br/>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
