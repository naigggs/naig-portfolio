import {
  AudioWaveform,
  Book,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Github,
  Globe,
  Home,
  Linkedin,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const data = {
  user: {
    name: "Gian Cabigting",
    email: "gdcabigting@gmail.com",
    avatar: "/logo.jpg",
  },
  navMain: [
    {
      name: "Home",
      url: "/",
      icon: Home,
      isActive: true,
    },
  ],
  projects: [
    {
      title: "Web Development",
      url: "/projects",
      icon: Globe,
      isActive: true,
      items: [
        {
          title: "Clippy.AI",
          url: "/projects/clippy-ai",
        },
        {
          title: "Delivio",
          url: "/projects/delivio",
        },
        {
          title: "Konstrakt",
          url: "/projects/konstrakt",
        },
        {
          title: "HAU2Park",
          url: "/projects/hau2park",
        },
        {
          title: "Netflix Clone",
          url: "/projects/netflix-clone",
        },
        {
          title: "Whiteboard LMS",
          url: "/projects/whiteboard-lms",
        },
      ],
    },
    {
      title: "Data Science",
      url: "/projects",
      icon: SquareTerminal,
      items: [
        {
          title: "Mushroom Classification",
          url: "/projects/mushroom-classification",
        },
      ],
    },
  ],
  blogs: [
    {
      title: "Blogs",
      url: "/blogs",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Your Portfolio Power-Up!",
          url: "/blogs/your-portfolio-power-up",
        },
      ],
    },
  ],
  socials: [
    {
      name: "Github",
      url: "https://github.com/naigggs",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gian-cabigting-3547bb267/",
      icon: Linkedin,
    },
  ],
};
