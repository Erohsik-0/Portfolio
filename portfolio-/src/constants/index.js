import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = 'I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technology like React, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that deliver exceptional user experiences.';

export const ABOUT_TEXT = 'An aspiring engineer with knowledge in software engineering practices such as coding, testing, code reviews, code comments, etc. Strong ability to communicate with clients and ability to express ideas clearly and concisely.';

export const PROJECTS = [
  {
    title: "Employee Management System usin JAVA",
    image: project1,
    description:
      "Managing employees official and personal details with JAVA programming. By utilizing the power of JDBC and MySQL to store all the employees information. With admin's login, you can easily access the details of each employee. Meanwhile, with employee login, you can view specific information of your own and your company.",
    technologies: ["JAVA", "JDBC", "MySQL"],
  },
  {
    title: "Online Shopping Cart Management",
    image: project2,
    description:
      "I led the creation of an online shopping cart in my academic project, utilizing data structures for optimal user experiences. Our dynamic platform seamlessly integrates innovative data management, ensuring secure transaction. This experience showcases my technical prowess in delivering complex software systems.",
    technologies: ["Python", "MySQL", "Data Structuers"],
  },
  {
    title: "Gesture Recognition System using Machine Learning and Pattern Recognition",
    image: project3,
    description:
      "Refining my skills in machine learning, I initiated a Gesture Recognition System in Python, integrating machine learning and pattern recognition. This hands-on project demonstrates my commitment to learning and application, showcasing my evolving expertise at the intersection of technology and user-centric solutions.",
    technologies: ["Python", "TensorFlow", "Image Processing", "CNN"],
  },
  {
    title: "Bluetooth Controlled Robotic Arm",
    image: project4,
    description:
      "This is basically a Bluetooth controlled robotic arm with HC-05 Bluetooth module. You can send the signal from the mobile application and the HC-05 and PWM module operates the arm according to the commands given. This project showcases the expertise in embedded system.",
    technologies: ["Arduino UNO", "Arduino IDE", "Servos"],
  },
  {
    title : "StyleSphere - E-Commerece Application",
    image : project5,
    description:"A comprehensive e-commerce platform built with ASP.NET Core MVC and C#. Features include user authentication, product catalog management, shopping cart functionality, order processing, and admin dashboard. Integrated with SQL Server for robust data management and implemented secure payment processing.",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap", "JavaScript"],
  },
  {
    title : "Calendar Application",
    image : project6,
    description : "A calendar application UI inspired by Microsoft Teams calendar, built using ASP.NET Core MVC. Developed comprehensive user interface with event planning and scheduling logic. Utilized FullCalendar API for interactive calendar functionality and responsive design. Focus on frontend implementation and event management workflows.",
    technologies : ["ASP.NET Core MVC", "C#", "FullCalendar API", "JavaScript", "Bootstrap", "CSS"],
  },
  {
    title : "TV Broadcast Scheduler",
    image : project7,
    description : "A role-based TV broadcast scheduling application that manages programming schedules with different user roles. Features include content scheduling, role-based access control, broadcast timeline management, and reporting. Each role has specific permissions for different scheduling activities.",
    technologies : ["ASP.NET Core MVC", "C#", "SQL Server", "Identity Framework", "Chart.js", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "TIRUPUR, TAMILNADU",
  phoneNo: "+91 9597095553",
  email: "kishorekishore9725@gmail.com",
};


