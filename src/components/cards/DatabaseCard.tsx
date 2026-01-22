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
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, SlidersHorizontal, Search, CheckCircle2 } from "lucide-react"

// ที่อยู่ JSON
const DATA_URL =
  "https://smallbimstudio.github.io/RSB_BOQ_Database/RSB_database_2025.json"

type Row = Record<string, unknown>
type Group = "ALL" | "A" | "B" | "C" | "D" | "E" | "F"

const columns: { key: string; label: string; align?: "left" | "right" | "center" }[] = [
  { key: "Keynote", label: "Keynote", align: "left" },
  { key: "Comment", label: "Description", align: "left" },
  { key: "Unit", label: "Unit", align: "center" },
  { key: "RSB_LossPercentage", label: "%", align: "right" },
  { key: "RSB_MaterialUnitCost", label: "Material", align: "right" },
  { key: "RSB_LabourUnitCost", label: "Labour", align: "right" },
  { key: "Verified", label: "Verified", align: "center" },
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
    <Card className="w-full shadow-md border-slate-200">
      <CardHeader className="pb-4 border-b bg-slate-50/50 rounded-t-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Verified Database
            </CardTitle>
            <p className="text-sm text-muted-foreground">
               รายการที่ผ่านการตรวจสอบและ Mapping รหัสต้นทุนแล้ว
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
            {/* View (เลือกหมวด) */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select value={group} onValueChange={(v) => setGroup(v as Group)}>
                <SelectTrigger className="h-9 w-full sm:w-[200px]">
                  <SlidersHorizontal className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="ALL">All Categories</SelectItem>
                  <SelectItem value="A">A - งานวิศวกรรมโครงสร้าง</SelectItem>
                  <SelectItem value="B">B - งานสถาปัตยกรรม</SelectItem>
                  <SelectItem value="C">C - งานระบบไฟฟ้า</SelectItem>
                  <SelectItem value="D">D - งานระบบสุขาภิบาล</SelectItem>
                  <SelectItem value="E">E - งานระบบปรับอากาศ</SelectItem>
                  <SelectItem value="F">F - งานทั่วไป</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search items..."
                className="h-9 w-full sm:w-[240px] pl-9"
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {loading && <div className="p-8 text-center text-sm text-muted-foreground">กำลังโหลดข้อมูล...</div>}
        {!loading && error && <div className="p-8 text-center text-sm text-red-600">เกิดข้อผิดพลาด: {error}</div>}

        {!loading && !error && (
          <>
            <div className="overflow-x-auto">
              <div className="max-h-[600px] overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 z-10 shadow-sm">
                    <TableRow className="bg-slate-900 hover:bg-slate-900 border-none">
                      {columns.map((c) => (
                        <TableHead
                          key={c.key}
                          className={`
                            whitespace-nowrap bg-slate-900 text-slate-100 font-medium h-10
                            ${c.align === 'right' ? 'text-right' : c.align === 'center' ? 'text-center' : 'text-left'}
                          `}
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
                        <TableRow key={start + idx} className={`${tone} border-b border-slate-100/50 hover:brightness-95 transition-all`}>
                          {columns.map((c) => (
                            <TableCell 
                              key={c.key} 
                              className={`
                                py-3 px-4 max-w-[300px] truncate text-sm
                                ${c.align === 'right' ? 'text-right font-mono' : c.align === 'center' ? 'text-center' : 'text-left'}
                                ${c.key === 'Keynote' ? 'font-semibold text-slate-700' : 'text-slate-600'}
                              `}
                            >
                              {c.key === "Verified" ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                              ) : (
                                formatValue(row[c.key])
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      )
                    })}
                    {pageRows.length === 0 && (
                       <TableRow>
                         <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                           ไม่พบข้อมูลที่ค้นหา
                         </TableCell>
                       </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* footer controls */}
            <div className="p-4 border-t bg-slate-50/50 flex flex-wrap items-center justify-between gap-4">
               <div className="text-xs text-muted-foreground">
                Showing {total ? start + 1 : 0} – {Math.min(end, total)} of {total.toLocaleString()} items
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="hidden sm:inline text-muted-foreground">Rows per page</span>
                  <Select
                    value={String(rowsPerPage)}
                    onValueChange={(v) => setRowsPerPage(Number(v))}
                  >
                    <SelectTrigger className="h-8 w-[70px]">
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

                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" className="h-8 w-8" disabled={safePage === 1} onClick={() => setPage(1)}>
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8" disabled={safePage === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm font-medium w-[100px] text-center">
                    Page {safePage} of {totalPages}
                  </div>
                  <Button variant="outline" size="icon" className="h-8 w-8" disabled={safePage === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8" disabled={safePage === totalPages} onClick={() => setPage(totalPages)}>
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}