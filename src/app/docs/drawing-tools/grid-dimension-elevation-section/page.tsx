"use client"
import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
function ImageBlock({ label }: { label: string }) { return (<figure className="rounded-2xl border bg-muted/30 overflow-hidden"><div className="aspect-video grid place-items-center text-sm text-muted-foreground">[ Image — {label} ]</div></figure>) }

export default function Page() {
  return (
    <SidebarInset>
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-8">
        <header className="space-y-2"><h1 className="text-3xl md:text-4xl font-bold">Grid Dimension (Elevation/Section)</h1><p className="text-sm md:text-base text-muted-foreground">ใส่มิติกริดในรูปด้าน/รูปตัด</p></header>
        <Separator />
        <div className="grid lg:grid-cols-2 gap-6">
          <section className="space-y-6">
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">คำอธิบาย</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">จับกริดที่ปรากฏใน Elevation/Section แล้วสร้างมิติ</CardContent></Card>
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">ทำอะไรได้บ้าง</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1"><li>รองรับกริดเอียง</li><li>จัดตำแหน่งหัว–ท้ายอัตโนมัติ</li></ul></CardContent></Card>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">Input</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1"><li>Elevation/Section View</li><li>Grids ที่เห็นในมุมมอง</li></ul></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">Output</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1"><li>Grid Dimensions พร้อมรูปแบบ</li><li>ระยะอ่านง่าย</li></ul></CardContent></Card>
            </div>
          </section>
          <section className="space-y-4">
            <ImageBlock label="Grid Dim Elev/Section — Workflow" />
            <ImageBlock label="Grid Dim Elev/Section — Result" />
          </section>
        </div>
      </div>
    </SidebarInset>
  )
}
