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
      url: "/web-development",
      icon: Globe,
      isActive: true,
      items: [
        {
          title: "Clippy.AI",
          url: "/web-development/clippy-ai",
        },
        {
          title: "Delivio",
          url: "/web-development/delivio",
        },
        {
          title: "Konstrakt",
          url: "/web-development/konstrakt",
        },
        {
          title: "HAU2Park",
          url: "/web-development/hau2park",
        },
        {
          title: "Netflix Clone",
          url: "/web-development/netflix-clone",
        },
        {
          title: "Whiteboard LMS",
          url: "/web-development/whiteboard-lms",
        },
      ],
    },
    {
      title: "Data Science",
      url: "/data-science",
      icon: SquareTerminal,
      items: [
        {
          title: "Mushroom Classification",
          url: "/data-science/mushroom-classification",
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
      url: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
    },
  ],
};
