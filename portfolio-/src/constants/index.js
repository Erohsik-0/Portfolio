import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
];

export const CONTACT = {
  address: "TIRUPUR, TAMILNADU",
  phoneNo: "+91 9597095553",
  email: "kishorekishore9725@gmail.com",
};


