import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "KC Ajero - Portfolio",
  initials: "KC",
  url: "https://github.com/ZenXen7",
  location: "Cebu City, Cebu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
  "Full Stack Developer passionate about frontend frameworks, mobile development and building impactful digital experiences.",
  summary:
  "Passionate and detail-oriented 4th-year Computer Science student with a solid foundation in software development, problem-solving, and real-world application design. Experienced as a Full Stack Developer, contributing to industry projects and collaborating in cross-functional teams. Skilled in modern technologies, frameworks, and tools used in full-stack development, real-time systems, and backend infrastructure. Proficient in server-side architecture, API development, and database management. Adept at research, data analysis, and algorithm design, with a continuous drive to learn emerging technologies and contribute to innovative, scalable solutions.",
  avatarUrl: "/me-pic.jpg",
  skills: [

    "Appwrite",
    "C",
    "C++",
    "Express", 
    "Expo",
    "Firebase",
    "Java",
    "Javascript",
    "Keras",
    "MongoDB",
    "Next.js",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Postman",
    "Pytorch",
    "Python",
    "React",
    "React Native",
    "SQL",
    "Supabase",
    "TypeScript",
    "Vite"

   
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
   work: [
    {
      company: "Symph",
      href: "https://www.symph.co/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer Intern",
      logoUrl: "/symph.png",
      start: "April 2025",
      end: "Present",
      description:
        "As a Fullstack Developer Intern at Symph, I contributed to the development and enhancement of several products and platforms across diverse domains. I worked closely with designers, engineers, and stakeholders to deliver robust features, improve user experience, and implement scalable solutions across the stack.",
      projects: [
        {
          name: "Flying Tigers Express",
          description:
            "Contributed to the development of a logistics platform offering same-day and next-day inter-island delivery services across the Philippines. Built and maintained features throughout the stack, improved user experience, and collaborated on scalable solutions.",
          color: "#fbbf24",
          link: "https://www.flyingtigers.express"
        },
        {
          name: "Gussy Design",
          description:
            "Developed and maintained core features for Gussy Design, with significant contributions to the Gussy Collage functionality. Worked alongside the team to deliver performant and engaging user-facing features.",
          color: "#d47b63",
          link: "https://gussy.design"
        },
        {
          name: "SnapProduct",
          description:
            "Contributed to the development of a speedrun product utilizing AI to generate professional-quality product photos. Implemented and refined fullstack features to support rapid prototyping and innovative workflows.",
          color: "#586cdc",
          link: "https://www.snapproduct.pro"
        },
        {
          name: "Lesson Planner",
          description:
            "Enhanced and extended features for an educator-focused lesson planning tool. Delivered user-friendly solutions for creating, organizing, and sharing lesson plans, streamlining teacher workflows.",
          color: "#3c84f4",
          link: "https://www.lessonplanner.org"
        }
      ]
    },
    ],
  
  education: [
    {
      school: "Cebu Institute of Technology",
      href: "https://cit.edu",
      degree: "Bachelor of Science in Computer Science",
      gwa: "4.2",
      logoUrl: "/logo-cit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Mater Dei College",
      href: "https://www.facebook.com/mdctubigon/",
      degree: "Senior High Student, Majoring in STEM Engineering",
      gwa: "4.5",
      logoUrl: "/mdc-logo.png",
      start: "2020",
      end: "2022",
    },
    
   
  ],
  projects: [
    {
      title: "WildChats",
      href: "https://wildchats-1.onrender.com",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "WildChats is a real-time chat application built for Cebu Institute of Technology - University (CIT-U) students, also known as Wildcats! This platform enables seamless communication among students, faculty, and organizations, providing a modern and secure chatting experience.",
      technologies: [
        "React + Vite",
        "MongoDB",
        "Express.js",
        "Socket.io",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://wildchats-1.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ZenXen7/WildChats",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wildchats.png",
      video: "",
    },
   
    {
      title: "AgriVision",
      href: "https://github.com/ZenXen7/AgriVision",
      dates: "March 2025 - March 2025",
      active: true,
      description:
        "AgriVision is a mobile application that utilizes deep learning and computer vision to detect lettuce diseases from images.",
      technologies: [
        "React Native",
        "NativeWind",
        "MERN Stack",
        "Machine Learning",
       
        
      ],
      links: [
     
        {
          type: "Source",
          href: "https://github.com/ZenXen7/AgriVision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agri.png",
      video: "",
    },
    {
      title: "ShrimpSense",
      href: "https://github.com/ZenXen7/Shrimpsense",
      dates: "Jan 2025 - Jan 2025",
      active: true,
      description:
        "Monitor, predict, and optimize shrimp farming with data-driven insights and real-time analytics. ShrimpSense ensures optimal water quality, disease prevention, and farm efficiency using AI-powered technology.",
      technologies: [
       "Next.js",
       "TailwindCSS",
       "ShadCN UI",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://shrimpsense.vercel.app/landing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ZenXen7/Shrimpsense",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shrimp-res.png",
      video: "",
    },
    {
      title: "HealthBook - App",
      href: "https://github.com/ZenXen7/HBReactNative",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "Welcome to Healthbook — a cutting-edge digital health tracker designed to manage and monitor your complete medical history all in one place! Whether it's vaccination records, prescriptions, or family health details, Healthbook is your go-to app for simplifying your healthcare management.",
      technologies: [
        "React Native",
        "NativeWind",
        "Appwrite",
        "Expo",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ZenXen7/HBReactNative",
          icon: <Icons.github className="size-3" />,
        }
        
      ],
      image: "/hb-app.png",
      video:
        "",
    },

    {
      title: "Lersch Grossman Algorithm Visualizer",
      href: "https://github.com/ZenXen7/HBReactNative",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "A lerch grossman algorithm visualizer built using Java and JavaFX. This aims to provide a visualizer for this specific algorithm using JavaFX for mining Engineers.",
      technologies: [
        "Java",
        "JavaFX",
       
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ZenXen7/HBReactNative",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lerch.png",
      video:
        "",
    },

    {
      title: "TeknoLost",
      href: "https://github.com/ZenXen7/TeknoLost",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "A lost and found mobile application developed as part of my 2nd-year project at CIT-U. Build using Android Studio, Java and Firebase for backend. The app aims to streamline the process of reporting and recovering lost objects.",
      technologies: [
        "Java",
        "Android Studio",
        "Firebase",
       
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ZenXen7/TeknoLost",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/teknolostss.png",
      video:
        "",
    },

    
  ],
  
  
} as const;
