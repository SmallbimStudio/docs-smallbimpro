// src/components/docs-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "เริ่มต้นใช้งาน",
    items: [
      { title: "การติดตั้ง", href: "/docs/getting-started" },
      { title: "การตั้งค่าเบื้องต้น", href: "/docs/getting-started/setup" },
      { title: "การใช้งานครั้งแรก", href: "/docs/getting-started/first-use" },
    ],
  },
  {
    title: "คู่มือการใช้งาน",
    items: [
      { title: "ภาพรวมระบบ", href: "/docs/user-guide" },
      { title: "การจัดการโปรเจกต์", href: "/docs/user-guide/projects" },
      { title: "การอัพโหลดไฟล์", href: "/docs/user-guide/upload" },
      { title: "การแสดงผล 3D", href: "/docs/user-guide/3d-viewer" },
      { title: "การส่งออกรายงาน", href: "/docs/user-guide/reports" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "ภาพรวม API", href: "/docs/api" },
      { title: "การยืนยันตัวตน", href: "/docs/api/authentication" },
      { title: "Endpoints", href: "/docs/api/endpoints" },
      { title: "Examples", href: "/docs/api/examples" },
    ],
  },
  {
    title: "อื่นๆ",
    items: [
      { title: "FAQ", href: "/docs/faq" },
      { title: "วิดีโอสอนใช้งาน", href: "/docs/tutorials" },
      { title: "ติดต่อเรา", href: "/docs/contact" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      {sidebarItems.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-sm text-gray-900 mb-3">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block text-sm py-1 px-2 rounded-md transition-colors hover:bg-gray-100",
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}