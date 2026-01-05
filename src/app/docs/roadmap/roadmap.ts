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
    tags: ["Roof Framing Creator", "New"],
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
      "ปรับโค้ดการคำนวณพื้นที่ทาสีให้รัดกุมและยืดหยุ่นมากขึ้น",
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

  // =====================================================================================
  // IN PROGRESS (v2.0.0)
  // =====================================================================================
  {
    id: "v200-boq-formwork-calculation-advanced",
    title: "BOQ - Formwork Calculation (More Controls)",
    description:
      "ปรับโค้ดการคำนวณไม้แบบใน BOQ ให้สามารถกำหนดรายละเอียดและเงื่อนไขได้มากขึ้น",
    status: "in_progress",
    tags: ["BOQ", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 10,
  },
  {
    id: "v200-database-concrete-multiple-strength",
    title: "Database - Concrete Multiple Strengths",
    description:
      "ปรับ Database ให้มีรายการคอนกรีตหลายสเตรงมากขึ้น เพื่อรองรับงานที่หลากหลาย",
    status: "in_progress",
    tags: ["Database", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 20,
  },
  {
    id: "v200-template-concrete-multiple-strength-families",
    title: "Template - Families for Multiple Concrete Strengths",
    description:
      "ปรับ Template ให้มี Family รองรับคอนกรีตหลายสเตรง เพื่อให้ใช้งานร่วมกับ Database ได้ครบ",
    status: "in_progress",
    tags: ["Template", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 30,
  },
  

  // =====================================================================================
  // PLANNED (v2.0.0)
  // =====================================================================================
  {
    id: "v200-template-family-pricing-audit",
    title: "Template - Family Pricing Coverage",
    description:
      "ตรวจสอบ Family ใน Template ทุกชิ้นให้มีข้อมูลราคาให้ครบมากที่สุด เพื่อพร้อมทำงานและประมาณราคาได้ทันที",
    status: "planned",
    tags: ["Template", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 10,
  },
  {
    id: "v200-boq-document-presentation-format-logo",
    title: "BOQ Document Presentation - Format & Logo for PDF",
    description:
      "พัฒนา Format ของ BOQ Document Presentation ให้ตกแต่งได้ และใส่ Logo ในเอกสาร Paper PDF ได้",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 20,
  },
  {
    id: "v200-roomtag-elevation-section-bugfix",
    title: "Roomtag Elevation/Section - Bug Fix",
    description:
      "แก้บัคในคำสั่ง Roomtag Elevation/Section ให้ทำงานได้ถูกต้องและเสถียรขึ้น",
    status: "planned",
    tags: ["Roomtag Elevation/Section", "Bug Fix"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 30,
  },
  {
    id: "v200-boq-brick-wall-to-items",
    title: "BOQ - Convert Brick Wall Area to Brick Items",
    description:
      "เพิ่มคำสั่งพิเศษสำหรับแปลงพื้นที่ผนังก่ออิฐให้กลายเป็นรายการก้อนอิฐและวัสดุในการก่อจริงๆ ใน BOQ",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 40,
  },
  {
    id: "v200-boq-paint-area-to-paint-buckets",
    title: "BOQ - Convert Paint Area to Paint Buckets",
    description:
      "เพิ่มคำสั่งพิเศษสำหรับแปลงพื้นที่ทาสีให้กลายเป็นรายการถังสี และสามารถเปลี่ยนแปลงรายการทาสีได้ใน BOQ",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 50,
  },
  {
    id: "v200-rc-tie-beam-lintel-creator",
    title: "RC Tie Beam & Lintel Creator",
    description:
      "พัฒนาคำสั่งสร้างเสาเอ็น-ทับหลังคอนกรีตเสริมเหล็กเพื่อช่วยงานโมเดลและงานถอดปริมาณ",
    status: "planned",
    tags: ["RC Tie Beam & Lintel Creator", "New"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 60,
  },
  {
    id: "v200-foundation-rebar-more-pile-types",
    title: "Foundation Rebar - Support More Pile Foundation Types",
    description:
      "ปรับปรุงคำสั่ง Foundation Rebar ให้รองรับฐานรากแบบเสาเข็มหลากหลายรูปแบบมากขึ้น",
    status: "planned",
    tags: ["Foundation Rebar", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 70,
  },
  {
    id: "v200-boq-load-online-db-window-fit-screen",
    title: "BOQ - Load Online Database Window Fit Screen",
    description:
      "แก้ไขขนาดหน้าจอเริ่มต้นของหน้าต่าง Load Online Database ไม่ให้ล้นจอ โดยเพิ่มการคำนวณพื้นที่หน้าจอของผู้ใช้งาน",
    status: "planned",
    tags: ["BOQ", "Bug Fix"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 80,
  },
  {
    id: "v200-rebar-spec-sd40-more",
    title: "Rebar Spec - Add SD40 and More",
    description:
      "เพิ่มสเปคเหล็ก SD40 และสเปคอื่นๆ เพื่อรองรับการทำงานให้ครอบคลุมมากขึ้น",
    status: "planned",
    tags: ["Rebar Spec", "Improvement"],
    version: "v2.0.0",
    date: "2026-01-01",
    order: 90,
  },
];
