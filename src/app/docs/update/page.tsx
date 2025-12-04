"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  CheckCircle2,
  Wrench,
  Bug,
  TrendingUp,
  Calendar,
  Package,
  FileText,
  ChevronDown,
  ChevronUp
} from "lucide-react"

function UpdateBadge({ type }: { type: "new" | "improved" | "fixed" }) {
  const variants = {
    new: "bg-gradient-to-r from-orange-500 to-orange-600 text-white",
    improved: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    fixed: "bg-gradient-to-r from-green-500 to-green-600 text-white",
  }

  const icons = {
    new: <Sparkles className="w-3 h-3" />,
    improved: <TrendingUp className="w-3 h-3" />,
    fixed: <CheckCircle2 className="w-3 h-3" />,
  }

  const labels = {
    new: "New",
    improved: "Improved",
    fixed: "Fixed",
  }

  return (
    <Badge className={`${variants[type]} px-2 py-0.5 text-xs flex items-center gap-1`}>
      {icons[type]}
      {labels[type]}
    </Badge>
  )
}

export default function UpdatePage() {
  // Config State: Version 1.0.3 เปิดไว้เป็นค่าเริ่มต้น, Version อื่นๆ ปิดไว้
  const [isVersion103Expanded, setIsVersion103Expanded] = React.useState(true)
  const [isVersion102Expanded, setIsVersion102Expanded] = React.useState(false)
  const [isVersion101Expanded, setIsVersion101Expanded] = React.useState(false)
  const [isVersion100Expanded, setIsVersion100Expanded] = React.useState(false)

  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">

        {/* Hero Section */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">Update History</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            What is New in Small BIM PRO?
          </h1>

          <p className="text-base md:text-lg text-muted-foreground">
            ประวัติการอัพเดตและฟีเจอร์ใหม่ที่เพิ่มเข้ามาในแต่ละเวอร์ชัน
          </p>
        </header>

        <Separator />

        {/* =====================================================================================
            Version 1.0.3 - Template (Latest)
           ===================================================================================== */}
        <section className="space-y-6">
          <div
            className="flex items-center justify-between gap-3 flex-wrap cursor-pointer group"
            onClick={() => setIsVersion103Expanded(!isVersion103Expanded)}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                <Package className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">Version 1.0.3</span>
              </div>
              <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                Latest
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {/* TODO: ใส่ระบุวันที่อัพเดตตรงนี้ */}
                04 December 2025
              </span>
            </div>

            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              {isVersion103Expanded ? (
                <>
                  <span className="text-sm">ซ่อน</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">ดูรายละเอียด</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {isVersion103Expanded && (
            <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">

              {/* -------------------- NEW FEATURES TEMPLATE -------------------- */}
              {/* ถ้าไม่มีฟีเจอร์ใหม่ ให้ Comment ส่วนนี้ปิดไว้ได้เลย */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                  <h3 className="text-xl font-bold">New Features</h3>
                </div>
                <div className="space-y-3">
                  {/* Card Template สำหรับ New Feature */}
                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Foundation Dimension Tool - Selected and All in View (เครื่องมือวัดขนาดฐานรากอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        ระบบจะทำการใส่ Dimension ฐานรากให้โดยอัตโนมัติ สามารถเลือกได้ทั้งแบบ
                        Select เอง หรือทำทั้ง Viewport ช่วยลดเวลาการเขียนแบบได้กว่า 50%
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Foundation-dimension.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Foundation Dimension Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  {/* Card Template สำหรับ New Feature */}
                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          {/* ใส่ชื่อฟีเจอร์ใหม่ตรงนี้ */}
                          Foundation and Column Combined Tag (เครื่องมือแท็กคอลัมน์และฐานรากรวมกัน)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* ใส่รายละเอียดฟีเจอร์ตรงนี้ */}
                        เคยเขียนแบบแปลนฐานรากแล้วต้องจัดการ Tag ทั้งเสาและฐานรากเองไหม ขยับเท่าไหร่ก็ไม่สวยสักที แถมใช้เวลานานด้วย ในคำสั่ง Foundation and Column Combined Tag 
                        เป็นเครื่องมือแท็กที่จะนำ Foundation Tag และ Column Tag มาสร้างไว้ด้วยกัน พร้อมๆกันภายในปุ่มเดียว ด้วยวิธีการลากคลุมโมเดลฐานรากและเสา ช่วยให้การแท็กคอลัมน์และฐานรากใน Revit เป็นเรื่องง่าย
                      </p>

                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Foundation-column-combined-tag.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Foundation and Column Combined Tag Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card Template สำหรับ New Feature */}
                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          {/* ใส่ชื่อฟีเจอร์ใหม่ตรงนี้ */}
                          VG Override (เครื่องมือจัดการ VG Override แบบรวดเร็ว) - Beta Version
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* ใส่รายละเอียดฟีเจอร์ตรงนี้ */}
                        ในการทำงานเขียนแบบ Revit บางครั้งเราต้องการปรับแต่งการแสดงผลของโมเดลใน Viewport ต่างๆ เช่น การซ่อนบางหมวดหมู่ หรือการปรับสีของโมเดลให้แตกต่างกันไปตามความต้องการของงาน 
                        ในคำสั่ง VG Override จะช่วยให้คุณสามารถจัดการกับการ Override ของ Visibility/Graphics ได้อย่างรวดเร็วและง่ายดาย โดยไม่ต้องเข้าไปแก้ไขในแต่ละ Viewport ทีละอัน
                      </p>
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/VG-Override.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="VG Override Tool Preview"
                          className="w-full h-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* -------------------- IMPROVEMENTS TEMPLATE -------------------- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold">Improvements</h3>
                </div>
                <div className="space-y-3">
                  {/* Card Template สำหรับ Improvement */}
                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อการปรับปรุงตรงนี้ */}
                            BOQ - Time Estimate (ประเมินระยะเวลาโครงการเบื้องต้น)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ทางเราได้พัฒนากิมมิคการประเมินระยะเวลาโครงการเบื้องต้น ให้กับคำสั่งหลักอย่าง BOQ เพื่อช่วยให้ผู้ใช้งานสามารถประเมินระยะเวลาโครงการได้อย่างรวดเร็ว
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Time-estimate.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Time Estimate Tool Preview"
                          className="w-full h-auto"
                        />
                      </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อการปรับปรุงตรงนี้ */}
                            BOQ - Auto Suggest (ระบบแนะนำรายการวัสดุอัตโนมัติ) - Beta Version
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            เนื่องจากการถอดปริมาณและการสเปควัสดุก่อสร้างเป็นงานที่ซับซ้อน และใช้เวลานาน ทางเราได้พัฒนาระบบ Auto Suggest 
                            เพื่อช่วยแนะนำรายการวัสดุที่เหมาะสมกับงานก่อสร้างต่างๆ โดยอัตโนมัติ ช่วยลดเวลาการทำงานและเพิ่มความแม่นยำในการสเปควัสดุ
                            อีกทั้งยังเพิ่มปุ่ม Load Database ในหน้า Document Presentation เพื่อรองรับการคำนวณราคาจาก Auto Suggest ด้วย
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Auto-suggest.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Auto Suggest Tool Preview"
                          className="w-full h-auto"
                        />
                      </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อการปรับปรุงตรงนี้ */}
                            BOQ - Structural Foundation and Pile to Description Improvement
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            เพิ่มความสามารถในการสรุปรวมปริมาณเสาเข็ม โดยสามารถนับเป็นจำนวนต้นได้ ในช่องหมายเหตุ 
                            เพื่อนำไปใช้ในงานประมาณราคาได้อย่างถูกต้อง และแม่นยำ โดยสามารถนำไปถอดปริมาณหาจำนวนการสกัดหัวเสาเข็ม หรือค่าแรงงานสำหรับงานเสาเข็มได้ทันที
                            
                          </p>
                          
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อการปรับปรุงตรงนี้ */}
                            Structural Foundation and Pile Database Update
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            มีการอัพเดตระบบฐานข้อมูลใหม่ และประเภทเสาเข็มใน RSB-PROFESSIONAL Template เพื่อรองรับการสเปคแบบเสาเข็มได้อย่างครอบคลุมมากยิ่งขึ้น
                          </p>
                          
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อการปรับปรุงตรงนี้ */}
                            Select to BOQ - Improvement
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            เพิ่มความสามารถในการถอดปริมาณวัสดุก่อสร้างที่หลากหลายมากยิ่งขึ้นในคำสั่ง Select to BOQ
                            และปรับปรุงประสิทธิภาพการถอดปริมาณ ให้ตรงหน่วย และรองรับการคำนวณปริมาณเพิ่มเติม เหมือนกับคำสั่ง BOQ
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Select-to-boq-improve.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Select to BOQ Improved Preview"
                          className="w-full h-auto"
                        />
                      </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อการปรับปรุงตรงนี้ */}
                            New Revit Family in RSB-PROFESSIONAL Template
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            มีการเพิ่ม Family ใหม่หลายชิ้นใน RSB-PROFESSIONAL Template ที่มีความจำเป็นสำหรับการทำงาน เช่น Structural Foundation Tag, Structural Column Tag หรืออื่นๆ
                          </p>
                          
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  
                </div>
              </div>

              <Separator />

              {/* -------------------- BUG FIXES TEMPLATE -------------------- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl font-bold">Bug Fixes</h3>
                </div>
                <div className="space-y-3">
                  {/* Card Template สำหรับ Bug Fix */}
                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            BOQ - Fix Steel Column Quantity Calculation
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้ไขหลักการถอดปริมาณเสาเหล็กใหม่ เพื่อให้มีการตรวจจับ และแสดงหน่วยที่ถูกต้อง
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            BOQ - Fix Export to PDF
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้ไขปัญหาการส่งออกไฟล์ PDF ให้สามารถทำงานได้อย่างถูกต้อง โดยปรับปรุงให้ไฟล์ PDF ที่ส่งออก มีคอลัมน์ในส่วนของ %เผื่อ และปริมาณเผื่อแล้ว สำหรับการนำไปใช้ในงานประมาณราคาที่แม่นยำ ชัดเจนยิ่งขึ้น
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            Select to BOQ - Fix Logic
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้ไขปัญหาการถอดปริมาณวัสดุก่อสร้างในคำสั่ง Select to BOQ ให้สามารถถอดปริมาณได้ตรงตามมาตรฐาน และแสดงหน่วยที่ถูกต้อง
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            Activate Small BIM PRO License - Fix Issue
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้ไขปัญหาสำหรับปุ่ม Copy Machine ID ในหน้า Activate Small BIM PRO License ที่ไม่สามารถคัดลอก Machine ID ได้ในบางเครื่อง
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            RSB-PROFESSIONAL Template - Fix Issue
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            ปรับปรุง Family หลายชิ้น ให้มีข้อมูล Keynote ที่ถูกต้องมากขึ้น และปรับปรุง Family ที่ยังใช้งานได้ไม่ถูกต้อง
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>
          )}
        </section>

        <Separator className="my-12" />

        {/* =====================================================================================
            Version 1.0.2 - History (Collapsed)
           ===================================================================================== */}
        <section className="space-y-6">
          <div
            className="flex items-center justify-between gap-3 flex-wrap cursor-pointer group"
            onClick={() => setIsVersion102Expanded(!isVersion102Expanded)}
          >
            <div className="flex items-center gap-3 flex-wrap">
              {/* เปลี่ยน Style ให้เป็นแบบ History (สีเทา) ไม่ใช่สี Primary */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border group-hover:border-primary/30 transition-colors">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold text-muted-foreground">Version 1.0.2</span>
              </div>
              
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                27 October 2025
              </span>
            </div>

            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              {isVersion102Expanded ? (
                <>
                  <span className="text-sm">ซ่อน</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">ดูรายละเอียด</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {isVersion102Expanded && (
            <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">

              {/* Improvements 1.0.2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold">Improvements</h3>
                </div>

                <div className="space-y-3">
                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">RSB-PROFESSIONAL Template (V2)</p>
                          <p className="text-sm text-muted-foreground">
                            อัพเดต RSB-PROFESSIONAL Template เวอร์ชันใหม่ (Version 2) เพิ่มรหัส Keynote, Type Comment สำหรับ Family ประเภทต่างๆเพื่อรองรับการถอดปริมาณและการเขียนแบบได้ดียิ่งขึ้น สามารถใช้งานได้ใน Revit 2024, 2025 และ 2026
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">New Door Family (Nested Family)</p>
                          <p className="text-sm text-muted-foreground">
                            ออกแบบใหม่ทั้งหมด สำหรับประตูแบบ Nested Family เพื่อให้ผู้ใช้งานสามารถออกแบบ ปรับแต่งรายการภายในประตูได้ละเอียดมากขึ้น รองรับการถอดปริมาณทั้งแบบชุดและแบบตร.ม. และสามารถคาดการณ์ราคาประตู-หน้าต่างทั้งชุด ได้แม่นยำยิ่งขึ้น
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            New 2 Project Example – Nested Family Study (Storage & Aluminium Door)
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ตัวอย่างการใช้งานประตูแบบ Nested Family ในไฟล์งานตัวอย่าง 2 โครงการ ได้แก่ โครงการ Storage และโครงการ Aluminium Door สามารถดาวน์โหลดไปศึกษาเพิ่มเติมได้ (สำหรับผู้ใช้งานที่มีสิทธิ์ใช้งาน Small BIM PRO แบบตัวเต็ม เท่านั้น)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">New Basic Wall (ผนังแป้นเกล็ด)</p>
                          <p className="text-sm text-muted-foreground">
                            เพิ่มเติมผนังแป้นเกล็ด (Louver Wall) ใน Basic Wall Family สำหรับงานออกแบบอาคารที่ต้องการผนังแป้นเกล็ดเพื่อการระบายอากาศ
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">Database Update - Version 1.0.2</p>
                          <p className="text-sm text-muted-foreground">
                            อัพเดตฐานข้อมูลวัสดุและราคาวัสดุก่อสร้างใหม่ล่าสุด ในหมวดของงานประตู-หน้าต่าง และบัวผนัง เพื่อรองรับการสเปคแบบ และถอดปริมาณอย่างละเอียดมากยิ่งขึ้นได้ ทั้งในรูปแบบออนไลน์และออฟไลน์
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">Revit Keynote Update - Version 1.0.2</p>
                          <p className="text-sm text-muted-foreground">
                            จากการอัพเดตฐานข้อมูลวัสดุใหม่ ส่งผลให้มีการออกแบบ Keynote ใหม่เพิ่มเติม เพื่อรองรับงาน ประตู-หน้าต่าง, งานบัวผนัง, งานพื้น และงานโครงสร้าง เป็นต้น
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Bug Fixes 1.0.2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl font-bold">Bug Fixes</h3>
                </div>

                <div className="space-y-3">
                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">Select to BOQ – การคำนวณปริมาณน้ำหนักเหล็กเสริม</p>
                          <p className="text-sm text-muted-foreground">
                            ปรับปรุงหลักการคำนวณน้ำหนักเหล็กเสริมในคำสั่ง Select to BOQ
                            เพื่อให้สามารถถอดปริมาณได้จริงตรงตามมาตรฐาน
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">BOQ and Select to BOQ - การตรวจจับประเภทคาน</p>
                          <p className="text-sm text-muted-foreground">
                            ปรับปรุงหลักการตรวจจับประเภทของคานเหล็ก คานไม้ และคอนกรีตใหม่
                            เพื่อให้ได้ปริมาณอย่างเหมาะสม ไม่ตกหล่น
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">BOQ - Door & Window Quantity Logic</p>
                          <p className="text-sm text-muted-foreground">
                            ปรับปรุงหลักการถอดปริมาณประตูและหน้าต่างใหม่
                            หากเป็นชนิดทั่วไปจะนับเป็น ชุด
                            และหากเป็นประตู/หน้าต่างอลูมิเนียมจะคำนวณเป็น ตารางเมตร (Width × Height)
                            พร้อมรองรับ Nested Family แบบละเอียด
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>
          )}
        </section>

        <Separator className="my-12" />

        {/* =====================================================================================
            Version 1.0.1 - History (Collapsed)
           ===================================================================================== */}
        <section className="space-y-6">
          <div
            className="flex items-center justify-between gap-3 flex-wrap cursor-pointer group"
            onClick={() => setIsVersion101Expanded(!isVersion101Expanded)}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border group-hover:border-primary/30 transition-colors">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold text-muted-foreground">Version 1.0.1</span>
              </div>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                October 2025
              </span>
            </div>

            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              {isVersion101Expanded ? (
                <>
                  <span className="text-sm">ซ่อน</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">ดูรายละเอียด</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {isVersion101Expanded && (
            <>
              {/* New Features in 1.0.1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                  <h3 className="text-xl font-bold">New Features</h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">Select to BOQ</CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        เลือกโมเดลเพื่อสร้างรายการประมาณราคาแบบรวดเร็ว พร้อมใช้ในงานเขียนแบบได้ทันที
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">Specification Lists</CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        สร้างรายการคุณสมบัติของวัสดุและงานก่อสร้างอัตโนมัติ เพื่อใช้ประกอบเอกสารประกอบแบบ
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Improvements in 1.0.1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold">Improvements</h3>
                </div>

                <div className="space-y-3">
                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">Revit 2025 & 2026 Support</p>
                          <p className="text-sm text-muted-foreground">
                            เพิ่มการรองรับ Autodesk Revit 2025 และ Revit 2026 เต็มรูปแบบ ทำให้ใช้งานได้กับ Revit 2024, 2025 และ 2026
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <Card className="rounded-2xl border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">RSB-PROFESSIONAL Template for Revit 2025 & 2026</p>
                          <p className="text-sm text-muted-foreground">
                            อัพเดต RSB-PROFESSIONAL Template ให้รองรับ Revit 2025 และ 2026 พร้อมปรับปรุงมาตรฐานและฐานข้อมูลวัสดุใหม่
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Bug Fixes in 1.0.1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl font-bold">Bug Fixes</h3>
                </div>

                <div className="space-y-3">
                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">Export to PDF in BOQ</p>
                          <p className="text-sm text-muted-foreground">
                            แก้ไขปัญหาปุ่มคำสั่ง Export to PDF ใน BOQ ให้สามารถส่งออกไฟล์ PDF ได้ใน Revit 2025 และ 2026
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="fixed" />
                        <div className="space-y-1">
                          <p className="font-medium">Revit 2026 API Development</p>
                          <p className="text-sm text-muted-foreground">
                            แก้ไขปัญหาการพัฒนา API ใน Revit 2026
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </section>


        <Separator className="my-12" />

        {/* =====================================================================================
            Version 1.0.0 - History (Collapsed)
           ===================================================================================== */}
        <section className="space-y-6">
          {/* Header with Toggle Button */}
          <div
            className="flex items-center justify-between gap-3 flex-wrap cursor-pointer group"
            onClick={() => setIsVersion100Expanded(!isVersion100Expanded)}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border group-hover:border-primary/30 transition-colors">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold text-muted-foreground">Version 1.0.0</span>
              </div>
              <Badge variant="outline">
                Initial Release
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                September 2025
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              {isVersion100Expanded ? (
                <>
                  <span className="text-sm">ซ่อน</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">ดูรายละเอียด</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {/* Collapsible Content */}
          {isVersion100Expanded && (
            <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-600" />
                <h3 className="text-xl font-bold">เวอร์ชันแรกที่เปิดตัว</h3>
              </div>

              <Card className="rounded-2xl">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">📦 ฟีเจอร์หลักครบถ้วน</p>
                      <p className="text-sm text-muted-foreground">
                        เปิดตัวพร้อมฟีเจอร์หลักครบทั้งหมด ครอบคลุมทั้งงาน BOQ Tools, Modeling Tools, Drawing Tools และ Database & Standards
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <p className="font-medium mb-2">🔧 เครื่องมือหลัก</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>BOQ</strong> - สร้างรายการประมาณราคาจากโมเดล Revit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Fast Plan</strong> - เขียนแปลนพื้นแบบโคตรเร็ว</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Grid Layout</strong> - สร้าง Grid Line อัตโนมัติ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Foundation Support</strong> - สร้างโมเดลวัสดุรองก้นฐานอัตโนมัติ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Super Tag</strong> - สร้าง Element Tags ทุกหมวดหมู่อัตโนมัติ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Legend 3D View</strong> - เปลี่ยน Legend เป็น 3D View</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>และอีกกว่า 35+ เครื่องมือในหมวดต่างๆ</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <p className="font-medium mb-2">💻 Revit Compatibility</p>
                      <p className="text-sm text-muted-foreground">
                        รองรับ <strong>Autodesk Revit 2024</strong> เท่านั้น
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <p className="font-medium mb-2">📋 Template & Database</p>
                      <p className="text-sm text-muted-foreground">
                        มาพร้อม RSB-PROFESSIONAL Template สำหรับงานออกแบบ เขียนแบบ และประมาณราคา พร้อมระบบฐานข้อมูลวัสดุและมาตรฐาน
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        <Separator className="my-12" />


        {/* Footer Note */}
        <div className="text-center pt-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            💡 เราพัฒนาและปรับปรุง Small BIM PRO อย่างต่อเนื่อง
          </p>
          <p className="text-sm text-muted-foreground">
            ติดตามอัพเดตเพิ่มเติมได้ที่{" "}
            <a href="https://smallbimstudio.com" className="text-primary hover:underline">
              Small BIM Studio Website
            </a>
          </p>
        </div>
      </div>
    </SidebarInset>
  )
}