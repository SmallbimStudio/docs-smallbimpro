// src/app/page.tsx
"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import { TrendingUp, Settings, Zap, Clock, Info } from "lucide-react" // +++ ADD: Info
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import Image from "next/image"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// +++ ADD: shadcn tooltip imports
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

/* ---------------- Chart config (legend colors/labels) ---------------- */
const chartConfig = {
  abilityToImpact: { label: "ความสามารถในการปรับเปลี่ยน", color: "#2563eb" },
  costOfChanges: { label: "ต้นทุนการเปลี่ยนแปลง", color: "#dc2626" },
  traditionalWorkflow: { label: "วิธีการทำงานแบบดั้งเดิม", color: "#1f2937" },
  bimWorkflow: { label: "BIM Workflow", color: "#16a34a" },
} satisfies ChartConfig

/* ====================== MacLeamy Interactive Chart ====================== */
function MacLeamyInteractiveChart() {
  const [bimEnabled, setBimEnabled] = useState(false)
  const [workSpeed, setWorkSpeed] = useState(50)
  type AnalysisType = "overview" | "cost-focused" | "efficiency"

const [designQuality, setDesignQuality] = useState<number>(50)
const [analysisType, setAnalysisType] = useState<AnalysisType>("overview")

  // --------- สร้างข้อมูลด้วยโค้งที่ “สูงขึ้น” และอ่านค่าได้ชัด ---------
  const chartData = useMemo(() => {
    const phases = [
      { label: "Preliminary Design", full: "Preliminary Design", x: 1 },
      { label: "Detailed Design", full: "Detailed Design", x: 2 },
      { label: "Construction Documentation", full: "Construction Documentation", x: 3 },
      { label: "Construction", full: "Construction", x: 4 },
      { label: "Operation", full: "Operation", x: 5 },
    ]

    return phases.map(({ label, full, x }) => {
      // น้ำเงิน: ความสามารถในการปรับเปลี่ยน (เริ่มสูงค่อยๆ ลด)
      const abilityBase = 110 * Math.exp(-0.5 * (x - 1)) + 10
      // แดง: ต้นทุนการเปลี่ยนแปลง (สูงขึ้นมากช่วงปลาย)
      const costBase = 10 + 6 * Math.pow(x - 1, 2) + 18 * Math.exp(0.65 * (x - 3))
      // ดำ: ดราฟติ้งเซ็นทริก (พุ่งสูงเฉพาะช่วง Doc)
      const peak = 120 * Math.exp(-Math.pow(x - 3, 2) / (2 * Math.pow(0.45, 2)))

      // เขียว: BIM peak แถวช่วง Detail
      let bim = 0
      if (bimEnabled) {
        bim = 80 * Math.exp(-Math.pow(x - 2, 2) / (2 * Math.pow(0.5, 2)))
      }

      const speedK = workSpeed / 50 // ประสิทธิภาพเวิร์กโฟลว์
      const qualityK = designQuality / 50 // คุณภาพแบบ

      const ability = abilityBase * (0.7 + 0.6 * speedK) * qualityK
      const cost = costBase * (1.6 - 0.6 * speedK) // เร็ว/เป็นระบบดี → ลด rework ปลายทาง
      const trad = peak * (0.9 - 0.2 * speedK)   // เร็ว/มีระบบ → พึ่งวิธีดั้งเดิมน้อยลงนิด
      const bimWf = bim * (0.8 + 0.4 * qualityK) // คุณภาพดี → ดึงประโยชน์ BIM ได้เต็มที่

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

  // เน้น/จางซีรีส์ตาม analysisType
  const styleFor = (series: "cost" | "ability" | "trad" | "bim") => {
    const normal = { strokeWidth: 2, strokeOpacity: 1, fillOpacity: 0.45 }
    const dim = { strokeWidth: 1, strokeOpacity: 0.25, fillOpacity: 0.1 }
    switch (analysisType) {
      case "cost-focused":
        return series === "cost" ? normal : dim
      case "efficiency":
        return series === "ability" || series === "bim" ? normal : dim
      default:
        return normal
    }
  }

  const speedLabel = workSpeed < 30 ? "ต่ำ" : workSpeed < 70 ? "ปานกลาง" : "สูง"
  const qualityLabel =
    designQuality < 30 ? "คุณภาพต่ำ" : designQuality < 70 ? "คุณภาพปานกลาง" : "คุณภาพสูง"

  // +++ ADD: ห่อการ์ดด้วย TooltipProvider (local scope)
  return (
    <TooltipProvider delayDuration={150}>
      <Card>
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              MacLeamy Curve — Interactive Analysis
            </CardTitle>
            <CardDescription>
              แสดงความสัมพันธ์ระหว่างความสามารถในการปรับเปลี่ยนและต้นทุนตลอดระยะโครงการ
            </CardDescription>
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
                domain={[0, 140]} // ยกเพดานให้สูง เห็นพีคของเส้นดำชัด
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

              {/* Red: Cost of Changes */}
              <Area dataKey="costOfChanges" type="natural" fill="url(#fillCost)" stroke="#fcd34d" {...styleFor("cost")} />
              {/* Blue: Ability to Impact */}
              <Area dataKey="abilityToImpact" type="natural" fill="url(#fillAbility)" stroke="#f59e0b" {...styleFor("ability")} />
              {/* Black: Traditional workflow */}
              <Area dataKey="traditionalWorkflow" type="natural" fill="none" stroke="#0a0a0a" {...styleFor("trad")} />
              {/* Green: BIM workflow (optional) */}
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

                  {/* +++ ADD: Tooltip อธิบาย Workflow Efficiency */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="ml-1 text-muted-foreground hover:text-foreground"
                        aria-label="อธิบาย Workflow Efficiency"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start" className="max-w-[320px] text-xs sm:text-sm">
                      Workflow Efficiency ค่าตัวนี้หมายถึง “ความเป็นระบบ/ความคงที่ของเวิร์กโฟลว์”
                      เมื่อใช้วิธีทำงานที่เป็นระบบ (เช่น ใช้ BIM, ทำงานเป็นระเบียบ)
                      จะตัดสินใจได้เร็วในช่วงต้นและลดต้นทุนปลายทาง
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="font-mono text-xs sm:text-sm">{speedLabel}</span>
              </div>
              <input
  type="range"
  min={0}
  max={100}
  value={workSpeed}
  onChange={(e) => setWorkSpeed(Number(e.target.value))}
  className="slider w-full cursor-pointer rounded-lg [appearance:none] touch-none bg-gray-200"
/>
              <div className="text-muted-foreground flex justify-between text-xs">
                <span>ต่ำ</span>
                <span>สูง</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm leading-none font-semibold">คุณภาพงานออกแบบ</span>

                  {/* +++ ADD: Tooltip อธิบายคุณภาพงานออกแบบ */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="ml-1 text-muted-foreground hover:text-foreground"
                        aria-label="อธิบายคุณภาพงานออกแบบ"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start" className="max-w-[320px] text-xs sm:text-sm">
                      คุณภาพแบบสูง = รายละเอียดครบถ้วน ตรวจทานแล้ว
                      ช่วยลดงานแก้ไข (rework) และความเสี่ยงในช่วงหลัง
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="font-mono text-xs sm:text-sm">{qualityLabel}</span>
              </div>
              <input
  type="range"
  min={0}
  max={100}
  value={designQuality}
  onChange={(e) => setDesignQuality(Number(e.target.value))}
  className="slider w-full cursor-pointer rounded-lg [appearance:none] touch-none bg-gray-200"
/>
              <div className="text-muted-foreground flex justify-between text-xs">
                <span>ต่ำ</span>
                <span>สูง</span>
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

          {/* ปรับหัวสไลเดอร์ให้จับง่าย */}
          <style jsx>{`
              .slider {
                -webkit-appearance: none;
                appearance: none;
                height: 8px;
                background: #e5e7eb;
                border-radius: 9999px;
                outline: none;
                position: relative;      /* เผื่อใส่ z-index */
                z-index: 10;             /* ดันขึ้นเหนือชั้นอื่น */
              }
              .slider::-webkit-slider-runnable-track {
                height: 8px;
                border-radius: 9999px;
                background: #e5e7eb;
              }
              .slider::-moz-range-track {
                height: 8px;
                border-radius: 9999px;
                background: #e5e7eb;
              }
              .slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px; height: 18px; border-radius: 50%;
                background: #2563eb; border: 2px solid #fff;
                box-shadow: 0 2px 4px rgba(0,0,0,.1);
                cursor: pointer;
                margin-top: -5px;        /* จัดให้อยู่กลางราง */
              }
              .slider::-moz-range-thumb {
                width: 18px; height: 18px; border-radius: 50%;
                background: #2563eb; border: 2px solid #fff;
                box-shadow: 0 2px 4px rgba(0,0,0,.1);
                cursor: pointer;
              }
            `}</style>
         </CardFooter>
      </Card>
    </TooltipProvider>
  )
}

/* ================================ Page Layout ================================ */
export default function Page() {
  return (
    <>
      {/* Header เหมือนเดิม */}
      <header className="flex h-16 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/docs">Small BIM PRO (Beta Version)</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>


      {/* Content: กราฟ 3/4 + คำอธิบาย 1/4 */}
      <div className="flex flex-1 flex-col gap-6 p-4">
        {/* ✅ แทรกรูปภาพ */}
          <div className="rounded-lg overflow-hidden border shadow">
            <Image
              src="/images/welcomedrinkpage.png" // 👉 รูปต้องอยู่ใน public/images/
              alt="ตัวอย่าง Revit Template"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
                
        <section className="prose max-w-none text-sm leading-relaxed">
          <br/>
          
          <p>
            ก่อนอื่น เรามาย้อนดูคำถามนี้กันอีกครั้ง เพื่อมองในมุมมองที่ลึกซึ้งมากยิ่งขึ้นกันครับ คำถามนี้ ชวนให้เราย้อนกลับมามองกระบวนการออกแบบของตัวเราเอง เป็นคำถามที่กระตุ้นให้นักออกแบบฉุกคิด<br/>
            เกี่ยวกับกระบวนการทำงาน และสะท้อนถึง <strong> &quot;ช่องว่าง&quot; </strong> ที่มักถูกมองข้ามในการออกแบบสถาปัตยกรรม <br/><br/>

            แน่นอนว่า คำตอบอาจจะยังคงเป็นคำตอบเดิม นั่นก็คือ <strong>&quot;คุณเห็นงบก่อสร้างของแบบเมื่อทุกอย่างเสร็จแล้ว เมื่อทุกอย่างเขียนแบบก่อสร้างเสร็จไปแล้วหรือเปล่า?&quot;</strong> ซึ่งกระบวนการลักษณะดังกล่าวนี้
            ทำให้นักออกแบบไม่สามารถปรับแก้แบบได้ทันกำหนดนั่นเอง หากอ้างอิงตามแนวคิด <strong>MacLeamy Curve</strong> ซึ่งแสดงความสัมพันธ์ระหว่างต้นทุน (Cost) และความพยายาม (Effort) ในแต่ละระยะของโครงการ
            ปัญหาในงานก่อสร้าง ส่วนใหญ่มักเริ่มปรากฏในช่วง Construction Documentation หรือช่วงการเขียนแบบก่อสร้าง หรือเขียนแบบขออนุญาตก่อสร้าง ซึ่งเป็นระยะที่งานต้องการความละเอียดสูงสุด
            ทว่า...กลับเป็นช่วงที่ทีมออกแบบมีเวลา <strong>&quot;แก้ไข&quot;</strong> ปัญหาน้อยที่สุด จนเป็นเหตุคอขวด ชวนให้เราปล่อยปัญหานี้ไป และเกิดเป็นความผิดพลาดในที่สุด
            <strong>เหตุเกิดจาก ทั้งความไม่เรียบร้อยของงานออกแบบ, การปรับเปลี่ยนสเปควัสดุ, การเขียนแบบและลงรายละเอียดที่ขัดแย้งกัน, การไม่วางแผนด้านงบประมาณกับงานออกแบบ, ฯลฯ</strong> 
      
            <br/><br/>
            
            สาเหตุทั้งหมดนี้นำไปสู่ จุดตัดที่สำคัญ ระหว่าง Impact Cost and Performance และ Cost of Design Changes ซึ่งหมายถึง <strong>&quot;เมื่อเราปรับแบบในช่วงออกแบบแนวคิด (Concept Design) 
            ต้นทุนการเปลี่ยนแปลงต่ำ แต่หากต้องแก้แบบตอนก่อสร้าง ต้นทุนที่เกิดขึ้นอาจสูงขึ้นหลายเท่า&quot;</strong>   หลายๆโครงการ จึงจบลงด้วยความล่าช้าในการก่อสร้าง งบประมาณก่อสร้างที่เกินงบออกไปมหาศาล 
            บางโครงการถึงกับล้มลงได้นั่นเอง<br/><br/>

            <blockquote className="mt-6 border-l-2 pl-6 italic">
              <strong>&quot;แล้วถ้าคุณสามารถควบคุมงบประมาณตั้งแต่วันแรกของการออกแบบได้ล่ะ?&quot;</strong> 
            </blockquote>
            <br/><br/>
            
            หากการออกแบบปรับแก้ได้อย่างเต็มที่ในช่วงแรก รวมถึงการพัฒนาแบบทั้งงานออกแบบ งานเขียนแบบ และงบประมาณได้ตั้งแต่ต้น ความเสี่ยงเหล่านี้สามารถลดลงได้อย่างมาก การมีเครื่องมือที่ดี
            จึงกลายเป็นกุญแจสำคัญที่ช่วยให้ผู้ออกแบบควบคุมต้นทุนและคุณภาพได้อย่างสมบูรณ์แบบตั้งแต่แรกเริ่ม<br/><br/>
            
            <strong></strong>

            <blockquote className="mt-6 border-l-2 pl-6 italic">
              <strong>&quot;เพราะทุกการปรับเปลี่ยนในแบบคือการลงทุน หากควบคุมได้ตั้งแต่แรกเริ่ม ต้นทุนจะเป็นแค่ตัวเลขที่เราจัดการได้...ไม่ใช่ปัญหาที่เราต้องแก้ไขในภายหลัง&quot;</strong> 
            </blockquote><br/>

          </p>

        </section>

        
        <div className="space-y-6">
          {/* กราฟ: เต็มกรอบ */}
            <div>
              <MacLeamyInteractiveChart />
            </div>

          {/* สรุปแนวคิด: อยู่ใต้กราฟ ไม่ sticky */}
          <section className="space-y-4 text-sm leading-relaxed">
            <h3 className="text-base font-semibold">สรุปแนวคิด MacLeamy Curve</h3>
            <p>
              กราฟนี้อธิบายความสัมพันธ์ระหว่าง <strong>ความสามารถในการปรับเปลี่ยน</strong> และ{" "}
              <strong>ต้นทุนการเปลี่ยนแปลง</strong> ในแต่ละเฟส ตั้งแต่ Preliminary, Detail,
              Documentation, Construction ไปจนถึง Operation
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ช่วงต้นโครงการ ปรับเปลี่ยนได้ง่าย (ผลกระทบมาก) แต่ต้นทุนต่ำ</li>
              <li>ยิ่งเข้าสู่ Doc/Construction ต้นทุนการเปลี่ยนแปลงยิ่งสูง</li>
              <li>
                เปิดใช้ <strong>BIM</strong> จะย้ายภาระงานสู่ช่วง Detail ลดความผิดพลาดและค่าใช้จ่ายปลายทาง
              </li>
            </ul>
            <p className="text-muted-foreground">
              ใช้ตัวเลื่อน &quot;ประสิทธิภาพกระบวนงาน / คุณภาพแบบ&quot; ใต้กราฟเพื่อดูผลลัพธ์แบบ real-time
            </p>
            <p className="text-muted-foreground">
              เมนู <em>Analysis Type</em> ด้านขวาบนช่วยเน้นมุมมอง: Cost-Focused หรือ Efficiency
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
