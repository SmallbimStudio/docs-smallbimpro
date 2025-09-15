// src/app/docs/faq/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type FaqItem = {
  id: string
  q: string
  a: React.ReactNode
}

type FaqCategory = {
  title: string
  items: FaqItem[]
}

const FAQS: FaqCategory[] = [
  {
    title: "ทั่วไป (General)",
    items: [
      { id: "general-1", q: "Small BIM PRO คืออะไร?", a: "Small BIM PRO เป็น Revit Add-in ที่ช่วยด้าน BOQ และเพิ่มประสิทธิภาพการทำงานใน Revit" },
      { id: "general-2", q: "รองรับภาษาไทยไหม?", a: "รองรับภาษาไทยเต็มรูปแบบ โดยเฉพาะ Keynote และ BOQ ที่ใช้ในไทย" },
      { id: "general-3", q: "รองรับการใช้งานร่วมกับ Add-in อื่นไหม?", a: "สามารถใช้งานร่วมกับ Add-in อื่นของ Revit ได้ตามปกติ" }
    ]
  },
  {
    title: "การติดตั้ง (Installation)",
    items: [
      { id: "install-1", q: "ติดตั้งอย่างไร?", a: "ติดตั้งผ่านไฟล์ Setup ที่จัดเตรียมไว้ รองรับ Windows 10/11 ควรปิด Revit ก่อนติดตั้งทุกครั้ง" },
      { id: "install-2", q: "ใช้กับเครื่อง Mac ได้หรือไม่?", a: "ไม่รองรับโดยตรง ต้องติดตั้ง Windows และ Revit ผ่าน Bootcamp หรือ Virtual Machine" }
    ]
  },
  {
    title: "ไลเซนส์ (License)",
    items: [
      { id: "license-1", q: "License ใช้งานได้กี่เครื่อง?", a: "1 License / 1 เครื่อง (สามารถย้ายได้ แต่ใช้งานพร้อมกันหลายเครื่องไม่ได้)" },
      { id: "license-2", q: "หากเปลี่ยนคอมพิวเตอร์ สามารถย้าย License ได้หรือไม่?", a: "สามารถย้ายได้ โดยทำการ Deactivate เครื่องเก่า ก่อน Activate เครื่องใหม่" },
      { id: "license-3", q: "อัพเดทฟรีไหม?", a: "License ถาวร (Lifetime) + Early Bird จะได้รับอัปเดตฟรีตลอดชีพ" },
      { id: "license-4", q: "ระบบความปลอดภัยของ License เป็นแบบไหน?", a: "ใช้ Machine ID + Activation Key ป้องกันการละเมิดสิทธิ์การใช้งาน" },
      { id: "license-5", q: "มีเวอร์ชันทดลอง (Trial) หรือไม่?", a: "มีเวอร์ชันทดลองฟรี 7 วัน ใช้งานครบทุกฟีเจอร์" }
    ]
  },
  {
    title: "การใช้งาน (Usage)",
    items: [
      { id: "usage-1", q: "Small BIM PRO ใช้กับ Revit เวอร์ชันไหนได้?", a: "ในเวอร์ชันแรก รองรับ Revit 2024 เท่านั้น" },
      { id: "usage-2", q: "ต้องต่ออินเทอร์เน็ตตลอดเวลาหรือไม่?", a: "หลัง Activate สามารถใช้งาน Offline ได้ แต่ต้องต่ออินเทอร์เน็ตเมื่ออัปเดตหรือใช้ฐานข้อมูลออนไลน์" }
    ]
  },
  {
    title: "การสนับสนุน (Support)",
    items: [
      { id: "support-1", q: "มีทีม Support ไหม?", a: "มีทีมงานให้ความช่วยเหลือผ่าน Facebook Fanpage - Small BIM Studio และอีเมล smallbim.studio@gmail.com" },
      { id: "support-2", q: "ราคาเท่าไหร่?", a: "ราคาเต็ม 12,500 บาท/License โปรโมชั่น Early Bird ลดเหลือ 7,500 บาท/License" }
    ]
  }
]

export default function FaqPage() {
  const [query, setQuery] = React.useState("")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FAQS
    return FAQS.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.q.toLowerCase().includes(q) || 
        (typeof item.a === "string" && item.a.toLowerCase().includes(q))
      )
    })).filter(cat => cat.items.length > 0)
  }, [query])

  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">

        {/* Header */}
        <header className="space-y-3 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            FAQ – คำถามที่พบบ่อย
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            รวมคำถามหมวดหมู่ พร้อมระบบค้นหาเพื่อหาคำตอบได้รวดเร็ว
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
                placeholder="พิมพ์คำค้น เช่น license, install, BOQ …"
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

        {/* FAQ + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* FAQ list */}
          <section className="lg:col-span-2 space-y-8">
            {filtered.length === 0 ? (
              <Card className="rounded-2xl">
                <CardContent className="py-8 text-sm text-muted-foreground">
                  ไม่พบผลลัพธ์ที่ตรงกับ “{query}”
                </CardContent>
              </Card>
            ) : (
              filtered.map(cat => (
                <div key={cat.title} className="space-y-4">
                  <h2 className="text-2xl font-bold">{cat.title}</h2>
                  <div className="space-y-3">
                    {cat.items.map(item => (
                      <details
                        key={item.id}
                        className="group rounded-2xl border bg-background open:bg-muted/20"
                      >
                        <summary className="cursor-pointer list-none p-4 md:p-5 flex items-start gap-3">
                          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-xs">
                            ?
                          </span>
                          <span className="font-medium text-base md:text-lg">
                            {item.q}
                          </span>
                        </summary>
                        <Separator />
                        <div className="p-4 md:p-5 text-sm text-muted-foreground">
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))
            )}
          </section>

          {/* Sidebar */}
          <aside className="space-y-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">เช็กลิสต์แก้ปัญหาเร็ว</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>ปิด Revit และเปิดใหม่ (Run as Administrator)</li>
                  <li>อัปเดต Add-in & Revit เป็นเวอร์ชันล่าสุด</li>
                  <li>ทดสอบในไฟล์โมเดลใหม่/ไฟล์ตัวอย่าง</li>
                  <li>ตรวจสิทธิ์ไฟล์และการเชื่อมต่ออินเทอร์เน็ต</li>
                  <li>เก็บ Log/ภาพหน้าจอ แล้วติดต่อทีมสนับสนุน</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">ลิงก์ที่เกี่ยวข้อง</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><Link href="/docs/license-status" className="underline">ตรวจสอบสถานะไลเซนส์</Link></li>
                  <li><Link href="/docs/boq-tools/boq" className="underline">คู่มือปุ่ม BOQ</Link></li>
                  <li><Link href="/docs/boq-tools/model-data-management" className="underline">Model Data Management</Link></li>
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
                  หากยังแก้ปัญหาไม่ได้ ส่งรายละเอียดเวอร์ชัน Revit/Small BIM PRO, ไฟล์ Log และสกรีนช็อต
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>อีเมล: <a href="mailto:smallbim.studio@gmail.com" className="underline">smallbim.studio@gmail.com</a></li>
                  <li>ไฟล์แนบ: Log/ภาพหน้าจอ/ไฟล์โมเดล (ถ้ามี)</li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </SidebarInset>
  )
}
