import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/app/data/data";
import React from "react";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <section id="hero">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm Gian 👋
              </h1>
              <p className="max-w-[600px] md:text-xl">
                Future full-stack dev building web experiences with Django,
                ReactJS, NextJS & TypeScript Open to connect & collaborate!
              </p>
            </div>
            <div>
              <Avatar className="size-28 border">
                <AvatarImage
                  className="object-cover"
                  alt="Gian Cabigting"
                  src="/logo.jpg"
                />
              </Avatar>
            </div>
          </div>
        </section>
        <section id="about">
          <h2 className="text-xl font-bold">About</h2>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            Dedicated web developer with a focus on building dynamic and
            user-centric applications. Skilled in crafting full-stack solutions,
            including robust APIs and efficient database management. Possessing
            a strong understanding of application logic and data flow, I strive
            to deliver exceptional web experiences.
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Work Experience</h2>
            {DATA.work.map((work, id) => (
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Education</h2>

            {DATA.education.map((education, id) => (
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            ))}
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-5">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-5">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free with any questions,{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                >
                  to send me an email
                </Link>{" "}
                and I&apos;ll respond as soon as I can. I do not respond to any
                solicitations.
              </p>
            </div>
          </div>
        </section>
        <section id="end-buttons">
          <div className="flex justify-between items-center w-full mt-16">
            <Button variant="outline" disabled>
              <Link href="/" className="flex items-center gap-2">
                <span>←</span>
                <span>Home</span>
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/projects" className="flex items-center gap-2">
                <span>Projects</span>
                <span>→</span>
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
