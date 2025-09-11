"use client"

import Link from "next/link"
import { CheckCircle2, Zap, Wrench, FileSpreadsheet, PenTool, BookOpen, Users, Scale } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CountUp from "react-countup"

export default function SalePage() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4 space-y-32 pb-32">

        {/* ===== HERO ===== */}
        <section className="relative text-center min-h-screen flex flex-col justify-center items-center py-40">
          <Badge 
            className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1 animate-fade-in" 
            variant="secondary"
          >
            <span className="animate-pulse">New</span> Small BIM PRO v1.0.0 Released
          </Badge>

          <div className="max-w-4xl mx-auto space-y-10">
            <h1 className="text-6xl font-bold tracking-tight leading-relaxed animate-title">
              Boost Your BIM Workflow with
              <div className="relative inline-block ml-2">
                <span className="bg-black text-white px-4 rounded-md inline-block transform hover:scale-105 transition-transform
                  animate-float relative z-10"
                >
                  Small BIM PRO
                </span>
                {/* เพิ่ม Effect Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg animate-pulse-slow"></div>
              </div>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up">
              Add-in Revit สำหรับสถาปนิกและวิศวกรไทย
              <br />
              ช่วยให้คุณทำงานเร็วขึ้น พร้อมควบคุมงบประมาณอย่างแม่นยำ
            </p>

            <div className="flex justify-center gap-6 pt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="h-14 px-10 text-lg transform hover:scale-105 transition-all hover:shadow-lg"
              >
                <Link href="/get-smallbimpro/trial">
                  ทดลองใช้ฟรี
                  <span className="ml-2 animate-bounce">→</span>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-10 text-lg relative overflow-hidden group"
              >
                <Link href="/get-smallbimpro/buy" className="relative z-10">
                  ซื้อ Early Bird -40%
                </Link>
                <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </Button>
            </div>
          </div>
        </section>


        {/* ===== CORE FEATURES ===== */}
        <section className="grid grid-cols-3 gap-12 max-w-5xl mx-auto py-20" id="features">
          <CoreFeature icon={<Zap className="w-8 h-8" />} title="Efficiency" description="ลดเวลาออกแบบ–เขียนแบบ" />
          <CoreFeature icon={<Users className="w-8 h-8" />} title="Collaboration" description="แชร์ข้อมูลระหว่างทีมได้ง่าย" />
          <CoreFeature icon={<Scale className="w-8 h-8" />} title="Scalability" description="รองรับโปรเจคทุกขนาด" />
        </section>

        {/* ===== FEATURE GRID ===== */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">ฟีเจอร์หลัก</h2>
            <p className="text-muted-foreground">ครบทุกเครื่องมือที่จำเป็นสำหรับ Revit + BIM</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureHighlight
              icon={<FileSpreadsheet className="w-6 h-6" />}
              title="BOQ Tools"
              description="ระบบคำนวณ BOQ อัตโนมัติ"
              items={["Export CSV/Excel", "Realtime Cost Link", "Loss % Auto", "Custom Template"]}
            />
            <FeatureHighlight
              icon={<Wrench className="w-6 h-6" />}
              title="Modeling Tools"
              description="จัดการโมเดลรวดเร็วขึ้น"
              items={["Batch Family Editor", "Instance Data Manager", "Quick Properties", "Workset Manager"]}
            />
            <FeatureHighlight
              icon={<PenTool className="w-6 h-6" />}
              title="Drawing Tools"
              description="เร่งงานเขียนแบบ"
              items={["Auto Sheet Naming", "Batch View Creation", "Sheet Index Generator", "Revision Tools"]}
            />
            <FeatureHighlight
              icon={<BookOpen className="w-6 h-6" />}
              title="Cost Code Standards"
              description="มาตรฐานงานก่อสร้างไทย"
              items={["Thai Keynote Library", "Material Standards", "Construction Methods", "Import/Export Template"]}
            />
          </div>
        </section>

        <Separator />

        {/* ===== TESTIMONIALS ===== */}
        <section className="space-y-10 text-center">
          <h2 className="text-3xl font-bold">เสียงจากผู้ใช้งานจริง</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial name="คุณกิตติ" role="วิศวกรโครงการ">
              ใช้งาน Small BIM PRO แล้วลดเวลาเขียนแบบไปได้ครึ่งนึง!
            </Testimonial>
            <Testimonial name="คุณอร" role="สถาปนิกอิสระ">
              ฟีเจอร์ BOQ Tools คุ้มค่ามาก ดึงราคากลางอัตโนมัติทันใจ
            </Testimonial>
            <Testimonial name="คุณปิยะ" role="ผู้รับเหมา">
              โปรแกรมช่วยให้ตรวจสอบงบประมาณง่ายขึ้น ไม่พลาดต้นทุน
            </Testimonial>
          </div>
        </section>

        <Separator />

        {/* ===== PRICING ===== */}
        <section id="pricing" className="space-y-6">
          <div className="mx-auto max-w-3xl text-center space-y-2">
            <Badge>Early Bird -40%</Badge>
            <h2 className="text-3xl font-bold">ราคาพิเศษช่วงเปิดตัว</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PriceCardMinimal
              title="ทดลองใช้"
              price="ฟรี"
              duration="7 วัน"
              features={["ใช้งานได้ครบทุกฟีเจอร์", "วิดีโอสอนใช้งาน", "ตัวอย่างโปรเจค"]}
              href="/get-smallbimpro/trial"
              buttonText="เริ่มใช้ฟรี"
            />
            <PriceCardMinimal
              title="License ถาวร"
              price="7,500"
              duration="ตลอดชีพ"
              features={["อัพเดทฟรี", "ฐานข้อมูลราคากลาง", "Premium Support"]}
              href="/get-smallbimpro/buy"
              buttonText="ซื้อเลย"
              highlighted
            />
          </div>
        </section>

        <Separator />

        {/* ===== FAQ ===== */}
        <section id="faq" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FaqItem q="Small BIM PRO ใช้กับ Revit เวอร์ชันไหนได้?" a="รองรับ Revit 2024 ขึ้นไป" />
            <FaqItem q="License ใช้งานได้กี่เครื่อง?" a="1 License / 1 เครื่อง (สามารถย้ายได้)" />
            <FaqItem q="อัพเดทฟรีไหม?" a="Early Bird + License ถาวร จะได้รับอัพเดทฟรีตลอดชีพ" />
            <FaqItem q="มีทีม Support ไหม?" a="มีทีมงานตอบคำถามและแก้ปัญหาผ่านอีเมล" />
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="text-center space-y-6 pt-20">
          <h2 className="text-3xl font-bold">พร้อมเริ่มต้นหรือยัง?</h2>
          <p className="text-muted-foreground">ทดลองใช้ฟรี 7 วัน หรือซื้อในราคาพิเศษ Early Bird</p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Link href="/get-smallbimpro/trial">ทดลองใช้ฟรี</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/get-smallbimpro/buy">ซื้อเลย</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2025 Small BIM Studio. All rights reserved.
      </footer>
    </>
  )
}

/* ---------------- COMPONENTS ---------------- */
function CoreFeature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center space-y-4">
      <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function FeatureHighlight({ icon, title, description, items }: { icon: React.ReactNode, title: string, description: string, items: string[] }) {
  return (
    <div className="space-y-4 p-6 rounded-xl border bg-card hover:bg-muted/50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/5">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {items.map(item => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PriceCardMinimal({ title, price, duration, features, href, buttonText, highlighted }: { 
  title: string, price: string, duration: string, features: string[], href: string, buttonText: string, highlighted?: boolean 
}) {
  return (
    <div className={`p-8 rounded-xl border ${highlighted ? "border-primary shadow-lg" : ""}`}>
      <div className="space-y-4">
        <h3 className="font-semibold">{title}</h3>
        <div>
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{duration}</span>
        </div>
        <ul className="space-y-2">
          {features.map(feature => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" /> {feature}
            </li>
          ))}
        </ul>
        <Button asChild className="w-full" variant={highlighted ? "default" : "outline"}>
          <Link href={href}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  )
}

function Testimonial({ name, role, children }: { name: string, role: string, children: React.ReactNode }) {
  return (
    <Card className="p-6 text-left">
      <p className="text-muted-foreground mb-4 italic">“{children}”</p>
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-muted-foreground">{role}</div>
    </Card>
  )
}

function FaqItem({ q, a }: { q: string, a: string }) {
  return (
    <Card className="p-4">
      <h4 className="font-semibold">{q}</h4>
      <p className="text-sm text-muted-foreground mt-2">{a}</p>
    </Card>
  )
}
