"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* ถ้าอยากมี Header กลางทุกหน้า ใส่ <SiteHeader /> ตรงนี้ */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
