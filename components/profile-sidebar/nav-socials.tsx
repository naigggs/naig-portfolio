"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavSocials({
  socials,
}: {
  socials: {
    name: string
    url: string
    icon: LucideIcon
    isActive?: boolean
  }[]
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel className="uppercase">Socials</SidebarGroupLabel>
    <SidebarMenu>
      {socials.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.name}</span>
            </a>
          </SidebarMenuButton>
        
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  </SidebarGroup>
  )
}
