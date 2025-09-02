"use client"

import * as React from "react"
import Papa, { ParseResult } from "papaparse"
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from "recharts"
import { Upload, Printer } from "lucide-react"

type Row = {
  ลำดับ: string
  รายการ: string
  ปริมาณ: string
  หน่วย: string
  "%เผื่อ": string
  "ปริมาณเผื่อแล้ว": string
  "ค่าวัสดุต่อหน่วย": string
  "รวมค่าวัสดุ": string
  "ค่าแรงต่อหน่วย": string
  "รวมค่าแรง": string
  "รวมราคาทั้งหมด": string
  หมายเหตุ: string
}

export default function BOQImportCard() {
  const [data, setData] = React.useState<Row[]>([])

  // 🔹 State ฟอร์ม Title Page
  const [project, setProject] = React.useState({
    name: "",
    owner: "",
    address: "",
    estimator: "",
    date: new Date().toLocaleDateString("th-TH"),
  })

   // อ่าน CSV
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    Papa.parse<Row>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<Row>) => {
        setData(results.data)
      },
    })
  }

   // วิเคราะห์ตามหมวดงานจริง
  const chartData = React.useMemo(() => {
    if (!data.length) return []
    const groups: Record<string, number> = {}
    data.forEach((row) => {
      const name = row["รายการ"] || "อื่นๆ"
      if (name.startsWith("หมวด")) {
        const val = parseFloat(row["รวมราคาทั้งหมด"]) || 0
        groups[name] = (groups[name] || 0) + val
      }
    })
    const total = Object.values(groups).reduce((a, b) => a + b, 0)
    return Object.entries(groups).map(([cat, val]) => ({
      name: cat,
      value: val,
      percent: ((val / total) * 100).toFixed(1),
    }))
  }, [data])

  // Print
  const handleExport = () => {
    window.print()
  }

  const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#7c3aed", "#0891b2"]

  function rowClassByItem(name: string) {
  if (!name) return "bg-white"

  if (name.startsWith("หมวด")) {
    return "category-row"
  }
  if (name.startsWith("งานดิน หิน")) {
    return "summary-row"
  }
  if (name.startsWith("งานคอนกรีต")) {
    return "summary-row"
  }
  if (name.startsWith("งานแบบหล่อคอนกรีต")) {
    return "summary-row"
  }
  if (name.startsWith("งานเหล็กเสริมคอนกรีต")) {
    return "summary-row"
  }
   if (name.startsWith("งานโครงสร้าง")) {
    return "summary-row"
  }
   if (name.startsWith("งานผนังและผิวผนัง")) {
    return "summary-row"
  }
  if (name.startsWith("งานพื้นและผิวพื้น")) {
    return "summary-row"
  }
   if (name.startsWith("งานฝ้าเพดาน")) {
    return "summary-row"
  }
  if (name.startsWith("งานติดตั้งวงกบ")) {
    return "summary-row"
  }
  if (name.startsWith("งานทาสี")) {
    return "summary-row"
  }
  if (name.startsWith("งานมุง")) {
    return "summary-row"
  }
   if (name.startsWith("งานเบ็ดเตล็ด")) {
    return "summary-row"
  }
  if (name.startsWith("งานไฟฟ้า")) {
    return "summary-row"
  }
  if (name.startsWith("งานท่อน้ำดี")) {
    return "summary-row"
  }
  if (name.startsWith("งานท่อน้ำเสีย")) {
    return "summary-row"
  }
  if (name.startsWith("งานถังเก็บน้ำ")) {
    return "summary-row"
  }
  if (name.includes("รวมยอด")) {
    return "summary-row"
  }

  return ""
}


  return (
    <Card>
      
      <CardContent className="space-y-6">
        {/* 🔹 ฟอร์มข้อมูลโครงการ */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">ชื่อโครงการ</label>
            <Input
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              placeholder="ระบุชื่อโครงการ"
            />
          </div>
          <div>
            <label className="text-sm">เจ้าของงาน</label>
            <Input
              value={project.owner}
              onChange={(e) => setProject({ ...project, owner: e.target.value })}
              placeholder="ระบุเจ้าของงาน"
            />
          </div>
          <div>
            <label className="text-sm">ที่อยู่</label>
            <Input
              value={project.address}
              onChange={(e) => setProject({ ...project, address: e.target.value })}
              placeholder="ระบุที่อยู่โครงการ"
            />
          </div>
          <div>
            <label className="text-sm">ผู้ประมาณราคา</label>
            <Input
              value={project.estimator}
              onChange={(e) => setProject({ ...project, estimator: e.target.value })}
              placeholder="ระบุชื่อผู้ประมาณราคา"
            />
          </div>
        </div>

        {/* ปุ่ม Import + Export */}
        <div className="flex items-center gap-3">
          <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" id="boq-file" />
          <label htmlFor="boq-file">
            <Button variant="outline" asChild>
              <span className="flex items-center gap-2 cursor-pointer">
                <Upload className="h-4 w-4" /> Import CSV
              </span>
            </Button>
          </label>
          {data.length > 0 && (
            <Button onClick={handleExport} variant="outline">
              <Printer className="h-4 w-4 mr-1" /> Print / Export PDF
            </Button>
          )}
        </div>

        {/* 🔹 Title Page (Print Only) */}
        {data.length > 0 && (
          <div id="title-page" className="print:block hidden text-center my-12">
            <h1 className="text-2xl font-bold mb-6">รายการประมาณราคา (Bills of Quantities)</h1>
            <p><strong>ชื่อโครงการ:</strong> {project.name}</p>
            <p><strong>เจ้าของงาน:</strong> {project.owner}</p>
            <p><strong>ที่อยู่:</strong> {project.address}</p>
            <p><strong>ผู้ประมาณราคา:</strong> {project.estimator}</p>
            <p><strong>วันที่:</strong> {project.date}</p>
          </div>
        )}

        {/* ตาราง BOQ */}
        {data.length > 0 && (
          <div
            id="boq-table"
            className="border rounded-md overflow-x-auto print:overflow-visible print:border-0"
          >
            <Table className="table-fixed w-full text-xs">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="w-[45px] text-center">ลำดับ</TableHead>
                  <TableHead className="w-[300px] text-center">รายการ</TableHead>
                  <TableHead className="w-[60px] text-center">ปริมาณ</TableHead>
                  <TableHead className="w-[45px] text-center">หน่วย</TableHead>
                  <TableHead className="w-[45px] text-center">%เผื่อ</TableHead>
                  <TableHead className="w-[55px] text-center">ปริมาณ<br/>เผื่อแล้ว</TableHead>
                  <TableHead className="w-[70px] text-center">ค่าวัสดุ<br/>ต่อหน่วย</TableHead>
                  <TableHead className="w-[70px] text-center">รวมค่าวัสดุ</TableHead>
                  <TableHead className="w-[70px] text-center">ค่าแรง<br/>ต่อหน่วย</TableHead>
                  <TableHead className="w-[70px] text-center">รวมค่าแรง</TableHead>
                  <TableHead className="w-[70px] text-center">รวมราคา<br/>ทั้งหมด</TableHead>
                  <TableHead className="w-[120px] text-center">หมายเหตุ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, idx) => (
                  <TableRow key={idx} className={rowClassByItem(row["รายการ"])}>
                    <TableCell>{row["ลำดับ"]}</TableCell>
                    <TableCell className="whitespace-normal break-words">{row["รายการ"]}</TableCell>
                    <TableCell className="text-right">{row["ปริมาณ"]}</TableCell>
                    <TableCell>{row["หน่วย"]}</TableCell>
                    <TableCell>{row["%เผื่อ"]}</TableCell>
                    <TableCell className="text-right">{row["ปริมาณเผื่อแล้ว"]}</TableCell>
                    <TableCell className="text-right">{row["ค่าวัสดุต่อหน่วย"]}</TableCell>
                    <TableCell className="text-right">{row["รวมค่าวัสดุ"]}</TableCell>
                    <TableCell className="text-right">{row["ค่าแรงต่อหน่วย"]}</TableCell>
                    <TableCell className="text-right">{row["รวมค่าแรง"]}</TableCell>
                    <TableCell className="text-right">
                      {parseFloat(row["รวมราคาทั้งหมด"] || "0").toLocaleString("th-TH")}
                    </TableCell>
                    <TableCell className="whitespace-normal break-words">{row["หมายเหตุ"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
                
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}