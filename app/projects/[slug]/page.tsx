'use client'

import { DATA } from '@/app/data/data'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = DATA.projectspage.find(
    (p) => p.href === `/projects/${params.slug}`
  )

  if (!project) {
    notFound()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-10"
    >
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight"
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-muted px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {project.image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="text-muted-foreground">{project.dates}</div>
            <p className="text-lg leading-relaxed">{project.description}</p>
            
            {project.links && project.links.length > 0 && (
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {link.type}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between items-center w-full mt-16"
        >
          <Button variant="outline">
            <Link href="/projects" className="flex items-center gap-2">
              <span>←</span>
              <span>Back to Projects</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
