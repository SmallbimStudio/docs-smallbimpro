// src/app/docs/background-research/revit-qto-limitations/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AlertTriangle, Layers, Wrench, Ruler, ListChecks } from "lucide-react"

/** ImageBlock — วางภาพประกอบ (หรือปล่อยเป็น placeholder ได้)
 *  - ใส่ไฟล์ไว้ใน /public/images/docs/research/ แล้วอ้าง src="/images/..."
 *  - เปลี่ยน aspect เป็นค่า tailwind เช่น 'aspect-video', 'aspect-square'
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

export default function RevitQtoLimitationsPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-orange-800">
            “การวิเคราะห์เชิงลึก: ข้อจำกัดของ Revit มาตรฐานสำหรับการถอดปริมาณ”
          </h1>
          <p className="text-base md:text-lg text-orange-700/80">
            แม้ Revit จะทรงพลังและแพร่หลาย แต่การใช้งานแบบ out-of-the-box เพื่อ QTO
            ยังมีข้อจำกัดเชิงโครงสร้างที่กระทบความแม่นยำและความน่าเชื่อถือของข้อมูล
          </p>
        </header>

        <Separator />

        {/* Narrative — Intro */}
        <section
          aria-label="Intro"
          className="prose max-w-3xl prose-p:leading-relaxed prose-li:leading-relaxed"
        >
          <p>
            แนวคิดที่ว่าสร้างโมเดล 3 มิติครั้งเดียวแล้ว “กดปุ่มออก BOQ” ให้ถูกต้องครบถ้วน
            เป็นความเข้าใจที่คลาดเคลื่อน ความถูกต้องของปริมาณขึ้นอยู่กับ
            <strong> วิธีการสร้างแบบจำลอง (Modeling for Takeoff)</strong> อย่างมาก
            และเวิร์กโฟลว์ QTO ใน Revit ยังต้องอาศัยความเชี่ยวชาญเชิงลึก
            ทั้งการออกแบบพารามิเตอร์ การตั้งค่าคุณสมบัติ และเทคนิคการจัดการตาราง
          </p>
        </section>

        {/* Key tensions */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Layers className="h-4 w-4" />
                Conflict of Purpose — Modeling vs. Takeoff
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                โมเดลที่เหมาะกับ QTO (เช่น แยกผิวฉาบ/ทาสีเป็นองค์ประกอบ)
                มักทำให้โมเดล “หนัก–ซับซ้อน” เกินความจำเป็นสำหรับงานเขียนแบบ/visualization
                เกิดภาวะกลืนไม่เข้าคายไม่ออกระหว่างความต้องการของแต่ละงานใช้
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Wrench className="h-4 w-4" />
                Complexity &amp; Expert Requirement
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                QTO ใน Revit ไม่ใช่แค่ “ดึงข้อมูลที่มี” แต่ต้องเข้าใจ
                input–output dynamics ของซอฟต์แวร์ สร้างพารามิเตอร์ที่ถูก
                กรอง/จัดกลุ่มใน Schedules ให้ตรงโจทย์—ทักษะที่อยู่นอกเหนือผู้ใช้ทั่วไป
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Image example: Modeling for Takeoff */}
        <ImageBlock
          src="/images/docs/research/modeling-for-takeoff.png"
          label="Modeling for Takeoff"
          caption="ตัวอย่างโมเดลที่แยกผิวฉาบ/ทาสี เพื่อ QTO — ได้ความแม่นยำแต่เพิ่มความซับซ้อนของโมเดล"
        />

        <Separator />

        {/* Data manipulation limit */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <ListChecks className="h-4 w-4" />
                Data Manipulation in Schedules (จำกัด)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                ตารางปริมาณของ Revit ปรับแต่ง/คำนวณได้จำกัด ผู้ใช้จึงมัก{" "}
                <strong>Export ไป Excel</strong> เพื่อทำสูตรและจัดรูปแบบต่อ
                ซึ่งทำลายหลัก <em>Single Source of Truth</em> ของ BIM ทันที
              </p>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/schedule-vs-excel.png"
            label="Schedules → Excel"
            caption="เมื่อส่งออกไปแก้ไขภายนอก ความสอดคล้องของข้อมูลหายไป และเกิดเวอร์ชันหลายชุด"
          />
        </section>

        {/* Difficult-to-Quantify elements */}
        <section className="prose max-w-3xl prose-p:leading-relaxed">
          <h3>องค์ประกอบที่ถอดปริมาณได้ยาก</h3>
          <p className="text-muted-foreground">
            หลายหมวดงานเผยข้อจำกัดของ Revit มาตรฐานอย่างชัดเจน โดยเฉพาะ:
          </p>
        </section>

        {/* Rebar */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Ruler className="h-4 w-4" />
                Rebar — Accuracy Paradox
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Revit ให้ “ความยาวสุทธิ” ได้แม่นยำ แต่มัก{" "}
                <strong>ต่ำกว่าปริมาณสั่งซื้อจริง</strong> เพราะยังไม่รวม
                cutting waste/เศษทิ้ง/ระยะทาบ หากไม่เพิ่มค่าเผื่อภายหลัง
                จะทำให้สั่งของไม่พอ
              </p>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/rebar-accuracy-paradox.png"
            label="Rebar Accuracy Paradox"
            caption="กราฟตัวอย่าง: ปริมาณสุทธิจากโมเดล vs ปริมาณสั่งซื้อจริง (รวม waste/ทาบ)"
          />
        </section>

        {/* Formwork */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Wrench className="h-4 w-4" />
                Formwork — ไม่ใช่ use-case ตามธรรมชาติของ BIM
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                ไม่มีเครื่องมือเฉพาะสำหรับไม้แบบ การพยายามใช้ Wall/Slab
                มาดัดแปลงใช้จึงกินเวลาและให้ผลคลาดเคลื่อนสูง โดยเฉพาะตามรอยต่อ/ซ้อนทับ
              </p>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/formwork-difficulty.png"
            label="Formwork Modeling Difficulty"
            caption="สเก็ตช์เวิร์กโฟลว์ทำไม้แบบด้วยองค์ประกอบอื่น—ซับซ้อนและเสียง่าย"
          />
        </section>

        {/* Finishes */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Layers className="h-4 w-4" />
                Coatings &amp; Finishes — พื้นที่ผิวคลาดเคลื่อน
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                การดึงพื้นที่ผิวจากโมเดลอาจ <strong>ไม่หักลบช่องเปิด</strong>{" "}
                (ประตู/หน้าต่าง) ทุกกรณี การแยกเป็นองค์ประกอบเฉพาะช่วยให้ตรงขึ้น
                แต่ทำให้โมเดลใหญ่และซับซ้อน
              </p>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/finishes-surface-issue.png"
            label="Finishes Area Issue"
            caption="ตัวอย่างการคำนวณพื้นที่ผิวที่ไม่หักช่องเปิด และผลกระทบต่อ BOQ"
          />
        </section>

        {/* Local standards */}
        <section className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <ListChecks className="h-4 w-4" />
                Local Standards — CGD/SMM ไม่สอดคล้องโดยตรง
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                กฎการวัดของไทย (เช่น CGD) มีรายละเอียด/การปัดเศษ/วิธีคิดเผื่อ
                ที่ Revit ไม่รองรับอัตโนมัติ ทำให้ต้องส่งออกไปปรับใน Excel อีกทอด
              </p>
            </CardContent>
          </Card>

          <ImageBlock
            src="/images/docs/research/local-standard-mapping.png"
            label="Local Measurement Mapping"
            caption="ไดอะแกรมแมปพารามิเตอร์ → กฎ CGD/SMM ที่ต้องเติมด้วยตรรกะเพิ่มเติม"
          />
        </section>

        <Separator />

        {/* Accuracy Paradox — Callout */}
        <section className="space-y-4 max-w-3xl">
          <div className="rounded-2xl border p-5 bg-orange-50/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
              <AlertTriangle className="h-4 w-4" />
              ความขัดแย้งเชิงความแม่นยำ (Accuracy Paradox)
            </div>
            <p className="mt-2 text-sm text-orange-900/90">
              ด้านหนึ่ง Revit ให้ “ค่าที่แม่นยำเกินไป” (สุทธิ ไม่รวมเผื่อ/สูญเสีย)
              แต่อีกด้าน “ไม่แม่นพอ” ต่อมาตรฐาน/เวิร์กโฟลว์ก่อสร้างจริง
              ผู้ประมาณราคาจึงไม่อาจเชื่อมั่นตัวเลขที่ได้ และจำเป็นต้องกลับไปเพิ่ม
              <em>rules of thumb</em> ใน Excel — ทำลายแก่นของ 5D BIM
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
            <li>
              QTO ที่เชื่อถือได้ต้องเริ่มจาก <strong>วิธีสร้างโมเดลเพื่อการถอด</strong>{" "}
              ไม่ใช่เพียง “กดดึงข้อมูล”
            </li>
            <li>
              ความสามารถของ Schedules มีขีดจำกัด—การส่งออกไป Excel
              ทำให้สูญเสียแหล่งข้อมูลชุดเดียว (SSOT)
            </li>
            <li>
              Rebar/Formwork/Finishes/มาตรฐานท้องถิ่น คือจุดอ่อนหลักของ Revit มาตรฐาน
            </li>
            <li>
              จำเป็นต้องมี <strong>กฎการก่อสร้างแบบตั้งโปรแกรมได้</strong>{" "}
              (เช่น เผื่อคอนกรีต 5% ระยะทาบตาม DB) ฝังในเวิร์กโฟลว์
              เพื่อให้ได้ข้อมูล <em>construction-ready</em> จริง
            </li>
          </ul>
        </section>

        {/* (เลือกใส่) CTA ไปหน้าทางออก */}
        {/* <div className="text-sm">
          <a
            href="/docs/getting-started/innovative-solution-revit-addin"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-muted"
          >
            ดูทางออก: Revit Add-in สำหรับ BOQ อัตโนมัติ →
          </a>
        </div> */}
      </div>
    </SidebarInset>
  )
}
