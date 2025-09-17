"use client"
import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
function ImageBlock({ label }: { label: string }) { return (<figure className="rounded-2xl border bg-muted/30 overflow-hidden"><div className="aspect-video grid place-items-center text-sm text-muted-foreground">[ Image — {label} ]</div></figure>) }

export default function Page() {
  return (

    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Level Dimension (Elevation/Section) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Level Dimension (Elevation/Section) คำสั่งสำหรับการใส่ Dimension เส้นระดับในรูปด้าน/รูปตัดอย่างรวดเร็ว
          </p>
        </header>

        <Separator />

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4B_c7IaNz4A"
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
