// src/app/docs/background-research/traditional-vs-automated/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  PencilRuler,
  Table,
  Braces,
  AlertTriangle,
  Wand2,
  Workflow,
  FileSpreadsheet,
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

export default function TraditionalVsAutomatedPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-orange-800">
            “วิเคราะห์ข้อจำกัดของกระบวนการทำ BOQ: จากวิธีดั้งเดิมสู่เครื่องมืออัตโนมัติ”
          </h1>
          <p className="text-base md:text-lg text-orange-700/80">
            ก่อนนำเสนอทางออก จำเป็นต้องเห็นข้อจำกัดของวิธีที่ใช้กันอยู่—เหตุผลว่าทำไม
            “การพยายามบังคับใช้เครื่องมือเดิม” จึงไม่ยั่งยืนในระยะยาว
          </p>
        </header>

        <Separator />

        {/* Intro */}
        <section
          aria-label="Introduction"
          className="prose max-w-3xl prose-p:leading-relaxed"
        >
          <p>
            กระบวนการทำ BOQ ในปัจจุบันมีตั้งแต่การถอดแบบ 2D ด้วยมือ,
            ใช้ตาราง <em>Revit Schedule/Quantities</em>,
            ไปจนถึง <em>Dynamo</em> เพื่อเพิ่มความยืดหยุ่น
            แต่แต่ละวิธีก็มีข้อดี–ข้อเสีย และมักสะดุดเมื่อเจอข้อกำหนดจริงของงานไทย
            (ฟอร์แมต BOQ, มาตรฐานการวัด, เวิร์กโฟลว์ทีมประมาณราคา)
          </p>
        </section>

        {/* Manual Take-off */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <PencilRuler className="h-4 w-4" />
                กระบวนการดั้งเดิม: ถอดแบบ 2D ด้วยมือ (Manual Take-off)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>
                  <strong>Human Error</strong> จากอ่านแบบ/ตกหล่น/คำนวณผิด
                </li>
                <li>
                  <strong>ใช้เวลานานและแรงงานสูง</strong> — หลายวันถึงหลายสัปดาห์
                </li>
                <li>
                  <strong>ขาดการเชื่อมกับแบบ</strong> — แก้แบบครั้งใดแทบต้องเริ่มใหม่
                </li>
              </ul>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/manual-takeoff-flow.png"
            label="Manual Take-off Flow"
            caption="ไดอะแกรมเวิร์กโฟลว์การถอดแบบด้วยมือ—จุดเสี่ยงและเวลาที่สูญเสีย"
          />
        </section>

        {/* Revit Schedules */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Table className="h-4 w-4" />
                Revit Schedule/Quantities: ก้าวแรกที่ยังไม่สมบูรณ์
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <div>
                <p className="font-medium">ข้อจำกัดด้านการจัดรูปแบบ</p>
                <p>
                  Schedule ถูกออกแบบมาเพื่อ “แสดงข้อมูลจากฐานข้อมูล” ไม่ใช่เพื่อทำ
                  <em>Thai BOQ</em> ที่มีหัวข้อหลัก–ย่อย การรวมยอด ฯลฯ
                  การจัดฟอร์แมตให้ตรงมาตรฐานทำได้ยากและซับซ้อนเกินจำเป็น
                </p>
              </div>
              <div>
                <p className="font-medium">การแยกส่วนปริมาณที่ซับซ้อน</p>
                <p>
                  Revit มอง “วัตถุ” (Category/Family) แต่ BOQ มอง “รายการงาน”
                  เช่น คาน 1 ชิ้น ต้องแยกเป็น
                  <em>คอนกรีต, ไม้แบบ, เหล็กเสริม, ค่าแรง</em>.
                  การแยกจากวัตถุเดียวใน Schedule ต้องพึ่งสูตรที่ซับซ้อนและไม่ยืดหยุ่น
                </p>
              </div>
              <div>
                <p className="font-medium">กำแพงทักษะที่สูง</p>
                <p>
                  ต้องเข้าใจ Family/Shared Parameters/Calculated Fields
                  ซึ่งเกินทักษะของ QS ส่วนใหญ่ ทำให้เครื่องมือกลายเป็นอุปสรรค
                </p>
              </div>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/revit-schedule-limit.png"
            label="Revit Schedule Limitations"
            caption="ตัวอย่างฟอร์แมต BOQ ไทยที่ยากจะทำใน Schedule และการแตกวัตถุเป็นหลายรายการงาน"
          />
        </section>

        {/* Dynamo */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Braces className="h-4 w-4" />
                Dynamo for Revit: ยืดหยุ่น—แต่ซับซ้อนและเปราะบาง
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>
                  <strong>ซับซ้อนในการพัฒนา/บำรุงรักษา</strong> — script เปรียบเสมือนโปรแกรม
                  ขนาดย่อม เปลี่ยนเวอร์ชัน/โครงสร้างโมเดลแล้วมักพัง ต้องคอยแก้
                </li>
                <li>
                  <strong>ไม่เป็นมิตรกับผู้ใช้ทั่วไป</strong> — ไม่มี UI ใช้งานแบบ Mass
                  Adoption ในทีม QS ได้ยาก
                </li>
                <li>
                  <strong>มาตรฐาน/ความสม่ำเสมอ</strong> — กระจายสคริปต์และคุมคุณภาพให้เท่ากันทุกโครงการเป็นโจทย์ใหญ่
                </li>
              </ul>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/dynamo-maintenance.png"
            label="Dynamo Complexity"
            caption="โครงสร้างสคริปต์/จุดแตกหักเมื่อเวอร์ชัน Revit หรือโมเดลเปลี่ยน"
          />
        </section>

        <Separator />

        {/* Comparison Table */}
        <section className="space-y-3">
          <h3 className="text-base md:text-lg font-semibold">
            เปรียบเทียบภาพรวมของแนวทาง (สังเขป)
          </h3>
          <div className="overflow-x-auto rounded-2xl border">
            <table className="w-full table-auto text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="px-4 py-3">มิติพิจารณา</th>
                  <th className="px-4 py-3">Manual</th>
                  <th className="px-4 py-3">Revit Schedules</th>
                  <th className="px-4 py-3">Dynamo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">ความแม่นยำ / ความน่าเชื่อถือ</td>
                  <td className="px-4 py-3">ขึ้นกับคน (เสี่ยงผิดพลาด)</td>
                  <td className="px-4 py-3">ดีขึ้นแต่ติดเพดานสูตร/ฟอร์แมต</td>
                  <td className="px-4 py-3">ทำได้สูงแต่พึ่งสคริปต์/บำรุงรักษา</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">เวลา / การอัปเดตเมื่อแก้แบบ</td>
                  <td className="px-4 py-3">ช้า ต้องเริ่มนับใหม่บ่อย</td>
                  <td className="px-4 py-3">เรียลไทม์จากโมเดล</td>
                  <td className="px-4 py-3">ขึ้นกับสคริปต์/โครงสร้างโมเดล</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">ทักษะที่ต้องการ</td>
                  <td className="px-4 py-3">QS ดั้งเดิม</td>
                  <td className="px-4 py-3">สูง (Family/Params/Formula)</td>
                  <td className="px-4 py-3">สูงมาก (Logic/Programming)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">ฟอร์แมต BOQ ตามมาตรฐานไทย</td>
                  <td className="px-4 py-3">ทำได้ แต่ช้า</td>
                  <td className="px-4 py-3">จำกัด ต้อง export/ดัดแปลง</td>
                  <td className="px-4 py-3">ทำได้แต่ต้องพัฒนาหนัก</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">ความยั่งยืน/บำรุงรักษา</td>
                  <td className="px-4 py-3">พึ่งบุคคล</td>
                  <td className="px-4 py-3">พึ่งผู้เชี่ยวชาญเฉพาะ</td>
                  <td className="px-4 py-3">เปราะกับการเปลี่ยนแปลง</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Visual Break: Illustration */}
        <ImageBlock
          src="/images/docs/research/tools-as-screwdriver.png"
          label="Wrong Tool Metaphor"
          caption="พยายามตอกตะปูด้วยไขควง—ทำได้แต่ไม่คุ้มความเสี่ยงและต้นทุน"
        />

        {/* Conclusion / Callout */}
        <section className="space-y-4 max-w-3xl">
          <div className="rounded-2xl border p-5 bg-orange-50/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
              <AlertTriangle className="h-4 w-4" />
              บทสรุป: เลิก “ฝืนใช้ของเดิม” แล้วออกแบบเครื่องมือที่ตรงโจทย์
            </div>
            <p className="mt-2 text-sm text-orange-900/90">
              Manual ล้าสมัยและเสี่ยง, Revit Schedules ยืดหยุ่นไม่พอและต้องการสกิลสูง,
              ส่วน Dynamo ทรงพลังแต่ซับซ้อน/เปราะบาง—ภาพรวมจึงชัดเจนว่า
              การ “งัดข้อกับข้อจำกัดเดิม” เปลืองทรัพยากรมากกว่าผลลัพธ์
              ทางออกที่ยั่งยืนคือเครื่องมือใหม่ที่ออกแบบมาเพื่อ BOQ โดยเฉพาะ
              พร้อม UI เป็นมิตร ตรรกะคำนวณซ่อนอยู่เบื้องหลัง และผลิตเอกสารตามมาตรฐานไทยได้อัตโนมัติ
            </p>
          </div>
        </section>

        {/* CTA ไปหน้าทางออก */}
        <div className="max-w-3xl">
          <a
            href="/docs/background-research/revit-addin-innovative-solution"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted"
          >
            <Wand2 className="h-4 w-4" />
            ดูทางออก: Revit Add-in สำหรับ BOQ อัตโนมัติ →
          </a>
        </div>

        {/* (เลือกใส่) ลิงก์ Quickstart */}
        {/* <div className="max-w-3xl">
          <a
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted"
          >
            <Workflow className="h-4 w-4" />
            ไปเริ่มใช้งานจริง (Quickstart) →
          </a>
        </div> */}
      </div>
    </SidebarInset>
  )
}
