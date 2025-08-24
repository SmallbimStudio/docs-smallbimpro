// src/app/docs/getting-started/page.tsx
export default function GettingStarted() {
  return (
    <article className="space-y-4 leading-relaxed">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Introduction</h1>
        <p className="list-disc">
          เราจะเห็นราคาของงานออกแบบของเราครั้งแรก ตั้งแต่ตอนไหน?
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">คำถามนี้ดี แต่เชิงลึกนั้น แสนปวดใจ</h2>
        <ul className="list-disc pl-5">
          <li>เห็นตอนทำประมาณราคา</li>
          <li>เห็นตอนก่อนก่อสร้างจริงนิดเดียว</li>
          <li>หรือเห็นตั้งแต่แรก</li>
        </ul>
      </section>

    </article>
  )
}
