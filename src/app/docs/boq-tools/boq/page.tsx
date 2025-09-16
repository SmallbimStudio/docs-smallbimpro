// src/app/docs/boq-tools/boq/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Calculator,
  FileSpreadsheet,
  ClipboardList,
  Database,
  Settings2,
  Info,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"

/** ---------- Small UI atoms ---------- */
function Step({
  n,
  title,
  children,
}: {
  n: number
  title: string
  children: React.ReactNode
}) {
  return (
    <Card className="rounded-2xl shadow-sm border">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-base font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-muted text-foreground">
            {n}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-2">
        {children}
      </CardContent>
    </Card>
  )
}

/** ภาพประกอบ */
function ImageBlock({
  imagesrc,
  aspect = "aspect-video",
}: {
  imagesrc?: string
  aspect?: string
}) {
  return (
    <div className="w-full flex justify-center">
      <div className={`${aspect} w-full max-w-5xl relative`}>
        {imagesrc ? (
          <Image
            src={imagesrc}
            alt=""
            fill
            className="object-contain rounded-xl"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-muted-foreground">
            [ Image Placeholder ]
          </div>
        )}
      </div>
    </div>
  )
}


export default function BoqCommandGuidePage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            BOQ — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง BOQ สำหรับการถอดปริมาณและประมาณราคาจากโมเดล Revit
            ทั้งหมดใน Workflow เดียวที่เรียบง่ายและแม่นยำ
          </p>
        </header>

        <Separator />

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2g3m-TkSWWk"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <Separator />


        {/* Main Screenshot */}
        
        <ImageBlock imagesrc="/images/guides/boq-main-window.png" />

        <Separator />

        {/* Prerequisites */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Example Project - ตัวอย่างการใช้งานคำสั่ง BOQ กับไฟล์งานตัวอย่าง
          </h1>
          <Card className="rounded-2xl">
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>เปิดไฟล์โมเดล Revit ตัวอย่างที่ได้รับเพื่อทำการทดสอบการทำงานของปุ่มคำสั่ง BOQ</li>
                <li>เมื่อเปิดไฟล์ตัวอย่าง ให้เข้าใช้คำสั่ง BOQ</li>
                <li>Data Extraction ทำการสกัดข้อมูลทั้งหมด</li>
                <li>BOQ Calculation ทำการคำนวณปริมาณงานและราคาทั้งหมด</li>
                <li>Document Presentation ทำการสรุปผลเป็นไฟล์เอกสาร BOQ PDF</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pyL-4jRrkbA"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Prerequisites */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            New Project - ตัวอย่างการใช้งานคำสั่ง BOQ กับไฟล์งานใหม่
          </h1>
          <Card className="rounded-2xl">
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>สร้างโครงการใหม่ด้วย RSB-PROFESSIONAL Template เพื่อเริ่ม Project ใหม่</li>
                <li>สร้างโมเดลหมวดงานที่ต้องการ</li>
                <li>ออกแบบสร้างโมเดล พร้อมกับใช้คำสั่ง BOQ เพื่อควบคุมงบประมาณ</li>
                <li>Data Extraction ทำการสกัดข้อมูลทั้งหมด</li>
                <li>BOQ Calculation ทำการคำนวณปริมาณงานและราคาทั้งหมด</li>
                <li>Document Presentation ทำการสรุปผลเป็นไฟล์เอกสาร BOQ PDF</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nwkwJDcqOUo"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Prerequisites */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Other Projects - ตัวอย่างการใช้งานคำสั่ง BOQ กับไฟล์งานอื่นๆ
          </h1>
          <Card className="rounded-2xl">
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>เปิดไฟล์โมเดลเดิมที่เคยทำงานไว้</li>
                <li>
                  ผูกข้อมูลที่จำเป็นทั้งหมด ให้กับ Project ดูรายละเอียดได้ที่{" "}
                  <Link href="/docs/data-preparation/about" className="text-blue-600 underline">
                    Data Preparation
                  </Link>
                </li>
                <li>
                  กำหนดข้อมูล Keynote, Type Comment ให้กับโมเดลทุกชิ้น หรือใช้งานคำสั่ง{" "}
                  <Link href="/docs/boq-tools/model-data-management/" className="text-blue-600 underline">
                    Model Data Management
                  </Link>
                </li>
                <li>Data Extraction ทำการสกัดข้อมูลทั้งหมด</li>
                <li>BOQ Calculation ทำการคำนวณปริมาณงานและราคาทั้งหมด</li>
                <li>Document Presentation ทำการสรุปผลเป็นไฟล์เอกสาร BOQ PDF</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HPFxEdnsWMI"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </SidebarInset>
  )
}
