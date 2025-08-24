// src/app/docs/getting-started/page.tsx
export default function GettingStarted() {
  return (
    <article className="space-y-4 leading-relaxed">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Small BIM PRO</h1>
        <p className="list-disc">
          เครื่องมือใหม่สำหรับการทำงานอย่างมืออาชีพ พัฒนาโดย Small BIM Studio
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">สิ่งที่ต้องมี</h2>
        <ul className="list-disc pl-5">
          <li>Revit เวอร์ชันที่รองรับ</li>
          <li>สิทธิ์ติดตั้งโปรแกรมบนเครื่อง</li>
          <li>ไฟล์ติดตั้ง Small BIM PRO</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">ขั้นตอนติดตั้ง</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>ดับเบิลคลิกไฟล์ติดตั้ง แล้วทำตามขั้นตอนบนหน้าจอ</li>
          <li>เปิด Revit และตรวจสอบแท็บ <strong>Small BIM PRO</strong> ใน Ribbon</li>
          <li>ทดสอบเปิดเครื่องมือ <em>BOQ Tool</em> เพื่อตรวจสอบความพร้อมใช้งาน</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">ทิปส์</h2>
        <p className="text-sm text-muted-foreground">
          แนะนำให้สำรองเทมเพลต/ไฟล์ตั้งค่าไว้ก่อน เพื่อย้อนกลับได้หากต้องการ
        </p>
      </section>
    </article>
  )
}
