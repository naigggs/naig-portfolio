import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gian Cabigting",
  initials: "GC",
  url: "https://github.com/naigggs",
  location: "Angeles City, Pampanga",
  locationLink:
    "https://www.google.com/maps/place/Angeles,+Pampanga/@15.1464935,120.477218,12z/data=!3m1!4b1!4m6!3m5!1s0x3396f286eed2e61f:0x3ded82248ad9b436!8m2!3d15.1449853!4d120.5887029!16zL20vMDNnN2Jn?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
  description:
    "Future full-stack dev building web experiences with Django, ReactJS, NextJS & TypeScript Open to connect & collaborate!",
  summary:
    "Dedicated web developer with a focus on building dynamic and user-centric applications. Skilled in crafting full-stack solutions, including robust APIs and efficient database management. Possessing a strong understanding of application logic and data flow, I strive to deliver exceptional web experiences.",
  avatarUrl: "/close-up.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Django",
    "Angular",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gdcabigting@gmail.com",
    tel: "+639219231350",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/naigggs",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gian-cabigting-3547bb267/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:gdcabigting@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "IT Squarehub",
      href: "#",
      badges: ["Internship"],
      location: "",
      title: "Full-Stacked Software Developer Intern",
      logoUrl: "/its.png",
      start: "Nov 2024",
      end: "Jan 2025",
      description:
        "I designed and deployed a comprehensive performance management system, tailored to meet organizational needs and improve efficiency. This system included features for goal tracking, performance reviews, and data analysis, streamlining the evaluation process. By integrating user feedback and leveraging modern technologies, I ensured the platform was intuitive and scalable, optimizing employee performance management across the organization.",
    },
    {
      company: "Delivio",
      href: "#",
      badges: ["Discontinued"],
      location: "Remote",
      title: "Full-Stacked Developer",
      logoUrl: "/",
      start: "April 2024",
      end: "July 2024",
      description:
        "I collaborated with both local and remote colleagues to create and oversee wireframe designs based on client requests. Additionally, I designed and developed web applications using JavaScript frameworks, particularly React.js, ensuring they met client specifications and delivered optimal user experiences.",
    },
  ],
  education: [
    {
      school: "Holy Angel University",
      href: "https://www.hau.edu.ph/",
      degree: "BS Computer Engineering",
      logoUrl: "/hau.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "ACSCI",
      href: "#",
      degree: "STEM - Senior High School",
      logoUrl: "/waterloo.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "CMRICTHS",
      href: "#",
      degree: "Junior High School",
      logoUrl: "/laurier.png",
      start: "2013",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Clippy.AI",
      href: "#",
      dates: "May 2021 - May 2022",
      active: false,
      category: "web",
      description:
        "Developed Clippy.AI, an advanced platform that maximizes YouTube video engagement by summarizing content and enabling interactive Q&A using state-of-the-art AI technology.",
      technologies: [
        "Next.js",
        "Typescript",
        "Django",
        "Python",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/clippy-web",
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "Delivio",
      href: "",
      dates: "April 2024 - July 2024",
      active: true,
      category: "web",
      description:
        "Developed a freelance platform tailored for truck drivers, facilitating connections with fellow drivers and clients, sharing experiences, and fostering a strong community.",
      technologies: [
        "React.js",
        "NextJS",
        "PostgreSQL",
        "Supbase",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/delivio-web",
        },
      ],
      image: "",
      video: "#",
    },

    {
      title: "Konstrakt",
      href: "#",
      dates: "July 2024 - October 2024",
      active: false,
      category: "web",
      description:
        "A web application designed to connect construction workers with freelance opportunities, enabling them to showcase their skills and find work in their local area.",
      technologies: ["Django", "Python", "DBSqlite", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/whiteboard-web",
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "HAU2Park",
      href: "",
      dates: "November 2024 - March 2025",
      active: true,
      category: "web",
      description:
        "A web application that simplifies parking at HAU by providing real-time parking availability, allowing users to reserve spots in advance and receive notifications when their spot is ready.",
      technologies: [
        "React.js",
        "NextJS",
        "PostgreSQL",
        "Supbase",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/hau2park.web",
        },
      ],
      image: "",
      video: "#",
    },
  ],
  projectspage: [
    {
      title: "HAU2Park",
      href: "/projects/hau2park",
      category: "web",
      dates: "November 2024 - March 2025",
      active: true,
      description:
        "A web application that simplifies parking at HAU by providing real-time parking availability, allowing users to reserve spots in advance and receive notifications when their spot is ready.",
      technologies: [
        "React.js",
        "NextJS",
        "PostgreSQL",
        "Supbase",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/hau2park.web",
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "Classification of Mushroom",
      href: "/projects/classification-of-mushroom",
      category: "data",
      dates: "July 2024 - October 2024",
      active: true,
      description:
        "This project focuses on developing a binary classification model to accurately predict whether a mushroom is edible or poisonous based on a given dataset. The goal is to create a reliable model that can assist in identifying potentially harmful mushrooms.",
      technologies: ["Numpy", "Python", "XGBoost", "Model"],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/hau2park.web",
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "Konstrakt",
      href: "/projects/konstrakt",
      category: "web",
      dates: "July 2024 - October 2024",
      active: false,
      description:
        "A web application designed to connect construction workers with freelance opportunities, enabling them to showcase their skills and find work in their local area.",
      technologies: ["Django", "Python", "DBSqlite", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/whiteboard-web",
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "Delivio",
      href: "/projects/delivio",
      dates: "April 2024 - July 2024",
      category: "web",
      active: true,
      description:
        "Developed a freelance platform tailored for truck drivers, facilitating connections with fellow drivers and clients, sharing experiences, and fostering a strong community.",
      technologies: [
        "React.js",
        "NextJS",
        "PostgreSQL",
        "Supbase",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/delivio-web",
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "Clippy.AI",
      href: "/projects/clippy-ai",
      dates: "July 2023 - November 2024",
      category: "web",
      active: false,
      description:
        "Developed Clippy.AI, an advanced platform that maximizes YouTube video engagement by summarizing content and enabling interactive Q&A using state-of-the-art AI technology.",
      technologies: [
        "Next.js",
        "Typescript",
        "Django",
        "Python",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/clippy-web",
        },
      ],
      image: "",
      video: "#",
    },

    {
      title: "Netflix Clone",
      href: "/projects/hau2park",
      category: "web",
      dates: "November 2022 - March 2023",
      active: true,
      description:
        "A web application that simplifies parking at HAU by providing real-time parking availability, allowing users to reserve spots in advance and receive notifications when their spot is ready.",
      technologies: ["React.js", "DBSQLite", "Django", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/hau2park.web",
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "Whiteboard LMS",
      href: "/projects/hau2park",
      category: "web",
      dates: "July 2022 - November 2022",
      active: true,
      description:
        "Whiteboard is a learning management system (LMS) built using the Django web framework. An LMS is a software application designed to help educators manage, deliver, and track course content and student learning. ",
      technologies: ["Django", "Python", "DBSQLite", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/naigggs/hau2park.web",
        },
      ],
      image: "",
      video: "#",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
