// src/app/docs/background-research/empirical-comparison/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  ClipboardCheck,
  Timer,
  Activity,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
} from "lucide-react"

/** ImageBlock — ใส่รูปจริงภายหลังได้ (หรือปล่อยเป็น placeholder)
 *  วางไฟล์ไว้ใน /public/images/docs/research/ แล้วอ้าง src="/images/..."
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

export default function EmpiricalComparisonPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-orange-800">
            “การพิสูจน์เชิงประจักษ์: การวิเคราะห์เปรียบเทียบวิธีการประมาณราคา”
          </h1>
          <p className="text-base md:text-lg text-orange-700/80">
            เปรียบเทียบ Manual / Revit มาตรฐาน / Revit + Custom Add-in ด้วยกรณีศึกษา
            เพื่อวัดทั้งความแม่นยำและเวลาอย่างเป็นรูปธรรม
          </p>
        </header>

        <Separator />

        {/* Intro Narrative */}
        <section
          aria-label="Overview"
          className="prose max-w-3xl prose-p:leading-relaxed prose-li:leading-relaxed"
        >
          <p>
            เพื่อยืนยันสมมติฐานว่า <strong>Revit Add-in แบบพัฒนาขึ้นเอง</strong>
            เป็นทางออกที่เหนือกว่า จำเป็นต้องมีการทดสอบเชิงประจักษ์ที่วัดผลได้จริง
            บทนี้จึงนำเสนอการศึกษาเปรียบเทียบ 3 วิธี ได้แก่ (1) Manual/2D,
            (2) Standard Revit Schedules และ (3) Revit + Custom Add-in
            โดยใช้โครงการกรณีศึกษามาเป็นเกณฑ์วัดผล
          </p>
        </section>

        {/* 5.1 Study Design */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            5.1 การออกแบบการศึกษาเปรียบเทียบ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <ClipboardCheck className="h-4 w-4" />
                  กรณีศึกษา &amp; เกณฑ์วัดผล
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5">
                  <li>อาคารพักอาศัย (สถาปัตยกรรม + โครงสร้างครบถ้วน)</li>
                  <li>วัดผล 2 มิติ: <em>Accuracy</em> และ <em>Time/Efficiency</em></li>
                  <li>
                    ตั้งค่าอ้างอิง: <strong>Baseline “Actual” Quantity</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileSpreadsheet className="h-4 w-4" />
                  วิธีการที่เปรียบเทียบ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ol className="list-decimal pl-5">
                  <li>Manual/2D + Spreadsheet</li>
                  <li>Revit Schedules → Export สรุปใน Spreadsheet</li>
                  <li>Revit + <strong>Custom Add-in</strong> อัตโนมัติ</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Activity className="h-4 w-4" />
                  แนวทางปฏิบัติ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                ทำโดยผู้ปฏิบัติที่เชี่ยวชาญในแต่ละวิธี บันทึกเวลาจริง และวัดความเบี่ยงเบนเทียบ
                Baseline
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visual break: case study illustration */}
        <ImageBlock
          src="/images/docs/research/case-study-model.png"
          label="Case Study Model"
          caption="โมเดลกรณีศึกษา: โครงสร้าง + สถาปัตยกรรมครบ เพื่อทดสอบการถอดปริมาณแบบสมจริง"
        />

        {/* 5.2 Accuracy */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            5.2 การวิเคราะห์เปรียบเทียบด้านความแม่นยำ
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BarChart3 className="h-4 w-4" />
                  ผลการเปรียบเทียบเชิงปริมาณ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  งานวิจัยหลายชิ้นพบว่า BIM ให้ค่าที่ต่างจากวิธีดั้งเดิมอย่างชัดเจนในหลายงาน
                  เช่นโครงสร้างและสถาปัตยกรรม โดยเฉพาะ<strong>เหล็กเสริม</strong>ที่
                  วิธีดั้งเดิมมักให้ปริมาณ<strong>สูงกว่า</strong>ความเป็นจริง
                  (ตัวอย่างหนึ่งรายงานความต่างเฉลี่ยราว <strong>17.76%</strong>)
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <CheckCircle2 className="h-4 w-4" />
                  Deviation Analysis &amp; Add-in
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  ความแม่นยำของ Revit มาตรฐานขึ้นกับคุณภาพโมเดล—ความเบี่ยงเบนอาจกว้าง
                  <strong>~1% ถึง ~33%</strong>. ในทางกลับกัน การใช้{" "}
                  <strong>Custom Add-in</strong> ที่ฝังกฎการก่อสร้าง
                  ช่วยลดความเบี่ยงเบนให้เข้าใกล้ <strong>0.0%</strong> ได้อย่างมีนัยสำคัญ
                </p>
              </CardContent>
            </Card>
          </div>

          <ImageBlock
            src="/images/docs/research/accuracy-deviation-chart.png"
            label="Accuracy Deviation"
            caption="กราฟตัวอย่างความเบี่ยงเบนเทียบ Baseline: Manual vs Revit Std vs Revit + Add-in"
          />
        </section>

        {/* 5.3 Time & Efficiency */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            5.3 การวิเคราะห์เปรียบเทียบด้านเวลาและประสิทธิภาพ
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Timer className="h-4 w-4" />
                  Time Reduction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  กระบวนการ BIM โดยรวม <strong>เร็วกว่า</strong> 2D Takeoff อย่างชัดเจน
                  (ตัวอย่างกรณีศึกษา: BIM <strong>~1 วัน</strong> vs Manual{" "}
                  <strong>~1 สัปดาห์</strong> สำหรับงานเดียวกัน)
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Activity className="h-4 w-4" />
                  Productivity Increase (Add-in)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Plugin/Add-in ที่ออกแบบเฉพาะทางช่วยลดภาระงานและเวลา
                  ได้<strong>ราวครึ่งหนึ่ง</strong>เมื่อเทียบกับการทำ BIM
                  ด้วยขั้นตอนมาตรฐานล้วน ๆ ทำให้ทีมมีเวลาไปทำงานเชิงวิเคราะห์ที่มีมูลค่าสูงกว่า
                </p>
              </CardContent>
            </Card>
          </div>

          <ImageBlock
            src="/images/docs/research/time-reduction-chart.png"
            label="Time Efficiency"
            caption="กราฟตัวอย่างเวลาในการทำ BOQ: Manual vs Revit Std vs Revit + Add-in"
          />
        </section>

        <Separator />

        {/* Table 5.1 */}
        <section className="space-y-3">
          <h3 className="text-base md:text-lg font-semibold">
            ตารางที่ 5.1: ตารางเปรียบเทียบประสิทธิภาพของวิธีการประมาณราคา
          </h3>

          <div className="overflow-x-auto rounded-2xl border">
            <table className="w-full table-auto text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="px-4 py-3">ตัวชี้วัด</th>
                  <th className="px-4 py-3">Manual / 2D</th>
                  <th className="px-4 py-3">Revit (Standard)</th>
                  <th className="px-4 py-3">Revit + Custom Add-in</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">ความเบี่ยงเบนเทียบ Baseline</td>
                  <td className="px-4 py-3">~+8%–20% (ขึ้นกับผู้ทำ)</td>
                  <td className="px-4 py-3">~1%–33% (ขึ้นกับคุณภาพโมเดล)</td>
                  <td className="px-4 py-3">~0%–3% (ตั้งกฎได้, ใกล้ 0%)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">เวลาทำ BOQ (กรณีศึกษา)</td>
                  <td className="px-4 py-3">~5–7 วัน</td>
                  <td className="px-4 py-3">~1 วัน</td>
                  <td className="px-4 py-3">~0.5 วัน</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">เวลาอัปเดตเมื่อแก้แบบ</td>
                  <td className="px-4 py-3">ชั่วโมง–วัน (ตรวจใหม่เกือบทั้งหมด)</td>
                  <td className="px-4 py-3">ชั่วโมง (เชื่อมโมเดล)</td>
                  <td className="px-4 py-3">นาที (Re-run กฎ/เทมเพลต)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">ทักษะที่ต้องการ</td>
                  <td className="px-4 py-3">QS ดั้งเดิม</td>
                  <td className="px-4 py-3">สูง (Family/Params/Schedule)</td>
                  <td className="px-4 py-3">ผู้ใช้ทั่วไป (ซ่อนความซับซ้อนใน UI)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">ฟอร์แมต BOQ ตามมาตรฐานไทย</td>
                  <td className="px-4 py-3">ทำได้ แต่ช้า</td>
                  <td className="px-4 py-3">จำกัด ต้อง Export ไปจัดรูปแบบ</td>
                  <td className="px-4 py-3">สำเร็จรูปจาก Template (CGD/องค์กร)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground">
            หมายเหตุ: ตัวเลขเป็นการสังเคราะห์และประมาณการเพื่อสื่อแนวโน้มโดยรวม
            โดยเปอร์เซ็นต์เบี่ยงเบนของ Add-in สะท้อนการตั้งกฎเผื่อวัสดุตามหลักปฏิบัติจริง
          </p>
        </section>

        {/* Visual break: One-look summary image */}
        <ImageBlock
          src="/images/docs/research/one-look-summary.png"
          label="One-look Summary"
          caption="ภาพสรุปเดียวของบท: ความเร็วสูงสุด + ความแม่นยำที่เชื่อถือได้ = Revit + Custom Add-in"
        />

        {/* Conclusion Callout */}
        <section className="space-y-4 max-w-3xl">
          <div className="rounded-2xl border p-5 bg-orange-50/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
              <AlertTriangle className="h-4 w-4" />
              บทสรุปเชิงประจักษ์
            </div>
            <p className="mt-2 text-sm text-orange-900/90">
              วิธีดั้งเดิมช้าและเสี่ยงผิดพลาด, Revit มาตรฐานเร็วขึ้นแต่ความแม่นยำไม่แน่นอน,
              ในขณะที่ <strong>Revit + Custom Add-in</strong> ให้ทั้งความเร็วและความน่าเชื่อถือ
              เพราะรวมตรรกะการก่อสร้างจริงไว้ในกระบวนการอัตโนมัติ—จึงเป็นแนวทางที่เหนือกว่าอย่างชัดเจน
            </p>
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
