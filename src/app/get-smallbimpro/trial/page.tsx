"use client"

import * as React from "react"
import { useState, useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function RegisterPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("https://smallbimpro-functions.youiscode14.workers.dev/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      interface TrialResponse {
        ok: boolean;
        error?: string;
      }

      const data = (await res.json()) as TrialResponse;
      if (data.ok) {
        setSuccess(true)
        setMessage("✅ ลงทะเบียนสำเร็จ! กรุณาตรวจสอบอีเมลของคุณ")
        formRef.current?.reset()
      } else {
        setSuccess(false)
        setMessage("❌ เกิดข้อผิดพลาด: " + (data.error || "ไม่สามารถลงทะเบียนได้"))
      }
    } catch (err) {
      setSuccess(false)
      setMessage("❌ Error: " + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <Card className="rounded-2xl shadow-md border bg-card">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">ลงทะเบียนทดลองใช้งานฟรี 7 วัน</CardTitle>
          <CardDescription>
            กรอกข้อมูลของคุณเพื่อรับ Small BIM PRO Add-in เวอร์ชันทดลอง พร้อมใช้งานครบทุกฟีเจอร์
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            {/* Email + Phone */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">อีเมล *</Label>
                <Input id="email" name="email" type="email" required placeholder="กรอกอีเมล์@gmail.com" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="phone">เบอร์โทร *</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="08x-xxx-xxxx" />
              </div>
            </div>

            {/* Full name */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="fullName">ชื่อ-นามสกุล *</Label>
              <Input id="fullName" name="fullName" required placeholder="ชื่อ นามสกุล" />
            </div>

            {/* Company + Source */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="company">บริษัท/หน่วยงาน</Label>
                <Input id="company" name="company" placeholder="ถ้ามี" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="source">รู้จักเราจาก</Label>
                <Input id="source" name="source" placeholder="Facebook / YouTube / เพื่อนแนะนำ" />
              </div>
            </div>

            {/* Note */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="note">ข้อความเพิ่มเติม</Label>
              <Textarea id="note" name="note" placeholder="เช่น เหตุผลที่ต้องการใช้งาน Small BIM PRO/" />
            </div>

            {/* CTA Buttons */}
            <div className="grid gap-3 sm:grid-cols-2">
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "กำลังลงทะเบียน..." : "ลงทะเบียนรับตัวทดลอง"}
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link href="/get-smallbimpro/buy">สั่งซื้อเลย (ลด 40%)</Link>
              </Button>
            </div>

            {/* Message */}
            {message && (
              <p className={`text-sm ${success ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}

            <p className="text-xs text-muted-foreground text-center">
              โดยการลงทะเบียน คุณยินยอมให้ Small BIM Studio เก็บข้อมูลเพื่อติดต่อส่งตัวทดลองและข้อเสนอพิเศษ
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
