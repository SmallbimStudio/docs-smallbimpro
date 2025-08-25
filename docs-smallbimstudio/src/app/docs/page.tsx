// src/app/docs/page.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { BookOpen, Search, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import RevenueCard from "@/components/cards/DatabaseCount"
import SubscriptionsCard from "@/components/cards/CostCount"
import MacLeamyChartCard from "@/components/cards/MacLeamyChartCard"
import DatabaseCard from "@/components/cards/DatabaseCard"
import FeeAdvisorChart from "@/components/fee-advisor-chart"


export default function DocsOverview() {
  const [] = React.useState(350)

  return (
    <section className="space-y-8">
      {/* HERO (คงไว้ได้) */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
          New • Documentation
        </span>
        <h1 className="mt-10 text-4xl font-bold tracking-tight">
          ยินดีต้อนรับสู่เอกสาร <span className="whitespace-nowrap">Small BIM PRO</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          เริ่มต้นใช้งาน Add-in และทำความเข้าใจ BOQ workflow เพื่อคุมงบประมาณแม่นยำตั้งแต่ต้นทาง
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/docs/getting-started/introduction">
              <BookOpen className="mr-2 h-4 w-4" />
              Getting Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search">
              <Search className="mr-2 h-4 w-4" />
              ค้นหาเอกสาร
            </Link>
          </Button>
        </div>
      </div>

      {/* ===== ส่วนล่าง (ตัวอย่างเดิม) ===== */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Getting started */}
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>เริ่มต้นอย่างรวดเร็ว</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>ติดตั้ง Add-in, โหลด Template, และตั้งค่า Keynote + ราคากลาง ให้ BOQ พร้อมใช้งาน</p>
            <div className="flex gap-2">
              <Button asChild size="sm"><Link href="/docs/download">ดาวน์โหลด และติดตั้ง</Link></Button>
              <Button asChild size="sm" variant="outline"><Link href="/search">อ่านคู่มือ</Link></Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Quick links */}
        <Card>
          <CardHeader>
            <CardTitle>ลิงค์ทางลัด</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <Link href="" className="group flex items-center justify-between rounded-md border p-3 hover:bg-accent">
              BOQ Workflow Overview
              <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
            <Link href="" className="group flex items-center justify-between rounded-md border p-3 hover:bg-accent">
              Revit Template (ราคา/Keynote)
              <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
            <Link href="" className="group flex items-center justify-between rounded-md border p-3 hover:bg-accent">
              Small BIM PRO Add-in (UI & การตั้งค่า)
              <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
            <Link href="" className="group flex items-center justify-between rounded-md border p-3 hover:bg-accent">
              FAQ / Troubleshooting
              <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </CardContent>
        </Card>

        {/* What's new */}
        <Card className="md:col-span-2 xl:col-span-2">
          <CardHeader>
            <CardTitle>กำลังพัฒนาอะไรอยู่บ้าง</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-start justify-between gap-4 rounded-md border p-3">
              <div>
                <div className="font-medium">Development (Version 0.0.0) (Beta Version)</div>
                <p className="text-muted-foreground">อยู่ในช่วงการพัฒนาตัวต้นแบบ สำหรับเครื่องการประมาณราคา สำหรับใช้งานบน Revit 2024 (Revit 2025-2026 อยู่ในช่วงเฟสถัดไป)</p>
              </div>
              <time className="shrink-0 text-xs text-muted-foreground">Aug 2025</time>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-md border p-3">
              <div>
                <div className="font-medium">RSB-PROFESSIONAL Templeate (Version 2024) • Keynote + ราคากลาง</div>
                <p className="text-muted-foreground">เพิ่มหมวดหมู่ และพัฒนาโครงสร้าง Family เพื่อฝังข้อมูลด้านราคาเข้าไป เพื่อรองรับงานออกแบบและเขียนแบบพร้อมการประมาณราคาได้ทันที</p>
              </div>
              <time className="shrink-0 text-xs text-muted-foreground">Oct 2025</time>
            </div>
          </CardContent>
        </Card>     
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mt-10 text-4xl font-bold tracking-tight">
          มาทำความเข้าใจเกี่ยวกับ <span className="whitespace-nowrap">MacLeamy Curve</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          เป็นกราฟแสดงความสัมพันธ์ระหว่างความสามารถในการปรับเปลี่ยนแบบก่อสร้างและต้นทุนตลอดระยะโครงการ ซึ่งช่วงต้นของโครงการมักมีต้นทุนการเปลี่ยนแปลงน้อยกว่าช่วงก่อสร้างจริง
        </p>
      </div>

      <div>
        <MacLeamyChartCard/>
      </div>    

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mt-10 text-4xl font-bold tracking-tight">
          แล้วงบที่ลูกค้าอยากสร้าง <span className="whitespace-nowrap">กับค่าแบบของสถาปนิก ต้องเท่าไหร่?</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          ลองคิดดูสิว่า เราอยากสร้างบ้านขนาดพื้นที่เท่าไหร่ งบในการก่อสร้างเท่าใด ถึงจะเหมาะสมกับการใช้งานในชีวิตประจำวันของเรา เพื่อทราบว่างบก่อสร้างบ้านที่เราต้องการนั้น เป็นไปได้หรือไม่ 
          หรือในมุมของสถาปนิก ผู้ออกแบบชีวิตประจำวันด้วย Space คุณต้องทำงานแบบไหน ตั้งใจเท่าไหร่ ทำงานเร็วแค่ไหน เพื่อที่จะคุ้มค่าทั้งค่าออกแบบ และเวลา
        </p>
      </div>

      {/* ให้กราฟยืดสูงเท่าการ์ดอื่น และไม่ล้น */}
      <div className="h-full">
        <FeeAdvisorChart />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mt-10 text-4xl font-bold tracking-tight">
          ถ้าอยากลงลึกกับงานประมาณราคา <span className="whitespace-nowrap">ใช้ Small BIM PRO</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          เครื่องมือ Revit Addin ประมาณราคาได้อย่างมีประสิทธิภาพ ดึงระบบฐานข้อมูลออนไลน์มาคำนวณจริงบน Revit ด้านล่างคือตัวอย่างระบบฐานข้อมูล
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
        {/* 25% */}
        <div className="lg:col-span-1 min-w-0">
          <div className="h-full"><RevenueCard /></div>
        </div>

        {/* 25% */}
        <div className="lg:col-span-1 min-w-0">
          <div className="h-full"><SubscriptionsCard /></div>
        </div>

        {/* 50% */}
        <div className="md:col-span-2 lg:col-span-2 min-w-0">
          
        </div>
      </div>


      
      <div className="flex flex-wrap">
        <DatabaseCard />                  
      </div>



    </section>
  )
}
