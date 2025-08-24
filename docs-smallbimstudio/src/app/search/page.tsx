'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"

// 🔧 ดัชนีหน้าเอกสารแบบง่าย (เริ่มต้นก่อน)
// - แนะนำให้ย้ายค่าชุดนี้ไปไฟล์เดียว เช่น `lib/nav-data.ts`
//   แล้ว import มาใช้ทั้ง Sidebar และ Search เพื่อไม่ให้ข้อมูลซ้ำ
const DOCS_INDEX = [
  { title: "Docs – Overview", href: "/docs", keywords: ["overview", "docs"] },
  { title: "Docs – Getting Started", href: "/docs/getting-started", keywords: ["install", "setup", "start"] },
  // { title: "Docs – BOQ", href: "/docs/boq", keywords: ["boq", "estimation"] },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const q = (searchParams.get('q') ?? "").trim().toLowerCase()

  const results = q
    ? DOCS_INDEX.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          (item.keywords ?? []).some((k) => k.toLowerCase().includes(q))
      )
    : []

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Search</h1>

      {q ? (
        <p className="mt-1 mb-4 text-sm text-muted-foreground">
          Showing {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
          <span className="font-mono">&quot;{q}&quot;</span>
        </p>
      ) : (
        <p className="mt-1 mb-4 text-sm text-muted-foreground">
          Type in the search box (left sidebar) and press Enter.
        </p>
      )}

      <ul className="space-y-2">
        {results.map((item) => (
          <li
            key={item.href}
            className="rounded-lg border p-3 transition-colors hover:bg-muted/50"
          >
            <Link
              href={item.href}
              className="underline-offset-4 hover:underline font-medium"
            >
              {item.title}
            </Link>
            {/* ถ้ามีคำอธิบายก็ใส่เพิ่มได้ เช่น <p className="text-sm text-muted-foreground">...</p> */}
          </li>
        ))}
      </ul>

      {q && results.length === 0 && (
        <div className="text-sm text-muted-foreground">
          No results. Try a different keyword.
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-4">กำลังโหลด...</div>}>
      <SearchContent />
    </Suspense>
  )
}