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
    title: "Overview",
    url: "#",
    items: [
      { title: "Dashboard", href: "/" },
    ],
  },
  {
    title: "Getting Started",
    url: "#",
    items: [
      { title: "Introduction", href: "/docs/getting-started" },
      { title: "Small BIM PRO", href: "/docs/getting-started/smallbimpro" },
      { title: "Professional Template", href: "/docs/getting-started/professional-template" },
    ],
  },

  {
    title: "Installation",
    url: "#",
    items: [
      { title: "Download", href: "" },
      { title: "Installation", href: "" },
      { title: "Revit LT Version", href: "" },
      { title: "Help", href: "" },
    ],
  },

  {
    title: "BOQ Tools",
    url: "/docs/boq",
    items: [
      { title: "BOQ (Main Tool)", href: "/docs/boq" },
      { title: "Model Data Management", href: "/docs/boq/model-data-management" },
    ],
  },

  {
    title: "Database",
    url: "/docs/database",
    items: [
      { title: "Keynote (Cost Code)", href: "/docs/database/keynote" },
      { title: "Type Comments", href: "/docs/database/type-comments" },
      { title: "RSB_Loss Percentage", href: "/docs/database/loss-percentage" },
      { title: "RSB_MaterialUnitCost", href: "/docs/database/material-unit-cost" },
      { title: "RSB_LabourUnitCost", href: "/docs/database/labour-unit-cost" },
    ],
  },
  {
    title: "Grid Creator",
    url: "/docs/grid",
    items: [
      { title: "Grid Layout", href: "/docs/grid/layout" },
      { title: "Grid Dimension", href: "/docs/grid/dimension" },
    ],
  },
  {
    title: "Modeling Tools",
    url: "/docs/modeling",
    items: [
      { title: "Foundation Support", href: "/docs/modeling/foundation-support" },
      { title: "Columns on Grids", href: "/docs/modeling/columns-on-grids" },
      { title: "Tag All Columns", href: "/docs/modeling/tag-all-columns" },
      { title: "Column Dim – Selected", href: "/docs/modeling/column-dim-selected" },
      { title: "Column Dim – All in View", href: "/docs/modeling/column-dim-all" },
      { title: "Foundation Rebar", href: "/docs/modeling/foundation-rebar" },
      { title: "Column Rebar", href: "/docs/modeling/column-rebar" },
      { title: "Toggle Rebar Visibility", href: "/docs/modeling/toggle-rebar" },
      { title: "Brick Wall", href: "/docs/modeling/brick-wall" },
      { title: "Column/Lintel", href: "/docs/modeling/wall-tools-column-lintel" },
    ],
  },
  {
    title: "Drawing Tools",
    url: "/docs/drawing",
    items: [
      { title: "Fast Plan", href: "/docs/drawing/fast-plan" },
      { title: "Super Tag – All", href: "/docs/drawing/supertag/all" },
      { title: "Super Tag – Wall", href: "/docs/drawing/supertag/wall" },
      { title: "Super Tag – Door", href: "/docs/drawing/supertag/door" },
      { title: "Super Tag – Window", href: "/docs/drawing/supertag/window" },
      { title: "Super Tag – Floor", href: "/docs/drawing/supertag/floor" },
      { title: "Super Tag – Ceiling", href: "/docs/drawing/supertag/ceiling" },
      { title: "Super Tag – Roof", href: "/docs/drawing/supertag/roof" },
      { title: "Super Tag – Room", href: "/docs/drawing/supertag/room" },
    ],
  },
  {
    title: "Legend View",
    url: "/docs/legend",
    items: [
      { title: "Legend 3D View", href: "/docs/legend/3d" },
      { title: "Legend Plan View", href: "/docs/legend/plan" },
      { title: "Legend Section", href: "/docs/legend/section" },
      { title: "Legend Elevation", href: "/docs/legend/elevation" },
      { title: "Legend Front", href: "/docs/legend/front" },
      { title: "Legend Back", href: "/docs/legend/back" },
      { title: "Legend Left", href: "/docs/legend/left" },
      { title: "Legend Right", href: "/docs/legend/right" },
      { title: "Legend Top", href: "/docs/legend/top" },
      { title: "Legend Down", href: "/docs/legend/down" },
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
        <VersionSwitcher versions={["0.0.0 (Beta)"]} defaultVersion={"0.0.0 (Beta)"} />
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
