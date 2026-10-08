import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Social Media Application",
    category: "React, TypeScript, Firebase, JavaScript · Feb. 2025 – Apr. 2025",
    bullets: [
      "Built a database-driven social media application to develop practical experience with CRUD operations, application architecture, and backend integration.",
      "Integrated Firebase services to manage application data and support user-facing functionality.",
      "Implemented data handling and validation to improve reliability when creating, retrieving, updating, and deleting application records.",
    ],
    tags: ["React", "TypeScript", "Firebase"],
    href: "https://github.com/Tarkan-Zarrouk",
  },
  {
    title: "Computer Vision Detection System",
    category: "Python, OpenCV, YOLOv5",
    bullets: [
      "Developed computer vision prototypes for face and QR code detection using YOLOv5 and OpenCV.",
      "Worked with trained model weights and image processing pipelines to detect and classify visual features.",
      "Explored object detection and computer vision techniques for real-world recognition tasks.",
    ],
    tags: ["Python", "OpenCV", "YOLOv5"],
    href: "https://www.linkedin.com/in/tarkan-zarrouk/",
  },
  {
    title: "Real-Time Tracking System",
    category: "Python, MediaPipe, Arduino",
    bullets: [
      "Experimented with MediaPipe-based tracking and integrated visual input with Arduino-controlled hardware.",
      "Connected software processing with physical actuator control to explore interactive tracking systems.",
    ],
    tags: ["Python", "MediaPipe", "Arduino"],
    href: "https://www.linkedin.com/in/tarkan-zarrouk/",
  },
  {
    title: "Autonomous Wall-Following Robot",
    category: "C++, Arduino, Ultrasonic Sensors",
    bullets: [
      "Programmed an Arduino-powered robot to navigate autonomously using ultrasonic distance sensors and motor-control logic.",
      "Implemented obstacle detection and wall-following behaviour using sensor feedback and conditional logic.",
      "Integrated motor drivers and sensors to coordinate movement and respond to environmental conditions.",
    ],
    tags: ["C++", "Arduino", "Robotics"],
    href: "https://github.com/Tarkan-Zarrouk/Arduino-Projects",
  },
  {
    title: "Minecraft mod",
    category: "Open source / Java",
    bullets: [
      "A quality-of-life Minecraft mod built to test ideas against a real codebase and make everyday play more useful.",
    ],
    tags: ["Java", "Fabric", "Open source"],
    href: "https://github.com/Tarkan-Zarrouk/meow-client",
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="project-grid">{projects.map((project) => <a className="project-tile reveal" href={project.href} target="_blank" rel="noreferrer" key={project.title}><div className="project-tile-top"><span>{project.category}</span></div><h3>{project.title}</h3><ul className="project-bullets">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><span className="card-arrow">View project <ArrowUpRight size={14} /></span></a>)}</div>
    </section>
  );
}
