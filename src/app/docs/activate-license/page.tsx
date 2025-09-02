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
        <h1 className="text-2xl font-semibold">Activate License</h1>
        <p>วิธีการเปิดใช้งาน Small BIM PRO</p>
      </header>

      <section className="space-y-6">
        
        <StepBlock
          step={1}
          title="ใส่ License Key / Activate (ถ้ามี)"
          imgSrc="/images/docs/install/step-01-activate.png"
          imgAlt="กรอกคีย์ไลเซนส์"
        >
          <p>
            1. ในการเปิดใช้งานครั้งแรก จะยังไม่สามารถใช้งานคำสั่งต่างๆได้ ผู้ใช้งานทุกท่านจะต้องทำการ Activate License ก่อน โดยทำการคลิกปุ่ม <em>Activate License</em> 
          </p>
          <p>
            2. ทำการกรอก Activate License Key ลงในช่อง <em>Enter License Key</em> ด้านล่าง พร้อมกดปุ่ม Activate
          </p>
          <p>
            3. จากนั้นรีสตาร์ท Revit หนึ่งครั้ง เพื่อให้ฟีเจอร์ทั้งหมดพร้อมใช้งาน
          </p>
          <p className="text-sm text-muted-foreground">
            หมายเหตุ: หากยังไม่มี Activate License Key ผู้ใช้งานจะต้องทำการ Copy หมายเลข Machine ID ของท่าน 
            ที่ปรากฎในช่องแรก แล้วส่ง Machine ID นี้ ให้ทาง Admin Small BIM Studio เพื่อขอรับรหัสปลดล็อค (ทำแค่ครั้งแรกเท่านั้น หรือกรณีย้ายเครื่องใหม่) ใช้เวลาไม่นาน ท่านจะได้รับการตอบกลับ พร้อมได้หมายเลข Activate License Key
          </p>
        </StepBlock>

        <StepBlock
          step={2}
          title="เสร็จสิ้นการ Activate License"
          imgSrc="/images/docs/install/step-02-activate-complete.png"
          imgAlt="เสร็จสิ้นการ Activate License"
        >
          <p>
            เมื่อทำตามขั้นตอนทั้งหมดเสร็จแล้ว ผู้ใช้งานจะเห็นสัญลักษณ์การปลดล็อคตามภาพ เพียงเท่านี้ ทุกท่านก็จะสามารถเข้าใช้งาน Small BIM PRO ได้แล้วครับ
          </p>
          <p className="text-sm text-muted-foreground">
            ขอให้สนุกกับการใช้งานนะครับ
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
