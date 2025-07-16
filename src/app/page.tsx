import { AnimatedBackground } from "@/components/animated-background"

import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { ProjectCard } from "@/components/project-card"
import { ResumeCard } from "@/components/resume-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/resume"
import Link from "next/link"
import Markdown from "react-markdown"

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <>
    <AnimatedBackground />
      <main className="flex flex-col min-h-[100dvh] space-y-16">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="relative">
              {/* Glass morphism card */}
              <div className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 dark:border-white/10" />
              <div className="relative gap-8 flex justify-between items-center p-8">
                <div className="flex-col flex flex-1 space-y-4">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                    yOffset={8}
                    text={`Hey, I'm ${DATA.name.split(" ")[0]}`}
                  />
                  <BlurFadeText 
                    className="max-w-[600px] text-lg md:text-xl text-muted-foreground/90 leading-relaxed" 
                    delay={BLUR_FADE_DELAY * 1.5} 
                    text={DATA.description} 
                  />
                  
                  {/* Social Links */}
                  <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <div className="flex gap-4 pt-4">
                      {Object.entries(DATA.contact.social)
                        .filter(([_, social]) => social.navbar)
                        .map(([name, social]) => (
                          <Link
                            key={name}
                            href={social.url}
                            className="p-3 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110"
                          >
                            <social.icon className="size-5" />
                          </Link>
                        ))}
                    </div>
                  </BlurFade>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="relative">
                    {/* Avatar glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse" />
                    <Avatar className="relative size-32 border-2 border-white/20 shadow-2xl">
                      <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover object-center" />
                      <AvatarFallback className="text-2xl font-bold">{DATA.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>
        
        <section id="about">
          <div className="space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-2xl font-bold">About Me</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="p-8 rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10">
                <div className="prose max-w-full text-pretty font-sans text-base text-muted-foreground/90 dark:prose-invert leading-relaxed space-y-6">
                  <p className="text-lg leading-relaxed">
                    Passionate and detail-oriented{" "}
                    <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      4th-year Computer Science student
                    </span>{" "}
                    with a solid foundation in software development, problem-solving, and real-world application design.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Experienced as a{" "}
                    <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Full Stack Developer
                    </span>
                    , contributing to industry projects and collaborating in cross-functional teams.
                  </p>
                  
                  <div className="grid gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        Technical Expertise
                      </h4>
                      <p className="text-base leading-relaxed">
                        Skilled in modern technologies, frameworks, and tools used in{" "}
                        <span className="font-semibold text-blue-300">
                          full-stack development
                        </span>
                        ,{" "}
                        <span className="font-semibold text-purple-300">
                          real-time systems
                        </span>
                        , and{" "}
                        <span className="font-semibold text-indigo-300">
                          backend infrastructure
                        </span>
                        .
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"></div>
                        Core Competencies
                      </h4>
                      <p className="text-base leading-relaxed">
                        Proficient in{" "}
                        <span className="font-semibold text-emerald-300">
                          server-side architecture
                        </span>
                        ,{" "}
                        <span className="font-semibold text-cyan-300">
                          API development
                        </span>
                        , and{" "}
                        <span className="font-semibold text-teal-300">
                          database management
                        </span>
                        .
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                        Research & Innovation
                      </h4>
                      <p className="text-base leading-relaxed">
                        Adept at{" "}
                        <span className="font-semibold text-orange-300">
                          research
                        </span>
                        ,{" "}
                        <span className="font-semibold text-red-300">
                          data analysis
                        </span>
                        , and{" "}
                        <span className="font-semibold text-pink-300">
                          algorithm design
                        </span>
                        , with a continuous drive to learn emerging technologies and contribute to innovative, scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
        
         <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
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
                projects={work.projects}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-2xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                 
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-2xl font-bold">Skills & Technologies</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
              <div className="flex flex-wrap gap-3">
                {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.02}>
                    <Badge 
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-white/10 dark:bg-white/10 text-white dark:text-white border border-white/30 dark:border-white/30 hover:bg-white/20 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-8">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 backdrop-blur-sm border border-white/20 px-6 py-2 text-sm font-medium">
                    My Projects
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Check out my latest work</h2>
                  <p className="text-muted-foreground/90 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed leading-relaxed max-w-2xl">
                    I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here
                    are a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="grid items-center justify-center gap-6 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-6">
                <div className="inline-block rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 backdrop-blur-sm border border-white/20 px-6 py-2 text-sm font-medium">
                  Contact
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Get in Touch</h2>
                <div className="p-8 rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground/90 leading-relaxed">
                    Want to chat? Just email me at{" "}
                    <Link 
                      href={`mailto:${DATA.contact.email}`} 
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 underline decoration-2 underline-offset-4"
                    >
                      {DATA.contact.email}
                    </Link>{" "}
                    and I&apos;ll respond whenever I can. I will ignore all soliciting.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  )
}

