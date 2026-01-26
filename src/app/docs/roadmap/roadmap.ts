// src/app/docs/roadmap/roadmap.ts
export type RoadmapStatus = "done" | "in_progress" | "planned";

export type RoadmapItem = {
  id: string;
  title: string;
  description?: string;
  status: RoadmapStatus;

  // optional metadata
  tags?: string[];
  date?: string;     // "2026-01-01"
  version?: string;  // "v2.0.0"
  order: number;     // ใช้จัดลำดับ (เลขน้อยอยู่บน)
};

export const ROADMAP: RoadmapItem[] = [
  // =====================================================================================
  // DONE (v2.0.0)
  // =====================================================================================
  {
    id: "v200-mdm-dockable-pane",
    title: "Model Data Management → Dockable Pane",
    description:
      "เปลี่ยนคำสั่ง Model Data Management จาก Command ไปเป็น Dockable Pane เพื่อทำงานได้สะดวกและรวดเร็วขึ้น",
    status: "done",
    tags: ["Model Data Management", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 10,
  },
  {
    id: "v200-mdm-selection-do-not-collapse",
    title: "Model Data Management - Selection Improvements",
    description:
      "ปรับการทำงานของ Model Data Management ให้ขั้นตอนการเลือกวัตถุไม่ย่อรายการลงทุกครั้งที่อัปเดตข้อมูล",
    status: "done",
    tags: ["Model Data Management", "Bug Fix"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 20,
  },
  {
    id: "v200-export-datagrid-delete-restore",
    title: "Export DataGrid - Restore Delete Item",
    description:
      "แก้ปัญหา Bug Export DataGrid ให้ปุ่มลบรายการกลับมาใช้งานได้เหมือนเดิม",
    status: "done",
    tags: ["BOQ", "Bug Fix"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 30,
  },
  {
    id: "v200-roof-framing-creator",
    title: "Roof Framing Creator",
    description:
      "สร้างปุ่มคำสั่งใหม่สำหรับการสร้างโครงสร้างหลังคาแบบรวดเร็ว ครบจบในคำสั่งเดียว",
    status: "done",
    tags: ["Roof Framing Creator", "New Command"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 40,
  },
  {
    id: "v200-boq-welcome-screen-workflow",
    title: "BOQ - Welcome Screen (Discipline Workflow)",
    description:
      "เพิ่มหน้า Welcome Screen ให้คำสั่ง BOQ เพื่อแยกหมวดในการถอดปริมาณ ปรับ Workflow ให้ลื่นขึ้น และทำงานตามความเป็นจริงทีละหมวดมากขึ้น",
    status: "done",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 50,
  },
  {
    id: "v200-boq-paint-area-calculation-advanced",
    title: "BOQ - Paint Area Calculation (More Controls)",
    description:
      "ปรับปรุงคำอธิบายการคำนวณพื้นที่ทาสีให้ชัดเจนมากขึ้น พร้อมแสดงรหัสต้นทุนที่ใช้ในการคำนวณ",
    status: "done",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 60,
  },
  {
    id: "v200-boq-paint-database-updated",
    title: "BOQ - Paint Database Updated",
    description:
      "ปรับ Database สำหรับสีให้ครอบคลุมรายการสีที่ใช้บ่อยมากขึ้น โดยเพิ่มการแบ่งหมวดงาน",
    status: "done",
    tags: ["Database", "Updated"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 70,
  },
  {
    id: "v200-boq-formwork-calculation-advanced",
    title: "BOQ - Formwork Calculation (More Controls)",
    description:
      "ปรับปรุงคำอธิบายการคำนวณปริมาณไม้แบบให้ชัดเจนมากขึ้น พร้อมแสดงรหัสต้นทุนที่ใช้ในการคำนวณ",
    status: "done",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 80,
  },
  {
    id: "v200-boq-rebar-calculation-advanced",
    title: "BOQ - Rebar Calculation (More Controls)",
    description:
      "ปรับปรุงคำอธิบายการคำนวณปริมาณเหล็กเสริมให้ชัดเจนมากขึ้น พร้อมแสดงรหัสต้นทุนที่ใช้ในการคำนวณ",
    status: "done",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 90,
  },
  {
    id: "v200-boq-load-online-db-window-fit-screen",
    title: "BOQ - Load Online Database Window Fit Screen",
    description:
      "แก้ไขขนาดหน้าจอเริ่มต้นของหน้าต่าง Load Online Database ไม่ให้ล้นจอ โดยเปลี่ยนขนาด min-height ใหม่",
    status: "done",
    tags: ["BOQ", "Bug Fix"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 100,
  },
  {
    id: "v200-boq-new-workflow",
    title: "BOQ - New Workflow Implementation",
    description:
      "ปรับปรุง Workflow การทำงานของคำสั่ง BOQ ใหม่ทั้งหมด ให้เหมาะสมกับการใช้งานจริง ค่อยๆประมาณราคาไปเป็นหมวดๆ โดยคีย์สำคัญคือ Save Session และ Load Session เพื่อให้สามารถกลับมาทำงานต่อได้ง่ายขึ้น",
    status: "done",
    tags: ["BOQ", "Workflow Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 110,
  },
  {
    id: "v200-boq-stair-category",
    title: "BOQ - Stair Category",
    description:
      "ปรับปรุงคำสั่ง BOQ ให้หมวดบันไดอยู่ในกลุ่ม Category Pack ทั้ง Structural และ Architectural เพื่อให้ถอดปริมาณบันไดได้ครบถ้วนและถูกต้องมากขึ้น",
    status: "done",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 110,
  },
  {
    id: "v200-boq-mechanical-equipment-category",
    title: "BOQ - Mechanical Equipment Category",
    description:
      "ปรับปรุงหน่วยเรียกของ Mechanical Equipment ให้แสดงผลอย่างถูกต้องในคำสั่ง BOQ",
    status: "done",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 120,
  },
  {
    id: "v200-property-line-titledeed-area",
    title: "Property Line & Title Deed Area - Area Calculation",
    description:
      "เครื่องมือช่วยคำนวณพื้นที่จากเส้นเขตที่ดิน (Property Line) และโฉนดที่ดิน (Title Deed Area) เพื่อช่วยงานถอดปริมาณและประมาณราคา",
    status: "done",
    tags: ["Property Line & Title Deed Area", "New Command"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 130,
  },
  {
    id: "v200-Room-to-elements",
    title: "Room to Elements",
    description:
      "พัฒนาคำสั่ง Room to Elements เพื่อช่วยในการแปลงข้อมูลห้องให้กลายเป็นรายการวัสดุและงานต่างๆ ที่เกี่ยวข้อง",
    status: "done",
    tags: ["Room to Elements", "New Command"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 140,
  },
  {
    id: "v200-BOQ-Rebar-Data-Extraction-to-meter",
    title: "BOQ - Rebar Data Extraction to Meter",
    description:
      "ปรับปรุงข้อมูลการถอดปริมาณเหล็กเสริมใน BOQ จากการถอดปริมาณพร้อมคำนวณน้ำหนักเหล็กเป็น กิโลเมตร ให้กลายเป็น ถอดปริมาณในหน่วยความยาวแบบ เมตร แทน เพื่อช่วยให้ผู้ใช้งานสามารถตรวจสอบความยาวทั้งหมดของเหล็กเสริมได้จริง และพัฒนา BOQ Calculation ให้รองรับการแปลงหน่วยกลับเป็น kg ได้",
    status: "done",
    tags: ["BOQ", "Rebar"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 150,
  },
  {
    id: "v200-Column-Footing-Rebar-Beta",
    title: "Column Footing Rebar - Automatic Rebar creation for Column Footings-Beta",
    description:
      "ออกแบบ และสร้างคำสั่งสำหรับสร้างเหล็กเสริมในเสาตอม่อคอนกรีตเสริมเหล็กแบบอัตโนมัติ",
    status: "done",
    tags: ["Column Footing Rebar", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 160,
  },
  {
    id: "v200-Column-Rebar-Beta",
    title: "Column Rebar - Automatic Rebar creation for Columns-Beta",
    description:
      "ออกแบบ และสร้างคำสั่งสำหรับสร้างเหล็กเสริมในเสาคอนกรีตเสริมเหล็กแบบอัตโนมัติ",
    status: "done",
    tags: ["Column Rebar", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 170,
  },
  {
    id: "v200-Beam-Rebar-Beta",
    title: "Beam Rebar - Automatic Rebar creation for Beams-Beta",
    description:
      "ออกแบบ และสร้างคำสั่งสำหรับสร้างเหล็กเสริมในคานคอนกรีตเสริมเหล็กแบบอัตโนมัติ",
    status: "done",
    tags: ["Beam Rebar", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 180,
  },
  {
    id: "v200-Floor-Rebar-Beta",
    title: "Floor Rebar - Automatic Rebar creation for Floors-Beta",
    description:
      "ออกแบบ และสร้างคำสั่งสำหรับสร้างเหล็กเสริมในพื้นคอนกรีตเสริมเหล็กแบบอัตโนมัติ",
    status: "done",
    tags: ["Floor Rebar", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 190,
  },
  {
    id: "v200-Cutting-Optimizer-Beta",
    title: "Cutting Optimizer-Beta",
    description:
      "พัฒนาคำสั่ง Cutting Optimizer เพื่อช่วยในการจัดการตัดวัสดุให้เหมาะสมที่สุด เพื่อลดของเสียและประหยัดต้นทุน",
    status: "done",
    tags: ["Cutting Optimizer", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 200,
  },
  {
    id: "v200-roomtag-elevation-section-bugfix",
    title: "Roomtag Elevation/Section - Bug Fix",
    description:
      "แก้บัคในคำสั่ง Roomtag Elevation/Section ให้ทำงานได้ถูกต้องและเสถียรขึ้น",
    status: "done",
    tags: ["Roomtag Elevation/Section", "Bug Fix"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 210,
  },
   {
    id: "v200-floor-tiles-generator-Beta",
    title: "Floor Tiles Generator - Beta",
    description:
      "พัฒนาคำสั่ง Floor Tiles Generator คำสั่งใหม่สำหรับการสร้างกระเบื้องพื้นได้หลากหลายรูปแบบ",
    status: "done",
    tags: ["Floor Tiles Generator", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 220,
  },
  {
    id: "v200-Sheet-Cutting-Organizer-Beta",
    title: "Sheet Cutting Organizer - Beta",
    description:
      "พัฒนาคำสั่ง Sheet Cutting Organizer คำสั่งใหม่สำหรับการจัดการตัดแผ่นให้เหมาะสมที่สุด",
    status: "done",
    tags: ["Sheet Cutting Organizer", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 230,
  },
  {
    id: "v200-boq-factor-f-improvement",
    title: "BOQ - Factor F Improvement",
    description:
      "ปรับปรุงฟังก์ชั่นการคิดราคา ค่าดำเนินการ กำไร และ Vat รวมถึงรองรับการคำนวณ Factor F ใน BOQ เพื่อให้รองรับการคำนวณที่แม่นยำขึ้น",
    status: "done",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 240,
  },
     {
    id: "v200-Project-Specification-Beta",
    title: "Project Specification - Beta",
    description:
      "พัฒนาคำสั่ง Project Specification คำสั่งใหม่สำหรับการจัดการมาตรฐานรายการและราคาของโครงการ",
    status: "done",
    tags: ["Project Specification", "New Command", "Beta"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 250,
  },
   {
    id: "v200-rebar-spec-sd40-more",
    title: "Rebar Spec - Add SD40 and More",
    description:
      "เพิ่มสเปคเหล็ก SD40 และสเปคอื่นๆ เพื่อรองรับการทำงานให้ครอบคลุมมากขึ้น",
    status: "done",
    tags: ["Rebar Spec", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 260,
  },
  {
    id: "v200-database-concrete-multiple-strength",
    title: "Database - Concrete Multiple Strengths",
    description:
      "ปรับ Database ให้มีรายการคอนกรีตหลายสเตรงมากขึ้น เพื่อรองรับงานที่หลากหลาย",
    status: "done",
    tags: ["Database", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 270,
  },
 

  // =====================================================================================
  // IN PROGRESS (v2.0.0)
  // =====================================================================================
  
  
  {
    id: "v200-template-concrete-multiple-strength-families",
    title: "Template - Families for Multiple Concrete Strengths",
    description:
      "ปรับ Template ให้มี Family รองรับคอนกรีตหลายสเตรง เพื่อให้ใช้งานร่วมกับ Database ได้ครบ",
    status: "in_progress",
    tags: ["Template", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 10,
  },
  {
    id: "v200-template-family-pricing-audit",
    title: "Template - Family Pricing Coverage",
    description:
      "ตรวจสอบ Family ใน Template ทุกชิ้นให้มีข้อมูลราคาให้ครบมากที่สุด เพื่อพร้อมทำงานและประมาณราคาได้ทันที",
    status: "in_progress",
    tags: ["Template", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 20,
  },
 

 

  // =====================================================================================
  // PLANNED (v2.0.0)
  // =====================================================================================
  
  {
    id: "v201-boq-document-presentation-format-logo",
    title: "BOQ Document Presentation - Format & Logo for PDF",
    description:
      "พัฒนา Format ของ BOQ Document Presentation ให้ตกแต่งได้ และใส่ Logo ในเอกสาร Paper PDF ได้",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.0.1",
    date: "2026-01-01",
    order: 10,
  },
  
  {
    id: "v201-boq-brick-wall-to-items",
    title: "BOQ - Convert Brick Wall Area to Brick Items",
    description:
      "เพิ่มคำสั่งพิเศษสำหรับแปลงพื้นที่ผนังก่ออิฐให้กลายเป็นรายการก้อนอิฐและวัสดุในการก่อจริงๆ ใน BOQ",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.0.1",
    date: "2026-01-01",
    order: 20,
  },
  {
    id: "v201-boq-paint-area-to-paint-buckets",
    title: "BOQ - Convert Paint Area to Paint Buckets",
    description:
      "เพิ่มคำสั่งพิเศษสำหรับแปลงพื้นที่ทาสีให้กลายเป็นรายการถังสี และสามารถเปลี่ยนแปลงรายการทาสีได้ใน BOQ",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.0.1",
    date: "2026-01-01",
    order: 30,
  },
  {
    id: "v201-rc-tie-beam-lintel-creator",
    title: "RC Tie Beam & Lintel Creator",
    description:
      "พัฒนาคำสั่งสร้างเสาเอ็น-ทับหลังคอนกรีตเสริมเหล็กเพื่อช่วยงานโมเดลและงานถอดปริมาณ",
    status: "planned",
    tags: ["RC Tie Beam & Lintel Creator", "New"],
    version: "v2.0.1",
    date: "2026-01-01",
    order: 40,
  },
  {
    id: "v201-foundation-rebar-more-pile-types",
    title: "Foundation Rebar - Support More Pile Foundation Types",
    description:
      "ปรับปรุงคำสั่ง Foundation Rebar ให้รองรับฐานรากแบบเสาเข็มหลากหลายรูปแบบมากขึ้น",
    status: "planned",
    tags: ["Foundation Rebar", "Improvement"],
    version: "v2.0.1",
    date: "2026-01-01",
    order: 50,
  },
  {
    id: "v201-Master-database-to-project-specification-integration",
    title: "Master Database to Project Specification Integration",
    description:
      "เชื่อมต่อ Master Database กับ Project Specification เพื่อให้สามารถใช้ข้อมูลจาก Master Database ได้โดยตรงใน Project Specification และพัฒนาการเชื่อมต่อระหว่างสองระบบนี้ให้มีประสิทธิภาพมากขึ้น",
    status: "planned",
    tags: ["Master Database", "Project Specification", "Integration"],
    version: "v2..0.1",
    date: "2026-01-01",
    order: 60,
  },
  {
    id:"v210-boq-improve-data-workflow",
    title: "BOQ - Improve Data Workflow",
    description:
      "ปรับปรุงกระบวนการทำงานจัดการข้อมูลใน BOQ เพื่อให้สามารถจัดการข้อมูลได้อย่างมีประสิทธิภาพมากขึ้น ตั้งแต่การนำเข้าข้อมูล การแก้ไขข้อมูล จนถึงการส่งออกข้อมูล",
    status: "planned",
    tags: ["BOQ", "Improvement"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 70,
  },
  {
    id:"v210-door-window-schedule-generator",
    title: "Door & Window Schedule Generator",
    description:
      "พัฒนาคำสั่งสร้างตารางรายละเอียดประตูและหน้าต่าง เพื่อให้สามารถสร้างตารางรายละเอียดได้อย่างรวดเร็วและแม่นยำ",
    status: "planned",
    tags: ["Door & Window", "New"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 80,
  }
];
