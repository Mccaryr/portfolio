import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  camvio,
  bcbssc,
  scdc,
  mccarys
} from "../assets";

const wisneyImages = import.meta.glob("../assets/wisney/*.png", { eager: true });
const kaijuImages = import.meta.glob("../assets/kaiju/*.png", { eager: true });
const rfdImages = import.meta.glob("../assets/recipe-app/*.png", { eager: true });
const fafImages = import.meta.glob("../assets/find-a-friend/*.png", { eager: true });

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"recent projects",
    title: "Recent projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Middleware Developer",
    company_name: "BlueCross BlueShield (Contract)",
    icon: bcbssc,
    iconBg: "#5255C7",
    date: "April 2024 - September 2024",
    points: [
      "Developed Restful APIs that integrated with a myriad of back-end architectures (host, SOAP, xslt, MQ)",
      "Collaborated with large diverse teams within AGILE and Waterfall environments and communicated needs and challenges to stakeholders",
      "Troubleshot high volume of varied network trouble tickets from front-end issues to middleware to back-end services using a diversified toolset (SPLUNK, APIC, ReadyAPI, SQL queries)",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Camvio",
    icon: camvio,
    iconBg: "#383E56",
    date: "September 2022 - April 2024",
    points: [
      "Developed and Improved Billing SaaS that supported Provisioning, Billing, Account Management and more for large sized businesses.",
      "Created host of new features for React.js/Redux front-end and Java Spring back-end while maintaining quality and consistency.",
      "Created and Improved Python scripts for webhooks, data cleanup, and data management.",
      "Participated in code reviews, product development, and Sprint planning. (AWS CodeCommit, JIRA, AGILE)",
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "SC Dept. of Corrections",
    icon: scdc,
    iconBg: "#E6DEDD",
    date: "October 2019 - August 2022",
    points: [
      "Collaborated on Covid counter measure applications which included call tracing and health screenings.",
      "Created React/Redux template for a future SCDC applications.",
      "Worked on high security internal applications designed to manage Inmates which included reporting measures for oversight authorities",
      "Contributed to internal wiki for best practices using Microsoft Powerapps, Power Automate, and other technologies",
    ],
  },
  {
    title: "Operations Manager",
    company_name: "McCary's Sports Bar",
    icon: mccarys,
    iconBg: "#383E56",
    date: "September 2016 - August 2019",
    points: [
      "Daily operations included inventory management, event planning, employee training, reporting.",
      "Doubled profit from previous fiscal years by updating income and costs practices.",
      "Installed Point of Sale to track inventory/sales and developed menu.",
      "Launched advertising campaign to extend reach of company and bolstered business.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rob proved me wrong.",
    name: "Oscar Frink",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rob does.",
    name: "Don Sloth",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rob optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Matt Vinson",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const portfolioProjects = [
  {
    name: "Kaiju",
    images: Object.values(kaijuImages).map((img) => img.default),
    techStack: "React | Tailwind | Spring | Postgres | AWS Lambda",
    github: "https://github.com/Mccaryr/kaiju",
    liveDemo: "https://kaiju-mke1.onrender.com/",
    description: "Task Management app. React front-end, Spring Boot back-end, Postgres database",
  },
  {
    name: "Dalt Wisney",
    images: Object.values(wisneyImages).map((img) => img.default),
    techStack: "React | Redux | Node.js | NoSQL",
    github: "https://github.com/Mccaryr/dalt-wisney-ecommerce",
    liveDemo: "https://dalt-wisney-ecommerce.onrender.com/",
    description: "E-commerce app. React front-end, Node.js back-end, NoSQL database",
  },
  {
    name: "Recipe for Disaster",
    images: Object.values(rfdImages).map((img) => img.default),
    techStack: "Next | Tailwind | Postgres",
    github: "https://github.com/Mccaryr/recipe-for-disaster",
    liveDemo: "https://recipe-for-disaster-liart.vercel.app/",
    description: "Recipe app. Next.js for SSR, Tailwind for styling, Postgres database",
  },
  {
    name: "Fetch A Friend",
    images: Object.values(fafImages).map((img) => img.default),
    techStack: "React | SCSS | Jest",
    github: "https://github.com/Mccaryr/fetch-a-friend",
    liveDemo: "https://fetch-a-friend-eight.vercel.app/",
    description: "Dog Adoption site that has pagination, advanced filtering, and robust testing",
  },
];
export { services, technologies, experiences, testimonials, portfolioProjects };
