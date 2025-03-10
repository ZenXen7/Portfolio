import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "KC Ajero - Portfolio",
  initials: "KC",
  url: "https://github.com/ZenXen7",
  location: "Cebu City, Cebu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
  "Full-stack web developer passionate about AI, frontend frameworks, and building impactful digital experiences.",
  summary:
  "I'm a 3rd-year BSCS student with a strong focus on full-stack web development and AI. I specialize in building web applications using React, Next.js, and Vue.js, as well as RESTful APIs and backend services with Node.js, Express, and MongoDB. I have experience developing mobile applications using React Native and Expo while also exploring AI-driven applications. Beyond that, I have experience with Java, C++, C, and Assembly. Always building, always learning.",
  avatarUrl: "/me-pic.jpg",
  skills: [
    "Next.js",
    "React",
    "Vite",
    "React Native",
    "TypeScript",
    "Node.js",
    "Python",
    "Express",
    "Postman",
    "SQL",
    "Appwrite",
    "Firebase",
    "Supabase",
    "MongoDB", 
    "PostgreSQL",
    "AWS",
    "Appwrite",
    "Firebase",
    "Supabase",
    "Docker",
    "Javascript",
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
      title: "WildChats",
      href: "https://github.com/ZenXen7/kChat",
      dates: "March 2025 - Present",
      active: true,
      description:
        "WildChats is a real-time chat application built for Cebu Institute of Technology - University (CIT-U) students, also known as Wildcats! This platform enables seamless communication among students, faculty, and organizations, providing a modern and secure chatting experience.",
      technologies: [
        "React + Vite",
        "MongoDB",
        "Node.js",
        "Express.js",
        "TailwindCSS",
        "DaisyUI",
        "Socket.io",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/ZenXen7/WildChats",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ZenXen7/WildChats",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kChat-prev.png",
      video: "",
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
          href: "https://shrimpsense.vercel.app/landing",
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
