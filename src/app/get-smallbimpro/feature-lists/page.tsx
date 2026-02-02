"use client"

import { useState } from "react"
import { FileSpreadsheet, Wrench, PenTool, BookOpen, ChevronDown, CheckCircle2, Clock, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { is } from "date-fns/locale"


export default function FeatureListsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const features = [
    {
      icon: <FileSpreadsheet className="w-10 h-10 text-primary" />,
      title: "BOQ Tools",
      desc: "เครื่องมือสำหรับคำนวณ BOQ, Export ปริมาณ และ Mapping ราคากลาง",
      count: "4 Tools",
      tools: [
        {
          icon: "/images/commands/BOQ.png",
          name: "BOQ",
          desc: "สร้างรายการประมาณราคาจากโมเดล Revit",
          isRecommended: true // เปลี่ยนจาก isHot เป็น isRecommended
        },
        {
          icon: "/images/commands/SelectToBOQ.png",
          name: "Select to BOQ",
          desc: "เลือกโมเดลเพื่อสร้างรายการประมาณราคาแบบรวดเร็ว พร้อมใช้ในงานเขียนแบบได้ทันที",
        },
        {
          icon: "/images/commands/ModelDataManagement.png",
          name: "Model Data Management",
          desc: "จัดการข้อมูลโมเดลและพารามิเตอร์ต่างๆ"
        },
        {
          icon: "/images/commands/ProjectSpec.png",
          name: "Project Specification",
          desc: "เครื่องมือจัดการสเปควัสดุและรายละเอียดโครงการ",
          isNew: true
        },

      ]
    },

    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Modeling Tools",
      desc: "เครื่องมือสำหรับช่วยในการสร้างและจัดการโมเดลได้เร็วขึ้น",
      count: "17 Tools",
      tools: [
        {
          icon: "/images/commands/LandRescaler.png",
          name: "Land Rescaler",
          desc: "ปรับขนาดโฉนดที่ดินอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/GridLayout.png",
          name: "Grid Layout",
          desc: "สร้าง Grid Line อัตโนมัติ",
          isRecommended: true
        },
        {
          icon: "/images/commands/ColumnsOnGrids.png",
          name: "Column On Grids",
          desc: "สร้างโมเดลเสา บน Grid Line อัตโนมัติ",
        },
        {
          icon: "/images/commands/FoundationSupportCreator.png",
          name: "Foundation Support",
          desc: "สร้างโมเดลวัสดุรองก้นฐานอัตโนมัติ",
        },
        {
          icon: "/images/commands/RebarVisibility_On.png",
          name: "Toggle Rebar Visibility",
          desc: "เปิด/ปิด การมองเห็นเหล็กเสริมอัตโนมัติ"
        },
        {
          icon: "/images/commands/FoundationRebarCreator.png",
          name: "Foundation Rebar",
          desc: "สร้างโมเดลเหล็กเสริมฐานรากแบบสี่เหลี่ยมอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/ColumnFootingRebarCreator.png",
          name: "Column Footing Rebar",
          desc: "สร้างโมเดลเหล็กเสริมเสาตอม่ออัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/ColumnRebarCreator.png",
          name: "Column Rebar",
          desc: "สร้างโมเดลเหล็กเสริมเสาอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/BeamRebarCreator.png",
          name: "Beam Rebar",
          desc: "สร้างโมเดลเหล็กเสริมคานอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/FloorRebarCreator.png",
          name: "Floor Rebar",
          desc: "สร้างโมเดลเหล็กเสริมพื้นอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/StairRebarCreator.png",
          name: "Stair Rebar",
          desc: "สร้างโมเดลเหล็กเสริมบันไดอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/RoofFramingCreator.png",
          name: "Roof Framing Creator",
          desc: "สร้างโมเดลโครงสร้างหลังคาอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/FloorTilesGenerator.png",
          name: "Floor Tiles Generator",
          desc: "สร้างโมเดลกระเบื้องพื้นอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/RoomToLayout.png",
          name: "Room to Layout",
          desc: "แปลงข้อมูลห้องให้เป็น Layout บนแปลนอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/RoomToWalls.png",
          name: "Room to Walls",
          desc: "แปลงข้อมูลห้องให้เป็น Wall บนแปลนอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/RoomToFloor.png",
          name: "Room to Floor",
          desc: "แปลงข้อมูลห้องให้เป็น Floor บนแปลนอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/RoomToCeiling.png",
          name: "Room to Ceiling",
          desc: "แปลงข้อมูลห้องให้เป็น Ceiling บนแปลนอัตโนมัติ",
          isNew: true
        }, 

      ]
    },

    {
      icon: <PenTool className="w-10 h-10 text-primary" />,
      title: "Drawing Tools",
      desc: "เครื่องมือสำหรับช่วยในการเขียนแบบให้เร็วและสวยงามมากขึ้น",
      count: "39 Tools",
      tools: [
        {
          icon: "/images/commands/FastPlan.png",
          name: "Fast Plan",
          desc: "เขียนแปลนพื้นแบบโคตรเร็ว",
          isRecommended: true
        },
        {
          icon: "/images/commands/GridDimension.png",
          name: "Grid Dimension (Plan)",
          desc: "ใส่ Dimension บน Grid Line ในแปลนพื้นอัตโนมัติ",
          isRecommended: true
        },
        {
          icon: "/images/commands/GridDimension.png",
          name: "Grid Dimension (Elevation/Section)",
          desc: "ใส่ Dimension บน Grid Line ในรูปด้านและรูปตัดอัตโนมัติ",
          isRecommended: true
        },
        {
          icon: "/images/commands/GridDimension.png",
          name: "Level Dimension (Elevation/Section)",
          desc: "ใส่ Dimension บนเส้น Level ในรูปด้านและรูปตัดอัตโนมัติ",
          isRecommended: true
        },
        {
          icon: "/images/commands/DimSelected.png",
          name: "Column Dim - Selected",
          desc: "สร้าง Dimension บอกขนาดเสาที่เลือกอัตโนมัติ"
        },
        {
          icon: "/images/commands/DimAll.png",
          name: "Column Dim - All",
          desc: "สร้าง Dimension บอกขนาดเสาทั้งหมด อัตโนมัติ"
        },
        {
          icon: "/images/commands/DimSelectedFdn.png",
          name: "Foundation Dim - Selected",
          desc: "สร้าง Dimension บอกขนาดฐานรากที่เลือกอัตโนมัติ"
        },
        {
          icon: "/images/commands/DimSelectedFdn.png",
          name: "Foundation Dim - All",
          desc: "สร้าง Dimension บอกขนาดฐานรากทั้งหมด อัตโนมัติ"
        },       
        {
          icon: "/images/commands/SuperTag.png",
          name: "Super Tag (Plan)",
          desc: "สร้าง Element Tags ทุกหมวดหมู่บนแปลนอัตโนมัติ",
          isRecommended: true
        },
        {
          icon: "/images/commands/ColumnTag.png",
          name: "Tag All Columns",
          desc: "สร้าง Tag เสาอัตโนมัติ"
        },
        {
          icon: "/images/commands/ColumnFoundationCombinedTag.png",
          name: "Columns and Foundation Combined Tag",
          desc: "สร้าง Tag เสาและฐานรากอัตโนมัติ",
          isNew: true
        },
        {
          icon: "/images/commands/WallTag.png",
          name: "Wall Tag (Plan)",
          desc: "สร้าง Wall Tags บนแปลนอัตโนมัติ",
        },
        {
          icon: "/images/commands/DoorTag.png",
          name: "Door Tag (Plan)",
          desc: "สร้าง Door Tags บนแปลนอัตโนมัติ",
        },
        {
          icon: "/images/commands/WindowTag.png",
          name: "Window Tag (Plan)",
          desc: "สร้าง Window Tags บนแปลนอัตโนมัติ",
        },
        {
          icon: "/images/commands/FloorTag.png",
          name: "Floor Tag (Plan)",
          desc: "สร้าง Floor Tags บนแปลนอัตโนมัติ",
        },
        {
          icon: "/images/commands/CeilingTag.png",
          name: "Ceiling Tag (Plan)",
          desc: "สร้าง Ceiling Tags บนแปลนอัตโนมัติ",
        },
        {
          icon: "/images/commands/RoofTag.png",
          name: "Roof Tag (Plan)",
          desc: "สร้าง Roof Tags บนแปลนอัตโนมัติ",
        },
        {
          icon: "/images/commands/RoomTag.png",
          name: "Room Tag (Plan)",
          desc: "สร้าง Room Tags บนแปลนอัตโนมัติ",
        },
        {
          icon: "/images/commands/WallTag.png",
          name: "Wall Tag (Elevation/Section)",
          desc: "สร้าง Wall Tags บนรูปด้านและรูปตัดอัตโนมัติ",
        },
        {
          icon: "/images/commands/DoorTag.png",
          name: "Door Tag (Elevation/Section)",
          desc: "สร้าง Door Tags บนรูปด้านและรูปตัดอัตโนมัติ",
        },
        {
          icon: "/images/commands/WindowTag.png",
          name: "Window Tag (Elevation/Section)",
          desc: "สร้าง Window Tags บนรูปด้านและรูปตัดอัตโนมัติ",
        },
        {
          icon: "/images/commands/FloorTag.png",
          name: "Floor Tag (Elevation/Section)",
          desc: "สร้าง Floor Tags บนรูปด้านและรูปตัดอัตโนมัติ",
        },
        {
          icon: "/images/commands/CeilingTag.png",
          name: "Ceiling Tag (Elevation/Section)",
          desc: "สร้าง Ceiling Tags บนรูปด้านและรูปตัดอัตโนมัติ",
        },
        {
          icon: "/images/commands/RoofTag.png",
          name: "Roof Tag (Elevation/Section)",
          desc: "สร้าง Roof Tags บนรูปด้านและรูปตัดอัตโนมัติ",
        },
        {
          icon: "/images/commands/RoomTag.png",
          name: "Room Tag (Elevation/Section)",
          desc: "สร้าง Room Tags บนรูปด้านและรูปตัดอัตโนมัติ",
        },
        {
          icon: "/images/commands/legend_3d.png",
          name: "Legend 3D View",
          desc: "เปลี่ยน Legend ธรรมดาเป็น 3D View ใน Legend View",
          isRecommended: true
        },
      
        {
          icon: "/images/commands/legend_plan.png",
          name: "Legend Plan View",
          desc: "เปลี่ยน Legend เป็นแบบ Plan View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_section.png",
          name: "Legend Section",
          desc: "เปลี่ยน Legend เป็นแบบ Section View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_elevation.png",
          name: "Legend Elevation",
          desc: "เปลี่ยน Legend เป็นแบบ Elevation View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_front.png",
          name: "Legend Front View",
          desc: "เปลี่ยน Legend เป็นแบบ Front View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_back.png",
          name: "Legend Back View",
          desc: "เปลี่ยน Legend เป็นแบบ Back View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_left.png",
          name: "Legend Left View",
          desc: "เปลี่ยน Legend เป็นแบบ Left View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_right.png",
          name: "Legend Right View",
          desc: "เปลี่ยน Legend เป็นแบบ Right View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_top.png",
          name: "Legend Top View",
          desc: "เปลี่ยน Legend เป็นแบบ Top View ใน Legend View"
        },
        {
          icon: "/images/commands/legend_down.png",
          name: "Legend Down View",
          desc: "เปลี่ยน Legend เป็นแบบ Down View ใน Legend View"
        },
        {
          icon: "/images/commands/SpecSheet.png",
          name: "Specification Lists",
          desc: "สร้างรายการสเปควัสดุอัตโนมัติ จากการเลือกโมเดล",
          isNew: true
        },
        {
          icon: "/images/commands/CuttingOptimizer.png",
          name: "Cutting Optimizer",
          desc: "คำสั่งคำนวณการตัดเศษวัสดุ ด้วยความยาว",
          isNew: true
        },
        {
          icon: "/images/commands/SheetCuttingOptimizer.png",
          name: "Sheet Cutting Optimizer",
          desc: "คำสั่งคำนวณการตัดเศษวัสดุ ด้วยพื้นที่ กว้างxยาว",
          isNew: true
        },
        {
          icon: "/images/commands/VGOverride.png",
          name: "VG Override",
          desc: "คำสั่งปรับแต่งวัสดุใน View Group แบบง่ายๆ",
          isNew: true
        }
      ]
    },

    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Database & Standards",
      desc: "บริการเสริมทั้ง Template, ระบบฐานข้อมูลวัสดุ และมาตรฐานต่างๆ",
      count: "Free for Download",
      tools: [
        {
          icon: "/images/commands/Template.png",
          name: "RSB-PROFESSIONAL Template V4",
          desc: "เทมเพลทสำหรับงานออกแบบ เขียนแบบ และประมาณราคา"
        },
        {
          icon: "/images/commands/Database.png",
          name: "Database & Standards",
          desc: "มาตรฐานไฟล์ข้อมูล และการเข้าถึงราคากลางออนไลน์",
        },
        {
          icon: "/images/commands/Project.png",
          name: "Sample Project",
          desc: "ไฟล์ตัวอย่างสำหรับฝึกฝนและเรียนรู้การใช้งาน Small BIM PRO",
        },

      ]
    },


  ]

  return (
    <div className="space-y-10">
      {/* Title */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">ฟีเจอร์หลักของ Small BIM PRO</h1>
        <p className="text-muted-foreground text-lg">
          คลิกเพื่อดูเครื่องมือการใช้งานทั้งหมดของ Small BIM PRO (Version 2.0.0) for Revit 2024, 2025, 2026
        </p>
      </section>

      <img src="/images/promote/feature-lists-pic.png" alt="Feature Lists" className="mx-auto" />

      {/* Grid of Feature Categories */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card
            key={f.title}
            className={`
            rounded-2xl shadow-md p-6 text-center flex flex-col items-center cursor-pointer
            card-transition
            ${selectedCategory === f.title
                ? 'border-2 border-primary shadow-lg animate-cardExpand'
                : 'hover:shadow-lg hover:border-primary/50'}
            `}
            onClick={() => setSelectedCategory(
              selectedCategory === f.title ? null : f.title
            )}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
            <CardContent className="mt-auto pt-4 flex items-center gap-2">
              <span className="text-primary font-medium">{f.count}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${selectedCategory === f.title ? 'rotate-180' : ''
                }`} />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tools Detail Section */}
      {selectedCategory && (
      <div
        key={selectedCategory}
        className={`max-w-6xl mx-auto px-4 animate-fadeIn`}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">
          {features.find(f => f.title === selectedCategory)?.title} Features
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {features
            .find(f => f.title === selectedCategory)
            ?.tools.map((tool) => (
              <Card
                key={tool.name}
                className={`group p-4 hover:shadow-lg transition-all duration-300 relative
                  ${tool.isRecommended ? 'border-2 border-blue-700/50 hover:border-blue-700' : 'hover:border-primary/50'}
                  ${tool.isNew ? 'border-2 border-orange-500/50 hover:border-orange-500' : ''}
                `}
              >
                {/* Recommended Badge */}
                {tool.isRecommended && (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 
                      bg-gradient-to-r from-blue-700 to-blue-900 
                      hover:from-blue-800 hover:to-blue-950 text-white 
                      shadow-lg px-3 py-1 rounded-full"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    Recommended
                  </Badge>
                )}

                {/* New Badge */}
                {tool.isNew && (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 
                      bg-gradient-to-r from-orange-500 to-orange-600
                      hover:from-orange-600 hover:to-orange-700 text-white
                      shadow-lg px-3 py-1 rounded-full"
                  >
                    <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                    New
                  </Badge>
                )}

                <div className="flex flex-col items-center text-center space-y-4 pt-2">
                  <div className="relative w-12 h-12 transform transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    )}

    </div>
  )
}