"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className={cn("block relative")}
      onClick={handleClick}
    >
      <div className={cn("transition-colors", description)}>
        <div className="flex items-start gap-4">
          <Avatar className="size-12 shrink-0 border bg-muted dark:bg-muted/25">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-2"
            />
            <AvatarFallback className="text-base">{altText[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-sm sm:text-base flex items-center gap-2 pr-4">
                  {title}
                  {badges && badges.length > 0 && (
                    <div className="flex gap-1.5">
                      {badges.map((badge, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs px-1.5 py-0"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 transition-transform duration-200",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                </h3>
                {subtitle && (
                  <p className="text-xs text-muted-foreground">{subtitle}</p>
                )}
              </div>
              <p className="text-xs tabular-nums text-muted-foreground shrink-0">
                {period}
              </p>
            </div>
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="text-sm text-muted-foreground pt-1.5"
              >
                {description}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {description && !isExpanded && (
        <span className="absolute inset-0 cursor-pointer" aria-hidden="true" />
      )}
    </Link>
  );
};
