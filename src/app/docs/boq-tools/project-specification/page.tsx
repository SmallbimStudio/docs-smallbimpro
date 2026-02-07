// src/app/docs/boq-tools/select-to-boq/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Database,
  Info,
  Calculator,
  FileSpreadsheet,
} from "lucide-react"

/** ---------- Small UI atoms (reuse style from BOQ page) ---------- */
function FeatureButton({
  label,
  icon: Icon,
  active = false,
  hint,
}: {
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  active?: boolean
  hint?: string
}) {
  return (
    <button
      type="button"
      className={[
        "w-full rounded-xl border px-4 py-3 text-left transition-colors",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "hover:bg-muted",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            "inline-flex h-9 w-9 items-center justify-center rounded-lg border",
            active
              ? "border-white/70 bg-white/15"
              : "border-foreground/20 bg-background",
          ].join(" ")}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <div className="font-medium">{label}</div>
          {hint ? (
            <div
              className={[
                "text-xs",
                active ? "text-primary-foreground/80" : "text-muted-foreground",
              ].join(" ")}
            >
              {hint}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  )
}

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
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-base">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white text-black dark:text-black dark:bg-white">
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

/** ภาพประกอบ/Placeholder */
function ImageBlock({
  label,
  caption,
  aspect = "aspect-video",
}: {
  label: string
  caption?: string
  aspect?: string
}) {
  return (
    <figure className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className={`${aspect} w-full grid place-items-center text-sm text-muted-foreground`}>
        [ Image Placeholder — {label} ]
      </div>
      {caption ? (
        <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default function ProjectSpecificationPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Project Specification — User Guide
          </h1>
          <p className="text-base text-muted-foreground">
            คู่มือการใช้งานคำสั่ง Project Specification
            สำหรับการจัดทำเอกสารเฉพาะเจาะจงของโครงการใน Revit
            สามารถนำไปใช้ในการจัดทำเอกสารงานได้อย่างรวดเร็ว
          </p>
        </header>

        <Separator />

        {/* ===== VIDEO ===== */}

      </div>
    </SidebarInset>
  )
}
