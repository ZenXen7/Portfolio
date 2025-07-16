"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
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
  projects?: readonly {
    readonly name: string;
    readonly description: string;
    readonly color?: string;
    readonly link?: string;
  }[];
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
  projects,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleChevronClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card 
      className="relative overflow-hidden bg-white/5 dark:bg-white/3 backdrop-blur-md border border-white/30 dark:border-white/20 hover:border-white/50 dark:hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* Enhanced gradient overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 dark:from-white/10 dark:to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex p-6">
        <div className="flex-none">
          <div className="relative">
            {/* Avatar glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <Avatar className="relative border-2 border-white/20 size-14 m-auto bg-white/20 dark:bg-white/10 backdrop-blur-sm">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-400 text-white font-bold">{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex-grow ml-6 items-center flex-col">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-bold leading-none text-lg sm:text-xl">
                {href ? (
                  <Link 
                    href={href} 
                    target="_blank"
                    className="hover:underline transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {title}
                  </Link>
                ) : (
                  title
                )}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-sm bg-white/15 dark:bg-white/10 border border-white/30 hover:bg-white/25 dark:hover:bg-white/20 transition-colors backdrop-blur-md"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-5 translate-x-0 transform opacity-70 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 ml-2",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                  onClick={handleChevronClick}
                />
              </h3>
              <div className="text-sm sm:text-base tabular-nums text-muted-foreground/80 text-right font-medium">
                {period}
              </div>
             
            </div>
            {subtitle && <div className="font-sans text-base text-muted-foreground/90 mt-2">{subtitle}</div>}
          </CardHeader>
          {(description || projects) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-base"
            >
              {description && (
                <div className="mb-6 p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/25 dark:border-white/15 backdrop-blur-md">
                  <p className="text-muted-foreground/90 leading-relaxed text-base">{description}</p>
                </div>
              )}
              {projects && projects.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-base flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    Projects:
                  </h4>
                  <div className="grid gap-3">
                    {projects.map((project, index) => (
                      <div key={index} className="group/project p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/25 dark:border-white/15 hover:border-white/35 dark:hover:border-white/25 transition-all duration-300 hover:shadow-lg backdrop-blur-md">
                        {project.link ? (
                          <Link href={project.link} target="_blank" className="group/link" onClick={(e) => e.stopPropagation()}>
                            <h5 
                              className="font-semibold text-base mb-2 transition-all duration-300 hover:underline cursor-pointer" 
                              style={{ color: project.color || '#ffffff' }}
                            >
                              {project.name}
                            </h5>
                          </Link>
                        ) : (
                          <h5 
                            className="font-semibold text-base mb-2 text-foreground/90 group-hover/project:text-foreground transition-colors"
                            style={{ color: project.color || undefined }}
                          >
                            {project.name}
                          </h5>
                        )}
                        <p className="text-sm text-muted-foreground/80 leading-relaxed">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  );
};
