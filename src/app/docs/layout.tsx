// src/app/docs/layout.tsx
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import AutoBreadcrumbs from "@/components/auto-breadcrumbs"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />

        {/* ✅ ใช้เบรดครัมบ์อัตโนมัติใน layout */}
        <AutoBreadcrumbs
            showRoot
            rootHref="/docs"
            rootLabel="Small BIM PRO (Version 1.0.3)"
            trimPrefix="/docs"   // ✅ ซ่อน /docs ออกจาก trail
        />
      </header>

      <main className="container max-w-screen-2xl py-10">
            {children}
    </main>
    </>
  )
}
