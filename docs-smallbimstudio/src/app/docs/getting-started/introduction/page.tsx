// src/app/page.tsx
"use client"

import * as React from "react"

import { SidebarInset } from "@/components/ui/sidebar"
import MacLeamyChartCard from "@/components/cards/MacLeamyChartCard"

import {
  ChartConfig,
} from "@/components/ui/chart"


/* ---------------- Chart config (legend colors/labels) ---------------- */
const chartConfig = {
  abilityToImpact: { label: "ความสามารถในการปรับเปลี่ยน", color: "#2563eb" },
  costOfChanges: { label: "ต้นทุนการเปลี่ยนแปลง", color: "#dc2626" },
  traditionalWorkflow: { label: "วิธีการทำงานแบบดั้งเดิม", color: "#1f2937" },
  bimWorkflow: { label: "BIM Workflow", color: "#16a34a" },
} satisfies ChartConfig


/* ================================ Page Layout ================================ */

export default function Page() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-6 flex flex-col gap-6">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance">
          &quot;คุณจะมองเห็น งบประมาณก่อสร้าง
        </h1>
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance">
          ของงานออกแบบของคุณครั้งแรก ตอนไหน?&quot;
        </h1><br/>
                
        <section className="prose max-w-none text-sm leading-relaxed">
          <p>
            ก่อนอื่น เรามาย้อนดูคำถามนี้กันอีกครั้ง เพื่อมองในมุมมองที่ลึกซึ้งมากยิ่งขึ้นกันครับ
            คำถามนี้ ชวนให้เราย้อนกลับมามองกระบวนการออกแบบของตัวเราเอง เป็นคำถามที่กระตุ้นให้นักออกแบบฉุกคิด
            เกี่ยวกับกระบวนการทำงาน และสะท้อนถึง <strong>&quot;ช่องว่าง&quot;</strong> ที่มักถูกมองข้ามในการออกแบบสถาปัตยกรรม
          </p><br/>

          <p>
            แน่นอนว่า คำตอบอาจจะยังคงเป็นคำตอบเดิม นั่นก็คือ
            <strong>&quot;คุณเห็นงบก่อสร้างของแบบเมื่อทุกอย่างเสร็จแล้ว เมื่อทุกอย่างเขียนแบบก่อสร้างเสร็จไปแล้วหรือเปล่า?&quot;</strong>
            ซึ่งกระบวนการลักษณะดังกล่าวนี้ทำให้นักออกแบบไม่สามารถปรับแก้แบบได้ทันกำหนดนั่นเอง หากอ้างอิงตามแนวคิด
            <strong> MacLeamy Curve</strong> ซึ่งแสดงความสัมพันธ์ระหว่างต้นทุน (Cost) และความพยายาม (Effort) ในแต่ละระยะของโครงการ
            ปัญหาในงานก่อสร้าง ส่วนใหญ่มักเริ่มปรากฏในช่วง Construction Documentation หรือช่วงการเขียนแบบก่อสร้าง หรือเขียนแบบขออนุญาตก่อสร้าง
            ซึ่งเป็นระยะที่งานต้องการความละเอียดสูงสุด ทว่า...กลับเป็นช่วงที่ทีมออกแบบมีเวลา <strong>&quot;แก้ไข&quot;</strong> ปัญหาน้อยที่สุด
            จนเป็นเหตุคอขวด ชวนให้เราปล่อยปัญหานี้ไป และเกิดเป็นความผิดพลาดในที่สุด
            <strong>เหตุเกิดจาก ทั้งความไม่เรียบร้อยของงานออกแบบ, การปรับเปลี่ยนสเปควัสดุ, การเขียนแบบและลงรายละเอียดที่ขัดแย้งกัน, การไม่วางแผนด้านงบประมาณกับงานออกแบบ, ฯลฯ</strong>
          </p><br/>

          <p>
            สาเหตุทั้งหมดนี้นำไปสู่ จุดตัดที่สำคัญ ระหว่าง Impact Cost and Performance และ Cost of Design Changes ซึ่งหมายถึง
            <strong>&quot;เมื่อเราปรับแบบในช่วงออกแบบแนวคิด (Concept Design) ต้นทุนการเปลี่ยนแปลงต่ำ แต่หากต้องแก้แบบตอนก่อสร้าง ต้นทุนที่เกิดขึ้นอาจสูงขึ้นหลายเท่า&quot;</strong>
            หลายๆ โครงการจึงจบลงด้วยความล่าช้าในการก่อสร้าง งบประมาณก่อสร้างที่เกินงบออกไปมหาศาล บางโครงการถึงกับล้มลงได้นั่นเอง
          </p><br/>

          <blockquote className="mt-6 border-l-2 pl-6 italic">
            <strong>&quot;แล้วถ้าคุณสามารถควบคุมงบประมาณตั้งแต่วันแรกของการออกแบบได้ล่ะ?&quot;</strong>
          </blockquote><br/>

          <p>
            หากการออกแบบปรับแก้ได้อย่างเต็มที่ในช่วงแรก รวมถึงการพัฒนาแบบทั้งงานออกแบบ งานเขียนแบบ และงบประมาณได้ตั้งแต่ต้น
            ความเสี่ยงเหล่านี้สามารถลดลงได้อย่างมาก การมีเครื่องมือที่ดีจึงกลายเป็นกุญแจสำคัญที่ช่วยให้ผู้ออกแบบควบคุมต้นทุนและคุณภาพได้อย่างสมบูรณ์แบบตั้งแต่แรกเริ่ม
          </p><br/>

          <blockquote className="mt-6 border-l-2 pl-6 italic">
            <strong>&quot;เพราะทุกการปรับเปลี่ยนในแบบคือการลงทุน หากควบคุมได้ตั้งแต่แรกเริ่ม ต้นทุนจะเป็นแค่ตัวเลขที่เราจัดการได้...ไม่ใช่ปัญหาที่เราต้องแก้ไขในภายหลัง&quot;</strong>
          </blockquote><br/>
        </section>


        
        <div className="space-y-6">
          {/* กราฟ: เต็มกรอบ */}
            <MacLeamyChartCard
              initialBimEnabled={false}
              initialWorkSpeed={50}
              initialDesignQuality={50}
              initialAnalysisType="overview"
              className=""
            />

          {/* สรุปแนวคิด: อยู่ใต้กราฟ ไม่ sticky */}
          <section className="space-y-4 text-sm leading-relaxed">
            <h3 className="text-base font-semibold">สรุปแนวคิด MacLeamy Curve</h3>
            <p>
              กราฟนี้อธิบายความสัมพันธ์ระหว่าง <strong>ความสามารถในการปรับเปลี่ยน</strong> และ{" "}
              <strong>ต้นทุนการเปลี่ยนแปลง</strong> ในแต่ละเฟส ตั้งแต่ Preliminary, Detail,
              Documentation, Construction ไปจนถึง Operation
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ช่วงต้นโครงการ ปรับเปลี่ยนได้ง่าย (ผลกระทบมาก) แต่ต้นทุนต่ำ</li>
              <li>ยิ่งเข้าสู่ Doc/Construction ต้นทุนการเปลี่ยนแปลงยิ่งสูง</li>
              <li>
                เปิดใช้ <strong>BIM</strong> จะย้ายภาระงานสู่ช่วง Detail ลดความผิดพลาดและค่าใช้จ่ายปลายทาง
              </li>
            </ul>
            <p className="text-muted-foreground">
              ใช้ตัวเลื่อน &quot;ประสิทธิภาพกระบวนงาน / คุณภาพแบบ&quot; ใต้กราฟเพื่อดูผลลัพธ์แบบ real-time
            </p>
            <p className="text-muted-foreground">
              เมนู <em>Analysis Type</em> ด้านขวาบนช่วยเน้นมุมมอง: Cost-Focused หรือ Efficiency
            </p>
          </section>
        </div>
      </div>
    </SidebarInset>
  )
}
