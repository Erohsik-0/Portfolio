import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiJavaFill, RiReactjsLine } from "react-icons/ri";
import { SiPython, SiMongodb, SiMysql, SiDotnet } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandCSharp } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { motion } from "framer-motion";

// Floating animation
const iconFloat = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Categorized technology stack
const techCategories = [
  {
    title: "Frontend",
    items: [
      {
        icon: <RiReactjsLine className="text-6xl text-cyan-400/90" />,
        label: "React",
        link: "https://react.dev/",
        duration: 3.2,
      },
      {
        icon: <TbBrandFramerMotion className="text-6xl text-pink-500" />,
        label: "Framer Motion",
        link: "https://www.framer.com/motion/",
        duration: 3.5,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        icon: <FaNodeJs className="text-6xl text-green-500" />,
        label: "Node.js",
        link: "https://nodejs.org/en/docs",
        duration: 2.5,
      },
      {
        icon: <SiDotnet className="text-6xl text-purple-400" />,
        label: ".NET",
        link: "https://learn.microsoft.com/en-us/dotnet/",
        duration: 2.8,
      },
      {
        icon: <TbBrandCSharp className="text-6xl text-green-500" />,
        label: "C#",
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        duration: 2.5,
      },
      {
        icon: <SiPython className="text-6xl text-yellow-400" />,
        label: "Python",
        link: "https://docs.python.org/3/",
        duration: 2.2,
      },
      {
        icon: <RiJavaFill className="text-6xl text-orange-500" />,
        label: "Java",
        link: "https://docs.oracle.com/javase/8/docs/",
        duration: 3,
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        icon: <FaDatabase className="text-6xl text-green-500" />,
        label: "SQL",
        link: "https://learn.microsoft.com/en-us/sql/",
        duration: 3,
      },
      {
        icon: <SiMongodb className="text-6xl text-green-600" />,
        label: "MongoDB",
        link: "https://www.mongodb.com/docs/",
        duration: 2.8,
      },
      {
        icon: <SiMysql className="text-6xl text-cyan-400" />,
        label: "MySQL",
        link: "https://dev.mysql.com/doc/",
        duration: 2,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        icon: <FaGitAlt className="text-6xl text-orange-500" />,
        label: "Git",
        link: "https://git-scm.com/doc",
        duration: 2.6,
      },
    ],
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Title */}
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.75 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent pb-8 animate-pulse"
      >
        Technologies
      </motion.h1>

      {/* Categories */}
      <div className="space-y-12">
        {techCategories.map((category, catIndex) => (
          <div key={catIndex}>
            {/* Category Title */}
            <h2 className="text-center text-xl font-semibold text-neutral-300 mb-6">
              {category.title}
            </h2>

            {/* Icons */}
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 75, opacity: 0 }}
              transition={{ duration: 0.75 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {category.items.map((tech, index) => (
                <motion.a
                  key={index}
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconFloat(tech.duration)}
                  initial="initial"
                  animate="animate"
                  className="w-24 h-24 flex flex-col items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-110 transition-all duration-300"
                >
                  {tech.icon}
                  <p className="mt-2 text-xs text-neutral-400">{tech.label}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
