// src/app/docs/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Small BIM PRO - Documentations</h1>
        <p className="text-lg text-gray-600">
          Welcome to SmallBIM PRO
          คุณสามารถค้นหาคำแนะนำและคู่มือการใช้งานทั้งหมดได้ที่นี่
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🚀 เริ่มต้นใช้งาน</CardTitle>
            <CardDescription>
              คำแนะนำพื้นฐานสำหรับผู้ใช้งานใหม่
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              เรียนรู้วิธีการติดตั้ง ตั้งค่า และเริ่มใช้งาน SmallBIM Studio ครั้งแรก
            </p>
            <Button asChild>
              <Link href="/docs/getting-started">เริ่มต้นเลย</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📖 คู่มือการใช้งาน</CardTitle>
            <CardDescription>
              คู่มือโดยละเอียดสำหรับฟีเจอร์ต่างๆ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              เรียนรู้วิธีการใช้งานฟีเจอร์ต่างๆ ในระบบอย่างละเอียด
            </p>
            <Button asChild>
              <Link href="/docs/user-guide">ดูคู่มือ</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>⚡ API Reference</CardTitle>
            <CardDescription>
              เอกสาร API สำหรับนักพัฒนา
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              เอกสาร API ครบครันสำหรับการพัฒนาและเชื่อมต่อระบบ
            </p>
            <Button asChild>
              <Link href="/docs/api">ดู API</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>❓ FAQ</CardTitle>
            <CardDescription>
              คำถามที่พบบ่อยและคำตอบ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              รวมคำถามที่พบบ่อยและคำตอบจากทีมงานและชุมชน
            </p>
            <Button asChild>
              <Link href="/docs/faq">ดู FAQ</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">ต้องการความช่วยเหลือ?</h2>
        <p className="text-gray-600 mb-4">
          หากคุณไม่พบสิ่งที่ต้องการในเอกสารนี้ 
          อย่าลังเลที่จะติดต่อทีมงานของเรา
        </p>
        <Button variant="outline" asChild>
          <Link href="/docs/contact">ติดต่อเรา</Link>
        </Button>
      </div>
    </div>
  );
}