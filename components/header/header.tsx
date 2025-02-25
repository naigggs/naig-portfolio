"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const pageTitles: { [key: string]: string } = {
    "/": "Home",
    "/admin/parking": "Parking Spaces",
    "/admin/accounts": "Accounts",
    "/admin/guest-list": "Guest List",
    "/staff/qr-parking": "QR Parking",
    "/guest/dashboard": "Guest Dashboard",
    "/guest/chat-bot": "HAU2Park Chatbot",
    "/guest/qr-code": "QR Code List",
  };

  const pageTitle = pageTitles[pathname] || "Unknown Page";

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={pathname}>
              <BreadcrumbPage className="text-gray-500 hover:text-foreground">{pageTitle}</BreadcrumbPage>
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ThemeSwitcher />
    </header>
  );
}
