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
        <header className="space-y-2"><h1 className="text-3xl md:text-4xl font-bold">Wall Tag (Elevation/Section)</h1><p className="text-sm md:text-base text-muted-foreground">แท็กผนัง</p></header>
        <Separator />
        <div className="grid lg:grid-cols-2 gap-6">
          <section className="space-y-6">
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">คำอธิบาย</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">แท็กหลายหมวดในคำสั่งเดียวด้วยพรีเซ็ตกติกา</CardContent></Card>
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">ทำอะไรได้บ้าง</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1"><li>แท็กหลายหมวดพร้อมกัน</li><li>แมปพารามิเตอร์ไปหัวข้อ BOQ</li></ul></CardContent></Card>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">Input</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1"><li>Plan View</li><li>ชุดพรีเซ็ตแท็ก</li></ul></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">Output</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1"><li>Tags ตามประเภท</li><li>ข้อมูลพร้อมใช้ QTO/BOQ</li></ul></CardContent></Card>
            </div>
          </section>
          <section className="space-y-4"><ImageBlock label="Super Tag — Preset" /><ImageBlock label="Super Tag — Result" /></section>
        </div>
      </div>
    </SidebarInset>
  )
}
