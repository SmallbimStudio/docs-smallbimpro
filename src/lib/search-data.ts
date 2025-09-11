import { NAV, type NavCategory } from '@/components/app-sidebar'

// แปลงข้อมูลจาก NAV เป็น SearchItem
export type SearchItem = {
  title: string
  href: string
  category: string
  keywords?: string[]
}

// สร้าง search index จาก NAV
export const SEARCH_INDEX: SearchItem[] = NAV.flatMap((category: NavCategory) => 
  category.items.map((item) => ({
    title: item.title,
    href: item.href,
    category: category.title,
    // เพิ่ม keywords จากชื่อเรื่องและหมวดหมู่
    keywords: [
      ...item.title.toLowerCase().split(' '),
      ...category.title.toLowerCase().split(' ')
    ].filter(Boolean) // กรองค่าว่างออก
  }))
)