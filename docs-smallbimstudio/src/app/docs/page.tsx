// src/app/docs/page.tsx
import Link from "next/link"

export default function DocsOverview() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Documentation</h1>
        <p className="text-sm text-muted-foreground">
          คู่มือการใช้งาน Small BIM PRO — เริ่มต้นติดตั้ง ทำความเข้าใจโครงสร้าง และทิปส์ต่าง ๆ
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-base font-semibold">บทแนะนำ</h2>
        <ul className="space-y-1">
          <li>
            <Link className="underline-offset-4 hover:underline" href="/docs/introduction">
              Getting Started
            </Link>
          </li>
          {/* เพิ่มหัวข้ออื่นได้ตามต้องการ */}
          {/* <li><Link href="/docs/boq" className="underline-offset-4 hover:underline">BOQ</Link></li> */}
        </ul>
      </div>
    </section>
  )
}
