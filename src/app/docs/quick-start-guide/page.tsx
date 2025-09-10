"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// ==== Types ====
type GuideItem = {
  title: string
  href: string
  video?: string
}

type GuideCategory = {
  title: string
  items: GuideItem[]
}

// ==== Data ====
const CATEGORIES: GuideCategory[] = [
  {
    title: "Download and Installation",
    items: [
      {
        title: "Download & Installation",
        href: "/docs/download-installation",
        video: "https://www.youtube.com/embed/YidRgoNOh5M",
      },
      {
        title: "Activate License",
        href: "/docs/activate-license",
        video: "https://www.youtube.com/embed/e1df1ntb8NQ",
      },
      {
        title: "Update & Uninstall",
        href: "/docs/uninstall",
        video: "https://www.youtube.com/embed/BxcIrjYSKrA",
      },
    ],
  },
  {
    title: "Data Preparation",
    items: [
      { title: "Prepare Data", href: "/docs/data-preparation/about" },
      { title: "Revit Template", href: "/docs/data-preparation/revit-template" },
      { title: "Revit Parameters", href: "/docs/data-preparation/revit-parameters" },
    ],
  },
  {
    title: "BOQ Tools",
    items: [
      { title: "BOQ Tools", href: "/docs/boq-tools/boq" },
      { title: "Model Data Management", href: "/docs/boq-tools/model-data-management" },
    ],
  },
  {
    title: "Modeling & Drawing",
    items: [
      { title: "Modeling Tools", href: "/docs/modeling-tools/grid-layout" },
      { title: "Drawing Tools", href: "/docs/drawing-tools/fast-plan" },
    ],
  },
  {
    title: "Other Guides",
    items: [
      { title: "Cost Code Guide", href: "/docs/cost-code-guide/a-structural" },
      { title: "Export Results", href: "#" },
      { title: "Troubleshooting & FAQ", href: "/docs/troubleshooting-faq/faq" },
    ],
  },
]

export default function QuickStartGuidePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold">Quick Start Guide</h1>
        <p className="text-muted-foreground text-lg">
          รวมขั้นตอนสำคัญในการใช้งาน Small BIM PRO แบบรวดเร็ว
        </p>
      </div>

      {/* Render Categories */}
      {CATEGORIES.map((cat, idx) => (
        <div key={idx} className="space-y-6">
          {/* Section Title */}
          <h2 className="text-2xl font-bold border-b pb-2">{cat.title}</h2>

          {/* Grid of Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {cat.items.map((g, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{g.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  {g.video ? (
                    <div className="w-full aspect-video rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src={g.video}
                        title={g.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-lg">
                      <span className="text-sm text-muted-foreground">[ วิดีโอสาธิต ]</span>
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={g.href}>ดูรายละเอียดเพิ่มเติม</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
