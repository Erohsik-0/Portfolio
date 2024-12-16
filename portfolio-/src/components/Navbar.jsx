import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
const navbar = () => {
  return <nav className="mb-10 flex items-center justify-between py-4">
    <div className="flex flex-shrink-0 items-center">
        <div className="text-4xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
        bg-clip-text text-transparent animate-pulse">
            Ks
        </div>
    </div>
    <div className="m-8 flex items-center ustify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/kishore-sundaramurthi" target="_blank" rel="noopener noreferrer" className="hover:scale-125 ease-in-out text-cyan-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Erohsik-0" target="_blank" rel="noopener noreferrer" className="hover:scale-125 ease-in-out text-cyan-500">
          <FaGithub/>
        </a>
        <a href="https://www.instagram.com/kishore.___.x/ " target="_blank" rel="noopener noreferrer" className="hover:scale-125 ease-in-out text-cyan-500" >
          <FaInstagram/>
        </a>
        
    </div>
  </nav>
}

export default navbar
