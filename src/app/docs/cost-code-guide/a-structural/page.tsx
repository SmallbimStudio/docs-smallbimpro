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
    id: "A1",
    title: "A1 งานดิน หิน ทราย และฐานราก",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานดิน หิน ทราย และฐานราก",
    items: [
      {
        title: "งานขุดดินฐานราก",
        img: "/images/docs/costcode-guide/foundation-excavation.png",
        code: "A1000.1",
        comment: "งานขุดดินฐานราก",
        category: "Toposolid",
        familyname: "Toposolid",
        familytypename: "RSB - งานขุดดินฐานราก",
        remarks: "ใช้เป็นส่วน Cut Geometry บนพื้นดินเดิม แทนการขุดดิน",
      },
      {
        title: "งานดินถมกลับ",
        img: "/images/docs/costcode-guide/backfil.png",
        code: "A1000.2",
        comment: "งานดินถมกลับ",
        category: "Toposolid",
        familyname: "Toposolid",
        familytypename: "RSB - งานดินถมกลับ",
        remarks: "ใช้สร้างเพิ่มเข้าไปยังส่วนที่ต้องถม ในพื้นดินเดิม แทนการถมดิน",
      },
      {
        title: "ทรายหยาบรองก้นฐานราก",
        img: "/images/docs/costcode-guide/sand-support.png",
        code: "A1001.1",
        comment: "ทรายหยาบรองก้นฐานราก",
        category: "Structural Foundation",
        familyname: "RSB - Foundation Support",
        familytypename: "RSB - ทรายหยาบรองก้นฐานราก",
        remarks: "ใช้สร้างเป็นชั้นวัสดุทรายหยาบรองก้นหลุมฐานราก",
      },
      {
        title: "คอนกรีตหยาบรองก้นฐานราก",
        img: "/images/docs/costcode-guide/concrete-support.png",
        code: "A1001.2",
        comment: "คอนกรีตหยาบรองก้นฐานราก",
        category: "Structural Foundation",
        familyname: "RSB - Foundation Support",
        familytypename: "RSB - คอนกรีตหยาบรองก้นฐานราก",
        remarks: "ใช้สร้างเป็นชั้นวัสดุคอนกรีตหยาบรองก้นหลุมฐานราก",
      },
    ],
  },
  {
    id: "A2",
    title: "A2 งานเสาเข็ม",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานเสาเข็ม",
    items: [
      {
        title: "เสาเข็มรูปตัวไอ",
        img: "/images/docs/costcode-guide/i-pile.png",
        code: "A2000",
        comment: "เสาเข็มรูปตัวไอ",
        category: "Structural Foundation",
        familyname: "RSB - Pile I-Shape (เสาเข็มรูปตัวไอ)",
        familytypename: "RSB - เสาเข็ม รูปตัวไอ ขนาด 12 x 12 ซม. (และขนาดอื่นๆ)",
        remarks: "ใช้กับโมเดลโครงสร้างเสาเข็มรูปตัวไอ (I-Pile)",
      },
      {
        title: "เสาเข็มสี่เหลี่ยมตัน",
        img: "/images/docs/costcode-guide/rectangle-pile.png",
        code: "A2001",
        comment: "เสาเข็มสี่เหลี่ยมตัน",
        category: "Structural Foundation",
        familyname: "RSB - Pile Rectangle-Shape (เสาเข็มสี่เหลี่ยมตัน)",
        familytypename: "เสาเข็มสี่เหลี่ยมตัน ขนาด 13 x 13 ซม. (และขนาดอื่นๆ)",
        remarks: "ใช้กับโมเดลโครงสร้างเสาเข็มสี่เหลี่ยมตัน (Rectangle Pile)",
      },
    ],
  },
  {
    id: "A3",
    title: "A3 งานคอนกรีตโครงสร้าง",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานคอนกรีตโครงสร้าง",
    items: [
      {
        title: "คอนกรีตโครงสร้างฐานราก",
        img: "/images/docs/costcode-guide/foundation-concrete.png",
        code: "A3000.1",
        comment: "คอนกรีตโครงสร้างฐานราก",
        category: "Structural Foundation",
        familyname: "RSB - ConcreteFooting-Rectangular (และ Family อื่นๆ)",
        familytypename: "RSB_ฐานรากแผ่ ขนาด 1.00x1.00x0.25 m (และขนาดอื่นๆ)",
        remarks: "ใช้กับโมเดลโครงสร้างฐานรากคอนกรีตได้ทุกรูปแบบ",
      },
      {
        title: "คอนกรีตโครงสร้างเสาตอม่อ",
        img: "/images/docs/costcode-guide/column-footing-concrete.png",
        code: "A3000.2",
        comment: "คอนกรีตโครงสร้างเสาตอม่อ",
        category: "Structural Column",
        familyname: "RSB - Concrete Rectangular Column (และ Family อื่นๆ)",
        familytypename: "RSB_CF1 (เสาตอม่อคอนกรีต ขนาด 0.25 x 0.25 m) (และขนาดอื่นๆ)",
        remarks: "ใช้กับโมเดลโครงสร้างเสาคอนกรีตทุกรูปแบบ โดยแยกประเภทเป็นเสาตอม่อ ด้วยตัวย่อ CF (Column Footing)",
      },
      {
        title: "คอนกรีตโครงสร้างเสา",
        img: "/images/docs/costcode-guide/column-concrete.png",
        code: "A3000.3",
        comment: "คอนกรีตโครงสร้างเสา",
        category: "Structural Column",
        familyname: "RSB - Concrete Rectangular Column (และ Family อื่นๆ)",
        familytypename: "RSB_C1 (เสาคอนกรีต ขนาด 0.20 x 0.20 m) (และขนาดอื่นๆ)",
        remarks: "ใช้กับโมเดลโครงสร้างเสาคอนกรีตทุกรูปแบบ โดยแยกประเภทเป็นเสาปกติ ด้วยตัวย่อ C (Column)",
      },
      {
        title: "คอนกรีตโครงสร้างคาน",
        img: "/images/docs/costcode-guide/beam-concrete.png",
        code: "A3000.4",
        comment: "คอนกรีตโครงสร้างคาน",
        category: "Structural Framing",
        familyname: "RSB - Concrete Rectangular Beam (และ Family อื่นๆ)",
        familytypename: "RSB_B1 (คานคอนกรีต ขนาด 0.20 x 0.40 m) (และขนาดอื่นๆ)",
        remarks: "ใช้กับโมเดลโครงสร้างคานคอนกรีตทุกรูปแบบ",
      },
      {
        title: "คอนกรีตโครงสร้างพื้น",
        img: "/images/docs/costcode-guide/floor-concrete.png",
        code: "A3000.5",
        comment: "คอนกรีตโครงสร้างพื้น",
        category: "Floor",
        familyname: "Floor",
        familytypename: "RSB_S1 (พื้นคอนกรีตหล่อในที่ หนา 0.10 m) (และขนาดอื่นๆ)",
        remarks: "ใช้กับโมเดลโครงสร้างพื้นคอนกรีต  (Structural Floor) ทุกรูปแบบ เช่น S, GS,CS",
      },
      {
        title: "คอนกรีตโครงสร้างพื้นสำเร็จรูป",
        img: "/images/docs/costcode-guide/floor-precast-concrete.png",
        code: "A3000.6",
        comment: "คอนกรีตโครงสร้างพื้นสำเร็จรูป",
        category: "Floor",
        familyname: "Structural Floor",
        familytypename: "RSB_PS (แผ่นพื้นคอนกรีตสำเร็จรูป พร้อมหล่อคอนกรีตปิดผิว ความหนารวม 0.10 m)",
        remarks: "ใช้กับโมเดลโครงสร้างพื้นคอนกรีตสำเร็จรูป (Structural Floor)  ที่เป็นความหนารวม PS เท่านั้น",
      },
      {
        title: "คอนกรีตทับหน้า ไม่รวมเหล็กเสริม หนาไม่น้อยกว่า 5 ซม.",
        img: "/images/docs/costcode-guide/floor-topping-concrete.png",
        code: "A3000.6.1",
        comment: "คอนกรีตทับหน้า ไม่รวมเหล็กเสริม หนาไม่น้อยกว่า 5 ซม.",
        category: "Floor",
        familyname: "Floor",
        familytypename: "RSB_Concrete Topping (พื้นคอนกรีตทับหน้าแผ่นพื้นสำเร็จรูป หนา 0.05 m)",
        remarks: "ใช้กับโมเดลโครงสร้างพื้นคอนกรีตสำเร็จรูป (Structural Floor) ที่เป็นความหนา เฉพาะคอนกรีตทับหน้าเท่านั้น",
      },
      {
        title: "คอนกรีตโครงสร้างบันได",
        img: "/images/docs/costcode-guide/stair-concrete.png",
        code: "A3000.7",
        comment: "คอนกรีตโครงสร้างบันได",
        category: "Stair",
        familyname: "Cast-In-Place-Stair",
        familytypename: "RSB - บันไดคอนกรีตหล่อในที่ (และบันไดคอนกรีตชนิดอื่นๆ)",
        remarks: "การใช้งานมีรายละเอียดมากกว่าโมเดลทั่วไป ผู้ใช้งานต้องทำการกำหนด Material ให้กับบันได พร้อมกับกำหนด Material Keynote แทน Element Keynote จึงจะสามารถได้ปริมาตรคอนกรีตจากบันไดได้ (นอกจากใช้ Model-in-place แทน Stair ปกติ)",
      },
      {
        title: "คอนกรีตโครงสร้างผนังคอนกรีตเสริมเหล็ก",
        img: "/images/docs/costcode-guide/wall-concrete.png",
        code: "A3000.8",
        comment: "คอนกรีตโครงสร้างผนังคอนกรีตเสริมเหล็ก",
        category: "Wall",
        familyname: "Basic Wall",
        familytypename: "RSB - ผนังคอนกรีตเสริมเหล็ก หนา 0.20 m (และผนังคอนกรีตความหนาอื่นๆ)",
        remarks: "ใช้กับโมเดลผนังที่เป็น Structural Wall (สามารถใส่เหล็กเสริม Rebar ได้)",
      },
    ],
  },

  {
    id: "A4",
    title: "A4 งานแบบหล่อคอนกรีต",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานแบบหล่อคอนกรีต",
    items: [
      {
        title: "ไม้แบบงานโครงสร้าง",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A4000",
        comment: "ไม้แบบงานโครงสร้าง",
        category: "Add-in Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ติ้กปุ่มเพิ่มการคำนวณปริมาณไม้แบบอัตโนมัติ",
      },
      
      {
        title: "ไม้คร่าวยึดแบบงานโครงสร้าง",
        img: "/images/docs/costcode-guide/formwork-2.png",
        code: "A4001",
        comment: "ไม้คร่าวยึดแบบงานโครงสร้าง",
        category: "Add-in Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "คำนวณปริมาณไม้คร่าวยึดแบบจากปริมาณไม้แบบอัตโนมัติ",
      },
      
      {
        title: "ตะปูยึดแบบงานโครงสร้าง",
        img: "/images/docs/costcode-guide/formwork-3.png",
        code: "A4002",
        comment: "ตะปูยึดแบบงานโครงสร้าง",
        category: "Add-in Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "คำนวณปริมาณตะปูยึดแบบจากปริมาณไม้แบบอัตโนมัติ",
      },
    ],
  },
  {
    id: "A5",
    title: "A5 งานเหล็กเสริมคอนกรีต",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานเหล็กเสริมคอนกรีต",
    items: [
      {
        title: "เหล็กเส้นกลมผิวเรียบ SR.24 ขนาด RB 6 มม. (2.22 กก./เส้น)",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A5000.1.1",
        comment: "เหล็กเส้นกลมผิวเรียบ SR.24 ขนาด RB 6 มม. (2.22 กก./เส้น)",
        category: "Structural Rebar",
        familyname: "Rebar Bar",
        familytypename: "SR24 - Foundation - RB 6 mm.",
        remarks: "ส่วนสำคัญที่สุดคือ ทำการเลือก Family Type Name ที่ถูกต้องตามหมวดหมู่ของเหล็กเสริม เช่น ใช้สำหรับงานฐานราก ให้เลือก Family Type ที่มีชื่อ Foundation ในชื่อ และต้องกำหนดค่า Partition = Foundation ด้วย",
      },
      {
        title: "เหล็กเส้นกลมผิวข้ออ้อย SD.30 ขนาด DB 12 มม. (8.88 กก./เส้น)",
        img: "/images/docs/costcode-guide/formwork-2.png",
        code: "A5002.2.2",
        comment: "เหล็กเส้นกลมผิวข้ออ้อย SD.30 ขนาด DB 12 มม. (8.88 กก./เส้น)",
        category: "Structural Rebar",
        familyname: "Rebar Bar",
        familytypename: "SD30 - Column - DB 12 mm.",
        remarks: "ส่วนสำคัญที่สุดคือ ทำการเลือก Family Type Name ที่ถูกต้องตามหมวดหมู่ของเหล็กเสริม เช่น ใช้สำหรับงานฐานราก ให้เลือก Family Type ที่มีชื่อ Foundation ในชื่อ และต้องกำหนดค่า Partition = Column ด้วย",
      }, 
      {
        title: "เหล็กเส้นกลมผิวข้ออ้อย SD.30 ขนาด DB 20 มม. (24.70 กก./เส้น)",
        img: "/images/docs/costcode-guide/formwork-2.png",
        code: "A5006.2.4",
        comment: "เหล็กเส้นกลมผิวข้ออ้อย SD.30 ขนาด DB 20 มม. (24.70 กก./เส้น)",
        category: "Structural Rebar",
        familyname: "Rebar Bar",
        familytypename: "SD30 - Stair - DB 12 mm.",
        remarks: "ส่วนสำคัญที่สุดคือ ทำการเลือก Family Type Name ที่ถูกต้องตามหมวดหมู่ของเหล็กเสริม เช่น ใช้สำหรับงานฐานราก ให้เลือก Family Type ที่มีชื่อ Stair ในชื่อ และต้องกำหนดค่า Partition = Stair ด้วย",
      }, 
      {
        title: "ลวดผูกเหล็ก",
        img: "/images/docs/costcode-guide/formwork-2.png",
        code: "A5008",
        comment: "ลวดผูกเหล็ก",
        category: "Add-in Calculation",
        familyname: "-",
        familytypename: "-",
        remarks: "ติ้กปุ่มคำนวณความยาว, น้ำหนักเหล็ก และลวดผูกเหล็ก เพื่อทำการคำนวณปริมาณลวดผูกเหล็กอัตโนมัติ",
      },  
      {
        title: "ตะแกรงเหล็กสำเร็จรูป Wire Mesh 4.0 มม. ขนาดตาราง 0.20 x 0.20 ม.",
        img: "/images/docs/costcode-guide/formwork-2.png",
        code: "A5009.1",
        comment: "ตะแกรงเหล็กสำเร็จรูป Wire Mesh 4.0 มม. ขนาดตาราง 0.20 x 0.20 ม.",
        category: "Structural Rebar",
        familyname: "Rebar Bar",
        familytypename: "SR24 - PS Floor - RB 12 mm. หรือ สร้างชนิด Wire Mesh",
        remarks: "ส่วนสำคัญที่สุดคือ ทำการเลือก Family Type Name ที่ถูกต้องตามหมวดหมู่ของเหล็กเสริม เช่น ใช้สำหรับเหล็กตะแกรง Wire Mesh ให้เลือก Family Type ที่มีชื่อ Wire Mesh ในชื่อ",
      },         
    ],
  },
  {
    id: "A6",
    title: "A6 งานโครงสร้างคอนกรีตสำเร็จรูป",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานโครงสร้างคอนกรีตสำเร็จรูป",
    items: [
      {
        title: "ฐานรากคอนกรีตสำเร็จรูป",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A6000",
        comment: "ฐานรากคอนกรีตสำเร็จรูป",
        category: "Structural Foundation",
        familyname: "-",
        familytypename: "-",
        remarks: "กำหนดให้โมเดลฐานราก เพื่อถอดราคาให้อยู่ในกลุ่มโครงสร้างคอนกรีตสำเร็จรูป",
      },
      {
        title: "ตอม่อคอนกรีตสำเร็จรูป",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A6001",
        comment: "ตอม่อคอนกรีตสำเร็จรูป",
        category: "Structural Column",
        familyname: "-",
        familytypename: "-",
        remarks: "กำหนดให้โมเดลเสา เพื่อถอดราคาให้อยู่ในกลุ่มโครงสร้างคอนกรีตสำเร็จรูป",
      },
      {
        title: "เสาคอนกรีตสำเร็จรูป",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A6002",
        comment: "เสาคอนกรีตสำเร็จรูป",
        category: "Structural Column",
        familyname: "-",
        familytypename: "-",
        remarks: "กำหนดให้โมเดลเสา เพื่อถอดราคาให้อยู่ในกลุ่มโครงสร้างคอนกรีตสำเร็จรูป",
      },
      {
        title: "คานคอนกรีตสำเร็จรูป",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A6003",
        comment: "คานคอนกรีตสำเร็จรูป",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "กำหนดให้โมเดลคาน เพื่อถอดราคาให้อยู่ในกลุ่มโครงสร้างคอนกรีตสำเร็จรูป",
      },
      {
        title: "พื้นคอนกรีตสำเร็จรูป",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A6004",
        comment: "พื้นคอนกรีตสำเร็จรูป",
        category: "Floor",
        familyname: "-",
        familytypename: "-",
        remarks: "กำหนดให้โมเดลพื้น เพื่อถอดราคาให้อยู่ในกลุ่มโครงสร้างคอนกรีตสำเร็จรูป",
      },
      {
        title: "แผ่นพื้นสำเร็จรูปชนิดแผ่นท้องเรียบ กว้าง 35 ซม. หนา 5-6 ซม LL 200 กก./ตร.ม.",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A6004.1.1",
        comment: "แผ่นพื้นสำเร็จรูปชนิดแผ่นท้องเรียบ กว้าง 35 ซม. หนา 5-6 ซม LL 200 กก./ตร.ม.",
        category: "Structural Framing",
        familyname: "RSB - Precast - Solid Flat Slab",
        familytypename: "RSB - Solid Flat Slab กว้าง 0.35 m",
        remarks: "กำหนดให้โมเดลคาน โดยเป็นโมเดลแผ่นพื้นสำเร็จรูป",
      },
      {
        title: "รั้วคอนกรีตสำเร็จรูป",
        img: "/images/docs/costcode-guide/rebar.png",
        code: "A6005",
        comment: "รั้วคอนกรีตสำเร็จรูป",
        category: "Generic Model",
        familyname: "RSB_Concrete Fence",
        familytypename: "RSB_Concrete Fence",
        remarks: "เป็นโมเดลรั้วคอนกรีตสำเร็จรูป ในหมวด Generic Model",
      },
    ],
  },
  {
    id: "A7",
    title: "A7 งานโครงสร้างเหล็กรูปพรรณ",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานโครงสร้างเหล็กรูปพรรณ",
    items: [
      {
        title: "เหล็ก H-Beam",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7000",
        comment: "เหล็ก H-Beam",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็ก Wide Flange (W-Beam)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7001",
        comment: "เหล็ก Wide Flange (W-Beam)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็ก I-Beam",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7002",
        comment: "เหล็ก I-Beam",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กรางน้ำ (C-Channel)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7003",
        comment: "เหล็กรางน้ำ (C-Channel)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กตัว C (Light Lip Channel)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7004",
        comment: "เหล็กตัว C (Light Lip Channel)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กกล่อง (Square Tube)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7005",
        comment: "เหล็กกล่อง (Square Tube)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กกล่องแบน (Rectangular)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7006",
        comment: "เหล็กกล่องแบน (Rectangular)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กสี่เหลี่ยมตัน (Square Bar)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7007",
        comment: "เหล็กสี่เหลี่ยมตัน (Square Bar)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กฉาก (Angle Bar)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7008",
        comment: "เหล็กฉาก (Angle Bar)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กกลมผิวดำ (Carbon Steel Pipe)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7009",
        comment: "เหล็กกลมผิวดำ (Carbon Steel Pipe)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กท่อกลม (Galvanized Pipe)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7010",
        comment: "เหล็กท่อกลม (Galvanized Pipe)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กเพลา (Steel Round Bar)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7011",
        comment: "เหล็กเพลา (Steel Round Bar)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กแบน (Steel Flat Bar)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7012",
        comment: "เหล็กแบน (Steel Flat Bar)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กแผ่นซิงค์ (Galvanzie Steel Sheet)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7013",
        comment: "เหล็กแผ่นซิงค์ (Galvanzie Steel Sheet)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กแผ่น (Steel Plate)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7014",
        comment: "เหล็กแผ่น (Steel Plate)",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "เหล็กสตัด (Stud Rod)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7015",
        comment: "เหล็กสตัด (Stud Rod)",
        category: "Generic Model",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างรูปแบบพิเศษ",
      },
      {
        title: "เหล็กเจโบลท์ (J-Bolt)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7016",
        comment: "เหล็กเจโบลท์ (J-Bolt)",
        category: "Generic Model",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างรูปแบบพิเศษ",
      },
      {
        title: "เหล็กยูโบลท์ (U-Bolt)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7017",
        comment: "เหล็กยูโบลท์ (U-Bolt)",
        category: "Generic Model",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างรูปแบบพิเศษ",
      },
       {
        title: "เหล็กแอลโบลท์ (L-Bolt)",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A7018",
        comment: "เหล็กแอลโบลท์ (L-Bolt)",
        category: "Generic Model",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างรูปแบบพิเศษ",
      },
    ],
  },
  {
    id: "A8",
    title: "A8 งานโครงสร้างไม้",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับงานโครงสร้างไม้",
    items: [
      {
        title: "ไม้เต็ง",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8000",
        comment: "ไม้เต็ง",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้รัง",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8001",
        comment: "ไม้รัง",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้แดง",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8002",
        comment: "ไม้แดง",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้มะค่า",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8003",
        comment: "ไม้มะค่า",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้ตะเคียนทอง",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8004",
        comment: "ไม้ตะเคียนทอง",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้ประดู่",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8005",
        comment: "ไม้ประดู่",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
       {
        title: "ไม้สัก",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8006",
        comment: "ไม้สัก",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้สน",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8007",
        comment: "ไม้สน",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้ยูคา",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8008",
        comment: "ไม้ยูคา",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้ยาง",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8009",
        comment: "ไม้ยาง",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้ไผ่",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8010",
        comment: "ไม้ไผ่",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา",
      },
      {
        title: "ไม้อัด",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8011",
        comment: "ไม้อัด",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา หรือแผ่นผนัง",
      },
      {
        title: "ไม้ MDF",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8012",
        comment: "ไม้ MDF",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา หรือแผ่นผนัง",
      },
      {
        title: "ไม้ HDF",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A8013",
        comment: "ไม้ HDF",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน หรือโครงสร้างเสา หรือแผ่นผนัง",
      },
    ],
},
{
    id: "A9",
    title: "A9 	งานโครงสร้างหลังคา",
    desc: "ตัวอย่างการกำหนดรหัสต้นทุนสำหรับ	งานโครงสร้างหลังคา",
    items: [
      {
        title: "โครงสร้างหลังคาเหล็ก",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A9000",
        comment: "โครงสร้างหลังคาเหล็ก",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
      },
      {
        title: "โครงสร้างหลังคาไม้เนื้อแข็ง",
        img: "/images/docs/costcode-guide/formwork.png",
        code: "A9001",
        comment: "โครงสร้างหลังคาไม้เนื้อแข็ง",
        category: "Structural Framing",
        familyname: "-",
        familytypename: "-",
        remarks: "ใช้งานกับโมเดลโครงสร้างคาน",
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
            Cost Code (Keynote) Guide<br />A-Structural (หมวดงานวิศวกรรมโครงสร้าง)
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            ตัวอย่างการกำหนดรหัสต้นทุน (Cost Code) หรือ Revit Keynote Parameter สำหรับงานวิศวกรรมโครงสร้าง
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
