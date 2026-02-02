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
  // Config State: Version 2.0.0 เปิดไว้เป็นค่าเริ่มต้น, Version อื่นๆ ปิดไว้
  const [isVersion200Expanded, setIsVersion200Expanded] = React.useState(true)
  const [isVersion103Expanded, setIsVersion103Expanded] = React.useState(false)
  const [isVersion102Expanded, setIsVersion102Expanded] = React.useState(false)
  const [isVersion101Expanded, setIsVersion101Expanded] = React.useState(false)
  const [isVersion100Expanded, setIsVersion100Expanded] = React.useState(false)

  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-6">

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
            Version 2.0.0 - Template (Latest)
           ===================================================================================== */}
        <section className="space-y-6">
          <div
            className="flex items-center justify-between gap-3 flex-wrap cursor-pointer group"
            onClick={() => setIsVersion200Expanded(!isVersion200Expanded)}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                <Package className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">Version 2.0.0</span>
              </div>
              <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                Latest
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {/* TODO: ใส่ระบุวันที่อัพเดตตรงนี้ */}
                02 February 2026
              </span>
            </div>

            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              {isVersion200Expanded ? (
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

          {isVersion200Expanded && (
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
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Project Specification (เครื่องมือจัดการสเปคโครงการ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือที่ช่วยให้ผู้ใช้งานสามารถสร้างและจัดการสเปคโครงการก่อสร้างได้อย่างมีประสิทธิภาพ โดยหลักการนั้นแสนง่ายดาย เพียงแค่ผู้ใช้เลือกหมวดตาม Database ที่มีมากกว่า 2,500 รายการ 
                        นำมาจัดเรียงไว้เป็น Snapshot ของโครงการ โดยปรับแต่งราคาของโครงการได้อย่างอิสระ จากนั้นก็สามารถ Export ออกมาเป็นเอกสารสเปคโครงการได้ทันที รวมถึงโหลดเข้าไปใช้งานในคำสั่ง BOQ ต่างๆได้อีกด้วย
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Project-spec.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Project Specification Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Roof Framing Creator (เครื่องมือสร้างโมเดลโครงสร้างหลังคาอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถสร้างโมเดลโครงสร้างหลังคาได้อย่างรวดเร็วและแม่นยำ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Roof-Framing-Creator.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Roof Framing Creator Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Land Rescale (เครื่องมือปรับขนาดโฉนดที่ดินอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถปรับขนาดโฉนดที่ดินได้อย่างรวดเร็วและแม่นยำ ไม่ต้องใส่สูตรคำนวณเองอีกต่อไป
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Land-Rescale.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Land Rescale Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Room to Layouts (เครื่องมือแปลงห้อง ให้เป็นกรอบพื้นที่อัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถแปลงห้อง ให้กลายเป็นกรอบพื้นที่ได้อย่างรวดเร็วและแม่นยำ พร้อมตัวหนังสือกำกับขนาดที่ตั้งค่าได้เอง
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Room-to-layouts.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Room to Layouts Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Room to Walls (เครื่องมือแปลงห้อง ให้เป็นโมเดลผนังอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถแปลงห้อง ให้กลายเป็นโมเดลผนังได้อย่างรวดเร็วและแม่นยำ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Room-to-walls.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Room to Walls Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Room to Floors (เครื่องมือแปลงห้อง ให้เป็นโมเดลพื้นอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถแปลงห้อง ให้กลายเป็นโมเดลพื้นได้อย่างรวดเร็วและแม่นยำ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Room-to-floors.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Room to Floors Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Room to Ceilings (เครื่องมือแปลงห้อง ให้เป็นโมเดลเพดานอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถแปลงห้อง ให้กลายเป็นโมเดลเพดานได้อย่างรวดเร็วและแม่นยำ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Room-to-ceilings.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Room to Ceilings Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Foundation Rebar (เครื่องมือสร้าง Structural Rebar พื้นฐานสำหรับฐานรากแผ่)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถสร้าง Structural Rebar พื้นฐานสำหรับโมเดลโครงสร้างฐานรากแบบฐานแผ่อัตโนมัติ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Foundation-Rebar.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Foundation Rebar Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Column Footing Rebar (เครื่องมือสร้าง Structural Rebar พื้นฐานสำหรับเสาตอม่อ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถสร้าง Structural Rebar พื้นฐานสำหรับโมเดลโครงสร้างเสาตอม่อแบบอัตโนมัติ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Column-Footing-Rebar.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Column Footing Rebar Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Column Rebar (เครื่องมือสร้าง Structural Rebar พื้นฐานสำหรับเสา)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถสร้าง Structural Rebar พื้นฐานสำหรับโมเดลโครงสร้างเสาแบบอัตโนมัติ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Column-Rebar.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Column Rebar Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Beam Rebar (เครื่องมือสร้าง Structural Rebar พื้นฐานสำหรับคาน)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถสร้าง Structural Rebar พื้นฐานสำหรับโมเดลโครงสร้างคานแบบอัตโนมัติ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Beam-Rebar.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Beam Rebar Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Floor Rebar (เครื่องมือสร้าง Structural Rebar พื้นฐานสำหรับพื้น)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถสร้าง Structural Rebar พื้นฐานสำหรับโมเดลโครงสร้างพื้นแบบอัตโนมัติ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Floor-Rebar.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Floor Rebar Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Stair Rebar (เครื่องมือสร้าง Structural Rebar พื้นฐานสำหรับบันได)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถสร้าง Structural Rebar พื้นฐานสำหรับโมเดลโครงสร้างบันไดแบบอัตโนมัติ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Stair-Rebar.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Stair Rebar Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Floor Tiles Generator (เครื่องมือสร้าง Floor Tiles สำหรับพื้นแบบอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถจำลองการปูกระเบื้อง พร้อมสร้าง Floor Tiles Model ลงไปยังโมเดลได้จริงๆอย่างรวดเร็ว
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Floor-Tiles-Generator.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Floor Tiles Generator Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Cutting Optimizer (เครื่องมือคิดเศษการตัดวัตถุ แบบความยาวอัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถตรวจสอบความยาวโมเดลวัตถุต่างๆ ที่ต้องการตัดเป็นชิ้นส่วนย่อยๆ 
                        พร้อมทั้งคำนวณเศษเหลือจากการตัด เพื่อนำไปใช้ในการวางแผนการสั่งซื้อวัตถุดิบได้อย่างมีประสิทธิภาพ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Cutting-Optimizer.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Cutting Optimizer Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold">
                          Sheet Cutting Optimizer (เครื่องมือคิดเศษการตัดวัตถุ แบบพื้นที่อัตโนมัติ)
                        </CardTitle>
                        <UpdateBadge type="new" />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {/* รายละเอียดฟีเจอร์ */}
                        เป็นเครื่องมือตัวช่วยที่ช่วยให้ผู้ใช้งานสามารถตรวจสอบพื้นที่ของวัตถุต่างๆ ที่ต้องการตัดเป็นชิ้นส่วนย่อยๆ 
                        พร้อมทั้งคำนวณเศษเหลือจากการตัด เพื่อนำไปใช้ในการวางแผนการสั่งซื้อวัตถุดิบได้อย่างมีประสิทธิภาพ
                      </p>
                     
                      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Sheet-Cutting-Optimizer.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Sheet Cutting Optimizer Tool Preview"
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
                            BOQ - Welcome Screen (หน้าต่างต้อนรับผู้ใช้งาน เพื่อเลือกหมวดในการถอดปริมาณ)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงหน้าต่างต้นรับผู้ใช้งาน ให้สามารถเลือกหมวดหมู่การถอดปริมาณได้ง่ายขึ้น พร้อมแสดงตัวอย่างรูปภาพประกอบ เพื่อให้โฟกัสไปที่หมวดที่ต้องการถอดปริมาณและคำนวณราคาได้อย่างรวดเร็ว
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <div className="space-y-4">
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Welcome-Screen.png"
                            alt="Welcome Screen Tool Preview"
                            className="w-full h-auto"
                          />
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Welcome-Screen-Category.png"
                            alt="Welcome Screen Category Preview"
                            className="w-full h-auto"
                          />
                        </div>

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
                            BOQ - Calculation Rule Information (ปรับปรุงหน้าต่างแสดงข้อมูลหลักการถอดปริมาณเพิ่มเติมแบบ Rule-Based)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงหน้าต่างแสดงข้อมูลหลักการถอดปริมาณเพิ่มเติมแบบ Rule-Based ให้สามารถแสดงรายละเอียดที่ชัดเจนและเข้าใจง่ายขึ้น พร้อมกับแสดงรหัสต้นทุนเป้าหมายได้ชัดเจนมากขึ้น
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Calculation-Rule-Info.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Calculation Rule Information Preview"
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
                            BOQ - Calculation Rule Information (ปรับปรุงหน้าต่างแสดงข้อมูลหลักการถอดปริมาณเพิ่มเติมแบบ Rule-Based)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงหน้าต่างแสดงข้อมูลหลักการถอดปริมาณเพิ่มเติมแบบ Rule-Based ให้สามารถแสดงรายละเอียดที่ชัดเจนและเข้าใจง่ายขึ้น พร้อมกับแสดงรหัสต้นทุนเป้าหมายได้ชัดเจนมากขึ้น
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Calculation-Rule-Info.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Calculation Rule Information Preview"
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
                            BOQ - Rebar Takeoff (ปรับปรุงการถอดปริมาณเหล็กเสริมให้มีความแม่นยำมากขึ้น)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            จากการถอดปริมาณด้วย kg. ซึ่งเป็นการคำนวณตั้งแต่ต้น จึงอาจมีความคลาดเคลื่อนเมื่อคำนวณน้ำหนักตั้งแต่แรก
                            ทางเราจึงได้ทำการปรับปรุงหลักการถอดปริมาณเหล็กเสริมใหม่ทั้งหมด
                            โดยใช้หน่วยเป็นเมตรเป็นหลัก แล้วเพิ่มปุ่มการคำนวณน้ำหนักเหล็กเสริมขึ้นมาใหม่
                            เพื่อให้การถอดปริมาณมีความแม่นยำมากยิ่งขึ้น สามารถตรวจสอบปริมาณควบคู่กับโมเดลได้แม่นยำมากขึ้น
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <div className="space-y-4">
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Rebar-Meter1.png"
                            alt="Rebar Meter 1 Preview"
                            className="w-full h-auto"
                          />
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Rebar-Meter2.png"
                            alt="Rebar Meter 2 Preview"
                            className="w-full h-auto"
                          />
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Rebar-Meter3.png"
                            alt="Rebar Meter 3 Preview"
                            className="w-full h-auto"
                          />
                        </div>

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
                            BOQ - New Suggestion Lists (เพิ่มรายการแนะนำใหม่ในการถอดปริมาณ)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงเพิ่มรายการแนะนำใหม่ในการถอดปริมาณ เช่น หมวดงานทั่วไป งานสำรวจผัง งานวางผัง อื่นๆ เป็นต้น
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Suggestion.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Suggestion Lists Preview"
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
                            BOQ - Factor F (ปรับปรุงและเพิ่มเติมสูตรการคำนวณ Factor F ใหม่)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงสูตรการคำนวณ Factor F ใหม่ เพื่อให้สามารถคำนวณได้ถูกต้องและแม่นยำมากขึ้น ตามมาตรฐานงานรัฐและเอกชน
                          </p>
                          <div className="space-y-4">
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Factor-F1.png"
                            alt="Factor F 1 Preview"
                            className="w-full h-auto"
                          />
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Factor-F2.png"
                            alt="Factor F 2 Preview"
                            className="w-full h-auto"
                          />
                          <img
                            src="/images/docs/latest-update/Version 2.0.0/Factor-F3.png"
                            alt="Factor F 3 Preview"
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
                            BOQ - New Building Area (เพิ่มช่องกรอกข้อมูลพื้นที่อาคารใหม่)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงเพิ่มช่องกรอกข้อมูลพื้นที่อาคารใหม่ เพื่อให้สามารถระบุพื้นที่อาคารได้อย่างแม่นยำ
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Building-Area.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Building Area Preview"
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
                            BOQ - New Summary Page (เพิ่มและปรับปรุงหน้าสรุปผลการถอดปริมาณ)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงเพิ่มหน้าสรุปผลการถอดปริมาณใหม่ เพื่อให้สามารถแสดงผลสรุปได้อย่างชัดเจนและแม่นยำ
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Summary-Page.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Summary Page Preview"
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
                            Model Data Management to Dockable Pane (ปรับปรุงรูปแบบคำสั่งจัดการข้อมูลโมเดล ให้มาอยู่ในรูปแบบ Dockable Pane)
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {/* ใส่รายละเอียดการปรับปรุงตรงนี้ */}
                            ปรับปรุงรูปแบบคำสั่งจัดการข้อมูลโมเดล ให้มาอยู่ในรูปแบบ Dockable Pane เพื่อให้ผู้ใช้งานสามารถเข้าถึงคำสั่งต่างๆ ได้ง่ายและรวดเร็วมากยิ่งขึ้น ตลอดระยะเวลาการทำงาน
                          </p>
                          <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
                        <img 
                          src="/images/docs/latest-update/Version 2.0.0/Dockable-Pane.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Dockable Pane Preview"
                          className="w-full h-auto"
                        />
                      </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            Rebar Spec - Add SD40 and More
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            เพิ่มสเปคเหล็ก SD40 และสเปคอื่นๆ เพื่อรองรับการทำงานให้ครอบคลุมมากขึ้น
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            Database - Concrete Multiple Strengths
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            ปรับ Database ให้มีรายการคอนกรีตหลายสเตรงมากขึ้น เพื่อรองรับงานที่หลากหลาย
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            Template - Families for Multiple Concrete Strengths
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            ปรับ Template ให้มี Family รองรับคอนกรีตหลายสเตรง เพื่อให้ใช้งานร่วมกับ Database ได้ครบถ้วนมากขึ้น
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-green-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <UpdateBadge type="improved" />
                        <div className="space-y-1">
                          <p className="font-medium">
                            {/* ใส่หัวข้อ Bug ที่แก้ตรงนี้ */}
                            Template - Family Pricing Coverage
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            ตรวจสอบ Family ใน Template ทุกชิ้นให้มีข้อมูลราคาให้ครบมากที่สุด เพื่อพร้อมทำงานและประมาณราคาได้ทันที
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
                            Model Data Management - Selection
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้ไขการทำงานของ Model Data Management ให้ขั้นตอนการเลือกวัตถุไม่ย่อรายการลงทุกครั้งที่อัปเดตข้อมูล
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
                            BOQ - Restore Delete Item
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้ปัญหา Bug Export DataGrid ให้ปุ่มลบรายการกลับมาใช้งานได้เหมือนเดิม
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
                            BOQ - Load Online Database Window Fit Screen
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้ไขขนาดหน้าจอเริ่มต้นของหน้าต่าง Load Online Database ไม่ให้ล้นจอ โดยเปลี่ยนขนาด min-height ใหม่
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
                            BOQ - Mechanical Equipment Category
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            ปรับปรุงหน่วยเรียกของ Mechanical Equipment ให้แสดงผลอย่างถูกต้องในคำสั่ง BOQ
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
                            Roomtag Elevation/Section - Bug Fix
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* ใส่รายละเอียด Bug ที่แก้ตรงนี้ */}
                            แก้บัคในคำสั่ง Roomtag Elevation/Section ให้ทำงานได้ถูกต้องและเสถียรขึ้น
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

        <Separator className="my-3" />

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
                    <CardHeader className="pb-0.5">
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
                          src="/images/docs/latest-update/Version 1.0.3/Foundation-dimension.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Foundation Dimension Tool Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                      
                    </CardContent>
                  </Card>

                  {/* Card Template สำหรับ New Feature */}
                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
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
                          src="/images/docs/latest-update/Version 1.0.3/Foundation-column-combined-tag.png" // เปลี่ยน path รูปภาพตรงนี้
                          alt="Foundation and Column Combined Tag Preview"
                          className="w-full h-auto" 
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card Template สำหรับ New Feature */}
                  <Card className="rounded-2xl border-orange-500/20">
                    <CardHeader className="pb-0.5">
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
                          src="/images/docs/latest-update/Version 1.0.3/VG-Override.png" // เปลี่ยน path รูปภาพตรงนี้
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
                          src="/images/docs/latest-update/Version 1.0.3/Time-estimate.png" // เปลี่ยน path รูปภาพตรงนี้
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
                          src="/images/docs/latest-update/Version 1.0.3/Auto-suggest.png" // เปลี่ยน path รูปภาพตรงนี้
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
                          src="/images/docs/latest-update/Version 1.0.3/Select-to-boq-improve.png" // เปลี่ยน path รูปภาพตรงนี้
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

        <Separator className="my-3" />

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

        <Separator className="my-3" />

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
                    <CardHeader className="pb-0.5">
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
                    <CardHeader className="pb-0.5">
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


        <Separator className="my-3" />

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

        <Separator className="my-3" />


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