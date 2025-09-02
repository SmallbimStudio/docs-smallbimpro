"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const LABELS: Record<string, string> = {
  docs: "Docs",
}

function toTitle(seg: string) {
  const label = LABELS[seg] ?? decodeURIComponent(seg).replace(/-/g, " ")
  return label.replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function AutoBreadcrumbs({
  showRoot = false,
  rootHref = "/",
  rootLabel = "Home",
  trimPrefix, // <= ใส่เพิ่ม
}: {
  showRoot?: boolean
  rootHref?: string
  rootLabel?: string
  currentLabel?: string
  trimPrefix?: string        // <= ใส่เพิ่ม
}) {
  const pathname = usePathname()
  let segments = pathname.split("/").filter(Boolean)

  // ตัด prefix ออก ถ้าตรงกับที่ส่งมา เช่น "/docs"
  if (trimPrefix) {
    const cut = trimPrefix.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean).length
    const prefix = "/" + segments.slice(0, cut).join("/")
    if (("/" + segments.join("/")).startsWith(trimPrefix)) {
      segments = segments.slice(cut)
    }
  }

  const items = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/")
    const label = toTitle(seg)
    const isLast = i === segments.length - 1
    return (
      <React.Fragment key={href}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{label}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild><Link href={href}>{label}</Link></BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    )
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {showRoot && (
          <>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild><Link href={rootHref}>{rootLabel}</Link></BreadcrumbLink>
            </BreadcrumbItem>
            {segments.length > 0 && <BreadcrumbSeparator className="hidden md:block" />}
          </>
        )}
        {items}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
