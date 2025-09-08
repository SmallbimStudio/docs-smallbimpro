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
        <h1 className="text-2xl font-semibold">Download and Installation</h1>
        <p>วิธีการดาวน์โหลดและติดตั้ง Small BIM PRO</p>
      </header>

      <Card className="overflow-hidden rounded-2xl border bg-card">
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/YidRgoNOh5M"
              title="Small BIM PRO Installation Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </CardContent>
      </Card>


      <section className="space-y-6">
        <StepBlock
          step={1}
          title="ดาวน์โหลดไฟล์ติดตั้ง"
          imgSrc="/images/docs/install/step-01-download.png"
          imgAlt="ดาวน์โหลดตัวติดตั้ง Small BIM PRO"
        >
          <p>
            ทำการดาวน์โหลดตัวติดตั้ง โดยคลิก
            ปุ่ม <em>Download</em> บนเว็บไซต์ https://smallbimstudio.com หรือแหล่งดาวน์โหลด และไฟล์ที่ได้ จะมีชื่อว่า <em>SmallBIMPRO_Installer.zip</em>
          </p>
          <p className="text-sm text-muted-foreground">
            เคล็ดลับ: เก็บไฟล์ไว้ในโฟลเดอร์ที่เข้าถึงง่าย เช่น <code> Downloads </code>
          </p>
        </StepBlock>

        <StepBlock
          step={2}
          title="แตกไฟล์/ปลดบล็อกไฟล์ (ถ้ามี)"
          imgSrc="/images/docs/install/step-02-unblock.png"
          imgAlt="ปลดบล็อกไฟล์บน Windows"
        >
          <p>
            หากทำการดาวน์โหลดเสร็จแล้ว ให้ทำการแตกไฟล์ .zip จะได้ไฟล์ที่พร้อมทำการติดตั้ง เป็น <em>Setup.exe</em> และ <em>SmallBIMPRO_Installer.msi</em>
          </p>
        </StepBlock>

        <StepBlock
          step={3}
          title="ปิดโปรแกรม Revit ให้เรียบร้อย"
          imgSrc="/images/docs/install/step-03-close-revit.png"
          imgAlt="ปิด Revit ก่อนติดตั้ง"
        >
          <p>
            ก่อนเริ่มติดตั้ง Add-in ให้ทำการปิด Revit ทุกหน้าต่างก่อนเริ่มติดตั้ง เพื่อให้ไฟล์ Add-in
            ถูกคัดลอกได้สมบูรณ์ และใช้งานได้หลังการติดตั้ง
          </p>
        </StepBlock>

        <StepBlock
          step={4}
          title="รันตัวติดตั้ง (Welcome to the Small BIM PRO Setup Wizard)"
          imgSrc="/images/docs/install/step-04-run-installer01.png"
          imgAlt="เปิดตัวติดตั้ง Small BIM PRO"
        >
          <p>
            ดับเบิลคลิกไฟล์ติดตั้ง ยอมรับข้อตกลงการใช้งาน เพื่อเข้าสู่หน้าการติดตั้ง Add-in ทำการกด <em>Next</em> เพื่อเริ่มต้นการติดตั้ง
          </p>
        </StepBlock>

        <StepBlock
          step={5}
          title="เลือกตำแหน่งการเก็บไฟล์ (Select Installation Folder)"
          imgSrc="/images/docs/install/step-05-run-installer02.png"
          imgAlt="ติดตั้งเสร็จสิ้น"
        >
          <p>
            เลือกตำแหน่งสำหรับการติดตั้งไฟล์ Add-in หรือสามารถใช้ค่า Default ได้เลย เมื่อตั้งค่าเสร็จแล้วให้กด <em>Next</em>
          </p>
        </StepBlock>

        <StepBlock
          step={6}
          title="ยืนยันการติดตั้ง (Confirm Installation)"
          imgSrc="/images/docs/install/step-06-run-installer03.png"
          imgAlt="ติดตั้งเสร็จสิ้น"
        >
          <p>
            ขั้นตอนการยืนยันการติดตั้งไฟล์ Add-in สามารถกด <em>Next</em> เพื่อเริ่มการติดตั้ง
          </p>
        </StepBlock>

        <StepBlock
          step={7}
          title="รอสักครู่... (Installing Small BIM PRO)"
          imgSrc="/images/docs/install/step-07-run-installer04.png"
          imgAlt="ติดตั้งเสร็จสิ้น"
        >
          <p>
            รอการติดตั้งสักครู่
          </p>
        </StepBlock>

        <StepBlock
          step={8}
          title="ติดตั้งเสร็จสิ้น (Installation Completed)"
          imgSrc="/images/docs/install/step-08-finish.png"
          imgAlt="ติดตั้งเสร็จสิ้น"
        >
          <p>
            เมื่อติดตั้งสำเร็จ ให้ทำการกด <em>Close</em> ได้เลย ตัวติดตั้งจะคัดลอกไฟล์ .addin
            และไฟล์ไลบรารีไปยังโฟลเดอร์ Revit Addins อัตโนมัติ
          </p>
        </StepBlock>

        <StepBlock
          step={9}
          title="เปิด Revit และตรวจสอบแท็บ Small BIM PRO"
          imgSrc="/images/docs/install/step-09-open-revit.png"
          imgAlt="ตรวจสอบแท็บ Add-in ใน Revit"
        >
          <p>
            หลังจากติดตั้ง Add-in เสร็จเรียบร้อยทั้งหมด ให้ทำการเปิด Revit แล้วตรวจสอบแท็บ <strong>Small BIM PRO</strong> ว่าปรากฏบน Ribbon หรือไม่
          </p>

          <p className="text-sm text-muted-foreground">
            เคล็ดลับ: หากมีหน้าต่างเด้งขึ้นมา ก่อน Revit แสดงผล แสดงว่าเป็นเรื่องที่ดี ให้ทำการกด Always Load เพื่อให้ Revit ยอมรับ และโหลด Add-in ไปใช้งาน
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
