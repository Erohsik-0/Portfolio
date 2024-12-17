import {motion} from "framer-motion";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const x_movement = (delay,x) => ({
  hidden:{x:x,opacity:0},
  visible:{x:0,opacity:1,tranisition:{duration:1.5,delay:delay}}
});

const navbar = () => {
  return <nav className="mb-10 flex items-center justify-between py-4">
    <motion.div variants={x_movement(0.5,-100)} initial="hidden" animate="visible"
      className="flex flex-shrink-0 items-center">
      <div className="text-4xl text-cyan-500 animate-pulse">
        Ks
      </div>
    </motion.div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a variants={x_movement(0.75,100)} initial="hidden" animate="visible"
          href="https://leetcode.com/u/Kishore_Sundaramurthi/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 ease-in-out text-cyan-500">
          <SiLeetcode />
        </motion.a>
        <motion.a variants={x_movement(1,100)} initial="hidden" animate="visible"
          href="https://linkedin.com/in/kishore-sundaramurthi" target="_blank" rel="noopener noreferrer" className="hover:scale-125 ease-in-out text-cyan-500">
          <FaLinkedin />
        </motion.a>
        <motion.a variants={x_movement(1.25,100)} initial="hidden" animate="visible"
          href="https://github.com/Erohsik-0" target="_blank" rel="noopener noreferrer" className="hover:scale-125 ease-in-out text-cyan-500">
          <FaGithub/>
        </motion.a>
        <motion.a variants={x_movement(1.50,100)} initial="hidden" animate="visible"
          href="https://www.instagram.com/kishore.___.x/ " target="_blank" rel="noopener noreferrer" className="hover:scale-125 ease-in-out text-cyan-500" >
          <FaInstagram/>
        </motion.a>
    </div>
  </nav>
}

export default navbar
