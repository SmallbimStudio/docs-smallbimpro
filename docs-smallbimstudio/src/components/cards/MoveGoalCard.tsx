"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis } from "recharts"

type MovePoint = { x: number; v: number };

const moveBars: MovePoint[] = [
  { x: 1, v: 22 }, { x: 2, v: 28 }, { x: 3, v: 18 }, { x: 4, v: 26 },
  { x: 5, v: 20 }, { x: 6, v: 24 }, { x: 7, v: 19 }, { x: 8, v: 28 },
  { x: 9, v: 21 }, { x:10, v: 17 }, { x:11, v: 23 }, { x:12, v: 20 },
  { x:13, v: 22 }, { x:14, v: 30 },
];


export default function MoveGoalCard() {
  const [goal, setGoal] = React.useState(350)
  return (
    <Card>
      <CardContent className="px-4 pt-0 pb-1">
        <div className="mb-1">
          <CardTitle className="text-sm font-medium">Move Goal</CardTitle>
          <p className="text-xs text-muted-foreground">Set your daily activity goal.</p>
        </div>
        <div className="mb-2 flex items-center justify-center gap-6">
          <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => setGoal(g => Math.max(0, g - 10))}><Minus className="h-4 w-4" /></Button>
          <div className="text-center">
            <div className="text-3xl font-semibold">{goal}</div>
            <div className="text-xs text-muted-foreground tracking-wide">CALORIES/DAY</div>
          </div>
          <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => setGoal(g => g + 10)}><Plus className="h-4 w-4" /></Button>
        </div>
        <div className="-mx-2 mb-3 overflow-hidden rounded-b-xl">
          <ChartContainer className="h-[90px] w-full" config={{ v: { label: "Move" } }}>
            <BarChart data={moveBars} margin={{ top: 8, right: 6, left: 6, bottom: 0 }}>
              <XAxis dataKey="x" tickLine={false} axisLine={false} hide />
              <YAxis tickLine={false} axisLine={false} hide />
              <Bar dataKey="v" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
        <Button variant="secondary" className="w-full">Set Goal</Button>
      </CardContent>
    </Card>
  )
}
