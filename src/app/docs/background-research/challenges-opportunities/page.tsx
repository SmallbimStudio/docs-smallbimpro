// src/app/docs/getting-started/challenges-and-opportunities/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { LineChart as IconLineChart, PieChart as IconPieChart, BarChart3, Landmark } from "lucide-react"

/** ImageBlock: ใช้ <img> ธรรมดา (ง่ายและไม่มี requirement ความกว้าง/สูงเหมือน next/image)
 *  - วางรูปจริงใน public/ แล้วใส่ src="/images/..."
 *  - ถ้าไม่มีรูป ให้เว้น src ไว้ แล้วใช้ label เป็น placeholder
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
  /** aspect: 'aspect-video' | 'aspect-square' | 'aspect-[4/3]' ฯลฯ */
  aspect?: string
}) {
  return (
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className={`${aspect} w-full grid place-items-center`}>
        {src ? (
          <img src={src} alt={label || caption || "illustration"} className="h-full w-full object-cover" />
        ) : (
          <div className="text-sm text-muted-foreground">[ Image Placeholder — {label ?? "Image"} ]</div>
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

export default function ChallengesAndOppsPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">

        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-orange-800">
            “ภูมิทัศน์ของ BIM 5D ในประเทศไทย: <span className="block md:inline">ความท้าทายและโอกาส</span>”
          </h1>
          <p className="text-base md:text-lg text-orange-700/80">
            จากแรงกดดันภายนอกสู่คุณค่าที่จับต้องได้—เข้าใจบริบทไทยเพื่อออกแบบโซลูชันที่ใช้งานจริง
          </p>
        </header>

        <Separator />

        {/* Narrative — Intro */}
        <section aria-label="BIM 5D Landscape — Introduction" className="prose max-w-3xl prose-p:leading-relaxed prose-li:leading-relaxed">
          <p>
            การเปลี่ยนผ่านจากกระบวนการทำงานแบบดั้งเดิมไปสู่ BIM ไม่ได้เกิดขึ้นอย่างราบรื่นในทุกประเทศ
            สำหรับประเทศไทย การนำ BIM มาใช้ โดยเฉพาะในมิติที่ 5 (5D) เพื่อการประมาณราคานั้น
            มีลักษณะเฉพาะตัวทั้งในด้านปัจจัยขับเคลื่อน, ประโยชน์ที่คาดหวัง, และอุปสรรคที่หยั่งรากลึก
            การทำความเข้าใจภูมิทัศน์นี้จึงเป็นสิ่งจำเป็นเพื่อที่จะสามารถนำเสนอโซลูชันที่ตอบโจทย์ได้อย่างแท้จริง
          </p>
        </section>

        {/* Drivers & Benefits */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <IconPieChart className="h-4 w-4" />
                ปัจจัยขับเคลื่อนและประโยชน์ของ BIM (บริบทไทย)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                แรงขับหลักมักเป็น “คำร้องขอจากผู้พัฒนาโครงการเอกชน” ที่กำหนดให้ใช้ BIM ในการประมูล โดยเฉพาะโครงการขนาดใหญ่/ซับซ้อน
                มุมมองของผู้พัฒนาเห็น BIM เป็นเครื่องมือบริหารความเสี่ยงด้านต้นทุนที่มีประสิทธิภาพ
              </p>
              <ul className="list-disc pl-5">
                <li>Clash Detection ลดการแก้ไขหน้างาน</li>
                <li>อัปเดตแบบเทคนิคได้เร็ว/สอดคล้องทุกมุมมอง</li>
                <li>QTO แม่นขึ้น หนุนการจัดทำงบประมาณช่วงประมูล</li>
              </ul>
            </CardContent>
          </Card>

          {/* รูปแทนกราฟ Drivers Pie */}
          <ImageBlock
            src="/images/docs/bim-5d/drivers-pie.png"
            label="Drivers Pie"
            caption="แรงขับ BIM ในไทย—เอกชนร้องขอเป็นสัดส่วนหลัก (ใส่ตัวเลขจริงในภาพได้)"
          />
        </section>

        {/* Benefits (อาจรวมหลาย benefit ในภาพเดียว หรือแยกภาพเป็นแผงได้) */}
        <ImageBlock
          src="/images/docs/bim-5d/benefits-bar.png"
          label="Perceived Benefits Bar"
          caption="ประโยชน์ที่ผู้รับเหมาไทยมักใช้จริง: Clash Detection, Fast Updates, Accurate QTO"
        />

        {/* Compliance vs Transformation */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-4 w-4" />
                Compliance vs. Transformation Dichotomy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                แรงกดดันจากลูกค้าทำให้องค์กรจำนวนมากมีทัศนคติ “ทำตามข้อกำหนด” (เพื่อผ่านเกณฑ์ประมูล)
                แทนการปฏิรูปกระบวนการทำงานทั้งองค์กร เกิด “BIM Façade”—ภาพว่ามี BIM แต่ยังเก็บเกี่ยวคุณค่าไม่เต็มที่
              </p>
              <p className="mt-2">
                โซลูชันที่ตลาดต้องการจึงไม่ใช่แค่เครื่องมือ แต่คือ “เวิร์กโฟลว์ที่สมบูรณ์ ใช้งานง่าย มีคุณค่าจับต้องได้ทันที”
                เพื่อผลักดันการลงทุนเชิงลึกและการเปลี่ยนผ่านจริง
              </p>
            </CardContent>
          </Card>

          {/* รูปแทน stacked bar */}
          <ImageBlock
            src="/images/docs/bim-5d/compliance-vs-transformation.png"
            label="Compliance vs Transformation (100% stacked)"
            caption="สัดส่วนองค์กรที่เน้น 'ทำตามข้อกำหนด' เทียบ 'เปลี่ยนองค์กร' (ปรับกราฟ/คำอธิบายในรูปได้)"
          />
        </section>

        {/* Obstacles */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Landmark className="h-4 w-4" />
                อุปสรรคสำคัญในการนำ BIM ไปใช้งาน
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>การลงทุนสูงและต่อเนื่อง (ซอฟต์แวร์/ฮาร์ดแวร์/อบรม/ผู้เชี่ยวชาญ)</li>
                <li>ขาดแคลนบุคลากรและความรู้ตลอดสายงาน</li>
                <li>การสนับสนุน/มาตรฐานกลางจากภาครัฐยังไม่ชัด</li>
                <li>การต่อต้านการเปลี่ยนแปลง โดยเฉพาะใน SMEs</li>
              </ul>
              <p className="mt-2">
                แนวทางแก้ที่ยั่งยืน: ลดภาระต้นทุนตั้งต้น, ลดความต้องการทักษะสูง, และบูรณาการกับเวิร์กโฟลว์เดิมได้อย่างราบรื่น
              </p>
            </CardContent>
          </Card>

          {/* รูปแทนเรดาร์อุปสรรค */}
          <ImageBlock
            src="/images/docs/bim-5d/obstacles-radar.png"
            label="Adoption Barriers Radar"
            caption="ภาพเรดาร์สะท้อนระดับอุปสรรคหลัก—สูงยิ่งเป็นปัญหา (กำหนดสเกล/คะแนนในภาพตามจริง)"
          />
        </section>

        {/* Investment barrier */}
        <ImageBlock
          src="/images/docs/bim-5d/investment-index.png"
          label="Investment Barrier — Indexed"
          caption="ภาระต้นทุนเริ่มต้น (ตัวอย่าง: Revit ≈ 100 = เงินเดือนวิศวกรจบใหม่ 1 ปี) — ปรับตัวเลข/รายละเอียดในภาพได้"
        />

        <Separator />

        {/* Callout — Why this matters now */}
        <section className="space-y-4 max-w-3xl">
          <div className="rounded-2xl border p-5 bg-orange-50/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
              <IconLineChart className="h-4 w-4" />
              จุดร่วมของ “ความท้าทาย” และ “โอกาส”
            </div>
            <p className="mt-2 text-sm text-orange-900/90">
              หากโซลูชันสามารถลดต้นทุนเริ่มต้น, กำจัดความซับซ้อน, และเชื่อมเข้ากับงานประจำวันได้จริง—
              BIM 5D จะกลายเป็นตัวช่วยตัดสินใจด้านต้นทุนที่ใช้งานได้ทุกวัน ไม่ใช่เพียง “คุณสมบัติในเอกสารเสนอราคา”
            </p>
          </div>
        </section>

        {/* Takeaways */}
        <section aria-label="Takeaways" className="space-y-3 max-w-3xl rounded-2xl border p-5 bg-background">
          <h3 className="text-base md:text-lg font-semibold">สรุปประเด็นสำหรับการออกแบบโซลูชัน</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>โฟกัส “คุณค่าที่จับต้องได้ทันที” เพื่อลด mindset แบบ <em>compliance only</em></li>
            <li>ลดต้นทุนเริ่มต้น และลดสกิลที่ต้องการ เพื่อเปิดประตูให้ SME</li>
            <li>หลอมรวมเวิร์กโฟลว์จริง ไม่ใช่แค่เครื่องมือแยกส่วน</li>
            <li>เตรียมทางเชื่อมกับมาตรฐาน/ภาครัฐ เมื่อตลาดพร้อม</li>
          </ul>
        </section>
      </div>
    </SidebarInset>
  )
}
