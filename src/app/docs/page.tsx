"use client"

import Link from "next/link"
import Head from "next/head"   // ✅ สำหรับ SEO
import { useRef, useEffect } from "react"
import { CheckCircle2, Zap, Wrench, FileSpreadsheet, PenTool, BookOpen, Users, Scale, Database, Settings, Calculator, Table, RefreshCcw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CountUp from "react-countup"


export default function SalePage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // ===== Testimonials Auto Scroll =====
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1 // ความเร็ว
    const scrollInterval = setInterval(() => {
      if (!scrollContainer) return
      scrollContainer.scrollLeft += scrollStep
      scrollAmount += scrollStep

      // รีเซ็ตถ้าเลื่อนสุด
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0
        scrollAmount = 0
      }
    }, 30) // ความถี่

    return () => clearInterval(scrollInterval)
  }, [])

  return (
    <>
      {/* ✅ SEO Head */}
      <Head>
        <title>Small BIM PRO - Add-in Revit สำหรับสถาปนิกไทย</title>
        <meta name="description" content="Small BIM PRO | Add-in Revit ที่ช่วยสถาปนิกและวิศวกรไทยทำงานเร็วขึ้น ควบคุม BOQ และงบประมาณได้แม่นยำ พร้อมฐานข้อมูลราคากลาง" />
        <meta name="keywords" content="Revit Add-in, BOQ Tools, BIM Workflow, Small BIM Studio, โปรแกรมสถาปนิกไทย, BIM Addin ไทย, BOQ Revit, โปรแกรมประมาณราคา Revit" />
      </Head>

      <main className="max-w-screen-xl mx-auto px-4 space-y-32 pb-32">

        {/* ===== HERO ===== */}
        <section className="relative text-center min-h-screen flex flex-col justify-center items-center py-40">
          
           {/* ✅ โลโก้ + Badge คนละช่อง */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
              {/* โลโก้ */}
              <div className="bg-white">
                <img src="/favicon.png" alt="Small BIM Studio" className="h-8 w-8" />
              </div>

              {/* Badge */}
              <Badge className="px-4 py-1 animate-fade-in" variant="secondary">
                <span className="animate-pulse">Updated</span> Small BIM PRO v2.0.0 New Commands and Bug Fixed
              </Badge>
            </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <h1 className="text-6xl font-bold tracking-tight leading-relaxed animate-title">
              Boost Your BIM Workflow with
              <div className="relative inline-block ml-2">
                <span className="bg-black text-white px-4 rounded-lg inline-block transform hover:scale-105 transition-transform
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
              <Button asChild size="lg" className="px-8">
                <Link href="/get-smallbimpro/trial">
                  ทดลองใช้ฟรี
                  <span className="ml-2 animate-bounce">→</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/get-smallbimpro/buy" className="relative z-10">
                  สั่งซื้อ Early Bird -40% วันสุดท้าย
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== VIDEO DEMO ===== */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">ชมวิดีโอการใช้งาน Small BIM PRO</h2>
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/c6nv4ObjDRA"
              title="Small BIM PRO Demo"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>


        {/* ===== PAIN → SOLUTION → BENEFIT ===== */}
        <section className="relative bg-muted/30 -mx-4 px-4 py-20 mt-32">
          
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">เปลี่ยน Pain Point ให้กลายเป็น Productivity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Small BIM PRO เกิดจากประสบการณ์ตรงของสถาปนิกและวิศวกรไทย  
              เรานำปัญหาที่ทุกคนเจอ มาพัฒนาเป็นเครื่องมือ ที่สามารถใช้งานได้จริง  
              เพื่อสร้างผลลัพธ์ที่สะดวก รวดเร็ว และแม่นยำกว่าเดิม
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            
            <Card className="p-8 text-center border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-black">Pain – ปัญหาที่เจอบ่อย</h3>
              <p className="text-muted-foreground leading-relaxed">
                ต้องเสียเวลานับวันกับการถอด BOQ  
                สลับไปมาหลายโปรแกรม ทำงานซ้ำซ้อน  
                และยังต้องแก้ไขโมเดลแบบเดิมซ้ำ ๆ
              </p>
            </Card>

            <Card className="p-8 text-center border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-black">Solution – เครื่องมือที่ตอบโจทย์</h3>
              <p className="text-muted-foreground leading-relaxed">
                Small BIM PRO ช่วยถอดปริมาณ + ประมาณราคา BOQ  
                รวมเครื่องมือใหม่ๆ ทั้งการสร้างโมเดล และการเขียนแบบ  
                เพื่อลดขั้นตอนที่ซ้ำซ้อนลง
              </p>
            </Card>

            <Card className="p-8 text-center border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-black">Benefit – ผลลัพธ์ที่ได้จริง</h3>
              <p className="text-muted-foreground leading-relaxed">
                ประหยัดเวลาได้มากขึ้นกว่า 80%  
                ได้ข้อมูลที่ครบถ้วน แม่นยำ ไม่ตกหล่น  
                และควบคุมงบประมาณโครงการได้ดียิ่งกว่าเดิม
              </p>
            </Card>

          </div>
        </section>



        {/* ===== PRODUCT PREVIEW ===== */}
        <section className="relative w-full -mt-20">
          <img
            src="/images/promote/Salepage.png"
            alt="Small BIM PRO Full Preview"
            className="w-full h-auto object-contain"
          />
        </section>


        {/* ===== FEATURE CATEGORIES (Overview Style = Feature Lists) ===== */}
        <section className="space-y-10" id="features">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">ฟีเจอร์หลักของ Small BIM PRO</h2>
            <p className="text-lg text-muted-foreground">
              ครอบคลุมทุกเครื่องมือสำคัญสำหรับงาน BIM ระดับมืออาชีพ ใช้งานได้ทั้ง Revit 2024, 2025 และ 2026
            </p>
          </div>
          <img src="/images/promote/feature-lists-pic.png" alt="Feature Lists" className="mx-auto" />

          {/* Grid of Feature Categories */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card
              className="rounded-2xl shadow-md p-6 text-center flex flex-col items-center 
                        hover:shadow-lg hover:border-primary/50 transition cursor-pointer"
            >
              <div className="mb-4">
                <FileSpreadsheet className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">BOQ Tools</h3>
              <p className="text-sm text-muted-foreground mt-2">
                เครื่องมือสำหรับคำนวณ BOQ, Export ปริมาณ และ Mapping ราคากลาง
              </p>
              <CardContent className="mt-auto pt-4 flex items-center gap-2">
                <span className="text-primary font-medium">4 Tools</span>
              </CardContent>
            </Card>

            <Card
              className="rounded-2xl shadow-md p-6 text-center flex flex-col items-center 
                        hover:shadow-lg hover:border-primary/50 transition cursor-pointer"
            >
              <div className="mb-4">
                <Wrench className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Modeling Tools</h3>
              <p className="text-sm text-muted-foreground mt-2">
                เครื่องมือสำหรับช่วยในการสร้างและจัดการโมเดลได้เร็วขึ้น
              </p>
              <CardContent className="mt-auto pt-4 flex items-center gap-2">
                <span className="text-primary font-medium">17 Tools</span>
              </CardContent>
            </Card>

            <Card
              className="rounded-2xl shadow-md p-6 text-center flex flex-col items-center 
                        hover:shadow-lg hover:border-primary/50 transition cursor-pointer"
            >
              <div className="mb-4">
                <PenTool className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Drawing Tools</h3>
              <p className="text-sm text-muted-foreground mt-2">
                เครื่องมือสำหรับช่วยในการเขียนแบบให้เร็วและสวยงามมากขึ้น
              </p>
              <CardContent className="mt-auto pt-4 flex items-center gap-2">
                <span className="text-primary font-medium">39 Tools</span>
              </CardContent>
            </Card>

            <Card
              className="rounded-2xl shadow-md p-6 text-center flex flex-col items-center 
                        hover:shadow-lg hover:border-primary/50 transition cursor-pointer"
            >
              <div className="mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Database & Standards</h3>
              <p className="text-sm text-muted-foreground mt-2">
                บริการเสริมทั้ง Template, ระบบฐานข้อมูลวัสดุ และมาตรฐานต่างๆ
              </p>
              <CardContent className="mt-auto pt-4 flex items-center gap-2">
                <span className="text-primary font-medium">Free Download</span>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/get-smallbimpro/feature-lists">ดูฟีเจอร์ทั้งหมด →</Link>
            </Button>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="relative bg-muted/30 -mx-4 px-4 py-20 mt-32">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Heading */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">ทำไมต้อง Small BIM PRO?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                เราพัฒนาซอฟต์แวร์โดยเข้าใจความต้องการของสถาปนิกและวิศวกรไทย ที่ใช้งาน Revit เป็นหลัก
                <br />
                เพื่อช่วยให้คุณทำงานได้เร็วขึ้น แม่นยำขึ้น และควบคุมงบประมาณได้ดียิ่งขึ้น 
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8">
              <StatCard
                label="ลดเวลาทำ BOQ"
                number={<CountUp end={80} duration={2} suffix="%" />}
                description="ประหยัดเวลาในการคำนวณและทำเอกสาร"
              />
              <StatCard
                label="ความแม่นยำ"
                number={<CountUp end={100} duration={2} suffix="%" />}
                description="คำนวณปริมาณงานได้ครบถ้วน ไม่ตกหล่น"
              />
              <StatCard
                label="ทำงานได้เร็วขึ้น"
                number="มากๆ"
                description="ทั้งการสร้างโมเดลและการเขียนแบบซ้ำๆ"
              />
              <StatCard
                label="ทีมซัพพอร์ต"
                number="24/7"
                description="ทีมงานพร้อมช่วยเหลือตลอดการใช้งาน"
              />
            </div>
          </div>
        </section>

        {/* ===== PRODUCT PREVIEW ===== */}
        <section className="relative w-full -mt-20">
          <img
            src="/images/promote/boqpage.png"
            alt="Small BIM PRO Full Preview"
            className="w-full h-auto object-contain"
          />
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="space-y-10 text-center">
          <h2 className="text-3xl font-bold">เสียงจากผู้ใช้งานจริง</h2>

          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

            <div className="flex gap-6 animate-scroll py-4">
              {/* First set */}
              {testimonials.map((t, i) => (
                <TestimonialCard 
                  key={i} 
                  name={t.name} 
                  role={t.role}
                  className="min-w-[320px]" // กำหนดความกว้างแน่นอน
                >
                  {t.text}
                </TestimonialCard>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((t, i) => (
                <TestimonialCard 
                  key={`dup-${i}`} 
                  name={t.name} 
                  role={t.role}
                  className="min-w-[320px]" // กำหนดความกว้างแน่นอน
                >
                  {t.text}
                </TestimonialCard>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* ===== PRICING ===== */}
        <section id="pricing" className="space-y-12 py-20 bg-muted/20 rounded-2xl">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <Badge className="px-3 py-1 text-sm">Early Bird -40%</Badge>
            <h2 className="text-4xl font-bold tracking-tight">ราคาพิเศษช่วงเปิดตัว วันสุดท้าย</h2>
            <p className="text-muted-foreground">
              รีบคว้าโอกาสในช่วง Early Bird ก่อนกลับสู่ราคาเต็ม{" "}
              <span className="line-through text-red-500">12,500 บาท</span>
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Trial */}
            <div className="relative p-8 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold">ทดลองใช้ฟรี</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">ฟรี</span>
                <span className="text-muted-foreground"> / 7 วัน</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> ใช้งานได้ครบทุกฟีเจอร์
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> วิดีโอสอนใช้งาน
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> ตัวอย่างโปรเจค
                </li>
              </ul>
              <Button asChild className="mt-8 w-full" variant="outline">
                <Link href="/get-smallbimpro/trial">เริ่มใช้ฟรี</Link>
              </Button>
            </div>

            {/* Lifetime License */}
            <div className="relative p-8 rounded-2xl border-2 border-primary bg-card shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-white">Best Value</Badge>
              </div>
              <h3 className="text-lg font-semibold">License ถาวร</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">7,500</span>
                <span className="text-muted-foreground"> / ตลอดชีพ</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                จากราคาเต็ม <span className="line-through text-red-500">12,500 บาท</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> อัพเดทฟรีตลอดชีพ
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> ฐานข้อมูลราคากลาง
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Premium Support
                </li>
              </ul>
              <Button asChild className="mt-8 w-full h-12 text-lg">
                <Link href="/get-smallbimpro/buy">ซื้อเลย</Link>
              </Button>
            </div>
          </div>
        </section>


        <Separator />

        {/* ===== FAQ (Preview) ===== */}
        <section id="faq" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FaqItem 
              q="Small BIM PRO คืออะไร?" 
              a="Small BIM PRO เป็น Revit Add-in ที่พัฒนาสำหรับงานด้าน BOQ และเพิ่มความเร็วในการทำงาน"
            />
            <FaqItem 
              q="Small BIM PRO ใช้กับ Revit เวอร์ชันไหนได้?" 
              a="ใช้ได้ใน Revit 2024, 2025 และ 2026"
            />
            <FaqItem 
              q="License ใช้งานได้กี่เครื่อง?" 
              a="1 License / 1 เครื่อง (สามารถย้ายได้ แต่ไม่สามารถใช้พร้อมกันหลายเครื่อง)"
            />
            <FaqItem 
              q="อัพเดทฟรีไหม?" 
              a="Early Bird + License ถาวร จะได้รับอัปเดตฟรีตลอดชีพ"
            />
          </div>

          {/* CTA Button */}
          <div className="text-center pt-6">
            <Link href="/docs/troubleshooting-faq/faq/">
              <Button variant="outline" size="lg" className="px-8">
                ดู FAQ เพิ่มเติม →
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Separator />
      
        {/* ===== ABOUT DEVELOPER ===== */}
        <section className="bg-muted/20 rounded-xl p-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* ✅ รูปภาพ */}
            <div className="flex justify-center">
              <img
                src="/images/promote/Personal Picture.jpg"
                alt="ทีมผู้พัฒนา Small BIM Studio"
                className="h-60 w-60 object-cover rounded-full shadow-md"
              />
            </div>

            {/* ✅ ข้อความ */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl font-bold">เกี่ยวกับผู้พัฒนา</h2>
              <p className="text-muted-foreground leading-relaxed">
                Small BIM Studio คือทีมสถาปนิกและผู้ที่สนใจในการออกแบบกระบวนการทำงานสถาปัตยกรรม  
                ด้าน Revit และ BIM เราพัฒนา <span className="font-semibold">Small BIM PRO</span> เพื่อแก้ปัญหาที่สถาปนิกและวิศวกรไทยเจอในขั้นตอนการทำงานจริง  
                จะช่วยให้ทำงานได้เร็วขึ้น แม่นยำขึ้น และมีความสุขกับการทำงานมากขึ้น
              </p>

              <br />
              <br />
              <p>รหัสศิลป์ นามวงศ์พรหม</p>
              <p className="text-sm text-muted-foreground pt-0">สถาปนิกผู้ก่อตั้ง Small BIM Studio</p>

              
            </div>
          </div>
        </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2025 Small BIM Studio. All rights reserved.
      </footer>
    </>
  )
}

/* ---------------- COMPONENTS ---------------- */
function CoreFeature({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="relative group text-center p-8 rounded-2xl border bg-card shadow-sm 
                    hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center
                      mb-6 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary 
                       rounded-full group-hover:w-1/2 transition-all duration-500"></span>
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

function FeatureCard({ 
  icon, 
  title, 
  description, 
  hot 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  hot?: boolean
}) {
  return (
    <Card className={`
      relative overflow-hidden transition-all duration-300
      hover:shadow-lg hover:scale-105
      ${hot ? 'border-primary/50' : ''}
    `}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-primary/5">
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {hot && (
        <div className="absolute top-0 right-0">
          <Badge variant="default" className="rounded-none rounded-bl">Hot</Badge>
        </div>
      )}
    </Card>
  )
}

function StatCard({ 
  label, 
  number, 
  description 
}: { 
  label: string
  number: React.ReactNode
  description: string
}) {
  return (
    <div
      className="text-center p-6 rounded-xl border bg-card 
                 hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      <div className="font-medium text-lg mb-2">{label}</div>
      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text mb-3">
        {number}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function TestimonialCard({
  name,
  role,
  children,
  className = "",
}: {
  name: string
  role: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        shrink-0 bg-card border rounded-xl shadow-md 
        p-6 text-left hover:shadow-lg transition-all duration-300
        w-[320px] h-[200px] flex flex-col justify-between
        ${className}
      `}
    >
      <p className="text-muted-foreground italic leading-relaxed line-clamp-4">
       &ldquo;{children}&rdquo;
      </p>
      <div className="mt-auto pt-4 border-t">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  )
}

// Add testimonials data at the top of the file
const testimonials = [
  
  { name: "คุณกิตติ", role: "วิศวกรโครงการ", text: "ใช้งาน Small BIM PRO แล้วลดเวลาเขียนแบบไปได้ครึ่งนึง!" },
  { name: "คุณอร", role: "สถาปนิกอิสระ", text: "ฟีเจอร์ BOQ Tools คุ้มค่ามาก จากที่เคยจ้างทำ BOQ ตอนนี้ทำเองได้เลย แถมสะดวกสุดๆ" },
  { name: "PO BIM Group", role: "วิศวกร", text: "เป็นตัวช่วยคู่ผู้ใช้ ในงานออกแบบ กับงานออกแบบในไทยได้ดีมากครับ" },
  { name: "คุณปิยะ", role: "สถาปนิกอิสระ", text: "Fast Plan เป็นอะไรที่ว้าวมาก แต่ติดที่ต้องสร้างโมเดลให้เก่งก่อน แต่ถ้าทำได้คือชีวิตดีขึ้นเยอะ" },
  { name: "คุณเมย์", role: "วิศวกรโครงการ", text: "ทีมซัพพอร์ตตอบเร็วมาก มีปัญหาติดต่อได้ตลอด" },
  { name: "คุณต้น", role: "สถาปนิกอิสระ", text: "Small BIM PRO ทำให้การทำงานใน Revit ราบรื่นขึ้นมาก ฟีเจอร์ครบถ้วน ใช้งานง่าย" },
  { name: "คุณเบส", role: "สถาปนิกอิสระ", text: "Fast Plan ปุ่มเดียวได้แปลนของจริง ช่วยลดเวลาทำงานไปได้เยอะ" },

  
]

