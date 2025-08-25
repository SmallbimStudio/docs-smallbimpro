// src/components/cards/RevenueCard.tsx
"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"

type RevPoint = { d: string; v: number }
const revenueData: RevPoint[] = [
  { d: "1", v: 12 }, { d: "2", v: 13.5 }, { d: "3", v: 12.2 },
  { d: "4", v: 11.9 }, { d: "5", v: 12 },  { d: "6", v: 12.8 },
  { d: "7", v: 13 },  { d: "8", v: 13.2 }, { d: "9", v: 16.8 },
]

/* ---- helpers: type-safe JSON array extractor ---- */
type Row = Record<string, unknown>

function isRowArray(val: unknown): val is Row[] {
  return Array.isArray(val) && val.every((r) => r && typeof r === "object" && !Array.isArray(r))
}
function extractArray(json: unknown): Row[] {
  if (isRowArray(json)) return json
  if (json && typeof json === "object") {
    const arr = Object.values(json).find(isRowArray)
    if (arr) return arr
  }
  return []
}

export default function RevenueCard({
  dataUrl = "https://smallbimstudio.github.io/RSB_BOQ_Database/RSB_database_2025.json",
  title = "Total Records",
}: {
  dataUrl?: string
  title?: string
}) {
  const [totalRows, setTotalRows] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        setError(null)
        setTotalRows(null)
        const res = await fetch(dataUrl, { cache: "no-store" })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json: unknown = await res.json()
        if (cancelled) return
        const arr = extractArray(json)
        setTotalRows(arr.length)
      } catch (e: unknown) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e))
      }
    })()
    return () => { cancelled = true }
  }, [dataUrl])

  return (
    <Card className="p-0">
      <CardContent className="px-6 pt-5 pb-5">
        <div className="mb-1">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Database • {title}
          </CardTitle>
        </div>

        {/* แสดงจำนวนแถวทั้งหมด */}
        <div className="text-3xl font-semibold">
          {error ? "—" : totalRows === null ? "…" : totalRows.toLocaleString()}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          {error ? `Error: ${error}` : totalRows === null ? "Loading total rows…" : "total rows"}
        </div>

        {/* กราฟเดิม (ยังอยู่เพื่อความสวยงาม) */}
        <div className="mt-4 -mx-1 -mb-1">
          <div className="overflow-hidden rounded-b-xl">
            <ChartContainer className="h-[120px] w-full pr-2" config={{ v: { label: "Revenue" } }}>
              <LineChart data={revenueData} margin={{ top: 12, right: 12, left: 6, bottom: 8 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="d" tickLine={false} axisLine={false} hide />
                <YAxis tickLine={false} axisLine={false} hide domain={["dataMin - 1", "dataMax + 1"]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="currentColor"
                  strokeWidth={2}
                  dot={(props: { cx: number; cy: number; index: number }) => {
                    const { cx, cy, index } = props
                    return (
                      <circle
                        key={`dot-${index}`}
                        cx={cx}
                        cy={cy}
                        r={3.5}
                        fill="white"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                    )
                  }}
                  activeDot={{ r: 4.5 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
