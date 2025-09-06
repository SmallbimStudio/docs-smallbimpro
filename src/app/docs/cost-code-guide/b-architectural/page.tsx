"use client"

import * as React from "react"
import Image from "next/image"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { DatabaseDrawerBottom } from "@/components/DatabaseDrawerBottom"

type CostCode = {
  title: string
  img: string
  code: string
  comment: string
  category: string
  familyname: string
  familytypename: string
  remarks: string
}

type CostCodeGroup = {
  id: string
  title: string
  desc: string
  items: CostCode[]
}

const COST_CODE_GROUPS: CostCodeGroup[] = [
  {
    id: "B1",
    title: "B1 งานผนังและผิวผนัง",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานผนังและผิวผนัง",
    items: [
      {
        title: "ผนังก่ออิฐ",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1000.1",
        comment: "ผนังก่ออิฐ",
        category: "Wall",
        familyname: "Basic Wall",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "ผนังเบา",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1000.2",
        comment: "ผนังเบา",
        category: "Wall",
        familyname: "Curtain Wall",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานเสาเอ็น-คานทับหลัง คอนกรีตเสริมเหล็ก",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1000.3",
        comment: "งานเสาเอ็น-คานทับหลัง คอนกรีตเสริมเหล็ก",
        category: "Wall Sweep",
        familyname: "Wall Sweep",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานฉาบปูน",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1001.1",
        comment: "งานฉาบปูน",
        category: "Wall",
        familyname: "Wall",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานจับเซี้ยม",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1001.2",
        comment: "งานจับเซี้ยม",
        category: "Wall Sweep",
        familyname: "Wall Sweep",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานเซาะร่อง",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1001.3",
        comment: "งานเซาะร่อง",
        category: "Wall Sweep",
        familyname: "Wall Sweep",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานคิ้ว",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1001.4",
        comment: "งานคิ้ว",
        category: "Wall Sweep",
        familyname: "Wall Sweep",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานกรุกระเบื้องผนัง",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1001.5",
        comment: "งานกรุกระเบื้องผนัง",
        category: "Wall",
        familyname: "Basic Wall",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานติดตั้งวัสดุตกแต่งผนัง",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B1001.6",
        comment: "งานติดตั้งวัสดุตกแต่งผนัง",
        category: "Wall",
        familyname: "Basic Wall",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B2",
    title: "B2 งานพื้นและผิวพื้น",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานพื้นและผิวพื้น",
    items: [
      {
        title: "งานปรับระดับพื้น",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B2000.1",
        comment: "งานปรับระดับพื้น",
        category: "Floor",
        familyname: "Floor",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานปูกระเบื้องพื้น",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B2001.1",
        comment: "งานปูกระเบื้องพื้น",
        category: "Floor",
        familyname: "Floor",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B3",
    title: "B3 งานฝ้าเพดาน",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานฝ้าเพดาน",
    items: [
      {
        title: "งานโครงฝ้าเพดาน",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B3000",
        comment: "งานโครงฝ้าเพดาน",
        category: "Ceiling",
        familyname: "Ceiling",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานติดตั้งแผ่นฝ้าเพดาน",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B3001",
        comment: "งานติดตั้งแผ่นฝ้าเพดาน",
        category: "Ceiling",
        familyname: "Ceiling",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานอุปกรณ์เสริมฝ้าเพดาน",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B3002",
        comment: "งานอุปกรณ์เสริมฝ้าเพดาน",
        category: "Ceiling",
        familyname: "Ceiling",
        familytypename: "RSB - ผนังก่ออิฐมอญ",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B4",
    title: "B4 งานติดตั้งวงกบ บานประตู-หน้าต่าง",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานติดตั้งวงกบ บานประตู-หน้าต่าง",
    items: [
      {
        title: "งานประตู",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B4000",
        comment: "งานประตู",
        category: "Door",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
     {
        title: "งานหน้าต่าง",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B4001",
        comment: "งานหน้าต่าง",
        category: "Window",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B5",
    title: "B5 งานติดตั้งสุขภัณฑ์",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานติดตั้งสุขภัณฑ์",
    items: [
      {
        title: "สุขภัณฑ์หลัก (Main Sanitary Fixtures)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B5000",
        comment: "สุขภัณฑ์หลัก (Main Sanitary Fixtures)",
        category: "Plumbing Fixture",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
     {
        title: "อ่างล้างหน้า / เคาน์เตอร์ (Wash Basin & Counter)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B5001",
        comment: "อ่างล้างหน้า / เคาน์เตอร์ (Wash Basin & Counter)",
        category: "Plumbing Fixture",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "อ่างอาบน้ำและพื้นที่อาบน้ำ (Bath & Shower)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B5002",
        comment: "อ่างอาบน้ำและพื้นที่อาบน้ำ (Bath & Shower)",
        category: "Plumbing Fixture",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "ก็อกน้ำ / วาล์ว (Faucet & Valve)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B5003",
        comment: "ก็อกน้ำ / วาล์ว (Faucet & Valve)",
        category: "Plumbing Fixture",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "ระบบระบายน้ำ (Drainage Fixtures)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B5004",
        comment: "ระบบระบายน้ำ (Drainage Fixtures)",
        category: "Plumbing Fixture",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "อุปกรณ์เสริมสุขภัณฑ์ (Sanitary Accessories)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B5005",
        comment: "อุปกรณ์เสริมสุขภัณฑ์ (Sanitary Accessories)",
        category: "Plumbing Fixture",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "สุขภัณฑ์พิเศษ (Special Needs / Medical Fixtures)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B5006",
        comment: "สุขภัณฑ์พิเศษ (Special Needs / Medical Fixtures)",
        category: "Plumbing Fixture",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B6",
    title: "B6 งานทาสี",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานทาสี",
    items: [
      {
        title: "งานทาสีรองพื้น (Primer Coat)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B6000",
        comment: "งานทาสีรองพื้น (Primer Coat)",
        category: "Addin-Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
     {
        title: "สีทับหน้า (Top Coat)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B6001",
        comment: "สีทับหน้า (Top Coat)",
        category: "Addin-Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "สี Texture / สีพิเศษ (Textured & Decorative Paint)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B6002",
        comment: "สี Texture / สีพิเศษ (Textured & Decorative Paint)",
        category: "Addin-Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานโป๊ว / อุดรอยต่อ (Filler, Putty)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B6003",
        comment: "งานโป๊ว / อุดรอยต่อ (Filler, Putty)",
        category: "Addin-Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานเคลือบผิวใส (Clear Coating) เช่น น้ำยาเคลือบผนังปูนเปลือย",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B6004",
        comment: "งานเคลือบผิวใส (Clear Coating) เช่น น้ำยาเคลือบผนังปูนเปลือย",
        category: "Addin-Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานลอกสี / เตรียมผิว (Paint Stripping)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B6005",
        comment: "งานลอกสี / เตรียมผิว (Paint Stripping)",
        category: "Addin-Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานพ่นสี (Spray Coating System)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B6006",
        comment: "งานพ่นสี (Spray Coating System)",
        category: "Addin-Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B7",
    title: "B7 งานบันได งานราวบันได-ราวกันตก",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานบันได งานราวบันได-ราวกันตก",
    items: [
      {
        title: "ลูกตั้ง-ลูกนอนบันได (Tread & Riser)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B7000",
        comment: "ลูกตั้ง-ลูกนอนบันได (Tread & Riser)",
        category: "Stair",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
     {
        title: "ราวบันได",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B7001",
        comment: "ราวบันได",
        category: "Railing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "ราวกันตก",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B7002",
        comment: "ราวกันตก",
        category: "Railing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานทาสี/เคลือบผิวบันได",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B7003",
        comment: "งานทาสี/เคลือบผิวบันได",
        category: "Railing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "งานตกแต่งพิเศษ (Stair Feature & Detail)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B7004",
        comment: "งานตกแต่งพิเศษ (Stair Feature & Detail)",
        category: "Railing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B8",
    title: "B8 งานมุงหลังคา",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานมุงหลังคา",
    items: [
      {
        title: "หลังคาคอนกรีต SCG รุ่น CPAC Monier",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8000.1",
        comment: "หลังคาคอนกรีต SCG รุ่น CPAC Monier",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
     {
        title: "หลังคาคอนกรีต SCG รุ่น Prestige",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8000.2",
        comment: "หลังคาคอนกรีต SCG รุ่น Prestige",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาคอนกรีต SCG รุ่น Neustile",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8000.3",
        comment: "หลังคาคอนกรีต SCG รุ่น Neustile",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาคอนกรีต ตราเพชร รุ่น ADAMAS",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8000.4",
        comment: "หลังคาคอนกรีต ตราเพชร รุ่น ADAMAS",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาคอนกรีต ตราเพชร รุ่น JATURON",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8000.5",
        comment: "หลังคาคอนกรีต ตราเพชร รุ่น JATURON",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาเซรามิค SCG รุ่น Excella",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8001.1",
        comment: "หลังคาเซรามิค SCG รุ่น Excella",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
       {
        title: "หลังคาไฟเบอร์ซีเมนต์ SHERA รุ่น ลอนคู่",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8002.1",
        comment: "หลังคาไฟเบอร์ซีเมนต์ SHERA รุ่น ลอนคู่",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
       {
        title: "หลังคาไฟเบอร์ซีเมนต์ ตราเพชร รุ่น ลอนคู่",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8002.2",
        comment: "หลังคาไฟเบอร์ซีเมนต์ ตราเพชร รุ่น ลอนคู่",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาไฟเบอร์ซีเมนต์ TPI รุ่น ลอนคู่",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8002.3",
        comment: "หลังคาไฟเบอร์ซีเมนต์ TPI รุ่น ลอนคู่",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาเมทัลชีท (Metal Sheet)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8003",
        comment: "หลังคาเมทัลชีท (Metal Sheet)",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาไวนิล / UPVC",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8004",
        comment: "หลังคาไวนิล / UPVC",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคากระเบื้องโปร่งแสง",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8005",
        comment: "หลังคากระเบื้องโปร่งแสง",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคาชิงเกิ้ลรูฟ (Shingle Roof)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8006",
        comment: "หลังคาชิงเกิ้ลรูฟ (Shingle Roof)",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "หลังคากระเบื้องว่าว",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8007",
        comment: "หลังคากระเบื้องว่าว",
        category: "Roof",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "เชิงชาย (Eaves Board / Fascia Board)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8008",
        comment: "เชิงชาย (Eaves Board / Fascia Board)",
        category: "Fasia",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
      {
        title: "รางน้ำฝน (Gutter System)",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B8009",
        comment: "รางน้ำฝน (Gutter System)",
        category: "Gutter",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้คำสั่งผนัง โดยเลือกวัสดุผนังก่อเป็นโครงสร้างหลักของผนัง",
      },
    ],
  },
  {
    id: "B9",
    title: "B9 งานเบ็ดเตล็ด",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานเบ็ดเตล็ด",
    items: [
      {
        title: "หมวดงานอื่นๆ สามารถกำหนดได้ตามความต้องการ",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "B9",
        comment: "หมวดงานอื่นๆ สามารถกำหนดได้ตามความต้องการ",
        category: "-",
        familyname: "-",
        familytypename: "-",
        remarks: "-",
      },
    ],
 },
 
]

export default function CostCodeGuidePage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-12">
        {/* === Headline หลัก === */}
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Cost Code (Keynote) Guide<br />B-Architectural (หมวดงานสถาปัตยกรรม)
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            ตัวอย่างการกำหนดรหัสต้นทุน (Cost Code) หรือ Revit Keynote Parameter สำหรับงานสถาปัตยกรรม
          </p>
        </header>

        <Separator />

        {/* === Loop Section per Group === */}
        {COST_CODE_GROUPS.map(({ id, title, desc, items }) => (
          <div key={id} className="space-y-6">
            {/* Sub Headline (เล็กลงกว่าหัวข้อหลัก) */}
            <header className="space-y-1">
              <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </header>

            {/* Card List */}
            <section
              aria-label={title}
              className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {items.map(
                ({ title, img, familyname, familytypename, category, code, comment, remarks }) => (
                  <Card
                    key={code}
                    className="flex flex-col md:flex-row items-start gap-4 rounded-2xl overflow-hidden transition hover:shadow-md"
                  >
                    {/* Left: Image */}
                    <div className="relative w-full md:w-56 h-56 shrink-0 flex items-center justify-center">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-contain bg-white p-2"
                    />
                    </div>                 

                    {/* Right: Details */}
                    <CardContent className="p-4 space-y-2 text-sm leading-relaxed">
                        <p><strong>Keynote:</strong> {code}</p>
                        <p><strong>Type Comment:</strong> {comment}</p>
                        <p><strong>Revit Category:</strong> {category}</p>
                        <p><strong>Family Name:</strong> {familyname}</p>
                        <p><strong>Family Type Name:</strong> {familytypename}</p>
                        <p><strong>Remarks:</strong> {remarks}</p>

                        {/* Drawer Button */}
                        <div className="pt-2">
                            <DatabaseDrawerBottom defaultKey={code} />
                        </div>
                        </CardContent>
                  </Card>
                )
              )}
            </section>
          </div>
        ))}
      </div>
    </SidebarInset>
  )
}
