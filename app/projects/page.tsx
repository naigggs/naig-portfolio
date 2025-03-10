'use client'

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DATA } from "@/app/data/data";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilter } from "@/components/project-filter";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = DATA.projectspage
    .filter((project) => {
      if (activeFilter === "all") return true;
      return project.category === activeFilter;
    })

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-10"
    >
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="space-y-12 w-full py-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </motion.div>

          <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          <AnimatePresence mode="wait">
            <motion.div 
              layout
              className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-[800px] mx-auto"
            >
              {filteredProjects.map((project, id) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center w-full mt-16"
        >
            <Button variant="outline">
              <Link href="/" className="flex items-center gap-2">
                <span>←</span>
                <span>Home</span>
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/blogs" className="flex items-center gap-2">
                <span>Blogs</span>
                <span>→</span>
              </Link>
            </Button>
          </motion.div>
      </div>
    </motion.div>
  );
}
