// src/app/docs/getting-started/page.tsx
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"

function StepBlock({
  step,
  title,
  imgSrc = "/images/docs/install/step-placeholder.png",
  imgAlt = "Installation step image",
  children,
}: {
  step: number
  title: string
  imgSrc?: string
  imgAlt?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border bg-card p-4 sm:p-6 space-y-3">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
          {step}
        </div>
        <h3 className="text-lg font-semibold leading-7">{title}</h3>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        {/* ภาพประกอบ */}
        <figure className="rounded-xl overflow-hidden border bg-muted/10">
          {/* ปรับขนาดภาพตามไฟล์ของคุณ */}
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            priority={step === 1}
          />
          <figcaption className="px-3 py-2 text-xs text-muted-foreground">
            {/* คำอธิบายใต้ภาพ (แก้ไขได้) */}
            ใส่คำอธิบายภาพขั้นตอนที่ {step}
          </figcaption>
        </figure>

        {/* ย่อหน้าอธิบาย */}
        <div className="space-y-3 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function installation() {
  return (
    <article className="space-y-6 leading-relaxed">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Update and Uninstall</h1>
        <p>วิธีการถอนการติดตั้ง Small BIM PRO และการอัพเดตเวอร์ชั่น</p>
      </header>

      {/* ===== VIDEO ===== */}
        <section className="text-center space-y-6">
          <div className="max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BxcIrjYSKrA"
              title="Download and Installation Small BIM PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>


      

      <section className="space-y-6">

        <StepBlock
          step={1}
          title="Uninstall (add or remove programs)"
          imgSrc="/images/docs/install/program-uninstall.png"
          imgAlt="เสร็จสิ้นการ Activate License"
        >
          <p>
            1. เข้าหน้าต่าง add or remove programs
          </p>
          <p>
            2. ค้นหา Small BIM PRO แล้วทำการกด Uninstall ได้เลย
          </p>
          <p>
            3. กด Uninstall
          </p>
          <p className="text-sm text-muted-foreground">
            หมายเหตุ : ถ้าหากค้นหาหน้าต่าง add or remove programs ไม่พบ สามารถกดปุ่ม Window แล้วพิมพ์ค้นหาด้วยคำว่า add or remove programs 
          </p>
        </StepBlock>
        
        <StepBlock
          step={2}
          title="Uninstall (Small BIM PRO - Installer)"
          imgSrc="/images/docs/install/program-remove.png"
          imgAlt="เสร็จสิ้นการ Activate License"
        >
          <p>
            1. ถอนการติดตั้งผ่าน Small BIM PRO - Installer          
          </p>
          <p>
            2. เลือก Remove SmallBIMPRO แล้วกดปุ่ม Finish เพื่อถอนการติดตั้ง
          </p>
          <p className="text-sm text-muted-foreground">
            หมายเหตุ : ในกรณนี้ต้องเข้าตัวเดียวกันกับ Version ที่ทำการติดตั้ง และถ้าหากอัพเดตเวอร์ชั่นใหม่ ต้องทำการถอนการติดตั้งตัวเดิมก่อนทุกครั้ง เพื่อป้องกันการทำงานที่ผิดพลาด
          </p>
        </StepBlock>
        

        {/* บล็อกปัญหาที่พบบ่อย (แก้ไขข้อความตามจริง) */}
        <div className="rounded-2xl border bg-muted/30 p-4 sm:p-6 space-y-2">
          <h3 className="text-lg font-semibold">Troubleshooting / ปัญหาที่พบบ่อย</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>ติดตั้งแล้วไม่เห็นแท็บ: ตรวจสอบสิทธิ์ Admin / ปิดเปิด Revit / ปลดบล็อกไฟล์</li>
            <li>.addin ไม่โหลด: ตรวจสอบโฟลเดอร์ <code>%APPDATA%\Autodesk\Revit\Addins\20XX</code></li>
            <li>ไลเซนส์ไม่ผ่าน: ตรวจสอบการพิมพ์/วางช่องว่าง และการเชื่อมต่อ (ถ้าจำเป็น)</li>
          </ul>
        </div>
      </section>
    </article>
  )
}
