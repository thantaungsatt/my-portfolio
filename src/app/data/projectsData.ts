export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mobile Phone Shop",
    description: "Frontend e-commerce application with payment integration and user authentication.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/thantaungsatt/FirstHtmlPJ.git",
    category: "Frontend"
  },
  {
    id: 2,
    title: "My Todo App",
    description: "Full-stack todo app with Spring Boot backend and Thymeleaf frontend, CRUD operations.",
    techStack: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/thantaungsatt/my-todo.git",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Responsive portfolio website built with modern UI/UX principles and smooth animations.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveDemo: "https://my-portfolio-chi-pied-11.vercel.app/",
    github: "https://github.com/thantaungsatt/Portfolio.git",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Blog Website",
    description: "RESTful blog API with JWT authentication, CRUD operations, and pagination support.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/thantaungsatt/documentary-website-frontend.git",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Blog Website",
    description: "RESTful blog API with JWT authentication, CRUD operations, and pagination support.",
    techStack: ["Java", "Spring Boot", "MySQL", "JWT", "Spring Security"],
    github: "https://github.com/thantaungsatt/documentary-website.git",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Number Guess Game",
    description: "Guess the number be happy.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/thantaungsatt/Number-Guess-Game.git",
    category: "Frontend"
  },
  {
    id: 7,
    title: "Student Management System",
    description: "RESTful API test with Postman, CRUD operations .",
    techStack: ["Java", "Spring Boot", "MySQL", "RestApi", "Postman"],
    github: "https://github.com/thantaungsatt/student-management.git",
    category: "Backend"
  }
];
