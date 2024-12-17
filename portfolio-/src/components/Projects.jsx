import React from 'react';
import {PROJECTS} from "../constants";
import { motion } from 'framer-motion'; 

const container = (x,y) =>({
  hidden:{opacity:0,x:x},
  visible:{x:0,opacity:1,transition:{duration:y}}
});


const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:0.75}}
      className='my-20 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent animate-pulse'>Projects</motion.h1>
      <div >
        {PROJECTS.map((project,index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:1.25}} 
              className='w-full lg:w-1/4'>
              <img src={project.image} alt={project.title} className='mb-6 rounded md:w-[300px] md:h-[300px] object-contain'/>
            </motion.div>
            <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:1}}
              className='w-full max-w-xl lg:w-3/4 '>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech,index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects
