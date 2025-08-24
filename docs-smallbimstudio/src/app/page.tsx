// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            SmallBIM Studio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            เอกสารประกอบการใช้งานสำหรับ SmallBIM Studio 
            เรียนรู้วิธีการใช้งานระบบ BIM อย่างง่ายและมีประสิทธิภาพ
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/docs/getting-started">เริ่มต้นใช้งาน</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">ดูเอกสารทั้งหมด</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">หมวดหมู่เอกสาร</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>การเริ่มต้นใช้งาน</CardTitle>
                <CardDescription>
                  คำแนะนำพื้นฐานสำหรับการเริ่มต้นใช้งาน SmallBIM Studio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs/getting-started">อ่านต่อ</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>คู่มือการใช้งาน</CardTitle>
                <CardDescription>
                  คู่มือโดยละเอียดสำหรับฟีเจอร์ต่างๆ ในระบบ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs/user-guide">อ่านต่อ</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  เอกสาร API สำหรับนักพัฒนาที่ต้องการเชื่อมต่อระบบ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs/api">อ่านต่อ</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>
                  คำถามที่พบบ่อยและคำตอบ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs/faq">อ่านต่อ</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>วิดีโอสอนใช้งาน</CardTitle>
                <CardDescription>
                  วิดีโอแนะนำการใช้งานต่างๆ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs/tutorials">อ่านต่อ</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>การติดต่อ</CardTitle>
                <CardDescription>
                  ติดต่อทีมงานเมื่อต้องการความช่วยเหลือ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs/contact">ติดต่อเรา</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-600">
            © 2024 SmallBIM Studio. สงวนสิทธิ์ทุกประการ.
          </div>
        </div>
      </footer>
    </>
  );
}