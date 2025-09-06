// src/app/docs/data-preparation/database/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card"
import DatabaseCard from "@/components/cards/DatabaseCard"

export default function DatabasePage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Database
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Database เป็นระบบฐานข้อมูลของ Small BIM Studio มีหลักการทำงานคือ เมื่อผู้ใช้งานกำหนดรหัสต้นทุน หรือ Keynote ให้กับโมเดลแล้ว Add-in สามารถนำราคาบน Database เหล่านี้ เข้าไป Mapping กับปริมาณวัสดุของ Revit Model พร้อมทำการคำนวณราคาให้อัตโนมัติ เกิดเป็นรายการประมาณราคานั่นเอง แยกการใช้งานเป็น 2 โหมด: <strong>Online</strong> (เชื่อม JSON กลางอัปเดตได้)
            และ <strong>Offline</strong> (ชุดไฟล์ภายในองค์กร) เพื่อรองรับทั้งงานที่ต้องการข้อมูลล่าสุด
            และงานที่ต้องล็อกเวอร์ชันข้อมูล
          </p>
        </header>

        <Separator />

        {/* ========================== ONLINE ========================== */}
        <section className="space-y-4" aria-label="Online Database">
          <div>
            <h2 className="text-2xl font-bold">Online Database</h2>
            <p className="text-sm text-muted-foreground">
              โหมดออนไลน์จะดึงข้อมูลจากแหล่ง JSON กลาง (read-only) เพื่อให้ทีมได้ราคา/รายการล่าสุดเสมอ
              รองรับการค้นหา กรองหมวด และเลือกจำนวนแถวต่อหน้า
            </p>
          </div>

          {/* 🔌 ฝังการ์ดที่คุณเตรียมไว้ */}
          <DatabaseCard />

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">หมายเหตุการใช้งาน Online</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>การโหลดข้อมูลตั้งค่าเป็น <code>cache: no-store</code> เพื่อหลีกเลี่ยงค่าเก่า</li>
                <li>ถ้าอินเทอร์เน็ตไม่เสถียร แนะนำสลับใช้โหมด Offline ที่ด้านล่าง</li>
                <li>สามารถปรับปรุงสคีมาหรือเพิ่มฟิลด์ได้ โดยรักษาชื่อคีย์หลักให้เดิม (Keynote/Comment/Unit/...)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ========================== OFFLINE ========================== */}
        <section className="space-y-6" aria-label="Offline Database">
          <div>
            <h2 className="text-2xl font-bold">Offline Database</h2>
            <p className="text-sm text-muted-foreground">
              สำหรับองค์กรที่ต้องการ “ล็อกเวอร์ชันข้อมูล” หรือใช้งานแบบออฟไลน์
              ชุดไฟล์ด้านล่างคือแพ็กเกจมาตรฐานที่จะแถมไปให้ พร้อมคอลัมน์ที่ Add-in คาดหวัง
              (สามารถใช้ได้ทั้ง <code>.xlsx</code> / <code>.csv</code> / <code>.json</code>)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">1) Items.xlsx</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>ตารางรายการมาตรฐานที่เป็น “ต้นทาง” ให้ BOQ</p>
                <div className="rounded-lg border p-3 text-xs overflow-auto">
                  <pre>{`ItemCode (TEXT)    // รหัสรายการ (เช่น A1000.1)
Description (TEXT) // รายการ/คำอธิบาย
Unit (TEXT)        // หน่วย (m, m2, m3, kg, ea, ...)
Group (TEXT)       // กลุ่มหมวด (A/B/C/...)
`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">2) Rates.xlsx</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>ราคารายหน่วย แยกวัสดุ/ค่าแรง และข้อมูลอ้างอิง</p>
                <div className="rounded-lg border p-3 text-xs overflow-auto">
                  <pre>{`ItemCode (TEXT)           // FK → Items.ItemCode
MaterialUnitCost (NUMBER) // ราคาวัสดุ/หน่วย
LabourUnitCost (NUMBER)   // ค่าแรง/หน่วย
Currency (TEXT)           // THB, ...
Source (TEXT)             // แหล่งที่มา
EffectiveDate (DATE)      // YYYY-MM-DD
Region (TEXT)             // ภูมิภาค (ถ้ามี)
`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">3) Wastes.xlsx</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>เปอร์เซ็นต์เผื่อสูญเสียต่อรายการ (ใช้แก้ปัญหา Accuracy Paradox)</p>
                <div className="rounded-lg border p-3 text-xs overflow-auto">
                  <pre>{`ItemCode (TEXT)     // FK → Items.ItemCode
WastePercent (NUMBER) // 0–100 (%)
Note (TEXT)           // หมายเหตุ (เช่น ตามมาตรฐานบริษัท)
`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">4) Mappings.xlsx</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>แมปจาก <em>Keynote/Parameters</em> ใน Revit → <code>ItemCode</code> เพื่อเชื่อม BOQ</p>
                <div className="rounded-lg border p-3 text-xs overflow-auto">
                  <pre>{`Keynote (TEXT)      // เช่น A1000.1
Param (TEXT)        // ตัวเลือก: พารามิเตอร์ที่ใช้ตัดสินใจเพิ่ม
ItemCode (TEXT)     // FK → Items.ItemCode
Remark (TEXT)       // เงื่อนไขพิเศษ (ถ้ามี)
`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">5) Units.xlsx (ไม่บังคับ)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>กำหนดการแปลงหน่วย/การปัดเศษตามมาตรฐานองค์กร</p>
                <div className="rounded-lg border p-3 text-xs overflow-auto">
                  <pre>{`Unit (TEXT)          // m, m2, m3, kg, ea, ...
Rounding (NUMBER)   // หลักทศนิยมที่ปัด/วิธีปัด
AltUnit (TEXT)      // หน่วยสำรอง (ถ้ามี)
Factor (NUMBER)     // ตัวคูณแปลงหน่วย
`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">6) README.pdf</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                คู่มือสั้น ๆ สำหรับทีม: วิธีวางไฟล์, โครงสคีมา, และจุดตั้งค่าพาธใน Add-in
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">แนวทางการใช้งาน Offline</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ol className="list-decimal pl-5 space-y-1">
                <li>วางไฟล์ทั้งหมดในโฟลเดอร์เดียวกัน เช่น <code>\\Company\BIM\Database\2025\</code></li>
                <li>ตั้งค่า Add-in ให้ชี้พาธของโฟลเดอร์นั้น (หรืออัปโหลดเข้า SharePoint/Drive ที่แมปเป็นไดรฟ์)</li>
                <li>อัปเดตข้อมูลให้เปลี่ยนเฉพาะไฟล์ <code>Rates.xlsx</code> / <code>Wastes.xlsx</code> เพื่อรักษาเสถียรภาพของแมป</li>
                <li>ล็อกเวอร์ชันชุดข้อมูลต่อโปรเจกต์ โดยระบุวันที่และผู้รับผิดชอบ</li>
              </ol>
            </CardContent>
          </Card>
        </section>
      </div>
    </SidebarInset>
  )
}
