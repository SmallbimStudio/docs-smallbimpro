"use client"
import * as React from "react"; 
import { SidebarInset } from "@/components/ui/sidebar"; 
import { Separator } from "@/components/ui/separator"; 
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Img=({l}:{l:string})=>
    (<figure className="rounded-2xl border bg-muted/30 overflow-hidden">
        <div className="aspect-video grid place-items-center text-sm text-muted-foreground">
            [ Image — {l} ]
        </div>
    </figure>)

export default function Page(){return(<SidebarInset>
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-10 space-y-8">
        <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Legend Section</h1>
            <p className="text-sm md:text-base text-muted-foreground">สร้างเลเจนด์แสดงองค์ประกอบแบบแนวตัด</p>
            </header>
            <Separator/>
            <div className="grid lg:grid-cols-2 gap-6">
                <section className="space-y-6">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">คำอธิบาย</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">วางตัวอย่าง families/types ใน 3D เพื่ออธิบายระบบ</CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">ทำอะไรได้บ้าง</CardTitle>
                         </CardHeader>
                            <CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                <li>สร้างชุดตัวอย่างอัตโนมัติ</li><li>คงมุมมอง/สเกลคงที่</li></ul></CardContent>
                                </Card>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">Input</CardTitle>
                                            </CardHeader>
                                            <CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                                <li>รายการ types/ระบบ</li><li>พรีเซ็ตสเกล</li></ul>
                                                </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardHeader className="pb-2">
                                                        <CardTitle className="text-base">Output</CardTitle>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                                                <li>3D Legend View</li><li>พร้อมวางลงชีต</li></ul>
                                                                </CardContent>
                                                                </Card>
                                                                </div></section><section className="space-y-4">
                                                                    <Img l="Legend 3D — Setup" />
                                                                    <Img l="Legend 3D — Result on Sheet" />
                    </section>
                </div>
            </div>
        </SidebarInset>

    )
}
