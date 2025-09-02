// src/app/boq/page.tsx
"use client"

import * as React from "react"
import BOQImportCard from "@/components/cards/BOQImportCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BOQPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Online BOQ Transfer (ตัวแปลงรายการประมาณราคาอัตโนมัติ)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            นำเข้าไฟล์ <code>.csv</code> (สามารถ Export .csv ได้จาก Small BIM PRO) เพื่อดูตาราง BOQ แบบออนไลน์ และสามารถ Export PDF หรือ Print ได้
          </p>
        </CardContent>
      </Card>

      {/* BOQ Import Card */}
      <BOQImportCard />
    </div>
  )
}
