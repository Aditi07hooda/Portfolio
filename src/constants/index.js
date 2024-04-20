import {
  data,
  backend,
  it,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  tmobile,
  directlink,
  lcm,
  cityofsyracuse,
  angular,
  aws,
  python,
  webapi,
  foodOrder,
  startup,
  virtualLab,
  gagan,
  taskHub,
  alannguyen,
  bennichols,
  remycrespo,
  emertxe,
  aai,
  cmrit,
  java,
  drupal,
  mysql,
  bootstrap,
  figma,
  canva,
  express
} from "../assets";

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
    title: "Website Designer",
    icon: data,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: it,
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
    name: "Express JS",
    icon: express,
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
    name: "Drupal",
    icon: drupal,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Airport Authority of India",
    icon: aai,
    iconBg: "#ffffff",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Led the development of the Gagan website using Drupal software, contributing to a vital project for the Airport Authority of India.",
      "Implemented Drupal for website building, showcasing adaptability to varied web development tools.",
      "Engaged in tasks ranging from backend functionalities to ensuring a user-friendly frontend experience.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name:
      "Emertxe Institute for Embedded Systems and IOT courses with guaranteed placements",
    icon: emertxe,
    iconBg: "#ffffff",
    date: "16th Aug 2023 - 16th Oct 2023",
    points: [
      "Spearheaded MERN (MongoDB, Express.js, React.js, Node.js) Stack projects, gaining hands-on experience in full-stack development by making an E-commerce website - Food Order website.",
      "Contributed to the development of dynamic web applications, utilizing React.js for frontend and Node.js with Express.js for backend functionalities And Implemented MongoDB for efficient data storage, retrieval, and seamless integration within the MERN stack architecture.",
    ],
  },
  {
    title: "UI/UX DESIGNER",
    company_name: "CMR Institute of Technology",
    icon: cmrit,
    iconBg: "#ffffff",
    date: "16th Oct 2022 - 16th Nov 2022",
    points: [
      "Collaborated with design teams, applying principles of user experience to enhance website functionality and aesthetic appeal.",
      "Applied design thinking methodologies to create intuitive and engaging user interfaces, ensuring seamless user experiences.",
      "Developed a deep understanding of Figma, utilizing the tool for designing and prototyping interfaces that align with user expectations.",
    ],
  },
  {
    title: "IOT INTERN",
    company_name:
      "Emertxe Institute for Embedded Systems and IOT courses with guaranteed placements",
    icon: emertxe,
    iconBg: "#ffffff",
    date: "16th Nov 2022 - 3rd Jan 2023",
    points: [
      "Led projects integrating devices and sensors for IoT applications And Implemented efficient hardware-software solutions for connectivity.",
      "Contributed to a dynamic learning environment within the internship.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was particularly impressed with Daniel's ability to execute independently including research, prototyping, and productionization.",
    name: "Ben Nichols",
    designation: "ML Product Manager",
    company: "Directlink.ai",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image: bennichols,
  },
  {
    testimonial:
      "His honesty, grit, and professionalism were evident in the way he completed his projects, working with multiple departments to ensure success.",
    name: "Remy Crespo",
    designation: "Recruiting Manager",
    company: "T-Mobile",
    image: remycrespo,
  },
  {
    testimonial:
      "Daniel’s proactive approach in seeking opportunities to improve our education technology and innovating through organizing, documenting, and automating processes, demonstrates his dedication to improving not only his knowledge but the schools posture and stands out as a competitive hire.",
    name: "Alan Nguyen",
    designation: "Sales Engineer",
    company: "Cloudflare",
    image: alannguyen,
  },
];

const projects = [
  {
    name: "TaskHub",
    description:
      "Web-based platform that allows users to ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "orange-text-gradient",
      },
    ],
    image: taskHub,
    source_code_link: "https://github.com/Aditi07hooda/TaskHub",
  },
  {
    name: "Food Delivery",
    description:
      "Full-stack web application for a food delivery service",
    tags: [
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "purple-text-gradient",
      },
    ],
    image: foodOrder,
    source_code_link: "https://github.com/Aditi07hooda/FoodDelivery",
  },
  {
    name: "Startup",
    description:
      "Web Application for managing startup club activities for the college",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "purple-text-gradient",
      },
    ],
    image: startup,
    source_code_link: "https://startup-website-beige.vercel.app/",
  },
  {
    name: "TodoApp",
    description:
      "Web application that allows users to perform CRUD operation with authentication",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "purple-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: webapi,
    source_code_link: "https://github.com/Aditi07hooda/Todoapp",
  },
  {
    name: "Virtual Lab",
    description:
      "Web application of virtual lab for colleges",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: virtualLab,
    source_code_link:
      "https://github.com/Aditi07hooda/Virtual-Lab",
  },
  {
    name: "AAI Gagan",
    description:
      "Gagan website for Airport Authority of India",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "purple-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: gagan,
    source_code_link: "https://github.com/Aditi07hooda/AAI_Gagan",
  },
];

export { services, technologies, experiences, testimonials, projects };
