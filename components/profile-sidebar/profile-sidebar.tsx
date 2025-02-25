"use client";

import * as React from "react";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { data } from "./data";
import { NavSocials } from "./nav-socials";
import { NavBlogs } from "./nav-blogs";

export function ProfileSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 ml-1 mt-2">
          <Avatar className="h-10 w-10 rounded-lg">
            <AvatarImage
              className="object-cover"
              src={data.user.avatar}
              alt="Logo"
            />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{data.user.name}</span>
            <span className="truncate text-xs">{data.user.email}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavBlogs blogs={data.blogs} />
        <NavSocials socials={data.socials} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
