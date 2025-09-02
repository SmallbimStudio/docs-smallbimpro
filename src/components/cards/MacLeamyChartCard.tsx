"use client"

import * as React from "react"
import { useMemo, useState } from "react"
import { TrendingUp, Settings, Zap, Clock, Info } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig, ChartContainer, ChartLegend, ChartLegendContent,
  ChartTooltip, ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip"

export type AnalysisType = "overview" | "cost-focused" | "efficiency"

export interface MacLeamyChartCardProps {
  className?: string
  initialBimEnabled?: boolean
  initialWorkSpeed?: number          // 0 - 100
  initialDesignQuality?: number      // 0 - 100
  initialAnalysisType?: AnalysisType
  title?: string
  description?: string
}

/** Reusable MacLeamy Curve card */
export default function MacLeamyChartCard({
  className,
  initialBimEnabled = false,
  initialWorkSpeed = 50,
  initialDesignQuality = 50,
  initialAnalysisType = "overview",
  title = "MacLeamy Curve — Interactive Analysis",
  description = "แสดงความสัมพันธ์ระหว่างความสามารถในการปรับเปลี่ยนและต้นทุนตลอดระยะโครงการ",
}: MacLeamyChartCardProps) {
  const [bimEnabled, setBimEnabled] = useState(initialBimEnabled)
  const [workSpeed, setWorkSpeed] = useState(initialWorkSpeed)
  const [designQuality, setDesignQuality] = useState(initialDesignQuality)
  const [analysisType, setAnalysisType] = useState<AnalysisType>(initialAnalysisType)

  const chartConfig = {
    abilityToImpact:   { label: "ความสามารถในการปรับเปลี่ยน", color: "#2563eb" },
    costOfChanges:     { label: "ต้นทุนการเปลี่ยนแปลง",       color: "#dc2626" },
    traditionalWorkflow:{ label: "วิธีการทำงานแบบดั้งเดิม",     color: "#1f2937" },
    bimWorkflow:       { label: "BIM Workflow",                  color: "#16a34a" },
  } satisfies ChartConfig

  const chartData = useMemo(() => {
    const phases = [
      { label: "Preliminary Design", full: "Preliminary Design", x: 1 },
      { label: "Detailed Design", full: "Detailed Design", x: 2 },
      { label: "Construction Documentation", full: "Construction Documentation", x: 3 },
      { label: "Construction", full: "Construction", x: 4 },
      { label: "Operation", full: "Operation", x: 5 },
    ]
    return phases.map(({ label, full, x }) => {
      const abilityBase = 110 * Math.exp(-0.5 * (x - 1)) + 10
      const costBase    = 10 + 6 * Math.pow(x - 1, 2) + 18 * Math.exp(0.65 * (x - 3))
      const peak        = 120 * Math.exp(-Math.pow(x - 3, 2) / (2 * Math.pow(0.45, 2)))
      const bim         = bimEnabled ? 80 * Math.exp(-Math.pow(x - 2, 2) / (2 * Math.pow(0.5, 2))) : 0

      const speedK   = workSpeed / 50
      const qualityK = designQuality / 50

      const ability = abilityBase * (0.7 + 0.6 * speedK) * qualityK
      const cost    = costBase    * (1.6 - 0.6 * speedK)
      const trad    = peak        * (0.9 - 0.2 * speedK)
      const bimWf   = bim         * (0.8 + 0.4 * qualityK)

      return {
        phase: label,
        fullPhase: full,
        abilityToImpact: Math.round(ability),
        costOfChanges: Math.round(cost),
        traditionalWorkflow: Math.round(trad),
        bimWorkflow: Math.round(bimWf),
      }
    })
  }, [bimEnabled, workSpeed, designQuality])

  const styleFor = (series: "cost" | "ability" | "trad" | "bim") => {
    const normal = { strokeWidth: 2, strokeOpacity: 1, fillOpacity: 0.45 }
    const dim    = { strokeWidth: 1, strokeOpacity: 0.25, fillOpacity: 0.1 }
    switch (analysisType) {
      case "cost-focused": return series === "cost" ? normal : dim
      case "efficiency":   return series === "ability" || series === "bim" ? normal : dim
      default:             return normal
    }
  }

  const speedLabel =
    workSpeed < 30 ? "ต่ำ" : workSpeed < 70 ? "ปานกลาง" : "สูง"
  const qualityLabel =
    designQuality < 30 ? "คุณภาพต่ำ" : designQuality < 70 ? "คุณภาพปานกลาง" : "คุณภาพสูง"

  return (
    <TooltipProvider delayDuration={150}>
      <Card className={className}>
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>

          <Select value={analysisType} onValueChange={(v: AnalysisType) => setAnalysisType(v)}>
            <SelectTrigger className="w-[190px] rounded-lg sm:ml-auto" aria-label="Select analysis type">
              <SelectValue placeholder="Analysis Type" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="overview">Overview Analysis</SelectItem>
              <SelectItem value="cost-focused">Cost-Focused View</SelectItem>
              <SelectItem value="efficiency">Efficiency Analysis</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer config={chartConfig} className="aspect-auto h-[380px] w-full">
            <AreaChart data={chartData} margin={{ top: 12, right: 16, left: 8, bottom: 0 }}>
              <defs>
                <linearGradient id="fillAbility" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="fillCost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#fde68a" stopOpacity={0.85} />
                  <stop offset="100%" stopColor="#fde68a" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="fillBIM" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#4d7c0f" stopOpacity={0} />
                  <stop offset="100%" stopColor="#4d7c0f" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="phase"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />
              <YAxis
                width={42}
                domain={[0, 140]}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                label={{
                  value: "Effect / Cost / Effort (index)",
                  angle: -90,
                  position: "insideLeft",
                  style: { fontSize: 11, fill: "#6b7280" },
                  offset: 0,
                }}
              />

              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    indicator="dot"
                    labelFormatter={(value, payload) => payload?.[0]?.payload?.fullPhase ?? value}
                  />
                }
              />

              <Area dataKey="costOfChanges" type="natural" fill="url(#fillCost)"    stroke="#fcd34d" {...styleFor("cost")} />
              <Area dataKey="abilityToImpact" type="natural" fill="url(#fillAbility)" stroke="#f59e0b" {...styleFor("ability")} />
              <Area dataKey="traditionalWorkflow" type="natural" fill="none"          stroke="#0a0a0a" {...styleFor("trad")} />
              {bimEnabled && (
                <Area dataKey="bimWorkflow" type="natural" fill="url(#fillBIM)" stroke="#65a30d" {...styleFor("bim")} />
              )}

              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>

          {/* Controls */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="text-sm leading-none font-semibold">BIM Workflow</span>
              </div>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={bimEnabled}
                  onChange={(e) => setBimEnabled(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">เปิดใช้งาน BIM</span>
              </label>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm leading-none font-semibold">ประสิทธิภาพกระบวนการทำงาน</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="ml-1 text-muted-foreground hover:text-foreground" aria-label="อธิบาย Workflow Efficiency">
                        <Info className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start" className="max-w-[320px] text-xs sm:text-sm">
                      Workflow Efficiency คือ “ความเป็นระบบ/ความคงที่ของเวิร์กโฟลว์”
                      เมื่อใช้วิธีทำงานที่เป็นระบบ (เช่น BIM) จะตัดสินใจเร็วขึ้นช่วงต้นและลดต้นทุนปลายทาง
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="font-mono text-xs sm:text-sm">
                  {workSpeed < 30 ? "ต่ำ" : workSpeed < 70 ? "ปานกลาง" : "สูง"}
                </span>
              </div>

              <input
                type="range" min={0} max={100} value={workSpeed}
                onChange={(e) => setWorkSpeed(Number(e.target.value))}
                className="slider w-full cursor-pointer rounded-lg [appearance:none] touch-none bg-gray-200"
              />
              <div className="text-muted-foreground flex justify-between text-xs">
                <span>ต่ำ</span><span>สูง</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm leading-none font-semibold">คุณภาพงานออกแบบ</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="ml-1 text-muted-foreground hover:text-foreground" aria-label="อธิบายคุณภาพงานออกแบบ">
                        <Info className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start" className="max-w-[320px] text-xs sm:text-sm">
                      คุณภาพแบบสูง = รายละเอียดครบถ้วน ตรวจทานแล้ว ช่วยลดงานแก้ไข (rework) และความเสี่ยงในช่วงหลัง
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="font-mono text-xs sm:text-sm">
                  {designQuality < 30 ? "คุณภาพต่ำ" : designQuality < 70 ? "คุณภาพปานกลาง" : "คุณภาพสูง"}
                </span>
              </div>

              <input
                type="range" min={0} max={100} value={designQuality}
                onChange={(e) => setDesignQuality(Number(e.target.value))}
                className="slider w-full cursor-pointer rounded-lg [appearance:none] touch-none bg-gray-200"
              />
              <div className="text-muted-foreground flex justify-between text-xs">
                <span>ต่ำ</span><span>สูง</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="w-full space-y-2">
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  {workSpeed > 70 && designQuality > 70
                    ? "Optimal workflow efficiency"
                    : workSpeed < 30 || designQuality < 30
                    ? "Potential optimization needed"
                    : "Balanced project approach"}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                  Dynamic project phase analysis
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-3 text-xs space-y-1">
              <p><strong>💡 Analysis Insight</strong></p>
              <p>• <strong>ประสิทธิภาพกระบวนงาน:</strong> ปรับได้เพื่อดูผลต่อ “ต้นทุนปลายทาง/ความสามารถช่วงต้น”</p>
              <p>• <strong>คุณภาพงานออกแบบ:</strong> คุณภาพสูงช่วยลด rework และความเสี่ยง</p>
              {bimEnabled && (
                <p>• <strong>🔧 BIM Active:</strong> ย้ายภาระงานไปช่วงต้น (Detail) ลดความผิดพลาดและค่าใช้จ่ายปลายทาง</p>
              )}
            </div>
          </div>

          {/* slider styling */}
          <style jsx>{`
            .slider {
              -webkit-appearance: none; appearance: none;
              height: 8px; background: #e5e7eb; border-radius: 9999px;
              outline: none; position: relative; z-index: 10;
            }
            .slider::-webkit-slider-runnable-track { height: 8px; border-radius: 9999px; background: #e5e7eb; }
            .slider::-moz-range-track { height: 8px; border-radius: 9999px; background: #e5e7eb; }
            .slider::-webkit-slider-thumb {
              -webkit-appearance: none; appearance: none;
              width: 18px; height: 18px; border-radius: 50%;
              background: #2563eb; border: 2px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,.1);
              cursor: pointer; margin-top: -5px;
            }
            .slider::-moz-range-thumb {
              width: 18px; height: 18px; border-radius: 50%;
              background: #2563eb; border: 2px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,.1);
              cursor: pointer;
            }
          `}</style>
        </CardFooter>
      </Card>
    </TooltipProvider>
  )
}
