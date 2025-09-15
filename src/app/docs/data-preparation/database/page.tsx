// src/app/docs/data-preparation/database/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card"
import DatabaseCard from "@/components/cards/DatabaseCard"

export default function DatabasePage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Database
          </h1>
          <p className="text-base text-muted-foreground">
            Database เป็นระบบฐานข้อมูลของ Small BIM Studio มีหลักการทำงานคือ เมื่อผู้ใช้งานกำหนดรหัสต้นทุน หรือ Keynote ให้กับโมเดลแล้ว Add-in สามารถนำราคาบน Database เหล่านี้ เข้าไป Mapping กับปริมาณวัสดุของ Revit Model พร้อมทำการคำนวณราคาให้อัตโนมัติ เกิดเป็นรายการประมาณราคานั่นเอง แยกการใช้งานเป็น 2 โหมด: <strong>Online</strong> (เชื่อม JSON กลางอัปเดตได้)
            และ <strong>Offline</strong> (ชุดไฟล์ภายในองค์กร) เพื่อรองรับทั้งงานที่ต้องการข้อมูลล่าสุด
            และงานที่ต้องล็อกเวอร์ชันข้อมูล
          </p>
        </header>

        <Separator />

        {/* ===== VIDEO or IMAGE ===== */}
        <section className="text-center space-y-6">
          {false ? ( // เปลี่ยนเป็น true ถ้าอยากกลับมาโชว์วิดีโอ
            <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BxcIrjYSKrA"
                title="Download and Installation Small BIM PRO"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="">
              <img
                src="/images/docs/data-preparation/revit-database-cover.png"
                alt="Data Preparation Guide"
                className="rounded-xl shadow-lg"
              />
            </div>
          )}
        </section>

        {/* ========================== ONLINE ========================== */}
        <section className="space-y-4" aria-label="Online Database">
          <div>
            <h2 className="text-2xl font-bold">Online Database</h2>
            <p className="text-sm text-muted-foreground">
              โหมดออนไลน์จะดึงข้อมูลจากแหล่ง JSON กลาง (read-only) เพื่อให้ทีมได้ราคา/รายการล่าสุดเสมอ
              รองรับการค้นหา กรองหมวด และเลือกจำนวนแถวต่อหน้า
            </p>
          </div>

          {/* 🔌 ฝังการ์ดที่คุณเตรียมไว้ */}
          <DatabaseCard />

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">หมายเหตุการใช้งาน Online</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>การใช้งาน Online Database จะได้ราคาที่อัปเดตล่าสุด จากแหล่งเดียวที่น่าเชื่อถือได้ ทำให้ราคาตรงกันทุกโครงการ</li>
                <li>ถ้าอินเทอร์เน็ตไม่เสถียร แนะนำสลับใช้โหมด Offline ที่ด้านล่าง</li>
                <li>ในอนาคตอาจมีการเพิ่มฟีเจอร์ใหม่ๆ ราคาหลากหลายพื้นที่ในประเทศไทย เพื่อรองรับการทำงานที่หลากหลายมากขึ้น</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ========================== OFFLINE ========================== */}
        <section className="space-y-6" aria-label="Offline Database">
          <div>
            <h2 className="text-2xl font-bold">Offline Database</h2>
            <p className="text-sm text-muted-foreground">
              Offline Database คือข้อมูลเดียวกันกับ Online Database แต่ถูกดาวน์โหลดมาเก็บไว้ภายในเครื่อง
              หรือเซิร์ฟเวอร์องค์กร เหมาะสำหรับงานที่{" "}
              <strong>ต้องการล็อกเวอร์ชันข้อมูล</strong> 
              ให้คงที่ตลอดทั้งโปรเจกต์ โดยไม่ขึ้นกับการอัปเดตออนไลน์ อีกทั้งยังสามารถแก้ไขข้อมูลได้เอง ตามมาตรฐานหรือข้อมูลความต้องการของแต่ละองค์กร
           
            </p>
          </div>

          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">แนวทางการใช้งาน Offline</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ol className="list-decimal pl-5 space-y-1">
                <li>เข้าไปที่ Drive ของ Small BIM Studio เพื่อดาวน์โหลด Offline Database</li>
                <li>เก็บไฟล์ไว้ในโฟลเดอร์ที่ต้องการ เช่น <code>\\Company\BIM\Database\2024\</code></li>
                <li>ตั้งค่า Add-in ให้ชี้ไปยังโฟลเดอร์นั้นเพื่อใช้งาน</li>
                <li>หากต้องการแก้ไข ให้เปลี่ยนเฉพาะข้อมูลด้านในไฟล์ โดยคงคอลัมน์หลัก (ItemCode, Unit, Description ฯลฯ) เดิมไว้</li>
                <li>ควรกำหนดเวอร์ชันข้อมูล เช่น ระบุวันที่และผู้ปรับปรุง เพื่อให้สามารถอ้างอิงย้อนหลังได้</li>
              </ol>
            </CardContent>
          </Card>
        </section>


      </div>
    </SidebarInset>
  )
}
