"use client"
import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Link } from "lucide-react"
function ImageBlock({ label }: { label: string }) { return (<figure className="rounded-2xl border bg-muted/30 overflow-hidden"><div className="aspect-video grid place-items-center text-sm text-muted-foreground">[ Image — {label} ]</div></figure>) }

export default function Page() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Element Tags (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Element Tags (Plan) ต่างๆ สำหรับการใส่ Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </header>

        <Separator />

        {/* Super Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Super Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Super Tag (Plan) คำสั่งสำหรับการใส่ Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QBG00hwk1Fw"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Wall Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Wall Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Wall Tag (Plan) คำสั่งสำหรับการใส่ Wall Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/u_7c0E2koFg"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Door Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Door Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Door Tag (Plan) คำสั่งสำหรับการใส่ Door Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/u6lv-JKhT2A"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Window Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Window Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Window Tag (Plan) คำสั่งสำหรับการใส่ Window Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Si4PPdXN_Ts"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Floor Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Floor Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Floor Tag (Plan) คำสั่งสำหรับการใส่ Floor Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/cBWF2e82ZEk"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Ceiling Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Ceiling Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Ceiling Tag (Plan) คำสั่งสำหรับการใส่ Ceiling Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/FzRwn0IKyho"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Roof Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Roof Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Roof Tag (Plan) คำสั่งสำหรับการใส่ Roof Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/I5MZLHVxHbk"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Separator />

        {/* Room Tag */}
        <section className="grid md:grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">
            Room Tag (Plan) — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Room Tag (Plan) คำสั่งสำหรับการใส่ Room Tag ในแปลนพื้นอย่างรวดเร็ว
          </p>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/rEzU7E6CyoA"
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
