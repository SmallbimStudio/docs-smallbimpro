"use client"

import Link from "next/link"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts"

type SubsPoint = { d: string; v: number }
const subsData: SubsPoint[] = [
  { d: "Mon", v: 600 }, { d: "Tue", v: 800 }, { d: "Wed", v: 700 },
  { d: "Thu", v: 650 }, { d: "Fri", v: 500 }, { d: "Sat", v: 600 }, { d: "Sun", v: 500 },
]

export default function SubscriptionsCard() {
  return (
    <Card className="p-0">
      {/* เพิ่ม padding บน/ล่างเล็กน้อยให้สอดคล้องกับ Revenue */}
      <CardContent className="px-6 pt-5 pb-5">
        <div className="mb-1">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total</CardTitle>
        </div>

        <div className="text-3xl font-semibold">+2,350</div>
        <div className="mt-1 text-xs text-muted-foreground">+180.1% from last month</div>

        {/* กราฟ: สูงขึ้นนิด/ชนขอบล่าง + เผื่อ margin ขวาไม่ให้เส้นโดนตัด */}
        <div className="mt-11 -mx-8 -mb-8">
          <div className="overflow-hidden rounded-b-2xl">
            <ChartContainer className="h-[120px] w-full" config={{ v: { label: "Subs" } }}>
              <AreaChart data={subsData} margin={{ top: 6, right: 12, left: 8, bottom: 10 }}>
                <defs>
                  <linearGradient id="fillSubs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="currentColor" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="currentColor" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="d" tickLine={false} axisLine={false} hide />
                <YAxis tickLine={false} axisLine={false} hide domain={["dataMin - 10", "dataMax + 10"]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="url(#fillSubs)"
                  dot={false}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
