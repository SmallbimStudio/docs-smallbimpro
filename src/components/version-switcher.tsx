"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import Image from "next/image"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type VersionSwitcherProps = {
  versions: string[]
  defaultVersion?: string
}

export function VersionSwitcher({
  versions,
  defaultVersion,
}: VersionSwitcherProps) {
  const initial =
    defaultVersion && versions.includes(defaultVersion)
      ? defaultVersion
      : versions[0] ?? ""

  const [selectedVersion, setSelectedVersion] = React.useState(initial)

  const withV = (v: string) => (v?.startsWith("v") ? v : `v${v}`)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {/* ✅ Logo แทน icon เดิม */}
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src="/images/logo/logo-smallbimstudio.png"
                  alt="Small BIM PRO Logo"
                  width={32}
                  height={32}
                />
              </div>

              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Small BIM PRO</span>
                <span>{withV(selectedVersion)}</span>
              </div>

              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={(e) => {
                  e.preventDefault()
                  setSelectedVersion(version)
                }}
              >
                {withV(version)}
                {version === selectedVersion && <Check className="ml-auto size-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
