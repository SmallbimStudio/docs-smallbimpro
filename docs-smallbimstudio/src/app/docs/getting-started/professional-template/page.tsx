// src/app/docs/getting-started/page.tsx
import Image from "next/image"

export default function GettingStarted() {
  return (
    <article className="space-y-4 leading-relaxed">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Professional Template</h1>
        <p>
          Revit Template ใหม่ จาก Small BIM Studio ที่จบครบ ทั้งงานออกแบบ เขียนแบบ และประมาณราคา
        </p>
      </header>

      {/* ✅ แทรกรูปภาพ */}
      <div className="rounded-lg overflow-hidden border shadow">
        <Image
          src="/images/template-preview.jpg" // 👉 ใส่ path ของรูปใน public/
          alt="ตัวอย่าง Revit Template"
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">สั่งซื้อได้ที่</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://smallbimstudio.com"
              target="_blank"
              className="text-blue-600 underline"
            >
              https://smallbimstudio.com
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}
