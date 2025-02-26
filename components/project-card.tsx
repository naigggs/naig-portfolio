import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Link
      href={href || "#"}
      className={cn("block cursor-pointer h-full", className)}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card
          className={
            "flex flex-col overflow-hidden border transition-colors duration-300 ease-out h-full dark:hover:bg-black/100"
          }
        >
          <CardHeader className="px-2 flex-shrink-0">
            <div className="space-y-1">
              <CardTitle className="text-base line-clamp-1">{title}</CardTitle>
              <time className="font-sans text-xs">{dates}</time>
              <div className="hidden font-sans text-xs underline print:visible">
                {link
                  ?.replace("https://", "")
                  .replace("www.", "")
                  .replace("/", "")}
              </div>
              <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
                {description}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col px-2">
            {tags && tags.length > 0 && (
              <motion.div 
                className="mt-2 flex flex-wrap gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {tags?.map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge
                      className="px-1 py-0 text-[10px]"
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
