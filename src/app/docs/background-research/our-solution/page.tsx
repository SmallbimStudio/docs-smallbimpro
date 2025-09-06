// src/app/docs/background-research/revit-addin-innovative-solution/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Bot,
  Code2,
  Database,
  FileSpreadsheet,
  Hammer,
  Ruler,
  GitCompare,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

/** ImageBlock — บล็อกรูปภาพ (หรือ placeholder ถ้ายังไม่มีไฟล์)
 *  วางไฟล์ไว้ใน /public/images/docs/research/ แล้วอ้างด้วย src="/images/..."
 */
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

export default function RevitAddinInnovativeSolutionPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-orange-800">
            “ทางออกเชิงนวัตกรรม: การออกแบบ Revit Add-in สำหรับ BOQ อัตโนมัติ”
          </h1>
          <p className="text-base md:text-lg text-orange-700/80">
            ไม่ฝืนเครื่องมือเดิม—แต่สร้างเครื่องมือที่ออกแบบมาเพื่อแก้ปัญหาโดยเฉพาะ
            ให้ BOQ อัตโนมัติ สอดคล้องมาตรฐานไทย พร้อมใช้งานในโลกจริง
          </p>
        </header>

        <Separator />

        {/* Narrative — Intro */}
        <section
          aria-label="Intro"
          className="prose max-w-3xl prose-p:leading-relaxed prose-li:leading-relaxed"
        >
          <p>
            เมื่อเห็นข้อจำกัดของวิธีดั้งเดิมและ Revit มาตรฐานแล้ว
            ทางออกที่มีประสิทธิภาพสูงสุดจึงไม่ใช่การบังคับใช้เครื่องมือที่มีอยู่
            แต่คือการพัฒนา <strong>Revit Add-in แบบ custom</strong> ที่ออกแบบเชิงวิศวกรรม
            เพื่อทำ BOQ อัตโนมัติสำหรับบริบทของอุตสาหกรรมก่อสร้างไทยอย่างแท้จริง
          </p>
        </section>

        {/* Architecture overview image */}
        <ImageBlock
          src="/images/docs/research/addin-architecture-overview.png"
          label="Add-in Architecture Overview"
          caption="สถาปัตยกรรมหลักของ Add-in: Revit API · Rules Engine · Custom Database · CGD Templates"
        />

        {/* Architecture — 3 Pillars */}
        <section className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Code2 className="h-4 w-4" />
                Leveraging the Revit API
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                ใช้ Revit API เพื่ออ่าน/เขียนข้อมูลระดับลึก
                สร้างพารามิเตอร์อัตโนมัติ และฝังตรรกะคำนวณที่เครื่องมือมาตรฐานทำไม่ได้
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Database className="h-4 w-4" />
                Custom Databases Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                เชื่อมฐานข้อมูลราคาวัสดุ/ค่าแรงที่อัปเดตตามตลาดไทย
                ดึงราคาต่อหน่วยและคำนวณราคารวมอัตโนมัติ ลดงานกรอกมือและความผิดพลาด
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <FileSpreadsheet className="h-4 w-4" />
                Templates &amp; Local Standards (CGD)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                ทำงานร่วมกับแม่แบบที่กำหนดโครงสร้าง/หัวข้อ/วิธีคิดตามมาตรฐานไทย
                สร้างเอกสาร BOQ ที่พร้อมยื่นและใช้งานต่อได้ทันที
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Visual — flow from model → rules → cost → BOQ */}
        <ImageBlock
          src="/images/docs/research/model-to-boq-flow.png"
          label="Model → Rules → Cost → BOQ"
          caption="โฟลว์ข้อมูล: โมเดล Revit → Rule-based QTO → Rule-based Costing → CGD-Compliant BOQ"
        />

        <Separator />

        {/* Core Features */}
        <section className="space-y-3">
          <h3 className="text-base md:text-lg font-semibold">ฟังก์ชันหลักของ Add-in</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Ruler className="h-4 w-4" />
                  Rule-Based Automated Quantity Extraction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  ดึงปริมาณตามกฎที่กำหนดได้ เช่น “เพิ่มเผื่อคอนกรีต 5%”
                  หรือ “คิดระยะทาบเหล็กตาม DB” แก้ปัญหา <em>Accuracy Paradox</em> โดยตรง
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <CalculatorIcon className="h-4 w-4" />
                  Rule-Based Costing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  หลังปรับปริมาณตามกฎแล้ว ดึงราคาต่อหน่วยจากฐานข้อมูล
                  คำนวณราคารวมของรายการแบบอัตโนมัติ—โปร่งใส ตรวจสอบย้อนหลังได้
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileSpreadsheet className="h-4 w-4" />
                  CGD-Compliant BOQ Generation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  ส่งออก Excel/PDF ตามแม่แบบมาตรฐานไทย (เช่น CGD)
                  โครงสร้างหัวข้อ/รวมยอดถูกต้อง ใช้ยื่นประมูลต่อได้ทันที
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <GitCompare className="h-4 w-4" />
                  Change Order Management
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  เปรียบเทียบโมเดล 2 เวอร์ชัน สร้างรายงานปริมาณ/ต้นทุนที่เปลี่ยนแปลง
                  ช่วยจัดการ CO เร็วขึ้น โปร่งใสขึ้น
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visuals for features */}
        <section className="grid md:grid-cols-2 gap-4">
          <ImageBlock
            src="/images/docs/research/rules-engine-config.png"
            label="Rules Engine UI"
            caption="หน้าตั้งค่ากฎเผื่อ/ทาบ/การปัดเศษ—ปรับให้ตรงมาตรฐานและนโยบายองค์กร"
          />
          <ImageBlock
            src="/images/docs/research/boq-output-cgd.png"
            label="CGD BOQ Output"
            caption="ตัวอย่างไฟล์ BOQ ที่ส่งออกตามแม่แบบ CGD พร้อมรวมยอด/หัวข้อครบถ้วน"
          />
        </section>

        <Separator />

        {/* Democratization Callout */}
        <section className="space-y-4 max-w-3xl">
          <div className="rounded-2xl border p-5 bg-orange-50/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
              <Sparkles className="h-4 w-4" />
              Add-in ในฐานะ “เครื่องมือสร้างประชาธิปไตยทางเทคโนโลยี”
            </div>
            <p className="mt-2 text-sm text-orange-900/90">
              Add-in ที่ออกแบบมาดีจะบรรจุความรู้ผู้เชี่ยวชาญไว้หลัง UI ที่เรียบง่าย
              ลดกำแพงทักษะและต้นทุน ช่วยให้ทีม QS/สถาปนิกที่ใช้ Revit ขั้นพื้นฐาน
              สร้าง BOQ ที่แม่นยำและสอดคล้องมาตรฐานท้องถิ่นได้ในไม่กี่คลิก—
              เปิดประตูให้ SME เข้าถึง 5D BIM อย่างแท้จริง
            </p>
          </div>
        </section>

        {/* Takeaways */}
        <section
          aria-label="Takeaways"
          className="space-y-3 max-w-3xl rounded-2xl border p-5 bg-background"
        >
          <h3 className="text-base md:text-lg font-semibold">สรุปประเด็นสำคัญ</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>แก้ช่องว่าง Revit มาตรฐานด้วยกฎการก่อสร้างที่ตั้งโปรแกรมได้</li>
            <li>เชื่อมฐานข้อมูลราคาไทย เพื่อลดงานกรอกมือและความผิดพลาด</li>
            <li>ส่งออก BOQ ตามมาตรฐาน CGD พร้อมใช้งานทันที</li>
            <li>บริหาร Change Order โดยอิงโมเดล—รวดเร็ว โปร่งใส ตรวจสอบได้</li>
          </ul>
        </section>

        {/* CTA (ไป Quickstart / Data Prep) */}
        <div className="flex flex-wrap gap-3 max-w-3xl">
          <a
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted"
          >
            <Hammer className="h-4 w-4" />
            เริ่มใช้งาน (Quickstart) →
          </a>
          <a
            href="/docs/data-preparation"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted"
          >
            <ShieldCheck className="h-4 w-4" />
            เตรียมข้อมูล &amp; Template →
          </a>
        </div>
      </div>
    </SidebarInset>
  )
}

/** ไอคอนเครื่องคิดเลข (lucide-react ไม่มีชื่อ Calculator แบบ default ทุกเวอร์ชัน)
 *  หากโปรเจกต์ของคุณมีไอคอน Calculator อยู่แล้ว ให้เปลี่ยน import/use ตามที่มี
 */
function CalculatorIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      role="img"
      aria-label="calculator"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ${props.className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="8" y1="12" x2="8" y2="12" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <line x1="16" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="12" y1="16" x2="12" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  )
}
