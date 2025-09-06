// src/components/cards/DatabaseCard.tsx
"use client"

import * as React from "react"
import { useEffect, useMemo, useState } from "react"

import {
  Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card"

import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, SlidersHorizontal, Search } from "lucide-react"

// ที่อยู่ JSON
const DATA_URL =
  "https://smallbimstudio.github.io/RSB_BOQ_Database/RSB_database_2025.json"

type Row = Record<string, unknown>
type Group = "ALL" | "A" | "B" | "C" | "D" | "E" | "F"

const columns: { key: string; label: string }[] = [
  { key: "Keynote", label: "Keynote" },
  { key: "Comment", label: "Comment" },
  { key: "Unit", label: "Unit" },
  { key: "RSB_LossPercentage", label: "%" },
  { key: "RSB_MaterialUnitCost", label: "Material Cost" },
  { key: "RSB_LabourUnitCost", label: "Labour Cost" },
]

function formatValue(v: unknown) {
  if (typeof v === "number") {
    return Number.isInteger(v)
      ? v.toLocaleString()
      : v.toLocaleString(undefined, { maximumFractionDigits: 2 })
  }
  return String(v ?? "")
}

/* ---------- type guards / helpers ---------- */
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
function getErrMsg(e: unknown) {
  return e instanceof Error ? e.message : String(e)
}

// ---------- สีแถวตาม “ระดับความลึกของ Keynote” ----------
function keynoteFirstSegmentLen(k: string) {
  const seg = k.split(".")[0] ?? ""
  return seg.length
}
function rowClassByKeynote(k: string) {
  const len = keynoteFirstSegmentLen(k)
  // level: 1 = เข้มสุด, 2 = อ่อนลง, 3 = อ่อนมาก, 4 = ขาว
  if (k.length === 1) return "bg-neutral-200/90"          // A
  if (k.length === 2 && !k.includes(".")) return "bg-neutral-100/90" // A1
  if (len <= 4) return "bg-neutral-100/60"                // A1000, A1000.1 …
  return "bg-white"                                       // 6+ → ขาว
}

export default function DatabaseCard({ defaultKey = "" }: { defaultKey?: string }) {
  const [rows, setRows] = useState<Row[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // filter/view
  const [query, setQuery] = useState(defaultKey)
  const [group, setGroup] = useState<Group>("ALL")

  // pagination
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(DATA_URL, { cache: "no-store" })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json: unknown = await res.json()
        if (cancelled) return
        setRows(extractArray(json))
      } catch (e: unknown) {
        if (!cancelled) setError(getErrMsg(e))
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [])

  // filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return rows.filter((r) => {
      const k = String(r["Keynote"] ?? "")
      const inGroup = group === "ALL" ? true : k.startsWith(group)
      if (!q) return inGroup
      const c = String(r["Comment"] ?? "")
      const u = String(r["Unit"] ?? "")
      return inGroup && (
        k.toLowerCase().includes(q) ||
        c.toLowerCase().includes(q) ||
        u.toLowerCase().includes(q)
      )
    })
  }, [rows, query, group])

  // pagination slice
  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / rowsPerPage))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * rowsPerPage
  const end = start + rowsPerPage
  const pageRows = filtered.slice(start, end)

  // reset page เมื่อเปลี่ยนเงื่อนไข
  useEffect(() => { setPage(1) }, [query, group, rowsPerPage])

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Database</CardTitle>

          <div className="flex items-center gap-2">
            {/* View (เลือกหมวด) */}
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm" className="gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                View
              </Button>
              <Select value={group} onValueChange={(v) => setGroup(v as Group)}>
                <SelectTrigger className="h-8 w-[250px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="ALL">All</SelectItem>
                  <SelectItem value="A">หมวดงานวิศวกรรมโครงสร้าง</SelectItem>
                  <SelectItem value="B">หมวดงานสถาปัตยกรรม</SelectItem>
                  <SelectItem value="C">หมวดงานระบบไฟฟ้า</SelectItem>
                  <SelectItem value="D">หมวดงานระบบสุขาภิบาล</SelectItem>
                  <SelectItem value="E">หมวดงานระบบปรับอากาศ</SelectItem>
                  <SelectItem value="F">หมวดงานทั่วไป</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="h-8 w-[220px] pl-8"
              />
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground mt-1">
          Showing {total ? start + 1 : 0} – {Math.min(end, total)} of {total.toLocaleString()}
        </div>
      </CardHeader>

      <CardContent>
        {loading && <div className="text-sm text-muted-foreground">กำลังโหลดข้อมูล…</div>}
        {!loading && error && <div className="text-sm text-red-600">เกิดข้อผิดพลาด: {error}</div>}

        {!loading && !error && (
          <>
            <div className="overflow-x-auto">
              <div className="max-h-[480px] overflow-y-auto rounded-md border">
                <Table>
                  {/* Header ดำ ตัวหนังสือขาว */}
                  <TableHeader className="sticky top-0 z-10">
                    <TableRow className="bg-black hover:bg-black">
                      {columns.map((c) => (
                        <TableHead
                          key={c.key}
                          className="whitespace-nowrap bg-black text-white"
                        >
                          {c.label}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {pageRows.map((row, idx) => {
                      const k = String(row["Keynote"] ?? "")
                      const tone = rowClassByKeynote(k)
                      return (
                        <TableRow key={start + idx} className={`${tone}`}>
                          {columns.map((c) => (
                            <TableCell key={c.key} className="max-w-[280px] truncate">
                              {formatValue(row[c.key])}
                            </TableCell>
                          ))}
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* footer controls */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="mr-1">Rows per page</span>
                <Select
                  value={String(rowsPerPage)}
                  onValueChange={(v) => setRowsPerPage(Number(v))}
                >
                  <SelectTrigger className="h-9 w-[90px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-1 text-sm">
                <span className="mr-2">
                  Page {safePage} of {totalPages}
                </span>
                <Button variant="outline" size="icon" disabled={safePage === 1} onClick={() => setPage(1)}>
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" disabled={safePage === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" disabled={safePage === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" disabled={safePage === totalPages} onClick={() => setPage(totalPages)}>
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
