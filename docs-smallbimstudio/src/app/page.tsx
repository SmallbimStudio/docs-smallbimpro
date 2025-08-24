import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

// ✅ เพิ่ม/แก้ลิงก์ที่โชว์บนหน้าแรก (เพื่อเข้าถึงไว)
const PAGES = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Getting Started", href: "/getting-started" },
]

export default function Page() {
  return (
    <>
      <header className="flex h-16 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/docs">Small BIM PRO (Version 0.0 (Beta))</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="aspect-video rounded-xl bg-muted/50 hover:bg-muted transition-colors flex items-center justify-center text-sm font-medium"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
