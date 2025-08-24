// src/app/docs/getting-started/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">เริ่มต้นใช้งาน SmallBIM Studio</h1>
        <p className="text-lg text-gray-600">
          คำแนะนำทีละขั้นตอนสำหรับการเริ่มต้นใช้งาน SmallBIM Studio
        </p>
      </div>

      <div className="space-y-8">
        {/* System Requirements */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">ความต้องการระบบ</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">ความต้องการขั้นต่ำ</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Windows 10 หรือ macOS 10.15</li>
                    <li>• RAM 8GB</li>
                    <li>• พื้นที่ว่าง 5GB</li>
                    <li>• การ์ดจอที่รองรับ OpenGL 3.3</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">แนะนำ</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Windows 11 หรือ macOS 12+</li>
                    <li>• RAM 16GB หรือมากกว่า</li>
                    <li>• SSD พื้นที่ว่าง 10GB</li>
                    <li>• การ์ดจอเฉพาะทาง</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Installation Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">ขั้นตอนการติดตั้ง</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>ขั้นตอนที่ 1: ดาวน์โหลดโปรแกรม</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  ดาวน์โหลด SmallBIM Studio จากเว็บไซต์ทางการ
                </p>
                <Button>ดาวน์โหลดตอนนี้</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ขั้นตอนที่ 2: ติดตั้งโปรแกรม</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>เปิดไฟล์ที่ดาวน์โหลดมา</li>
                  <li>ยอมรับเงื่อนไขการใช้งาน</li>
                  <li>เลือกที่ตั้งของการติดตั้ง</li>
                  <li>รอการติดตั้งเสร็จสิ้น</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ขั้นตอนที่ 3: เปิดโปรแกรมครั้งแรก</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  เมื่อเปิดโปรแกรมครั้งแรก จะมีการตั้งค่าเบื้องต้นและสร้างบัญชีผู้ใช้
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/getting-started/setup">ดูคำแนะนำการตั้งค่า</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">เริ่มต้นอย่างรวดเร็ว</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-medium mb-2">สร้างโปรเจกต์ใหม่</h4>
                  <p className="text-sm text-gray-600">เริ่มต้นด้วยการสร้างโปรเจกต์ใหม่</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-medium mb-2">อัพโหลดไฟล์</h4>
                  <p className="text-sm text-gray-600">นำไฟล์ BIM ของคุณเข้าสู่ระบบ</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-medium mb-2">เริ่มใช้งาน</h4>
                  <p className="text-sm text-gray-600">เริ่มสำรวจและวิเคราะห์โมเดล</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">ขั้นตอนถัดไป</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>คู่มือการใช้งาน</CardTitle>
                <CardDescription>
                  เรียนรู้วิธีการใช้งานฟีเจอร์ต่างๆ ในระบบ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="/docs/user-guide">ดูคู่มือ</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>วิดีโอสอนใช้งาน</CardTitle>
                <CardDescription>
                  ดูวิดีโอแนะนำการใช้งานแบบทีละขั้นตอน
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="/docs/tutorials">ดูวิดีโอ</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}