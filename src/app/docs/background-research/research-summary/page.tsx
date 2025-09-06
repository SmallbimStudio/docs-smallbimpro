// src/app/docs/background-research/research-summary/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  AlertTriangle,
  Gauge,
  Rocket,
  Database,
  Brain,
  FileSpreadsheet,
  Settings,
  Building2,
  Code2,
  GraduationCap,
  Sparkles,
  ChevronRight,
} from "lucide-react"

/** บล็อกรูปภาพ (วางไฟล์จริงภายหลังได้) */
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
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className={`${aspect} w-full grid place-items-center`}>
        {src ? (
          <img
            src={src}
            alt={label || caption || "illustration"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-sm text-muted-foreground">
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

export default function ResearchSummaryPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            “สรุปผลการวิจัย”
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            สรุปแบบตรงประเด็น—ข้อค้นพบหลัก ข้อเสนอแนะเชิงกลยุทธ์ และก้าวต่อไปที่ทำได้ทันที
          </p>
        </header>

        <Separator />

        {/* Key Findings — 5 จุดโดน ๆ */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">7.1 ข้อค้นพบสำคัญ</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <AlertTriangle className="h-4 w-4" />
                  กระบวนการดั้งเดิมมีข้อจำกัดร้ายแรง
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                พึ่งพาแบบ 2D + คำนวณมือ → คลาดเคลื่อนสูง ใช้เวลานาน และพึ่งบุคคลมาก
                เสี่ยงงบบานและลดความสามารถในการแข่งขัน
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Gauge className="h-4 w-4" />
                  5D BIM คือคำตอบ—but อุปสรรคไทยยังสูง
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                การใช้งานถูกขับเคลื่อนด้วยแรงกดดันลูกค้ามากกว่าการปฏิรูปภายใน
                ต้นทุนสูง ขาดบุคลากร และต้านการเปลี่ยนแปลง → เกิด BIM แบบผิวเผิน
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileSpreadsheet className="h-4 w-4" />
                  Revit มาตรฐานเจอ “Accuracy Paradox”
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                บางกรณี “แม่นยำเกินไป” (ไม่รวมเผื่อ) บางกรณี “ไม่พอ” (องค์ประกอบยาก)
                และไม่ตรงมาตรฐานไทย → ผู้ใช้ไม่มั่นใจ ต้องแก้ต่อใน Excel
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Rocket className="h-4 w-4" />
                  Custom Add-in คือโซลูชันที่เหนือกว่า
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                ฝังกฎก่อสร้างจริง, เชื่อมฐานข้อมูลราคาไทย, ส่งออก BOQ ตามมาตรฐาน CGD
                แบบอัตโนมัติ—เติมเต็มช่องว่างของ Revit OOTB
              </CardContent>
            </Card>

            <Card className="rounded-2xl md:col-span-2">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <CheckCircle2 className="h-4 w-4" />
                  ประสิทธิภาพที่พิสูจน์ได้ + สร้างประชาธิปไตยทางเทคโนโลยี
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Revit + Add-in ให้ทั้ง “เร็วสุด” และ “แม่นสุด” และลดกำแพงทักษะ/ต้นทุน
                เปิดโอกาสให้ SMEs เข้าถึงประโยชน์ของ 5D BIM ได้จริง
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardHeader className="pb-1">
              <CardTitle className="flex items-center gap-2 text-base">
                <Database className="h-4 w-4" />
                การต่อยอดสู่ “สินทรัพย์ข้อมูล” เชิงกลยุทธ์
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Add-in เป็นเครื่องจักรเก็บข้อมูลคุณภาพสูง → ป้อน Power BI เพื่อการตัดสินใจ
              และปั้น AI/ML สำหรับการพยากรณ์ต้นทุน/ความเสี่ยง สร้างความได้เปรียบที่ยั่งยืน
            </CardContent>
          </Card>
        </section>

        {/* Visual summary */}
        <ImageBlock
          src="/images/docs/research/research-one-pager.png"
          label="Research One-Pager"
          caption="แผ่นสรุปภาพเดียว: ปัญหา → โซลูชัน → หลักฐาน → ขยายสู่ Data/AI"
        />

        <Separator />

        {/* 7.2 Recommendations */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">7.2 ข้อเสนอแนะเชิงกลยุทธ์</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Contractors / Developers */}
            <Card className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Building2 className="h-4 w-4" />
                  ผู้รับเหมา / ผู้พัฒนา (Contractors/Developers)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5">
                  <li>
                    <strong>ลงทุนเชิงกลยุทธ์</strong> ใน Add-in เฉพาะทาง—มองเป็นการสร้าง
                    <em>Data Asset</em> ไม่ใช่แค่ลดเวลาทำ BOQ
                  </li>
                  <li>ใช้ Add-in เป็นมาตรฐานทุกโครงการ เก็บข้อมูล ปริมาณ/ต้นทุน/เวลา</li>
                  <li>ทำ <em>process re-engineering</em> คู่ไปกับการนำเทคโนโลยีมาใช้</li>
                </ul>
              </CardContent>
            </Card>

            {/* Software Developers */}
            <Card className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Code2 className="h-4 w-4" />
                  นักพัฒนาซอฟต์แวร์ / ผู้ให้บริการเทคโนโลยี
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Localization</strong>: รองรับฟอร์แมต CGD, ฐานข้อมูลราคาไทย, UI ภาษาไทย
                  </li>
                  <li>
                    เสนอ <strong>end-to-end solution</strong> รวมที่ปรึกษา/เทรนนิ่ง/ซัพพอร์ต
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Academic / Professional Bodies */}
            <Card className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <GraduationCap className="h-4 w-4" />
                  สถาบันการศึกษา / หน่วยงานวิชาชีพ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5">
                  <li>
                    ปรับหลักสูตร: เครื่องมืออัตโนมัติ, พื้นฐานโปรแกรมมิง (เช่น Dynamo),
                    API และ Data Analytics
                  </li>
                  <li>
                    ผลักดันการวิจัย <strong>มาตรฐานข้อมูล BIM กลาง</strong> และการแลกเปลี่ยนข้อมูล
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardHeader className="pb-1">
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="h-4 w-4" />
                บทสรุปเชิงกลยุทธ์
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              เส้นทางสู่การปฏิวัติการประมาณราคาไม่ง่าย แต่เมื่อมีทิศทางที่ชัด
              เครื่องมือที่เหมาะสม และวัฒนธรรมที่ขับเคลื่อนด้วยข้อมูล อุตสาหกรรมก่อสร้างไทย
              สามารถก้าวสู่ยุคใหม่ที่มีประสิทธิภาพ แข่งขันได้ และยั่งยืน
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* CTAs */}
        <section className="max-w-3xl space-y-3">
          <a
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
            เริ่มใช้งานทันที (Quickstart)
          </a>
          <div className="flex flex-wrap gap-3">
            <a
              href="/docs/background-research/empirical-comparison"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted"
            >
              <CheckCircle2 className="h-4 w-4" />
              ดูผลการพิสูจน์เชิงประจักษ์
            </a>
            <a
              href="/docs/background-research/beyond-boq"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted"
            >
              <Brain className="h-4 w-4" />
              ก้าวต่อ: Data, BI, AI และ API
            </a>
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
