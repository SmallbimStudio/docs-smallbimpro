import BuyPage from "./BuyPage"

export const metadata = {
  title: "สั่งซื้อ Small BIM PRO | Full License",
  description: "สั่งซื้อ Small BIM PRO Add-in เวอร์ชันเต็ม",
  openGraph: {
    title: "สั่งซื้อ Small BIM PRO | Full License",
    description: "เวอร์ชันเต็ม Small BIM PRO พร้อมฟีเจอร์ครบถ้วน",
    url: "https://pro.smallbimstudio.com/get-smallbimpro/buy/",
    siteName: "Small BIM Studio",
    images: [
      {
        url: "https://pro.smallbimstudio.com/images/promote/earlybird-40.png",
        width: 1200,
        height: 630,
        alt: "Small BIM PRO Full License",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
}

export default function Page() {
  return <BuyPage />
}
