"use client";

import { useState } from "react";
import QRCode from "qrcode";
import generatePayload from "promptpay-qr";
import Image from "next/image";
import Link from "next/link"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export default function BuyPage() {
  const [qr, setQr] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(""); // ⏰ เก็บค่าเวลา
  const [preview, setPreview] = useState<string | null>(null);

  const AMOUNT = 7500;

  async function generateQR() {
    const payload = generatePayload("0622644878", { amount: AMOUNT });
    const qrDataUrl = await QRCode.toDataURL(payload, {
      errorCorrectionLevel: "H",
      scale: 10,
      margin: 2,
    });
    setQr(qrDataUrl);
  }

  function arrayBufferToBase64(buf: ArrayBuffer) {
    let binary = "";
    const bytes = new Uint8Array(buf);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  async function handlePaySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setMsg(null);

    const form = e.currentTarget;

    try {
      const fd = new FormData(form);
      const email = String(fd.get("email") || "").trim();
      const amount = Number(fd.get("amount") || 0);
      const date = String(fd.get("date") || "");
      const time = String(fd.get("time") || "");
      const file = fd.get("slip") as File | null;

      if (!email || !amount || !date || !time || !file) {
        setMsg("❌ กรอกข้อมูลไม่ครบ หรือยังไม่ได้แนบสลิป");
        setSubmitting(false);
        return;
      }

      const buf = await file.arrayBuffer();
      const base64 = arrayBufferToBase64(buf);

      const res = await fetch("https://smallbimpro-functions.youiscode14.workers.dev/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          amount,
          date,
          time,
          filename: file.name,
          contentType: file.type || "image/png",
          slipBase64: base64,
        }),
      });


      type ApiResponse = {
        ok: boolean;
        error?: string;
        [key: string]: unknown;
      };

      const data: ApiResponse = await res.json();
      if (data.ok) {
        setMsg("✅ ส่งข้อมูลยืนยันสำเร็จ! ทีมงานจะตรวจสอบและอัปเดตสถานะให้ภายใน 5-20 นาที โปรดตรวจสอบอีเมล์อีกครั้งครับ");
        form.reset();
      } else {
        setMsg("❌ ส่งไม่สำเร็จ: " + (data?.error || "ไม่ทราบสาเหตุ"));
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMsg("❌ Error: " + err.message);
      } else {
        setMsg("❌ Error: " + String(err));
      }
    }

  }

  return (
    <section className="mx-auto max-w-5xl px-4 text-center space-y-10">

      {/* Big Banner */}
      <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg">
        <Image
          src="/images/promote/earlybird-40.png"
          alt="Small BIM PRO Cover"
          fill
          className="object-cover"
          priority
        />
      </div>

    <Card className="shadow-md border">
      {/* Heading */}
      <CardHeader className="text-center space-y-4">
        <h1 className="text-3xl font-bold">สั่งซื้อ Small BIM PRO</h1>
        <p className="text-lg text-muted-foreground">
          <Link 
            href="/get-smallbimpro/feature-lists" 
            className="hover:text-primary hover:underline decoration-dotted transition-colors"
          >
            เวอร์ชันเต็มพร้อมฟีเจอร์ครบถ้วน
          </Link>{" "}
          <span className="text-green-600 font-bold">
            ลด Early Bird 40% เหลือเพียง {AMOUNT.toLocaleString()} บาท
          </span>
        </p>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 items-stretch max-w-3xl mx-auto">
          
          {/* Trial Card - ลบ transform hover effect ออก */}
          <Card className="flex flex-col justify-between z-10"> {/* เพิ่ม z-10 */}
            <CardHeader>
              <CardTitle className="text-center">ทดลองฟรี 7 วัน</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center flex-1 space-y-4 text-sm">
              <p>
                ใช้งานครบทุกฟีเจอร์ <br />
                <span className="text-3xl font-bold text-primary">
                  ฟรี 7 วัน
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                ทดลองการใช้งานได้ฟรี 7 วัน โดยไม่ต้องชำระเงินล่วงหน้า
              </p>
              <Button asChild className="w-full h-12">
                <Link href="/get-smallbimpro/trial">ลงทะเบียนรับ Trial</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Early Bird Card */}
          <Card className="flex flex-col justify-between relative transform hover:scale-[1.02] transition-all duration-300 border-2 border-primary shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,120,255,0.2)]">
            {/* Ribbon */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
              -40%
            </div>
            
            <CardHeader>
              <CardTitle className="text-center">Early Bird</CardTitle>
            </CardHeader>
          
            <CardContent className="flex flex-col justify-center items-center text-center flex-1 space-y-4 text-sm">
              <p>
                พิเศษวันสุดท้าย <br />
                <span className="text-3xl font-bold text-primary animate-pulse">
                  7,500 บาท
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                จากราคาปกติ <span className="line-through">12,500 บาท</span>
              </p>
              <Button asChild className="w-full relative overflow-hidden group">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full h-12 bg-primary hover:bg-primary/90 shadow-xl
                                 hover:shadow-primary/30 transition-all duration-300"
                      onClick={generateQR}
                    >
                      🚀 สั่งซื้อเลย
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                     -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="w-full sm:max-w-xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-center">
                        ชำระเงินด้วย Thai QR Payment
                      </DialogTitle>
                      <DialogDescription className="text-center">
                        สแกน QR Code ผ่าน Mobile Banking แล้วอัปโหลดสลิปเพื่อยืนยัน
                      </DialogDescription>
                    </DialogHeader>

                    <div className="bg-white border rounded-xl shadow-lg p-3 text-center space-y-4">
                      <div className="flex justify-center bg-[#00427A] py-3 rounded-t-lg">
                        <img
                          src="/images/payment/Thai_QR_Logo.png"
                          alt="Thai QR Payment"
                          width={120}
                        />
                      </div>
                      <div className="flex justify-center">
                        <img
                          src="/images/payment/PromptPay-logo.png"
                          alt="PromptPay Logo"
                          width={160}
                        />
                      </div>
                      <div className="flex flex-col items-center space-y-3">
                        <img
                          src={qr ?? "/images/payment/qrcode.png"}
                          alt="QR Code"
                          width={280}
                        />
                        <p className="text-lg font-semibold text-green-600">
                          💰 จำนวนเงิน: {AMOUNT.toLocaleString()} บาท
                        </p>
                      </div>
                      <div className="text-center space-y-1">
                        <p className="text-sm font-semibold">
                          ธนาคารกสิกรไทย : นางสาวภคนันท์ ธาดาเดช
                        </p>
                        <p className="text-sm">
                          หมายเหตุ : เมื่อชำระเงินแล้ว กรุณากรอกฟอร์มยืนยันการชำระเงินด้านล่าง
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>

      {/* Footer */}
      <div className="px-6 pb-6">
        <p className="text-xs text-gray-500 italic text-center">
          *สามารถทดลองใช้งานได้ฟรีนานถึง 7 วัน และได้รับสิทธิพิเศษช่วงเปิดตัวกับราคา Early Bird เพียง 7,500 บาทเท่านั้น (ตั้งแต่วันนี้ ถึง 31 ธันวาคม 2568)*
        </p>
      </div>
    </Card>


      <Separator className="my-10" />

      {/* Section: ยืนยันการชำระเงิน */}
      <Card className="shadow-md border">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">ยืนยันการชำระเงิน</CardTitle>
          <p className="text-sm text-muted-foreground">
            กรอกข้อมูลและแนบสลิป ระบบจะบันทึกลง Google Sheet และแจ้งทีมงานตรวจสอบ
          </p>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6" onSubmit={handlePaySubmit}>
            {/* Email + Amount */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">อีเมลที่ใช้ลงทะเบียน *</Label>
                <input
                  className="w-full rounded-md border px-3 py-2"
                  name="email"
                  type="email"
                  placeholder="กรอกอีเมล์@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">ยอดที่โอน (บาท) *</Label>
                <input
                  className="w-full rounded-md border px-3 py-2"
                  name="amount"
                  type="number"
                  inputMode="numeric"
                  defaultValue={AMOUNT}
                  required
                />
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">วันที่โอน *</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className="w-full justify-between font-normal"
                      type="button"
                    >
                      {date ? date.toLocaleDateString("th-TH") : "เลือกวันที่"}
                      <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(d) => {
                        setDate(d);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <input
                  type="hidden"
                  name="date"
                  value={date ? date.toISOString().split("T")[0] : ""}
                  required
                />
              </div>

              {/* Time Picker */}
              <div className="space-y-2">
                <Label htmlFor="time">เวลาโอน *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between font-normal"
                      type="button"
                    >
                      {time || "เลือกเวลา"}
                      <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[260px] flex gap-6 p-4">
                    {/* ชั่วโมง */}
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-xs font-semibold">ชั่วโมง</span>
                      <div className="h-40 overflow-y-auto pr-1">
                        {Array.from({ length: 24 }, (_, i) => (
                          <div
                            key={i}
                            className={`cursor-pointer px-2 py-1 rounded text-center hover:bg-accent ${
                              time.startsWith(String(i).padStart(2, "0") + ":") ? "bg-accent" : ""
                            }`}
                            onClick={() => {
                              const h = String(i).padStart(2, "0");
                              const m = time.split(":")[1] || "00";
                              setTime(`${h}:${m}`);
                            }}
                          >
                            {String(i).padStart(2, "0")}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* นาที */}
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-xs font-semibold">นาที</span>
                      <div className="h-40 overflow-y-auto pr-1">
                        {Array.from({ length: 60 }, (_, i) => (
                          <div
                            key={i}
                            className={`cursor-pointer px-2 py-1 rounded text-center hover:bg-accent ${
                              time.endsWith(":" + String(i).padStart(2, "0")) ? "bg-accent" : ""
                            }`}
                            onClick={() => {
                              const h = time.split(":")[0] || "00";
                              const m = String(i).padStart(2, "0");
                              setTime(`${h}:${m}`);
                            }}
                          >
                            {String(i).padStart(2, "0")}
                          </div>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <input type="hidden" name="time" value={time} required />
              </div>
            </div>

            {/* Slip Upload */}
            <div className="space-y-2">
              <Label htmlFor="slip">แนบสลิปโอนเงิน (ภาพ) *</Label>
              <input
                className="w-full rounded-md border px-3 py-2"
                name="slip"
                type="file"
                accept="image/*"
                required
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  } else {
                    setPreview(null);
                  }
                }}
              />
              {preview && (
                <div className="mt-3 text-left">
                  <p className="text-sm text-muted-foreground mb-2">ตัวอย่างสลิป:</p>
                  <img
                    src={preview}
                    alt="Slip preview"
                    className="max-h-80 rounded-lg border shadow"
                  />
                </div>
              )}
            </div>

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? "กำลังส่ง..." : "ส่งยืนยันการชำระเงิน"}
            </Button>

            {msg && (
              <p className={`text-sm ${msg.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {msg}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
