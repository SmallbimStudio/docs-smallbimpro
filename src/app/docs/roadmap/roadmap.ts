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
  version?: string;  // "v2.0.1"
  order: number;     // ใช้จัดลำดับ (เลขน้อยอยู่บน)
};

export const ROADMAP: RoadmapItem[] = [
  // =====================================================================================
  // DONE (v2.1.0)
  // =====================================================================================
  

  // =====================================================================================
  // IN PROGRESS (v2.1.0)
  // =====================================================================================
   {
    id:"v202-pipe-modeler-automatic-routing",
    title: "Pipe Modeler - Automatic Routing-Beta",
    description:
      "พัฒนาคำสั่งสร้างท่อประปาอัตโนมัติ เพื่อให้สามารถสร้างท่อประปาได้อย่างรวดเร็วและแม่นยำ",
    status: "in_progress",
    tags: ["Pipe Modeler", "New"],
    version: "v2.0.2",
    date: "2026-02-06",
    order: 10,
  },
  {
    id:"v202-boq-export-to-pdf-without-data-structure",
    title: "BOQ - Export to PDF without Data Structure",
    description:
      "ตรวจสอบการใช้งานคำสั่ง Export BOQ ไปยัง PDF โดยไม่ต้องมีโครงสร้างข้อมูลที่ซับซ้อน ตอนนี้เจอปัญหาบางอย่างที่ต้องแก้ไข คือต้องใช้งาน Load Data Structure ก่อนถึงจะ Export ได้",
    status: "in_progress",
    tags: ["BOQ", "Export"],
    version: "v2.0.2",
    date: "2026-02-06",
    order: 20,
  },
  {
    id:"v202-foundation-rebar-improvement",
    title: "Foundation Rebar - Improvement",
    description:
      "ตรวจสอบและปรับปรุงคำสั่ง Foundation Rebar เพื่อให้สามารถสร้างเส้นเหล็กในพื้นฐานได้อย่างแม่นยำและรวดเร็ว ตอนนี้เจอปัญหาบางอย่างที่ต้องแก้ไข",
    status: "in_progress",
    tags: ["Foundation Rebar", "Improvement"],
    version: "v2.0.2",
    date: "2026-02-06",
    order: 30,
  },

  // =====================================================================================
  // PLANNED (v2.1.0)
  // =====================================================================================
  {
    id: "v201-Stair-Rebar-All-New",
    title: "Stair Rebar - All New",
    description:
      "ปรับปรุงคำสั่ง Stair Rebar ใหม่ทั้งหมด เลื่อนการเปิดตัว Beta ออกไป เพื่อพัฒนาคำสั่งให้สมบูรณ์แบบยิ่งขึ้น",
    status: "planned",
    tags: ["Stair Rebar", "New"],
    version: "v2.1.0",
    date: "2026-02-03",
    order: 10,
  },
  {
    id: "v210-boq-document-presentation-format-logo",
    title: "BOQ Document Presentation - Format & Logo for PDF",
    description:
      "พัฒนา Format ของ BOQ Document Presentation ให้ตกแต่งได้ และใส่ Logo ในเอกสาร Paper PDF ได้",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 10,
  },
  
  {
    id: "v210-boq-brick-wall-to-items",
    title: "BOQ - Convert Brick Wall Area to Brick Items",
    description:
      "เพิ่มคำสั่งพิเศษสำหรับแปลงพื้นที่ผนังก่ออิฐให้กลายเป็นรายการก้อนอิฐและวัสดุในการก่อจริงๆ ใน BOQ",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 20,
  },
  {
    id: "v210-boq-paint-area-to-paint-buckets",
    title: "BOQ - Convert Paint Area to Paint Buckets",
    description:
      "เพิ่มคำสั่งพิเศษสำหรับแปลงพื้นที่ทาสีให้กลายเป็นรายการถังสี และสามารถเปลี่ยนแปลงรายการทาสีได้ใน BOQ",
    status: "planned",
    tags: ["BOQ", "New"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 30,
  },
  {
    id: "v210-rc-tie-beam-lintel-creator",
    title: "RC Tie Beam & Lintel Creator",
    description:
      "พัฒนาคำสั่งสร้างเสาเอ็น-ทับหลังคอนกรีตเสริมเหล็กเพื่อช่วยงานโมเดลและงานถอดปริมาณ",
    status: "planned",
    tags: ["RC Tie Beam & Lintel Creator", "New"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 40,
  },
  {
    id: "v210-Master-database-to-project-specification-integration",
    title: "Master Database to Project Specification Integration",
    description:
      "เชื่อมต่อ Master Database กับ Project Specification เพื่อให้สามารถใช้ข้อมูลจาก Master Database ได้โดยตรงใน Project Specification และพัฒนาการเชื่อมต่อระหว่างสองระบบนี้ให้มีประสิทธิภาพมากขึ้น",
    status: "planned",
    tags: ["Master Database", "Project Specification", "Integration"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 50,
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
    order: 60,
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
    order: 70,
  },
  {
    id:"v210-mechanical-duct-modeler-automatic-routing",
    title: "Mechanical Duct Modeler - Automatic Routing-Beta",
    description:
      "พัฒนาคำสั่งสร้างท่ออากาศอัตโนมัติ เพื่อให้สามารถสร้างท่ออากาศได้อย่างรวดเร็วและแม่นยำ",
    status: "planned",
    tags: ["Mechanical Duct Modeler", "New"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 80,
  },
 
  {
    id:"v210-Electrical-Circuit-Designer",
    title: "Electrical Circuit Designer",
    description:
      "พัฒนาคำสั่งออกแบบวงจรไฟฟ้า เพื่อให้สามารถออกแบบวงจรไฟฟ้าได้อย่างรวดเร็วและแม่นยำ",
    status: "planned",
    tags: ["Electrical Circuit Designer", "New"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 100,
  },
  {
    id:"v210-All-Disciplines-Schedule-for-BOQ-Integration",
    title: "All Disciplines Schedule for BOQ Integration",
    description:
      "สร้างและเตรียมพร้อมตารางรายละเอียดสำหรับทุกหมวดงาน เพื่อให้สามารถตรวจสอบรายการปริมาณและรายละเอียดได้อย่างรวดเร็วและแม่นยำ",
    status: "planned",
    tags: ["All Disciplines Schedule", "BOQ Integration"],
    version: "v2.1.0",
    date: "2026-01-01",
    order: 110,
  },
  {
    id:"v300-BIM-AI-Visualization-Assistant",
    title: "BIM AI Visualization Assistant",
    description:
      "พัฒนาคำสั่งช่วยในการแสดงผลภาพ 3D ของ BIM ด้วย AI เพื่อให้สามารถแสดงผลภาพได้อย่างรวดเร็วและแม่นยำ",
    status: "planned",
    tags: ["BIM AI", "Visualization Assistant"],
    version: "v3.0.0",
    date: "2026-01-01",
    order: 120,
  }
];
