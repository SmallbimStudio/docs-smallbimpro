// src/app/docs/appendix/page.tsx
"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Library,
  GraduationCap,
  Globe,
  Hammer,
  BarChart3,
  Brain,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react"

function RefItem({
  title,
  url,
  accessed = "เข้าถึงเมื่อ 25 กรกฎาคม 2025",
  note,
}: {
  title: string
  url: string
  accessed?: string
  note?: string
}) {
  return (
    <li className="py-3 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="font-medium leading-snug">{title}</div>
          {note ? (
            <div className="text-xs text-muted-foreground">{note}</div>
          ) : null}
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <LinkIcon className="h-3.5 w-3.5" />
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:opacity-80"
              >
                {url}
              </a>
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
            <span className="inline-flex rounded-full bg-muted px-2 py-0.5">
              {accessed}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function AppendixReferencesPage() {
  return (
    <SidebarInset>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-10">
        {/* Headline */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            “ภาคผนวก: แหล่งอ้างอิงงานวิจัย”
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            รวมแหล่งอ้างอิงทั้งหมดที่ใช้ในการจัดทำงานวิจัย/เอกสารฉบับนี้
          </p>
        </header>

        <Separator />

        {/* กลุ่ม: วิทยานิพนธ์/บทความวิชาการในไทย */}
        <section className="space-y-3">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <GraduationCap className="h-4 w-4" />
                วิทยานิพนธ์ & บทความวิชาการ (ประเทศไทย)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                <RefItem
                  title="การประมาณราคาค่าก่อสร้างบ้านพักอาศัย 2 ชั้น ด - TU e-Thesis (มหาวิทยาลัยธรรมศาสตร์)"
                  url="http://ethesisarchive.library.tu.ac.th/thesis/2015/TU_2015_5710038265_4568_3061.pdf"
                />
                <RefItem
                  title="บทที่ 2 ทฤษฎีและงานวิจัยที่เกี่ยวข้อง (RMU Fulltext)"
                  url="https://fulltext.rmu.ac.th/fulltext/2559/119652/ch2.pdf"
                />
                <RefItem
                  title="การเปรียบเทียบการคำนวณปริมาณวัสดุงานระบบสำหรับอาคารพักอาศัยด้วย ... (NCCE27)"
                  url="https://conference.thaince.org/index.php/ncce27/article/download/1938/910"
                />
                <RefItem
                  title="การประยุกต์ใช้ BIM เพื่อถอดปริมาณวัสดุผนังอิฐก่อ (NCCE30) / An Application of BIM for Brick Walls QTO"
                  url="https://conference.thaince.org/index.php/ncce27/article/download/1427/935/23754"
                />
                <RefItem
                  title="การประมาณต้นทุนก่อสร้างงานอาคาร โดยวิธี Risk-based"
                  url="https://civil.eng.chula.ac.th/Data_Upload/Senior%20project/2021/CM_2021/Y2021_CM_Article_G08.pdf"
                />
                <RefItem
                  title="การศึกษาและวิเคราะห์สาเหตุงบประมาณการก่อสร้างจริงเกินที่กำหนดของโครงการ (มหาวิทยาลัยธุรกิจบัณฑิตย์)"
                  url="https://libdoc.dpu.ac.th/thesis/Taweesak.Rim.pdf"
                />
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* กลุ่ม: BIM / QTO (สากล + ไทย) */}
        <section className="space-y-3">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Library className="h-4 w-4" />
                BIM / QTO Research & Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                <RefItem
                  title="A survey on modeling guidelines for quantity takeoff-oriented BIM-based design (ResearchGate)"
                  url="https://www.researchgate.net/publication/272491305_A_survey_on_modeling_guidelines_for_quantity_takeoff-oriented_BIM-based_design"
                />
                <RefItem
                  title="Challenges in takeoffs and cost estimating in BIM technology (road bridge model) (ejournals)"
                  url="https://ejournals.eu/pliki_artykulu_czasopisma/pelny_tekst/96f9be96-23f6-4ac8-8453-889532a9e622/pobierz"
                />
                <RefItem
                  title="BUILDING INFORMATION MODELING (BIM) – VR Digital Company Limited"
                  url="https://www.vrdigital.co.th/vr/2023/01/01/building-information-modeling-bim/"
                />
                <RefItem
                  title="5D BIM in Construction Projects: Cost Estimation, Accuracy, and Budget Tracking (Stonehaven)"
                  url="https://www.stonehaven.ae/insights/5d-bim-construction-projects-cost-estimation-modelling"
                />
                <RefItem
                  title="Building Information Modelling Implementation Models in Thailand (JCDC, USM)"
                  url="http://web.usm.my/jcdc/vol28_2_2023/jcdc2023.28.2.3.pdf"
                />
                <RefItem
                  title="BIM Implementation Models in Thailand: Drivers, Benefits, Barriers and Lessons Learned (ResearchGate)"
                  url="https://www.researchgate.net/publication/363926616_BIM_Implementation_Models_in_Thailand_Drivers_Benefits_Barriers_and_Lessons_Learned"
                />
                <RefItem
                  title="BIM-BASED SIMPLIFIED APPROACH TO AUTOMATICALLY ESTIMATE BUILDING COSTS FOR PROJECTS IN THAILAND (GEOMATE Journal)"
                  url="https://geomatejournal.com/geomate/article/view/549/444"
                />
                <RefItem
                  title="BIM-BASED SIMPLIFIED APPROACH TO AUTOMATICALLY ... (หน้า entry หลัก)"
                  url="https://geomatejournal.com/geomate/article/view/549"
                />
                <RefItem
                  title="A COMPARISON OF REBAR QUANTITIES OBTAINED BY TRADITIONAL VS BIM-BASED METHODS (ThaiScience)"
                  url="https://www.thaiscience.info/journals/Article/SJST/10984536.pdf"
                />
                <RefItem
                  title="COMPARISON OF BIM-BASED QUANTITIES TAKE-OFF IN QUANTITY SURVEYING PROFESSION (Planning Malaysia)"
                  url="https://www.planningmalaysia.org/index.php/pmj/article/view/1499"
                />
                <RefItem
                  title="Comparison Between the BOQ of Conventional and BIM Method on BPJS Building in Central Jakarta (ResearchGate)"
                  url="https://www.researchgate.net/publication/350745869_Comparison_Between_the_BOQ_of_Conventional_and_BIM_Method_on_BPJS_Building_in_Central_Jakarta"
                />
                <RefItem
                  title="BIM-Based Quantity Takeoff in Autodesk Revit and Navisworks Manage (SpringerProfessional)"
                  url="https://www.springerprofessional.de/en/bim-based-quantity-takeoff-in-autodesk-revit-and-navisworks-mana/17942016"
                />
                <RefItem
                  title="Accuracy Of BIM Quantity Take-Off Measured Through An Example (Excelize)"
                  url="https://excelize.com/blog/accuracy-of-bim-quantity-take-off-measured-through-an-example/"
                />
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* กลุ่ม: เครื่องมือ / ฟอรั่ม / How-to */}
        <section className="space-y-3">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Hammer className="h-4 w-4" />
                เครื่องมือ / ฟอรั่ม / How-to (Revit, Dynamo, Power BI)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                <RefItem
                  title="Cost estimation — Autodesk Community (Revit Architecture Forum)"
                  url="https://forums.autodesk.com/t5/revit-architecture-forum/cost-estimation/td-p/6654307"
                />
                <RefItem
                  title="Dynamo-extension in the Revit for detailed quantity take-off (ResearchGate, figure)"
                  url="https://www.researchgate.net/figure/Dynamo-extension-in-the-Revit-for-detailed-quantity-take-off_fig2_341356743"
                />
                <RefItem
                  title="5D BIM Applications in Quantity Surveying: Dynamo and 3D Printing (ResearchGate)"
                  url="https://www.researchgate.net/publication/346657425_5D_BIM_Applications_in_Quantity_Surveying_Dynamo_and_3D_Printing_Technologies"
                />
                <RefItem
                  title="Calculating the cost of furniture in Revit using Dynamo (DynamoBIM Forum)"
                  url="https://forum.dynamobim.com/t/calculating-the-cost-of-furniture-in-revit-using-dynamo/76840"
                />
                <RefItem
                  title="Revit Plugin Series: Case Study — BOQ Generation (BL Datalabs)"
                  url="https://www.bldatalabs.com/post/revit-plugin-series-case-study-2-bill-of-quantity-boq-generation"
                />
                <RefItem
                  title="How-To – Revit Quantity Takeoff report in Power BI (KG-dev)"
                  url="https://kg-dev.be/2024/06/10/how-to-revit-quantity-takeoff-report-in-power-bi/"
                />
                <RefItem
                  title="How to create a Power BI Dashboard for Model Checker for Revit? (Autodesk)"
                  url="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-create-Power-BI-Dashboard-for-model-checker-results-of-Autodesk-Interoperability-Tools.html"
                />
                <RefItem
                  title="Power BI + Revit = Game Changer (YouTube)"
                  url="https://www.youtube.com/watch?v=Eq_quPrbfJo"
                />
                <RefItem
                  title="Analyzing Revit Data Using Microsoft Power BI (Autodesk University 2021)"
                  url="https://www.autodesk.com/autodesk-university/class/Analyzing-Revit-Data-Using-Microsoft-Power-BI-2021"
                />
                <RefItem
                  title="Revit quantity takeoff report using Dynamo and Power BI! (YouTube)"
                  url="https://www.youtube.com/watch?v=d54HoPH3T_A"
                />
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* กลุ่ม: AI/ML สำหรับการประมาณราคา */}
        <section className="space-y-3">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Brain className="h-4 w-4" />
                AI / Machine Learning สำหรับการประมาณราคา
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                <RefItem
                  title="How AI is Revolutionizing Construction Cost Estimation in 2025 (123worx)"
                  url="https://123worx.com/blog/ai-is-revolutionizing-construction-cost-estimation/"
                />
                <RefItem
                  title="How is AI used in construction cost estimating? (Building Radar)"
                  url="https://www.buildingradar.com/construction-blog/how-is-ai-used-in-construction-cost-estimating"
                />
                <RefItem
                  title="The Future of Cost Estimating: Embracing AI and Machine Learning (ProjStream)"
                  url="https://projstream.com/blog/the-future-of-cost-estimating-embracing-ai-and-machine-learning/"
                />
                <RefItem
                  title="The Future of Construction Estimation: Trends and Technologies (Breaking AC)"
                  url="https://breakingac.com/news/2025/mar/28/the-future-of-construction-estimation-trends-and-technologies/"
                />
                <RefItem
                  title="Using AI for Construction Cost Estimation & Risk Management (Keymakr)"
                  url="https://keymakr.com/blog/predictive-power-using-ai-for-construction-cost-estimation-and-risk-management/"
                />
                <RefItem
                  title="How AI is Revolutionizing Construction Cost Estimating (ASEstimation)"
                  url="https://asestimation.com/blogs/how-ai-is-revolutionizing-estimating/"
                />
                <RefItem
                  title="Comparing Time and Accuracy of BIM to On-Screen Takeoff (BYU ScholarsArchive)"
                  url="https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=1508&context=etd"
                />
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* กลุ่ม: APIs / Real-time Pricing */}
        <section className="space-y-3">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Globe className="h-4 w-4" />
                APIs / ข้อมูลราคาแบบเรียลไทม์
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                <RefItem
                  title="Can API Mastery Cut Costs For Construction Software By 30%? (Arion ERP)"
                  url="https://www.arionerp.com/news/productivity/api-capabilities-for-construction-software.html"
                />
                <RefItem
                  title="Live Construction Cost Data API (Cotality Australia)"
                  url="https://www.cotality.com/au/products/construction-api"
                />
                <RefItem
                  title="How APIs Reduce Costs & Improve Efficiency (Digital Wonderlab)"
                  url="https://digitalwonderlab.com/blog/how-apis-reduce-costs-improve-efficiency"
                />
                <RefItem
                  title="Residential contractors: real-time pricing (1build x Buildxact partnership)"
                  url="https://www.buildxact.com/us/news_media/residential-contractors-access-first-real-time-pricing-data-tool-with-1build-and-buildxact-partnership/"
                />
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* หมายเหตุ / วิธีใช้งานแหล่งอ้างอิง */}
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="h-4 w-4" />
              หมายเหตุการใช้งานแหล่งอ้างอิง
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              รายการนี้จัดทำในรูปแบบเว็บสำหรับการอ้างอิงอย่างรวดเร็ว หากต้องการรูปแบบเอกสาร
              (เช่น BibTeX/EndNote) สามารถรวบรวมจากลิงก์ต้นทางได้ตามต้องการ
              ลิงก์ทั้งหมดเปิดในแท็บใหม่
            </p>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  )
}
