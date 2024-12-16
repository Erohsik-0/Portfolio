import React from 'react'
import {PROJECTS} from "../constants"
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent animate-pulse'>Projects</h1>
      <div >
        {PROJECTS.map((project,index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <img src={project.image} alt={project.title} className='mb-6 rounded md:w-[300px] md:h-[300px] object-contain'/>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech,index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects
