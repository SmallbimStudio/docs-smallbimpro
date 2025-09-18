// Server Component (ไม่มี "use client")

import RegisterPage from "./RegisterPage"

export const metadata = {
  title: "ลงทะเบียนทดลองใช้งานฟรี 7 วัน | Small BIM PRO",
  description: "ลงทะเบียนเพื่อรับ Small BIM PRO Add-in เวอร์ชันทดลอง ใช้งานครบทุกฟีเจอร์ ฟรี 7 วัน",
  openGraph: {
    title: "ลงทะเบียนทดลองใช้งานฟรี 7 วัน | Small BIM PRO",
    description: "ลงทะเบียนเพื่อรับ Small BIM PRO Add-in เวอร์ชันทดลอง ใช้งานครบทุกฟีเจอร์ ฟรี 7 วัน",
    url: "https://pro.smallbimstudio.com/get-smallbimpro/trial/",
    siteName: "Small BIM Studio",
    images: [
      {
        url: "https://pro.smallbimstudio.com/images/promote/trial-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Small BIM PRO Trial Banner",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ลงทะเบียนทดลองใช้งานฟรี 7 วัน | Small BIM PRO",
    description: "ลงทะเบียนเพื่อรับ Small BIM PRO Add-in เวอร์ชันทดลอง ใช้งานครบทุกฟีเจอร์ ฟรี 7 วัน",
    images: ["https://pro.smallbimstudio.com/images/promote/trial-thumbnail.jpg"],
  },
}

export default function Page() {
  return <RegisterPage />
}
