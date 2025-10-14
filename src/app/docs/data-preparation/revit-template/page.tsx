// src/app/docs/data-preparation/revit-template/page.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Minus, Info, Sparkles, Download } from "lucide-react"

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-muted/40 px-2 py-0.5 text-xs">
      {children}
    </span>
  )
}

function Tick() {
  return <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-label="Yes" />
}
function Dash() {
  return <Minus className="h-4 w-4 text-muted-foreground" aria-label="N/A" />
}

export default function RevitTemplatePage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Hero */}
        <header className="text-center space-y-4">
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            RSB-PROFESSIONAL Template (Revit 2024, 2025, 2026)
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            เทมเพลทครบจบในชุดเดียว ออกแบบ เขียนแบบ และประมาณราคา ได้อย่างมืออาชีพ
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge>Revit 2024+</Badge>
            <Badge>TH Standards</Badge>
            <Badge>BOQ / Cost-Ready</Badge>
          </div>
          <br/>

          <div className="rounded-3xl overflow-hidden border bg-muted/30">
            {/* ใส่ภาพ hero ของคุณไว้ที่ public/images/rsb-professional-hero.jpg */}
            <Image
              src="/images/docs/data-preparation/revit-template.png"
              alt="RSB-PROFESSIONAL Template"
              width={1600}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </header>

        <Separator />

        {/* Highlights: ทำไมรุ่น PROFESSIONAL แตกต่าง */}
        <section className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="h-4 w-4" />
                1) มีข้อมูลราคา และ Family ครบ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Parameters, Shared Parameters, Keynote, Database ข้อมูลทุกรายการที่เตรียมไว้สำหรับงานถอดปริมาณราคาอย่างมืออาชีพ
              สามารถถอดปริมาณได้อย่างแม่นยำ
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Info className="h-4 w-4" />
                2) ออกแบบ เขียนแบบ ประมาณราคาได้
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              ครอบคลุมการทำงานจริง ได้ทั้งงานออกแบบ เขียนแบบ และประมาณราคา ครบจบ ในเทมเพลทเดียว
              ช่วยเพิ่มประสิทธิภาพการทำงานขั้นสูงสุด
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="h-4 w-4" />
                3) ใช้งานได้ดีกับ Small BIM PRO
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              RSB_PROFESSIONAL Template มีองค์ประกอบ Family อัพเดตข้อมูลครบชุด จึงสามารถใช้งานร่วมกับ Add-in ได้อย่างเต็มที่ ไม่ต้องเสียเวลาตั้งค่าใหม่
              : สกัดปริมาณ-ตาม-กฎ, ผูกฐานข้อมูลราคา,
              และส่งออกเอกสาร BOQ ตามมาตรฐานไทยได้ทันที
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Comparison table */}
        <section aria-label="Template Comparison" className="space-y-3">
          <h2 className="text-2xl font-bold">เปรียบเทียบเทมเพลท Small BIM Studio</h2>
          <p className="text-sm text-muted-foreground">
            ตารางสรุปความแตกต่างระหว่าง <strong>RSB-DESIGN</strong>, <strong>RSB-DRAWING</strong> และ
            <strong> RSB-PROFESSIONAL</strong> (รุ่นใหม่ เน้นงานราคา/BOQ เพิ่มเติม)
          </p>

          <div className="overflow-x-auto rounded-2xl border">
            <table className="w-full text-sm [&_th]:text-left">
              <thead className="bg-muted/60">
                <tr className="[&_th]:px-4 [&_th]:py-3">
                  <th>คุณสมบัติ</th>
                  <th>RSB-DESIGN</th>
                  <th>RSB-DRAWING</th>
                  <th>RSB-PROFESSIONAL</th>
                </tr>
              </thead>
              <tbody className="[&_td]:px-4 [&_td]:py-3">
                <tr className="border-t">
                  <td className="font-medium">โฟกัสการใช้งาน</td>
                  <td>ออกแบบ, มีสีสันสวยงาม, เริ่มต้นได้ง่าย</td>
                  <td>ออกแบบ, เขียนแบบได้อย่างมืออาชีพ</td>
                  <td>ออกแบบ, เขียนแบบ และทำประมาณราคาได้</td>
                </tr>
                
                <tr className="border-t">
                  <td className="font-medium">Family หมวดงานสถาปัตยกรรม</td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Family หมวดงานโครงสร้าง</td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Family หมวดงานโครงสร้างขั้นสูง</td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Family หมวดงานระบบไฟฟ้า</td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr><tr className="border-t">
                  <td className="font-medium">Family หมวดงานระบบสุขาภิบาล</td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">View Templates</td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">ฟอนต์/เส้น/ฮัทช์/วัสดุ มาตรฐาน</td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Title Blocks & Sheet Setup</td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Tags & Dimension Styles</td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Browser Organization</td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Schedules/Quantities Take Off</td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">Parameter for BOQ</td>
                  <td><Dash /></td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                </tr>                
                <tr className="border-t">
                  <td className="font-medium">Revit Keynote (Cost Code)</td>
                  <td><Dash /></td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">สร้าง Family ด้วยเครื่องมือ Small BIM PRO</td>
                  <td><Dash /></td>
                  <td><Dash /></td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">ใช้งานร่วมกับ Small BIM PRO ได้เป็นอย่างดี</td>
                  <td><Dash /></td>
                  <td>ได้ระดับพื้นฐาน</td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">ส่งออก BOQ ตามมาตรฐานไทย</td>
                  <td><Dash /></td>
                  <td>ได้ระดับพื้นฐาน</td>
                  <td><Tick /></td>
                </tr>
                <tr className="border-t">
                  <td className="font-medium">รองรับ Revit</td>
                  <td>2021+</td>
                  <td>2021+</td>
                  <td>2024+ (รุ่นนี้) และเวอร์ชั่นใหม่ในอนาคต</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground">
            * RSB-PROFESSIONAL ออกแบบมาเพื่อทำงานคู่กับแอดอิน BOQ/ราคาของคุณ จึงมีพารามิเตอร์/คีย์โน้ต/โครงตารางที่พร้อมสำหรับการคิดราคา
          </p>
        </section>
      </div>
    </SidebarInset>
  )
}
