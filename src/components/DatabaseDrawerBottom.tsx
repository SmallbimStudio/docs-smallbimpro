"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import DatabaseCard from "@/components/cards/DatabaseCard"

export function DatabaseDrawerBottom({ defaultKey }: { defaultKey: string }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
          🔗 View Online Database
        </Button>
      </DrawerTrigger>

      <DrawerContent className="max-h-[90vh]">
        <div className="mx-auto w-full max-w-5xl">
          <DrawerHeader className="text-center space-y-2">
            <DrawerTitle className="text-3xl font-extrabold tracking-tight">
              Online Database
            </DrawerTitle>
            <DrawerDescription className="text-sm md:text-base text-muted-foreground">
              ฐานข้อมูลออนไลน์จาก <span className="font-medium text-foreground">Small BIM Studio</span>
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4">
            <DatabaseCard defaultKey={defaultKey} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
