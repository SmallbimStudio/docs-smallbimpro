'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
import { SEARCH_INDEX, type SearchItem } from '@/lib/search-data'
import { Badge } from "@/components/ui/badge"

function SearchContent() {
  const searchParams = useSearchParams()
  const q = (searchParams.get('q') ?? "").trim().toLowerCase()

  const results: SearchItem[] = q
    ? SEARCH_INDEX.filter(
        (item: SearchItem) =>
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.keywords ?? []).some((k: string) => k.toLowerCase().includes(q))
      )
    : []

  return (
    <div className="container max-w-3xl py-8">
      <h1 className="text-2xl font-bold mb-2">ค้นหาเอกสาร</h1>

      {q ? (
        <p className="mb-6 text-muted-foreground">
          พบ {results.length} รายการ สำหรับคำค้นหา{" "}
          <span className="font-mono bg-muted px-2 py-1 rounded">{q}</span>
        </p>
      ) : (
        <p className="mb-6 text-muted-foreground">
          พิมพ์คำค้นหาในช่องค้นหาที่ sidebar ด้านซ้าย แล้วกด Enter
        </p>
      )}

      <div className="space-y-4">
        {results.map((item) => (
          <div
            key={item.href}
            className="group rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <Link
                  href={item.href}
                  className="font-medium hover:underline decoration-primary decoration-2 underline-offset-4"
                >
                  {item.title}
                </Link>
                <Badge variant="secondary" className="ml-2">
                  {item.category}
                </Badge>
              </div>
              <Link
                href={item.href}
                className="hidden group-hover:block text-sm text-muted-foreground hover:text-primary"
              >
                เปิดดู →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {q && results.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-lg mb-2">ไม่พบผลการค้นหา</p>
          <p className="text-sm">ลองใช้คำค้นหาอื่น หรือตรวจสอบการสะกดคำ</p>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container max-w-3xl py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 bg-muted rounded"></div>
          <div className="h-4 w-96 bg-muted rounded"></div>
          <div className="space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-20 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}