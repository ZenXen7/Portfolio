import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "KC Ajero - Portfolio",
  initials: "KC",
  url: "https://github.com/ZenXen7",
  location: "Cebu City, Ceb",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
"Web developer passionate about AI, frontend frameworks, and building impactful digital experiences.",
  summary:
    "I'm a 3rd-year BSCS student with a strong focus on web development and AI. I specialize in building web applicions using React, Next.js and Vue.js. I also have experience in developing Mobile Applications using React Native and Expo, while also exploring AI-driven applications. Beyond that, I have experience with Java, C++, C, and Assembly. Always building, always learning.",
  avatarUrl: "/me-pic.jpg",
  skills: [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "AI/ML",
    "Java",
    "C++",
    "C",
    "Assembly"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "karlchristianajero@gmail.com",
    tel: "+63 09155483788",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ZenXen7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kc-ajero/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Zenxen77",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@zenxen7005",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  
  education: [
    {
      school: "Cebu Institute of Technology",
      href: "https://cit.edu",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/logo-cit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Mater Dei College",
      href: "https://www.facebook.com/mdctubigon/",
      degree: "Senior High Student, Majoring in STEM Engineering",
      logoUrl: "/mdc-logo.png",
      start: "2020",
      end: "2022",
    },
    
   
  ],
  projects: [
    {
      title: "Valentine's Website",
      href: "https://for-vera.vercel.app",
      dates: "Feb 2025",
      active: true,
      description:
        "Made a website to celebrate spending Valentine's with my girlfriend. Wanted to be quirky so yeah.",
      technologies: [
        "Next.js",
        "Vercel Deployment",
        "Shadcn",
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://for-vera.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/for-ver.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Shrimp Sense",
      href: "https://github.com/fynn07/white-leg-shrimp-management",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Monitor, predict, and optimize shrimp farming with data-driven insights and real-time analytics. ShrimpSense ensures optimal water quality, disease prevention, and farm efficiency using AI-powered technology.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/fynn07/white-leg-shrimp-management",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fynn07/white-leg-shrimp-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shrimp-res.png",
      video: "",
    },
    {
      title: "HealthBook - Website",
      href: "https://github.com/fynn07/healthcare-management-system",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "Seamlessly manage medical records and healthcare identification using a powerful digital platform designed for patients, healthcare providers, and hospital administrators.",
      technologies: [
       "HTML",
       "Python",
       "Django",
       "Tailwind CSS",
       "ASP.net",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/fynn07/healthcare-management-system",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fynn07/healthcare-management-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/health-book.png",
      video: "",
    },
    {
      title: "HealthBook - App",
      href: "https://github.com/fynn07/healthcare-management-system",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "The mobile version of the HealthBook experience.",
      technologies: [
        "React Native",
        "NativeWind",
        "Appwrite",
        "Expo",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/fynn07/healthcare-management-system",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hb-app.png",
      video:
        "",
    },
  ],
  
} as const;
