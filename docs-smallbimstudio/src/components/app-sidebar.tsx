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
      { title: "Introduction", href: "/docs/getting-started/introduction" },
    ],
  },

  {
    title: "Installation",
    url: "#",
    items: [
      { title: "Download", href: "/docs/download" },
      { title: "Installation", href: "/docs/download/installation" },
    ],
  },

  {
    title: "BOQ Tools",
    url: "#",
    items: [
      { title: "BOQ (Main Tool)", href: "" },
      { title: "Model Data Management", href: "" },
    ],
  },

  {
    title: "Database",
    url: "#",
    items: [
      { title: "Online Database", href: "" },

    ],
  },
  {
    title: "Grid Creator",
    url: "#",
    items: [
      { title: "Grid Layout", href: "" },
      { title: "Grid Dimension", href: "" },
    ],
  },
  {
    title: "Modeling Tools",
    url: "#",
    items: [
      { title: "Foundation Support", href: "" },
      { title: "Columns on Grids", href: "" },
      { title: "Tag All Columns", href: "" },
      { title: "Column Dim – Selected", href: "" },
      { title: "Column Dim – All in View", href: "" },
      { title: "Foundation Rebar", href: "" },
      { title: "Column Rebar", href: "" },
      { title: "Toggle Rebar Visibility", href: "" },
      { title: "Brick Wall", href: "" },
      { title: "Column/Lintel", href: "" },
    ],
  },
  {
    title: "Drawing Tools",
    url: "#",
    items: [
      { title: "Fast Plan", href: "" },
      { title: "Super Tag – All", href: "" },
      { title: "Super Tag – Wall", href: "" },
      { title: "Super Tag – Door", href: "" },
      { title: "Super Tag – Window", href: "" },
      { title: "Super Tag – Floor", href: "" },
      { title: "Super Tag – Ceiling", href: "" },
      { title: "Super Tag – Roof", href: "" },
      { title: "Super Tag – Room", href: "" },
    ],
  },
  {
    title: "Legend View",
    url: "#",
    items: [
      { title: "Legend 3D View", href: "" },
      { title: "Legend Plan View", href: "" },
      { title: "Legend Section", href: "" },
      { title: "Legend Elevation", href: "" },
      { title: "Legend Front", href: "" },
      { title: "Legend Back", href: "" },
      { title: "Legend Left", href: "" },
      { title: "Legend Right", href: "" },
      { title: "Legend Top", href: "" },
      { title: "Legend Down", href: "" },
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
