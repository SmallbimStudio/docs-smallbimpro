// src/app/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import MacLeamyChartCard from "@/components/cards/MacLeamyChartCard"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-8">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance leading-tight">
            “คุณจะมองเห็นงบประมาณก่อสร้างของงานออกแบบของคุณครั้งแรก <span className="whitespace-nowrap">ตอนไหน?”</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            คำถามสั้น ๆ ที่สะท้อน “ช่องว่าง” ในกระบวนการทำงานของเรา และชี้ให้เห็นว่าช่วงเวลาในการตัดสินใจ
            มีผลต่อทั้งคุณภาพและต้นทุนมากแค่ไหน
          </p>
        </header>

        <Separator />

        {/* Narrative */}
        <section aria-label="บทนำ" className="prose max-w-3xl prose-p:leading-relaxed prose-li:leading-relaxed prose-headings:scroll-m-20">
          <p>
            ลองถามตัวเองอีกครั้ง—เราเห็นงบก่อสร้าง “เมื่อทุกอย่างเสร็จแล้ว” ใช่ไหม?
            กระบวนการแบบนั้นทำให้เราแก้แบบไม่ทัน และปัญหาจริงมักเผยตัวเมื่อเข้าสู่การเขียนแบบก่อสร้าง
            ซึ่งต้องการความละเอียดสูง แต่มีเวลาปรับแก้น้อยที่สุด
          </p>

          <p>
            หากอ้างอิง <strong>MacLeamy Curve</strong> ที่อธิบายความสัมพันธ์ระหว่าง
            <em>ต้นทุน</em> และ <em>ความพยายาม</em> ในแต่ละระยะ ปัญหามักปะทุในช่วง
            Construction Documentation เพราะทั้งการปรับสเปก การลงรายละเอียดที่ขัดกัน
            และการไม่วางแผนงบประมาณตั้งแต่ต้น มักมารวมกันเป็นคอขวด
          </p>

          <p>
            นี่คือจุดตัดระหว่าง <strong>Impact on Cost/Performance</strong> กับ{" "}
            <strong>Cost of Design Changes</strong>: เปลี่ยนเร็ว ต้นทุนต่ำ — เปลี่ยนช้า ต้นทุนพุ่ง
            โครงการจำนวนไม่น้อยจึงล่าช้าหรือบานปลาย
          </p>

          <blockquote className="mt-6">
            <strong>“แล้วถ้าคุณควบคุมงบประมาณได้ตั้งแต่วันแรกของการออกแบบล่ะ?”</strong>
          </blockquote>

          <p>
            หากเราขยับงานวิเคราะห์และการตัดสินใจมาไว้ต้นทาง ทั้งงานออกแบบ, งานเขียนแบบ,
            และงบประมาณจะเดินไปด้วยกัน ลดความเสี่ยงอย่างมีนัยสำคัญ—เครื่องมือที่ดีคือกุญแจสำคัญ
          </p>

          <blockquote className="mt-6">
            <strong>“ทุกการปรับเปลี่ยนคือการลงทุน—ควบคุมได้ตั้งแต่แรก ต้นทุนจะกลายเป็นตัวเลขที่จัดการได้”</strong>
          </blockquote>
        </section>

        {/* Chart */}
        <section aria-label="MacLeamy Chart" className="space-y-4">
          <MacLeamyChartCard
            initialBimEnabled={false}
            initialWorkSpeed={50}
            initialDesignQuality={50}
            initialAnalysisType="overview"
            className="rounded-2xl border"
          />
          <p className="text-sm text-muted-foreground">
            ใช้ตัวเลื่อน “ประสิทธิภาพกระบวนงาน / คุณภาพแบบ” ใต้กราฟเพื่อดูผลแบบเรียลไทม์
            และปรับ <em>Analysis Type</em> เพื่อโฟกัสที่ Cost หรือ Efficiency
          </p>
        </section>

        <Separator />

        {/* Takeaways */}
        <section aria-label="สรุปแนวคิด" className="space-y-3 max-w-3xl">
          <h3 className="text-base md:text-lg font-semibold">สรุปแนวคิด MacLeamy Curve</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>ต้นโครงการ: ปรับได้ง่าย ผลกระทบมาก แต่ต้นทุนต่ำ</li>
            <li>เข้าใกล้ Doc/Construction: ต้นทุนการเปลี่ยนแปลงสูงขึ้นรวดเร็ว</li>
            <li><strong>BIM</strong> ช่วยย้ายภาระงานมาที่ช่วง Detail ลดความผิดพลาดปลายทาง</li>
          </ul>
        </section>
      </div>
    </SidebarInset>
  )
}
