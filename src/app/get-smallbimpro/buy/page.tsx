import BuyPage from "./BuyPage"

export const metadata = {
  title: "สั่งซื้อ Small BIM PRO | ลด Early Bird 40%",
  description: "สั่งซื้อ Small BIM PRO Add-in เวอร์ชันเต็ม ฟีเจอร์ครบ ลด Early Bird 40% เหลือเพียง 7,500 บาทเท่านั้น!",
  openGraph: {
    title: "สั่งซื้อ Small BIM PRO | ลด Early Bird 40%",
    description: "เวอร์ชันเต็ม Small BIM PRO พร้อมฟีเจอร์ครบถ้วน ลด Early Bird 40% จากราคาปกติ 12,500 บาท เหลือเพียง 7,500 บาท",
    url: "https://pro.smallbimstudio.com/get-smallbimpro/buy/",
    siteName: "Small BIM Studio",
    images: [
      {
        url: "https://pro.smallbimstudio.com/images/promote/earlybird-40.png",
        width: 1200,
        height: 630,
        alt: "Small BIM PRO Early Bird 40%",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
}

export default function Page() {
  return <BuyPage />
}
