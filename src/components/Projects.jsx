const projects = [
  {
    title: "Social Media Application",
    category: "React, TypeScript, Firebase, JavaScript · Feb. 2025 – Apr. 2025",
    bullets: [
      "Built a database-driven social media application to develop practical experience with CRUD operations, application architecture, and backend integration.",
      "Integrated Firebase services to manage application data and support user-facing functionality.",
      "Implemented data handling and validation to improve reliability when creating, retrieving, updating, and deleting application records.",
    ],
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
    href: "https://www.linkedin.com/in/tarkan-zarrouk/",
  },
  {
    title: "Real-Time Tracking System",
    category: "Python, MediaPipe, Arduino",
    bullets: [
      "Experimented with MediaPipe-based tracking and integrated visual input with Arduino-controlled hardware.",
      "Connected software processing with physical actuator control to explore interactive tracking systems.",
    ],
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
    href: "https://github.com/Tarkan-Zarrouk/Arduino-Projects",
  },
  {
    title: "Minecraft mod",
    category: "Open source / Java",
    bullets: [
      "After Minecraft stopped obfuscating their codebase, I dove into their Java Bytecode and decompiled it with mappings to improve readability and test my skills in making a mod that involves featuers I wished minecraft would integrate!",
    ],
    href: "https://github.com/Tarkan-Zarrouk/meow-client",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-line px-[42px] pb-[150px] pt-[145px] max-md:px-[22px] max-md:pb-[95px] max-md:pt-[90px]" id="projects">
      <div className="grid grid-cols-2 gap-[15px] max-md:grid-cols-1">
        {projects.map((project) => (
          <a
            className="flex min-h-[430px] flex-col bg-tile p-[29px] text-ink transition-transform hover:-translate-y-1.5 hover:bg-tile-hover max-md:min-h-0"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <div className="flex justify-start text-[11px] text-muted">
              <span>{project.category}</span>
            </div>
            <h3 className="my-[28px] text-[clamp(26px,3vw,40px)] font-bold leading-none tracking-[-0.08em]">
              {project.title}
            </h3>
            <ul className="m-0 list-disc pl-[18px] text-xs leading-[1.7] text-muted">
              {project.bullets.map((bullet) => (
                <li className="mb-2 pl-1" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
