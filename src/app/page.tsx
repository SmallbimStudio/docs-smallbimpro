// src/app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/docs"); // หน้านี้ เป็น Home Page ไม่ต้องสร้าง Content อะไร เพราะบังคับให้ทำการ Redirect ไปยังหน้า Overview แทน เน้นไปออกแบบหน้า Overview แทน
}
