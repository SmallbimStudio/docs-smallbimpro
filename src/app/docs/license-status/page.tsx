// src/app/docs/getting-started/page.tsx
import Image from "next/image"

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
        <h1 className="text-2xl font-semibold">License Status</h1>
        <p>ตัวอย่างสถานะการใช้งานของ License (Active/Expried)</p>
      </header>

      <section className="space-y-6">

        <StepBlock
          step={1}
          title="Full Version"
          imgSrc="/images/docs/install/license-01-expired.png"
          imgAlt="สถานะหมดอายุการใช้งาน"
        >
          <p>
            สถานะการใช้งานเวอร์ชั่นตัวเต็ม <em>Full Version</em> หมดอายุการใช้งาน 
          </p>
          <p className="text-sm text-muted-foreground">
            หมายเหตุ: การแจ้งเตือน จะแจ้งเตือนก่อนหมดอายุจริงล่วงหน้า 7 วัน ทุกครั้งที่เปิดใช้งานโปรแกรม Revit
            &quot;Your Small BIM PRO license has expired. All features are disabled. Please activate a new license.&quot;
            ต่ออายุโดยการติดต่อ Small BIM Studio ได้ทุกช่องทาง
          </p>
        </StepBlock>
        
        <StepBlock
          step={2}
          title="Trial Version"
          imgSrc="/images/docs/install/license-02-trial-day-left.png"
          imgAlt="สถานะทดลองใช้งานใกล้หมดอายุการใช้งาน"
        >
          <p>
            สถานะการใช้งานเวอร์ชั่นทดลองใช้ <em>Trial Version</em> ใกล้หมดอายุการใช้งาน 
          </p>
          <p className="text-sm text-muted-foreground">
            หมายเหตุ: การแจ้งเตือน จะแจ้งเตือนก่อนหมดอายุจริงล่วงหน้า 7 วัน ทุกครั้งที่เปิดใช้งานโปรแกรม Revit &quot;Trial Vesion Status : This is TRIAL version of Small BIM PRO. You have (0) days left.&quot;
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
