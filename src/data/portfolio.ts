export const personalInfo = {
  name: "Geryko Luis Manarang",
  title: "Software Engineering Graduate",
  tagline: "Eager to build practical software solutions for real-world problems.",
  email: "gerykoluis07@gmail.com",
  location: "Pampanga",
  github: "https://github.com/EchoEchoooo?tab=repositories",
  linkedin: "https://www.linkedin.com/in/geryko-luis-manarang-b2011427a/",
  resumeUrl: "https://drive.google.com/file/d/1e_XkGw7dJ_sQ0VvqR5iCXQlegY3UudX3/view?usp=sharing",
  avatarUrl: "/avatar.png",
  bio: [
    "I am proficient in problem-solving, algorithm design, and software development principles.",
    "I value communication, teamwork, and continuous learning, and I am eager to contribute to innovative projects while growing my industry experience.",
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C#", level: 70 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", level: 88 },
      { name: "ASP.NET", level: 70 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "SQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CariDent AI Medix",
    description:
      "Developed a mobile app with a team using CNN and YOLOv8 for accurate dental caries detection and classification, including image preprocessing, feature extraction, and report sharing with dental clinics.",
    tags: ["Python", "CNN", "YOLOv8", "Mobile App", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
    liveUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "CS Expo Website",
    description:
      "Collaborated with a team to develop a static CS Expo website for an annual event showcasing senior thesis projects to faculty, students, and guests.",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    image: "/Expo.png",
    liveUrl: "https://cs-expo-2024-iota.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Pastry Shop & Cafe Website",
    description:
      "Developed a responsive pastry shop and cafe website with a structured menu interface and modern user interface design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    image: "/21st Bean.png",
    liveUrl: "",
    githubUrl: "https://github.com/EchoEchoooo",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Nomis Asia Limited",
    period: "December 2024 - July 2025",
    location: "Makati City",
    description:
      "Collaborated with a team to migrate an API to .NET 8, improving compatibility, performance, and security while ensuring seamless integration and functionality.",
    technologies: [".NET 8", "C#", "API Migration"],
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
