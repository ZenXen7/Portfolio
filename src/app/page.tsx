import { AnimatedBackground } from "@/components/animated-background"
import { FloatingShapesBackground } from "@/components/floating-shapes-background"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { ProjectCard } from "@/components/project-card"
import { ResumeCard } from "@/components/resume-card"
import { TypewriterText } from "@/components/typewriter-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DATA } from "@/data/resume"
import Link from "next/link"
import Markdown from "react-markdown"

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <>
    <AnimatedBackground />
      <FloatingShapesBackground />
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-3">
                <TypewriterText
                  delay={500}
                  speed={100}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  text={`Hi, I'm ${DATA.initials} 😼`}
                />
                <BlurFadeText className="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY} text={DATA.description} />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} className="object-cover object-center" src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
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
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  key={work.company}
                  href={work.href}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  period={`${work.start} - ${work.end}`}
                  description={work.description.join(" • ")}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here
                    are a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
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
        <section id="research">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Research
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conference presentations</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Research on computer vision and language models for real-time athletic form correction.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3">
              {DATA.research.map((item, id) => (
                <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                  <Card className="border">
                    <CardHeader className="space-y-2 p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{item.date}</Badge>
                        <span className="text-xs text-muted-foreground">{item.venue}</span>
                      </div>
                      <CardTitle className="text-base leading-snug">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <ul className="space-y-2 text-xs">
                        {item.description.map((point) => (
                          <li key={point} className="flex items-start">
                            <span className="mr-2 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just email me at{" "}
                  <Link href={`mailto:${DATA.contact.email}`} className="text-blue-500 hover:underline">
                    {DATA.contact.email}
                  </Link>{" "}
                  and I&apos;ll respond whenever I can.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  )
}

