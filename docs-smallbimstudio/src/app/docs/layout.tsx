// src/app/docs/layout.tsx
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

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Header (สไตล์เดียวกับ Home + จัดชิดซ้าย) */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/docs">
                Small BIM PRO (Beta Version)
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            {/* เปลี่ยนเป็นชื่อเพจย่อยตามต้องการ: Docs / Getting Started / ฯลฯ */}
            <BreadcrumbItem>
              <BreadcrumbPage>Docs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      {/* Main content (ชิดซ้าย) */}
      {/* ถ้าอยากจำกัดความกว้างให้ดูเรียบร้อยขึ้น ให้เพิ่ม max-w-3xl ได้ แต่ห้ามใส่ mx-auto */}
      <main className="p-4">
        {children}
      </main>

      </>
  )
}
