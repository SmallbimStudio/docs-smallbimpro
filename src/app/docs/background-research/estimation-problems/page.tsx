// src/app/docs/getting-started/estimation-problems/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2, Clock, LineChart } from "lucide-react"

/** Placeholder สำหรับภาพประกอบ: แทนที่ด้วย <img> หรือ <Image> ได้ */
function ImageBlock({
  label,
  caption,
}: {
  label: string
  caption?: string
}) {
  return (
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className="aspect-video w-full grid place-items-center text-sm text-muted-foreground">
        [ Image Placeholder — {label} ]
      </div>
      {caption ? (
        <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default function EstimationProblemsPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-orange-800">
            “สภาพปัญหาของ{" "}
            <span className="block md:inline">กระบวนการประมาณราคา</span>{" "}
            แบบดั้งเดิม”
          </h1>
          <p className="text-base md:text-lg text-orange-700/80">
            ความจำเป็นในการเปลี่ยนแปลงของการประมาณราคาในอุตสาหกรรมก่อสร้างไทย
          </p>
        </header>

        <Separator />

        {/* Intro (ย่อหน้าเปิด) */}
        <section
          aria-label="Estimation Problems — Overview"
          className="prose max-w-3xl prose-p:leading-relaxed prose-li:leading-relaxed"
        >
          <p>
            <strong>กระบวนการประมาณราคาค่าก่อสร้าง (Cost Estimation)</strong> หรือ{" "}
            <strong>บัญชีแสดงปริมาณวัสดุและราคา (Bill of Quantities - BOQ)</strong>{" "}
            คือหัวใจของโครงการก่อสร้างไทย แต่แนวทางดั้งเดิมที่พึ่งพาแบบ 2D และการคำนวณด้วยมือ
            ได้เผยข้อจำกัดเชิงโครงสร้างที่กระทบความสำเร็จของโครงการอย่างมีนัยสำคัญ—
            จากความคลาดเคลื่อนของตัวเลข ไปจนถึงความเสี่ยงทางการเงินและเวลา
          </p>
        </section>

        {/* Key Issue Cards */}
        <section aria-label="Key Issues" className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="h-4 w-4" />
                High Inaccuracy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              คลาดเคลื่อนระดับ ±7% ถึง 15–20% ส่งผลโดยตรงต่อเงินทุนหมุนเวียนและกำไรสุทธิ
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2 className="h-4 w-4" />
                Subjectivity
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              พึ่งพาประสบการณ์/เทคนิคเฉพาะบุคคล ทำให้คุณภาพ BOQ ไม่สม่ำเสมอและยากต่อมาตรฐาน
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-4 w-4" />
                Time &amp; Labor-Intensive
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              ใช้เวลาและแรงงานสูง ขั้นตอนซ้ำซ้อน เสี่ยง human error และเสียโอกาสเข้าร่วมงานใหม่
            </CardContent>
          </Card>
        </section>

        {/* Break with Image: “ภาพรวมวงจรปัญหา” */}
        <ImageBlock
          label="Problem Landscape Diagram"
          caption="ภาพรวมความสัมพันธ์ระหว่างความคลาดเคลื่อน / ความเสี่ยงทางการเงิน / เวลา"
        />

        {/* Narrative — ลึกทีละประเด็น */}
        <section
          aria-label="Detail — Inaccuracy"
          className="prose max-w-3xl prose-p:leading-relaxed"
        >
          <h3>1) ความคลาดเคลื่อนสูง (High Inaccuracy)</h3>
          <p>
            วิธีดั้งเดิมมีแนวโน้มคลาดเคลื่อนตั้งแต่ ±7% จนถึง 15–20% จากทั้งการถอดปริมาณไม่แม่น,
            สมมุติราคาวัสดุ/แรงงานไม่สอดคล้องตลาด และค่าใช้จ่ายแฝงที่ประเมินต่ำ
            ความเบี่ยงเบนนี้อาจผลักโครงการสู่ภาวะขาดทุนหากไม่มี contingency ที่เหมาะสม
          </p>
        </section>

        {/* Break with Image: ตัวอย่างรายการ/บิลลิ่งที่ผิดพลาด */}
        <ImageBlock
          label="Example — Miscounted QTO"
          caption="ตัวอย่างการนับซ้ำ/ลืมนับ และผลสะสมต่อมูลค่างาน"
        />

        <section
          aria-label="Detail — Subjectivity"
          className="prose max-w-3xl prose-p:leading-relaxed"
        >
          <h3>2) ความเป็นอัตวิสัยสูง (Reliance on Experience)</h3>
          <p>
            ความแม่นยำขึ้นกับทักษะและ “เทคนิคเฉพาะตัว” ของผู้ประมาณราคา จึงเกิดความไม่แน่นอน
            โดยเฉพาะงานระบบ (MEP) ที่แบบ 2D แสดงเพียงแนวราบ ทำให้การคิดความยาวแนวดิ่ง/
            การหลบโครงสร้างเป็นจุดที่ผิดพลาดง่าย
          </p>
        </section>

        {/* Break with Image: ผังท่อ/MEP (placeholder) */}
        <ImageBlock
          label="MEP 2D vs Real Routing"
          caption="ความต่างระหว่างเส้นทางท่อในแบบ 2D กับการเดินจริงในโมเดล"
        />

        <section
          aria-label="Detail — Financial Risk"
          className="prose max-w-3xl prose-p:leading-relaxed"
        >
          <h3>3) ความเสี่ยงทางการเงิน (Financial Risk)</h3>
          <p>
            งบประมาณบานปลายเกิดจากการตั้งงบต่ำ, การเปลี่ยนแบบกลางคัน, ปริมาณเพิ่มเกินคาด—
            ล้วนย้อนกลับไปที่รากของ “การประเมินที่ไม่แม่น” ทำให้ผู้ประกอบการชั่งใจระหว่าง
            เสนอราคาสูงเกินแข่งขัน หรือเสนอราคาต่ำแล้วรับความเสี่ยงขาดทุน
          </p>
        </section>

        {/* Break with Image: กราฟงบประมาณ/กระแสเงินสด */}
        <ImageBlock
          label="Cash Flow / Budget Overrun Chart"
          caption="ผลกระทบทางกระแสเงินสดจาก BOQ ที่คลาดเคลื่อน"
        />

        <section
          aria-label="Detail — Time & Labor"
          className="prose max-w-3xl prose-p:leading-relaxed"
        >
          <h3>4) ใช้เวลาและแรงงานสูง (Time &amp; Labor-Intensive)</h3>
          <p>
            ถอดจาก 2D ด้วยมือเป็นงานใช้เวลามากและซ้ำซ้อน นอกจากเพิ่มต้นทุนบริหารแล้ว
            ยังลดความสามารถในการรับงานใหม่—เพราะทุกโครงการต้องเริ่มใหม่แทบทั้งหมด
          </p>
        </section>

        <Separator />

        {/* BIM 5D (Callout + bullets) */}
        <section
          aria-label="BIM 5D — Living Process"
          className="space-y-4 max-w-3xl"
        >
          <div className="rounded-2xl border p-5 bg-orange-50/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
              <LineChart className="h-4 w-4" />
              BIM 5D: จาก <em>Static</em> สู่ <em>Living Process</em>
            </div>
            <p className="mt-2 text-sm text-orange-900/90">
              5D BIM บูรณาการต้นทุน (5D) เข้ากับโมเดล 3D และเวลา (4D) แบบไดนามิก
              เมื่อแก้แบบ ปริมาณ–ต้นทุนอัปเดตอัตโนมัติ ช่วยตัดสินใจได้เร็วและแม่น
            </p>
          </div>

          <ul className="list-disc pl-5 text-sm md:text-base">
            <li>3D + 4D + 5D เชื่อมโยงกัน เมื่อโมเดลเปลี่ยน BOQ เปลี่ยนทันที</li>
            <li>ข้อมูลปริมาณ/ต้นทุนเป็นส่วนหนึ่งของชิ้นส่วนในโมเดล (non-graphic data)</li>
            <li>ลด human error และรักษา Single Source of Truth</li>
          </ul>
        </section>

        {/* Break with Image: เวิร์กโฟลว์ 5D */}
        <ImageBlock
          label="5D Workflow Diagram"
          caption="โฟลว์การอัปเดตปริมาณ–ต้นทุนอัตโนมัติเมื่อโมเดลเปลี่ยน"
        />

        <Separator />

        {/* Takeaways — เน้นอ่านง่าย */}
        <section
          aria-label="Takeaways"
          className="space-y-3 max-w-3xl rounded-2xl border p-5 bg-background"
        >
          <h3 className="text-base md:text-lg font-semibold">
            สรุปประเด็นที่ต้องแก้
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>พึ่งพาข้อมูลจากแบบ 2D ที่มักไม่อัปเดต</li>
            <li>ถอดปริมาณซ้ำซ้อนและมีความเสี่ยงต่อความผิดพลาด</li>
            <li>ใช้เวลานานในการรวมข้อมูลจากหลายฝ่าย</li>
            <li>ไม่รองรับการปรับเปลี่ยนแบบในช่วงออกแบบ</li>
          </ul>
        </section>
      </div>
    </SidebarInset>
  )
}
