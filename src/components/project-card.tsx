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
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly (string | undefined)[]; 
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
    <Card
      className={cn(
        "group relative overflow-hidden bg-white/5 dark:bg-white/3 backdrop-blur-md border border-white/30 dark:border-white/20 hover:border-white/50 dark:hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/10 hover:scale-[1.02] h-full flex flex-col",
        className
      )}
    >
      {/* Enhanced gradient overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 dark:from-white/10 dark:to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image/Video Section */}
      {(video || image) && (
        <Link href={href || "#"} className="block">
          <div className="relative overflow-hidden">
            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none h-48 w-full object-cover object-top"
              />
            )}
            {image && (
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-48 w-full object-cover object-top"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </Link>
      )}
      
      {/* Content Section */}
      <div className="relative p-6 flex flex-col flex-1">
        {/* Header Section */}
        <div className="space-y-3 flex-1">
          <div className="flex items-start justify-between gap-3">
            <Link href={href || "#"} className="flex-1 min-w-0">
              <CardTitle className="text-lg font-bold leading-tight text-white hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                {title}
              </CardTitle>
            </Link>
            <time className="flex-shrink-0 font-medium text-xs text-white/90 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 whitespace-nowrap">
              {dates}
            </time>
          </div>
          
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          
          <div className="prose prose-invert max-w-none">
            <Markdown className="text-sm text-white/95 leading-relaxed [&>p]:text-white/95 [&>p]:mb-1 [&>p:last-child]:mb-0 [&>strong]:text-white [&>em]:text-white/90">
              {description}
            </Markdown>
          </div>
        </div>
        
        {/* Footer Section */}
        <div className="space-y-3 mt-4">
          {/* Technology Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge
                  className="px-3 py-1 text-xs font-medium bg-white/10 text-white/95 border border-white/30 hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-md"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Action Links */}
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-center gap-2 w-full pt-3 border-t border-white/15">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank" className="group/link">
                  <Badge className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-white/15 text-white/95 hover:bg-white/25 border border-white/40 hover:border-white/50 transition-all duration-300 group-hover/link:scale-105 backdrop-blur-md">
                    <span className="transition-transform duration-300 group-hover/link:scale-110">
                      {link.icon}
                    </span>
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
