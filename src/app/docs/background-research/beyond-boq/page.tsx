// src/app/docs/background-research/beyond-boq/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  LayoutDashboard,
  Brain,
  Database,
  LineChart,
  Activity,
  Link as LinkIcon,
  Cloud,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

/** ImageBlock — บล็อกรูปภาพ (รองรับ placeholder ถ้ายังไม่มีไฟล์)
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

export default function BeyondBoqPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-orange-800">
            “ก้าวไปไกลกว่า BOQ: การใช้ข้อมูลเพื่อสร้างความได้เปรียบทางธุรกิจและอนาคตของการประมาณราคา“
          </h1>
          <p className="text-base md:text-lg text-orange-700/80">
            จาก BOQ ที่เร็วและแม่น—สู่การบริหารที่ขับเคลื่อนด้วยข้อมูล (Data-Driven)
            และขยายศักยภาพด้วย BI, AI/ML, และการเชื่อมต่อราคาแบบ Real-Time
          </p>
        </header>

        <Separator />

        {/* Intro Narrative */}
        <section aria-label="Overview" className="prose max-w-3xl prose-p:leading-relaxed prose-li:leading-relaxed">
          <p>
            คุณค่าที่แท้จริงของ Add-in ไม่ได้หยุดที่เอกสาร BOQ ของโครงการเดียว
            แต่คือการวางรากฐานข้อมูลที่สะอาด มีโครงสร้าง และน่าเชื่อถือ
            เพื่อยกระดับการตัดสินใจขององค์กรและสร้างความได้เปรียบทางการแข่งขันอย่างยั่งยืน—
            ตั้งแต่ Dashboard เชิงธุรกิจ ไปจนถึงการพยากรณ์ด้วย AI และงบประมาณแบบ Live
          </p>
        </section>

        {/* 6.1 Power BI */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">6.1 จากข้อมูลสู่ปัญญา: การสร้าง Dashboard ด้วย Power BI</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <LayoutDashboard className="h-4 w-4" />
                  เวิร์กโฟลว์ BI (อย่างย่อ)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Export BOQ จาก Add-in เป็น Excel/JSON → นำเข้า Power BI →
                สร้าง Dashboard โต้ตอบ: ภาพรวมต้นทุน, เปรียบเทียบหมวดงาน, ติดตามงบเมื่อแก้แบบ,
                และเชื่อมมุมมองกับโมเดล 3D ได้
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <LineChart className="h-4 w-4" />
                  ประโยชน์เชิงภาพ (Visualization)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                เปลี่ยนตัวเลขดิบเป็น Insights ที่อ่านครั้งเดียวเข้าใจ
                ผู้จัดการเห็นสถานะการเงินโครงการจากหน้าจอเดียว—ตัดสินใจได้เร็วและแม่นขึ้น
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Activity className="h-4 w-4" />
                  Data-Driven Decisions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                ย้ายจากรายงาน BOQ หลายสิบหน้า → KPI และการแจ้งเตือนที่ใช้งานได้จริง
                สำหรับผู้บริหาร/PM/Cost Control
              </CardContent>
            </Card>
          </div>

          <ImageBlock
            src="/images/docs/research/bi-dashboard-example.png"
            label="Power BI Dashboard"
            caption="ตัวอย่าง Dashboard: งบรวม, สัดส่วนตามหมวดงาน, Trend การเปลี่ยนแปลงงบ, ลิงก์ไปมุมมอง 3D"
          />
        </section>

        {/* 6.2 AI / ML */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">6.2 พรมแดนใหม่: การพยากรณ์ต้นทุนด้วย AI และ Machine Learning</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Database className="h-4 w-4" />
                  Data Asset ที่มีโครงสร้าง
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                สะสมข้อมูลปริมาณ/ต้นทุน/ระยะเวลาจากทุกโครงการที่ใช้ Add-in อย่างสม่ำเสมอ
                เพื่อเป็น <em>training data</em> คุณภาพสูงให้โมเดล AI
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Brain className="h-4 w-4" />
                  Predictive Model
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                เรียนรู้ความสัมพันธ์ระหว่างชนิดอาคาร/พื้นที่/ที่ตั้ง กับต้นทุนจริง
                → คาดการณ์งบโครงการใหม่ได้จากพารามิเตอร์ไม่กี่ตัว
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <ShieldCheck className="h-4 w-4" />
                  Risk Mitigation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                วิเคราะห์แนวโน้มราคา/ความผันผวนของตลาด → แจ้งเตือนงบประมาณเสี่ยงบานปลายล่วงหน้า
                เพื่อการบริหารแบบ proactive
              </CardContent>
            </Card>
          </div>

          <ImageBlock
            src="/images/docs/research/ai-ml-pipeline.png"
            label="AI/ML Pipeline"
            caption="Pipeline: เก็บข้อมูลจาก Add-in → ทำความสะอาด/โครงสร้าง → เทรนโมเดล → พยากรณ์งบ/ความเสี่ยง"
          />
        </section>

        {/* 6.3 Real-time APIs */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">6.3 การเชื่อมต่อข้อมูลราคาแบบ Real-Time ด้วย APIs</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <LinkIcon className="h-4 w-4" />
                  Live Budget via API
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                ออกแบบ Add-in ให้เรียก API ผู้ให้บริการราคาวัสดุ/แรงงานแบบเรียลไทม์
                ดึงราคาล่าสุดทุกครั้งที่คำนวณ—สะท้อนสภาพตลาดทันที ลดความเสี่ยงราคาเหวี่ยง
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Server className="h-4 w-4" />
                  สถาปัตยกรรมการเชื่อมต่อ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Add-in ↔ API Gateway ↔ ผู้ให้บริการราคา/ดัชนีตลาด พร้อมกลไกแคช/สำรองเมื่อออฟไลน์
                เพื่อความต่อเนื่องของการทำงาน
              </CardContent>
            </Card>
          </div>

          <ImageBlock
            src="/images/docs/research/live-budget-architecture.png"
            label="Live Budget Architecture"
            caption="สถาปัตยกรรมโฟลว์ API สำหรับ Live Budget: Auth, Rate Limits, Cache, Failover"
          />
        </section>

        <Separator />

        {/* Strategic Data Asset */}
        <section className="space-y-4 max-w-3xl">
          <div className="rounded-2xl border p-5 bg-orange-50/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
              <Sparkles className="h-4 w-4" />
              จากเครื่องมือปฏิบัติการ → เครื่องจักรสร้างสินทรัพย์ข้อมูล
            </div>
            <p className="mt-2 text-sm text-orange-900/90">
              เมื่อใช้ Add-in ในทุกโครงการ บริษัทไม่ได้แค่ “สร้างอาคาร” แต่กำลังสร้าง
              <strong> สินทรัพย์ข้อมูล (Data Asset)</strong> ของตนเอง
              เพื่อนำไปเทรนโมเดล AI ที่ปรับแต่งตามจุดแข็ง—เข้าประมูลด้วยตัวเลขที่มั่นใจ
              และเหนือกว่าคู่แข่งอย่างมีนัยสำคัญ
            </p>
          </div>
        </section>

        {/* Takeaways */}
        <section aria-label="Takeaways" className="space-y-3 max-w-3xl rounded-2xl border p-5 bg-background">
          <h3 className="text-base md:text-lg font-semibold">สรุปประเด็นสำคัญ</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>BOQ จาก Add-in คือฐานข้อมูลที่สะอาดและเชื่อถือได้สำหรับการตัดสินใจ</li>
            <li>Power BI แปลงข้อมูลเป็น Insights ที่ผู้บริหารใช้ได้จริง</li>
            <li>AI/ML พยากรณ์ต้นทุนและความเสี่ยงจากข้อมูลประวัติที่โครงสร้างดี</li>
            <li>API ทำให้เกิด Live Budget—สะท้อนตลาดจริง ลดความเสี่ยงราคาเหวี่ยง</li>
            <li>ระยะยาว: แปลงงานประมาณราคาเป็นกิจกรรมสร้างสินทรัพย์เชิงกลยุทธ์</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 max-w-3xl">
          <a href="/docs/background-research/empirical-comparison" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted">
            <LineChart className="h-4 w-4" />
            ดูผลการพิสูจน์เชิงประจักษ์ →
          </a>
          <a href="/docs/getting-started" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-muted">
            <ShieldCheck className="h-4 w-4" />
            ไปเริ่มใช้งานจริง (Quickstart) →
          </a>
        </div>
      </div>
    </SidebarInset>
  )
}
