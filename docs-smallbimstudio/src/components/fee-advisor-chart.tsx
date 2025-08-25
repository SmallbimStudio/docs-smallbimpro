// src/components/ResidentialAdvisorMinimal.tsx
"use client"

import * as React from "react"
import { useMemo, useState } from "react"
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer,
  BarChart, Bar, ReferenceArea, ReferenceLine
} from "recharts"
import {
  Home, DollarSign, Ruler, Bed, Bath, Car, Layers, Package,
  Settings, CheckCircle2, AlertTriangle, XCircle, CalendarClock, Percent,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartConfig } from "@/components/ui/chart"

/* ---------------- Types ---------------- */
type Grade = "under" | "economy" | "standard" | "premium" | "luxury"
type Quality = "chill" | "standard" | "detailed" | "premium"
type Status = "feasible" | "tight" | "unrealistic"

/* -------------- Chart config -------------- */
const rateChartConfig = {
  est: { label: "Estimate", color: "#2563eb" },
  min: { label: "Min",      color: "#16a34a" },
  max: { label: "Max",      color: "#dc2626" },
} satisfies ChartConfig

/* -------------- Tiny sparkline data (static like RevenueCard) -------------- */
type RevPoint = { d: string; v: number }
const spark: RevPoint[] = [
  { d: "1", v: 12 }, { d: "2", v: 13.5 }, { d: "3", v: 12.2 },
  { d: "4", v: 11.9 }, { d: "5", v: 12 },  { d: "6", v: 12.8 },
  { d: "7", v: 13 },  { d: "8", v: 13.2 }, { d: "9", v: 16.8 },
]

/* -------------- Format helpers -------------- */
const money = (n: number) => n.toLocaleString("th-TH")
const shortTHB = (n: number) => {
  const abs = Math.abs(n)
  if (abs >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (abs >= 1_000)     return `${(n / 1_000).toFixed(1)}K`
  return `${n}`
}

/* -------------- Fee schedule (ภาครัฐ) ----------------
   อ้างอิงกฎกระทรวงฯ 2562 ให้ใช้หลักเกณฑ์ราคากลางจ้างที่ปรึกษา (ครม./กรมบัญชีกลาง) โดยอนุโลม
   โค้ดนี้สรุปช่วง % แบบย่อ (simple|complex|very) เพื่อเดโม:
------------------------------------------------------ */
function feePctFromRegulation(costTHB: number, complexity: "simple" | "complex" | "very") {
  const m = costTHB / 1_000_000
  const pick = (a: number, b: number, c: number) =>
    complexity === "simple" ? a : complexity === "complex" ? b : c

  // ช่วงตัวอย่างที่พบใช้จริง (ใส่ค่าจากบัญชีที่คุณอ้างอิงแทนได้)
  if (m < 50)   return pick(4.5, 6.5, 8.5)
  if (m < 250)  return pick(4.0, 5.25, 7.0)
  if (m < 750)  return pick(3.5, 4.5, 6.0)
  if (m < 2500) return pick(3.0, 3.8, 5.0)
  if (m < 5000) return pick(2.5, 3.2, 4.0)
  return pick(1.5, 2.5, 3.0)
}

export default function ResidentialAdvisorMinimal() {
  /* -------- Project inputs -------- */
  const [budget, setBudget]   = useState(5_000_000)
  const [area, setArea]       = useState(180)  // m²
  const [bed, setBed]         = useState(3)
  const [bath, setBath]       = useState(2)
  const [car, setCar]         = useState(2)
  const [storeys, setStoreys] = useState<1|2|3>(2)
  const [grade, setGrade]     = useState<Grade>("standard")

  /* -------- Architect inputs -------- */
  const [weeks, setWeeks]     = useState(12)
  const [years, setYears]     = useState(5)
  const [quality, setQuality] = useState<Quality>("detailed")

  const calc = useMemo(() => {
    /* ---- construction estimate ---- */
    const RATE: Record<Grade, number> = {
      under: 12_000, economy: 15_000, standard: 20_000, premium: 28_000, luxury: 40_000,
    }
    const RATE_BAND: Record<Grade, {min:number,max:number}> = {
      under:{min:10_000, max:15_000},
      economy:{min:14_000, max:18_000},
      standard:{min:18_000, max:22_000},
      premium:{min:26_000, max:32_000},
      luxury:{min:35_000, max:48_000},
    }
    const ADD = { bed: 120_000, bath: 100_000, car: 150_000 }
    const STOREY_K: Record<number, number> = { 1:1.0, 2:1.08, 3:1.15 }

    const base = RATE[grade] * area
    const extras = bed*ADD.bed + bath*ADD.bath + car*ADD.car
    const estCost = Math.round((base + extras) * (STOREY_K[storeys] ?? 1))
    const estRate = Math.round(estCost / Math.max(area,1))
    const {min:minRate, max:maxRate} = RATE_BAND[grade]

    const gap = budget - estCost
    const ratio = budget / Math.max(estCost,1)
    let status: Status = "feasible"
    if (ratio < 0.8) status = "unrealistic"
    else if (ratio < 1.05) status = "tight"

    /* ---- baseline design time ---- */
    const weeksClamped = Math.max(1, weeks)
    const baselineWeeks = Math.max(8, Math.round(12 + Math.max(0, area-150)*0.04))
    const rush = (baselineWeeks - weeksClamped) / baselineWeeks // >0 = rush

    /* ---- fee percent (regulation-based) ---- */
    const complexity: "simple" | "complex" | "very" =
      quality === "standard" ? "simple" :
      quality === "detailed" ? "complex" :
      quality === "premium"  ? "very" : "simple"

    let basePct = feePctFromRegulation(estCost, complexity)
    if (quality === "chill") basePct = 3 // partial scope (นอกตาราง) เพื่อสื่อสารเบื้องต้น

    const timeK = rush > 0.2 ? 1.2 : rush > 0 ? 1.1 : rush < -0.2 ? 0.9 : 1.0
    const expK  = 1 + Math.min(years * 0.01, 0.2)

    const feePct = basePct * timeK * expK
    const feeTHB = Math.round((feePct / 100) * estCost)
    const totalNeed = estCost + feeTHB

    return {
      // costs
      estCost, estRate, minRate, maxRate, totalNeed, gap, status,
      // time
      baselineWeeks, weeks: weeksClamped, rush,
      // fee
      basePct, feePct, feeTHB,
    }
  }, [budget, area, bed, bath, car, storeys, grade, weeks, years, quality])

  const rateData = [
    { i:0, est:calc.estRate, min:calc.minRate, max:calc.maxRate },
    { i:1, est:calc.estRate, min:calc.minRate, max:calc.maxRate },
  ]

  /* ---------- top KPI cards ---------- */
  return (
    <div className="space-y-6">
      {/* === TOP: 4 KPI cards === */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Advisor • Budget (All-in)"
          subtitle="Total budget"
          value={`${shortTHB(budget)}`}
        />
        <KpiCard
          title="Advisor • Unit Cost (THB/m²)"
          subtitle="Estimated rate"
          value={`${shortTHB(calc.estRate)}K`.replace("KK","K")}
        />
        <KpiCard
          title="Advisor • Architect Fee (THB)"
          subtitle={`${calc.feePct.toFixed(1)} %`}
          value={`${shortTHB(calc.feeTHB)}`}
        />
        {/* === Feasibility (custom chart) === */}
        <FeasibilityKpiCard
          title="Advisor • Feasibility"
          statusLabel={calc.status === "feasible" ? "ก่อสร้างได้" : calc.status === "tight" ? "พอทำได้" : "เกินงบ"}
          valueText={calc.status === "feasible" ? "OK" : calc.status === "tight" ? "TIGHT" : "OVER"}
          budget={budget}
          totalNeed={calc.totalNeed}
        />
      </div>

      {/* === BOTTOM: 25% / 25% / 50% layout === */}
      <div className="grid gap-6 lg:grid-cols-4">
        {/* ① รายละเอียดโครงการ (25%) */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Home className="h-4 w-4" /> กำหนดรายละเอียดโครงการ
            </CardTitle>
            <CardDescription>กรอกข้อมูลหลักเพียงไม่กี่ช่อง</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field label="งบประมาณทั้งหมด (บาท)" icon={<DollarSign className="h-4 w-4" />}>
              <input type="number" min={500_000} step={100_000} value={budget}
                onChange={e=>setBudget(Number(e.target.value||0))}
                className="w-full rounded-md border px-3 py-2" />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="พื้นที่ใช้สอย (ม²)" icon={<Ruler className="h-4 w-4" />}>
                <input type="number" min={40} step={5} value={area}
                  onChange={e=>setArea(Number(e.target.value||0))}
                  className="w-full rounded-md border px-3 py-2" />
              </Field>
              <Field label="จำนวนชั้น" icon={<Layers className="h-4 w-4" />}>
                <Select value={String(storeys)} onValueChange={v=>setStoreys(Number(v) as 1|2|3)}>
                  <SelectTrigger><SelectValue placeholder="ชั้น" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 ชั้น</SelectItem>
                    <SelectItem value="2">2 ชั้น</SelectItem>
                    <SelectItem value="3">3 ชั้น</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Field label="ห้องนอน" icon={<Bed className="h-4 w-4" />}>
                <input type="number" min={1} max={10} value={bed}
                  onChange={e=>setBed(Number(e.target.value||0))}
                  className="w-full rounded-md border px-3 py-2" />
              </Field>
              <Field label="ห้องน้ำ" icon={<Bath className="h-4 w-4" />}>
                <input type="number" min={1} max={8} value={bath}
                  onChange={e=>setBath(Number(e.target.value||0))}
                  className="w-full rounded-md border px-3 py-2" />
              </Field>
              <Field label="ที่จอดรถ" icon={<Car className="h-4 w-4" />}>
                <input type="number" min={0} max={6} value={car}
                  onChange={e=>setCar(Number(e.target.value||0))}
                  className="w-full rounded-md border px-3 py-2" />
              </Field>
            </div>

            <Field label="เกรดวัสดุ" icon={<Package className="h-4 w-4" />}>
              <Select value={grade} onValueChange={v=>setGrade(v as Grade)}>
                <SelectTrigger><SelectValue placeholder="เลือกเกรด" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="under">ไม่เจาะจง (12,000/ม²)</SelectItem>
                  <SelectItem value="economy">ประหยัด (15,000/ม²)</SelectItem>
                  <SelectItem value="standard">มาตรฐาน (20,000/ม²)</SelectItem>
                  <SelectItem value="premium">พรีเมียม (28,000/ม²)</SelectItem>
                  <SelectItem value="luxury">หรูหรา (40,000/ม²)</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </CardContent>
        </Card>

        {/* ② ฝั่งสถาปนิก (25%) */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Settings className="h-4 w-4" /> ฝั่งสถาปนิก
            </CardTitle>
            <CardDescription>เวลา • ประสบการณ์ • ระดับงาน</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field label={`ระยะเวลาออกแบบ (สัปดาห์) — มาตรฐาน ${calc.baselineWeeks} สัปดาห์`} icon={<CalendarClock className="h-4 w-4" />}>
              <input
                type="range"
                min={1}
                max={32}
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground flex justify-between mt-1">
                <span>1 สัปดาห์</span>
                <span className="font-semibold">{weeks} สัปดาห์</span>
                <span>32 สัปดาห์</span>
              </div>
            </Field>

            <Field label="ประสบการณ์ (ปี)" icon={<Percent className="h-4 w-4" />}>
              <input type="range" min={0} max={30} value={years}
                onChange={e=>setYears(Number(e.target.value))}
                className="w-full" />
              <div className="text-xs text-muted-foreground mt-1">{years} ปี</div>
            </Field>

            <Field label="ระดับคุณภาพงาน" icon={<Settings className="h-4 w-4" />}>
              <Select value={quality} onValueChange={v=>setQuality(v as Quality)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="chill">ชิวๆ (3%)*</SelectItem>
                  <SelectItem value="standard">มาตรฐาน (ไม่ซับซ้อน)</SelectItem>
                  <SelectItem value="detailed">ละเอียด (ซับซ้อน)</SelectItem>
                  <SelectItem value="premium">พรีเมียม (ซับซ้อนมาก)</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <div className="rounded-md border p-2 text-[11px] text-muted-foreground">
              * 3% = กรณีลดขอบเขตงาน/ให้บางส่วน (นอกตารางกฎกระทรวงฯ — ใช้เพื่อการคุยเบื้องต้นเท่านั้น)
            </div>
          </CardContent>
        </Card>

        {/* ③ สรุปผล + กราฟ (50%) */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">สรุปผล & กราฟ</CardTitle>
            <CardDescription>บอกความเป็นไปได้ + ค่าประมาณสำคัญ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* status */}
            <div className={`rounded-md border p-3 text-sm ${
              calc.status === "feasible" ? "border-green-200 bg-green-50" :
              calc.status === "tight"     ? "border-amber-200 bg-amber-50" :
                                            "border-red-200 bg-red-50"
            }`}>
              <div className="flex items-center gap-2">
                {calc.status === "feasible"    && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                {calc.status === "tight"       && <AlertTriangle className="h-4 w-4 text-amber-600" />}
                {calc.status === "unrealistic" && <XCircle className="h-4 w-4 text-red-600" />}
                <span className="font-medium">
                  {calc.status === "feasible" ? "เป็นไปได้" :
                   calc.status === "tight"     ? "พอทำได้ (งบตึง)" :
                                                  "งบไม่พอ / ขอบเขตเกินงบ"}
                </span>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <MiniStat label="ค่าก่อสร้างประมาณ" value={`${money(calc.estCost)} บาท`} />
              <MiniStat label="ราคาต่อ ม²" value={`${money(calc.estRate)} บาท/ม²`} />
              <MiniStat label="ค่าออกแบบ (%)" value={`${calc.feePct.toFixed(1)} %`} />
              <MiniStat label="ค่าออกแบบ (บาท)" value={`${money(calc.feeTHB)} บาท`} />
              <MiniStat label="ระยะเวลา (สัปดาห์)" value={`${calc.weeks} / ${calc.baselineWeeks}`} />
              <MiniStat label="งบคงเหลือ" value={`${money(budget - calc.totalNeed)} บาท`} />
            </div>

            {/* unit-rate band chart */}
            
            <div className="text-[11px] text-muted-foreground">
              อัตรา % ค่าบริการอ้างอิงจาก <b>กฎกระทรวงฯ 2562</b> สำหรับงานภาครัฐ (ใช้อัตราจากหลักเกณฑ์ราคากลางจ้างที่ปรึกษาโดยอนุโลม) —
              งานเอกชนสามารถตกลงกันได้ ทั้งนี้ตัวคูณเวลา/ประสบการณ์เป็น <i>แนวทางภายในสตูดิโอ</i> เพื่อใช้สื่อสารกับลูกค้า. 
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

/* ---------- Small UI helpers ---------- */
function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium flex items-center gap-2">
        {icon}{label}
      </label>
      {children}
    </div>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  )
}

/* ---------- Generic KPI card (แบบ RevenueCard) ---------- */
function KpiCard({ title, subtitle, value }: { title: string; subtitle: string; value: string }) {
  return (
    <Card className="p-0">
      <CardContent className="px-6 pt-5 pb-5">
        <div className="mb-1">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        </div>
        <div className="text-3xl font-semibold">{value}</div>
        <div className="mt-1 text-xs text-muted-foreground">{subtitle}</div>

        <div className="mt-4 -mx-1 -mb-1">
          <div className="overflow-hidden rounded-b-xl">
            <ChartContainer className="h-[120px] w-full pr-2" config={{ v: { label: "v" } }}>
              <LineChart data={spark} margin={{ top: 12, right: 12, left: 6, bottom: 8 }}>
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
                      <circle key={`dot-${index}`} cx={cx} cy={cy} r={3.5} fill="white" stroke="currentColor" strokeWidth={2} />
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

/* ---------- Feasibility KPI: Bullet chart ---------- */
function FeasibilityKpiCard({
  title, statusLabel, valueText, budget, totalNeed,
}: {
  title: string;
  statusLabel: string;
  valueText: string;
  budget: number;
  totalNeed: number;
}) {
  const data = [{ k: "total", est: totalNeed }]
  const max = Math.max(budget, totalNeed) * 1.15
  const safe = budget * 0.9

  const barColor = totalNeed <= budget ? "#10b981" : totalNeed <= budget * 1.05 ? "#f59e0b" : "#ef4444"

  return (
    <Card className="p-0">
      <CardContent className="px-6 pt-5 pb-5">
        <div className="mb-1">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        </div>
        <div className="text-3xl font-semibold">{valueText}</div>
        <div className="mt-1 text-xs text-muted-foreground">{statusLabel}</div>

        <div className="mt-4 -mx-1 -mb-1">
          <div className="overflow-hidden rounded-b-xl">
            <ChartContainer className="h-[120px] w-full pr-2" config={{ est: { label: "Total (Build+Fee)" } }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 12, right: 12, left: 6, bottom: 8 }}>
                  {/* เส้นแกน/สเกล */}
                  <CartesianGrid horizontal={false} />
                  <XAxis type="number" domain={[0, max]} tickFormatter={(v:number)=>v.toLocaleString("th-TH")} />
                  <YAxis type="category" dataKey="k" hide />
                  {/* พื้นหลังช่วงสี */}
                  <ReferenceArea x1={0} x2={safe} fill="#dcfce7" fillOpacity={0.8} />
                  <ReferenceArea x1={safe} x2={budget} fill="#fef3c7" fillOpacity={0.8} />
                  <ReferenceArea x1={budget} x2={max} fill="#fee2e2" fillOpacity={0.8} />
                  {/* เส้นงบประมาณ */}
                  <ReferenceLine x={budget} stroke="#111827" strokeDasharray="4 4" />
                  {/* แท่งประมาณการรวม (ก่อสร้าง+ค่าแบบ) */}
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        indicator="dot"
                        labelFormatter={() => "รวมค่าก่อสร้าง + ค่าแบบ"}
                      />
                    }
                  />
                  <Bar dataKey="est" barSize={18} radius={[0, 8, 8, 0]} fill={barColor} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
