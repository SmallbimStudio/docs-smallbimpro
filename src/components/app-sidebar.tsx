"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"

// ✅ เพิ่มไอคอน + คอมโพเนนต์ย่อ/ขยาย
import { Plus, Minus } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroup,
  SidebarRail,
} from "@/components/ui/sidebar"

/* =========================================================
   🔧 เมนูหลัก (ปรับเพิ่ม/ลบที่นี่ที่เดียว)
   - โครงสร้าง: หมวด (title/url) → รายการย่อย (items[])
   - ให้ href ตรงกับเส้นทางจริงใน /app
   - ถ้ายังไม่มีหน้า ใช้ "#" ชั่วคราวได้
========================================================= */
const NAV = [

  {
    title: "Getting Started",
    url: "#",
    items: [
      { title: "Welcome to Small BIM PRO", href: "/docs" },
      
    ],
  },

  {
    title: "Download and Installation",
    url: "#",
    items: [
      { title: "Download and Installation", href: "/docs/download-installation" },
      { title: "Activate License", href: "/docs/activate-license" },
      { title: "License Status", href: "/docs/license-status" },
      { title: "Update and Uninstall", href: "/docs/uninstall" },
    ],
  },
  {
    title: "Data Preparation",
    url: "#",
    items: [
      { title: "About Data Preparation", href: "/docs/data-preparation/about" },
      { title: "Revit Template", href: "/docs/data-preparation/revit-template" },
      { title: "Revit Parameters", href: "/docs/data-preparation/revit-parameters" },
      { title: "Revit Shared Parameters", href: "/docs/data-preparation/shared-parameters" },
      { title: "Revit Keynote", href: "/docs/data-preparation/revit-keynote" },
      { title: "Database", href: "/docs/data-preparation/database" },
    ],
  },
  {
    title: "BOQ Tools",
    url: "#",
    items: [
      { title: "BOQ", href: "/docs/boq-tools/boq" },
      { title: "Model Data Management", href: "/docs/boq-tools/model-data-management" },
    ],
  },

  {
    title: "Modeling Tools",
    url: "#",
    items: [
      { title: "Grid Layout", href: "/docs/modeling-tools/grid-layout" },
      { title: "Foundation Support", href: "/docs/modeling-tools/foundation-support" },
      { title: "Columns on Grids", href: "/docs/modeling-tools/columns-on-grids" },
      { title: "Tag All Columns", href: "/docs/modeling-tools/tag-all-columns" },
      { title: "Column Dim – Selected", href: "/docs/modeling-tools/column-dim-selected" },
      { title: "Column Dim – All in View", href: "/docs/modeling-tools/column-dim-all-in-view" },
      { title: "Toggle Rebar Visibility", href: "/docs/modeling-tools/toggle-rebar-visibility" },
      { title: "Foundation Rebar", href: "/docs/modeling-tools/foundation-rebar" },
      

    ],
  },
  {
    title: "Drawing Tools",
    url: "#",
    items: [
      { title: "Fast Plan", href: "/docs/drawing-tools/fast-plan" },
      { title: "Grid Dimension (Plan)", href: "/docs/drawing-tools/grid-dimension-plan" },
      { title: "Grid Dimension (Elevation/Section)", href: "/docs/drawing-tools/grid-dimension-elevation-section" },
      { title: "Level Dimension (Elevation/Section)", href: "/docs/drawing-tools/level-dimension-elevation-section" },
      { title: "Super Tag (Plan)", href: "/docs/drawing-tools/super-tag-plan" },
      { title: "Wall Tag (Plan)", href: "/docs/drawing-tools/wall-tag-plan" },
      { title: "Door Tag (Plan)", href: "/docs/drawing-tools/door-tag-plan" },
      { title: "Window Tag (Plan)", href: "/docs/drawing-tools/window-tag-plan" },
      { title: "Floor Tag (Plan)", href: "/docs/drawing-tools/floor-tag-plan" },
      { title: "Ceiling Tag (Plan)", href: "/docs/drawing-tools/ceiling-tag-plan" },
      { title: "Roof Tag (Plan)", href: "/docs/drawing-tools/roof-tag-plan" },
      { title: "Room Tag (Plan)", href: "/docs/drawing-tools/room-tag-plan" },
      { title: "Wall Tag (Elevation/Section)", href: "/docs/drawing-tools/wall-tag-elevation-section" },
      { title: "Door Tag (Elevation/Section)", href: "/docs/drawing-tools/door-tag-elevation-section" },
      { title: "Window Tag (Elevation/Section)", href: "/docs/drawing-tools/window-tag-elevation-section" },
      { title: "Floor Tag (Elevation/Section)", href: "/docs/drawing-tools/floor-tag-elevation-section" },
      { title: "Ceiling Tag (Elevation/Section)", href: "/docs/drawing-tools/ceiling-tag-elevation-section" },
      { title: "Roof Tag (Elevation/Section)", href: "/docs/drawing-tools/roof-tag-elevation-section" },
      { title: "Room Tag (Elevation/Section)", href: "/docs/drawing-tools/room-tag-elevation-section" },
      { title: "Legend 3D View", href: "/docs/drawing-tools/legend-3d-view" },
      { title: "Legend Plan View", href: "/docs/drawing-tools/legend-plan-view" },
      { title: "Legend Section", href: "/docs/drawing-tools/legend-section" },
      { title: "Legend Elevation", href: "/docs/drawing-tools/legend-elevation" },
      { title: "Legend Front View", href: "/docs/drawing-tools/legend-front-view" },
      { title: "Legend Back View", href: "/docs/drawing-tools/legend-back-view" },
      { title: "Legend Left View", href: "/docs/drawing-tools/legend-left-view" },
      { title: "Legend Right View", href: "/docs/drawing-tools/legend-right-view" },
      { title: "Legend Top View", href: "/docs/drawing-tools/legend-top-view" },
      { title: "Legend Down View", href: "/docs/drawing-tools/legend-down-view" },
    ],
  },

  {
    title: "Cost Code Guide",
    url: "#",
    items: [
      { title: "A-Structural", href: "/docs/cost-code-guide/a-structural" },
      { title: "B-Architectural", href: "/docs/cost-code-guide/b-architectural" },
      { title: "C-Electrical", href: "" },
      { title: "D-Sanitary", href: "" },
      { title: "E-Air Conditioning System", href: "" },
      { title: "F-General", href: "" },
    ],
  },

  {
    title: "Small BIM PRO - Service",
    url: "#",
    items: [
      { title: "Online BOQ Transfer", href: "/docs/online-boq" },
    ],
  },
  
  {
    title: "Troubleshooting & FAQ",
    url: "#",
    items: [
      { title: "FAQ", href: "/docs/troubleshooting-faq/faq" },
    ],
  },

  {
    title: "Background & Research",
    url: "#",
    items: [
      { title: "Overview & Table of Contents", href: "/docs/background-research" },
      { title: "Why It Matters", href: "/docs/background-research/why-it-matters" },
      { title: "Problems in Estimation", href: "/docs/background-research/estimation-problems" },
      { title: "Challenges and Opportunities", href: "/docs/background-research/challenges-opportunities" },
      { title: "Revit QTO Limitations", href: "/docs/background-research/revit-qto-limitations" },
      { title: "Traditional vs Automated", href: "/docs/background-research/traditional-vs-automated" },
      { title: "Our Solution: Revit Add-in", href: "/docs/background-research/our-solution" },
      { title: "Empirical Comparison", href: "/docs/background-research/empirical-comparison" },
      { title: "Beyond BOQ: Data & Future", href: "/docs/background-research/beyond-boq" },
      { title: "Research Summary", href: "/docs/background-research/research-summary" },
      { title: "Appendix & References", href: "/docs/background-research/appendix" },
    ],
  },

  
  
  
] as const

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  // เช็ค active ของลิงก์
  const isActive = (href?: string) => {
    if (!href || href === "#") return false
    const base = pathname.split("#")[0]
    return base === href || base.startsWith(href + "/")
  }

  // ✅ ให้หมวดเปิดเองถ้าหน้าปัจจุบันอยู่ในหมวดนั้น
  const isSectionOpen = (url?: string, items?: readonly { href?: string }[]) => {
    if (!url && !items?.length) return false
    const base = pathname.split("#")[0]
    if (url && (base === url || base.startsWith(url + "/"))) return true
    if (items?.some((i) => i.href && (base === i.href || base.startsWith(i.href + "/")))) return true
    return false
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={["1.0.0"]} defaultVersion={"1.0.0"} />
        <SearchForm className="mt-1" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {NAV.map((cat) => (
              // ✅ ห่อแต่ละหมวดด้วย Collapsible
              <Collapsible
                key={cat.title}
                defaultOpen={isSectionOpen(cat.url, cat.items)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  {/* ปุ่มหัวหมวดเป็นตัว trigger ย่อ/ขยาย */}
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {cat.title}
                      {/* ไอคอน Plus/Minus สลับตามสถานะ */}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  {/* รายการย่อย แสดงเมื่อเปิด */}
                  {cat.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-3 border-l pl-3">
                        {cat.items.map((sub) => (
                          <SidebarMenuSubItem key={sub.title}>
                            <SidebarMenuSubButton asChild isActive={isActive(sub.href)}>
                              <Link href={sub.href}>{sub.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto px-4 py-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} SmallBIM Studio
      </div>

      <SidebarRail />
    </Sidebar>
  )
}
