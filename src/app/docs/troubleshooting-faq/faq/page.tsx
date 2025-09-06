// src/app/docs/troubleshooting-faq/faq/page.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type FaqItem = {
  id: string
  q: string
  a: React.ReactNode
  tags?: string[]
}

const FAQS: FaqItem[] = [
  {
    id: "install-1",
    q: "ติดตั้งไม่ผ่าน/ขึ้น Error ตอน Install ต้องทำอย่างไร?",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          ตรวจสอบสิทธิ์ Administrator และปิดโปรแกรม Revit ก่อนติดตั้งทุกครั้ง
          หากอยู่ในองค์กรให้ IT อนุญาตการติดตั้งจากไฟล์เซ็ตอัปของเรา
        </p>
        <ul className="list-disc pl-5">
          <li>ใช้ไฟล์ติดตั้งล่าสุดจากหน้า <Link href="/docs/download-installation" className="underline">Download and Installation</Link></li>
          <li>สแกนแอนติไวรัสหรือ Windows SmartScreen อาจบล็อก—กด Allow</li>
          <li>ถ้ายังไม่ผ่าน เก็บไฟล์ Log/สกรีนช็อต แล้วติดต่อทีมสนับสนุน</li>
        </ul>
      </div>
    ),
    tags: ["install", "windows", "permission"],
  },
  {
    id: "license-1",
    q: "แอคทิเวตไลเซนส์ไม่สำเร็จ / หมดอายุ ทั้งที่เพิ่งซื้อมา",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          เปิดอินเทอร์เน็ตและตรวจวันที่/เวลาเครื่อง จากนั้นทำตามขั้นตอนใน{" "}
          <Link href="/docs/activate-license" className="underline">Activate License</Link>.
          ใช้หน้า <Link href="/docs/license-status" className="underline">License Status</Link> เพื่อตรวจสถานะล่าสุด
        </p>
        <p>
          หากย้ายเครื่อง ให้ทำการ Deactivate ในเครื่องเก่าก่อนแล้วค่อย Activate เครื่องใหม่
        </p>
      </div>
    ),
    tags: ["license", "activate"],
  },
  {
    id: "boq-1",
    q: "ปุ่ม BOQ ไม่ขึ้นไฟล์ผลลัพธ์ / ตารางว่างเปล่า",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>ตรวจสอบเงื่อนไขเบื้องต้นดังนี้:</p>
        <ul className="list-disc pl-5">
          <li>โมเดลต้องสะอาดและใส่พารามิเตอร์ตามแม่แบบ (Template/Shared Parameters)</li>
          <li>ตั้งค่าใน <Link href="/docs/boq-tools/model-data-management" className="underline">Model Data Management</Link> ให้ครบ (Mapping / Units / Rounding)</li>
          <li>ลองรันใหม่ในไฟล์ทดสอบเพื่อตัดปัจจัยจากโมเดลเดิม</li>
        </ul>
      </div>
    ),
    tags: ["boq", "data", "template"],
  },
  {
    id: "perf-1",
    q: "ทำไมกดคำสั่งแล้วช้าหรือกระตุกมาก?",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <ul className="list-disc pl-5">
          <li>ปิด Worksets/ลิงก์ที่ไม่จำเป็น ลดขอบเขตการเลือก (Selection)</li>
          <li>ใช้มุมมองเฉพาะชั้น/เฉพาะโซน แทนทั้งอาคาร</li>
          <li>อัปเดต Revit และไลบรารี Add-in ให้เป็นเวอร์ชันล่าสุด</li>
        </ul>
      </div>
    ),
    tags: ["performance", "revit"],
  },
  {
    id: "model-1",
    q: "Foundation Rebar สร้างเหล็กไม่ครบ/ผิดทิศ",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          ตรวจสอบการกำหนด Cover/Spacing/Bar Size ในพรีเซ็ต และทิศแกนของ Family.
          คู่มือการใช้งานดูที่ <Link href="/docs/modeling-tools/foundation-rebar" className="underline">Foundation Rebar</Link>
        </p>
      </div>
    ),
    tags: ["rebar", "modeling-tools"],
  },
  {
    id: "tag-1",
    q: "Tag ในมุมมองแปลนซ้อนทับกัน แก้ยังไง?",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>ใช้คำสั่งแท็กเฉพาะที่เลือก หรือลดความหนาแน่นการแสดงผล:</p>
        <ul className="list-disc pl-5">
          <li>แท็กแยกประเภท (เช่น Door/Window/Wall แยกกัน)</li>
          <li>เปิด/ปิด Workset/Category ชั่วคราวเพื่อลดความแน่น</li>
          <li>ดูปุ่มที่เกี่ยวข้องในกลุ่ม <Link href="/docs/modeling-tools/tag-all-columns" className="underline">Modeling Tools – Tags</Link></li>
        </ul>
      </div>
    ),
    tags: ["tag", "plan"],
  },
  {
    id: "export-1",
    q: "ส่งออก BOQ ไป Excel/Power BI อย่างไร?",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          ปุ่ม <Link href="/docs/boq-tools/boq" className="underline">BOQ</Link> จะสร้างไฟล์ผลลัพธ์ (.xlsx/.csv)
          ที่มีโครงสร้างพร้อมใช้งาน BI. ดูการเชื่อมต่อ Power BI ได้ใน{" "}
          <Link href="/docs/background-research/beyond-boq" className="underline">Beyond BOQ: Data &amp; Future</Link>
        </p>
      </div>
    ),
    tags: ["export", "excel", "power-bi"],
  },
  {
    id: "online-1",
    q: "Online BOQ Transfer ไม่ซิงก์/ไฟล์ไม่อัปเดต",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <ul className="list-disc pl-5">
          <li>ตรวจอินเทอร์เน็ต/พร็อกซีองค์กร</li>
          <li>เช็กรูปแบบบัญชี/สิทธิ์การเข้าถึงใน <Link href="/docs/online-boq" className="underline">Online BOQ Transfer</Link></li>
        </ul>
      </div>
    ),
    tags: ["service", "online"],
  },
  {
    id: "std-1",
    q: "ทำไมปริมาณจาก Revit ไม่ตรงมาตรฐาน CGD?",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          จำเป็นต้องใช้กฎเผื่อ/ตรรกะท้องถิ่นเพิ่มเติม (Accuracy Paradox). ศึกษาแนวคิดได้ที่{" "}
          <Link href="/docs/background-research/revit-qto-limitations" className="underline">Revit QTO Limitations</Link>{" "}
          และโซลูชัน Add-in ใน{" "}
          <Link href="/docs/background-research/our-solution" className="underline">Our Solution: Revit Add-in</Link>
        </p>
      </div>
    ),
    tags: ["standard", "cgd", "qto"],
  },
  {
    id: "reset-1",
    q: "ติดตั้งแล้วเมนูไม่ขึ้น/ไม่เห็นแถบ Add-in",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <ul className="list-disc pl-5">
          <li>ปิด Revit แล้วเปิดใหม่ด้วยสิทธิ์ Administrator</li>
          <li>ตรวจโฟลเดอร์ Add-ins ของเวอร์ชัน Revit ให้ถูกปี</li>
          <li>ซ่อมแซม (Repair) จากโปรแกรมติดตั้ง ถ้ายังไม่ขึ้นให้ติดต่อเรา</li>
        </ul>
      </div>
    ),
    tags: ["ui", "install"],
  },
]

export default function TroubleshootingFaqPage() {
  const [query, setQuery] = React.useState("")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FAQS
    return FAQS.filter((f) => {
      const hay = (f.q + " " + (Array.isArray(f.a) ? "" : (typeof f.a === "string" ? f.a : "")) + " " + (f.tags ?? []).join(" ")).toLowerCase()
      return hay.includes(q)
    })
  }, [query])

  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Troubleshooting &amp; FAQ
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            ศูนย์ช่วยเหลือการติดตั้ง การใช้งาน และคำถามที่พบบ่อย — ค้นหาคำตอบอย่างรวดเร็ว
          </p>
        </header>

        <Separator />

        {/* Search + Quick links */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="พิมพ์คำค้น เช่น license, BOQ, rebar …"
                className="h-10"
              />
              <Button variant="outline" onClick={() => setQuery("")}>
                เคลียร์
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/docs/download-installation" className="group">
              <Card className="h-full transition-colors group-hover:bg-muted/50 rounded-xl">
                <CardHeader className="py-3">
                  <CardTitle className="text-sm">ติดตั้งโปรแกรม</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/docs/activate-license" className="group">
              <Card className="h-full transition-colors group-hover:bg-muted/50 rounded-xl">
                <CardHeader className="py-3">
                  <CardTitle className="text-sm">Activate License</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* FAQ list */}
          <section className="lg:col-span-2 space-y-3" aria-label="FAQ">
            {filtered.length === 0 ? (
              <Card className="rounded-2xl">
                <CardContent className="py-8 text-sm text-muted-foreground">
                  ไม่พบผลลัพธ์ที่ตรงกับ “{query}”
                </CardContent>
              </Card>
            ) : (
              filtered.map((item) => (
                <details key={item.id} className="group rounded-2xl border bg-background open:bg-muted/20">
                  <summary className="cursor-pointer list-none p-4 md:p-5 flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-xs">
                      ?
                    </span>
                    <span className="font-medium text-base md:text-lg">{item.q}</span>
                  </summary>
                  <Separator />
                  <div className="p-4 md:p-5">{item.a}</div>
                </details>
              ))
            )}
          </section>

          {/* Right column: help cards */}
          <aside className="space-y-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">เช็กลิสต์แก้ปัญหาเร็ว</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>ปิด Revit และเปิดใหม่ (Run as Administrator)</li>
                  <li>อัปเดต Add-in &amp; Revit เป็นเวอร์ชันล่าสุด</li>
                  <li>ทดสอบในไฟล์โมเดลตัวอย่าง/ไฟล์ใหม่</li>
                  <li>ตรวจสิทธิ์ไฟล์/โฟลเดอร์ และอินเทอร์เน็ต</li>
                  <li>เก็บสกรีน/Log แล้วติดต่อทีมสนับสนุน</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">ลิงก์ที่เกี่ยวข้อง</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><Link href="/docs/license-status" className="underline">ตรวจสอบสถานะไลเซนส์ (License Status)</Link></li>
                  <li><Link href="/docs/boq-tools/boq" className="underline">คู่มือปุ่ม BOQ</Link></li>
                  <li><Link href="/docs/boq-tools/model-data-management" className="underline">ตั้งค่า Model Data Management</Link></li>
                  <li><Link href="/docs/modeling-tools/foundation-rebar" className="underline">Foundation Rebar</Link></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">ติดต่อทีมสนับสนุน</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  หากยังแก้ปัญหาไม่ได้ ส่งรายละเอียดเวอร์ชัน Revit/SmallBIM, สกรีนช็อต, และขั้นตอนที่ทำ
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>อีเมล: <a className="underline" href="mailto:support@smallbim.studio">support@smallbim.studio</a></li>
                  <li>ไฟล์แนบ: Log/ภาพหน้าจอ/ไฟล์ตัวอย่าง (ถ้ามี)</li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </SidebarInset>
  )
}
