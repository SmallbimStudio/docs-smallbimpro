// src/app/docs/update/page.tsx
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

        {/* Version 1.0.1 - Latest */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
              <Package className="w-4 h-4 text-primary" />
              <span className="font-semibold text-primary">Version 1.0.1</span>
            </div>
            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              Latest
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              October 2025
            </span>
          </div>

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
        </section>

        <Separator className="my-12" />

        {/* Version 1.0.0 - Initial Release (Collapsible) */}
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