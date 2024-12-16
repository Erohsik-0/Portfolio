import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
const About = () => {
  return (
    <div className=' pb-16'>
        <h1 className='my-20 text-center text-4xl'>About <span className='bg-gradient-to-l from-purple-800 to-slate-500 bg-clip-text text-transparent animate-pulse'>Me</span></h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center md:w-[550px] md:h-[550px] object-contain'>
                    <img className="rounded-2xl" src={aboutImg} alt="about"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-10 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
                <div className='flex  my-10'>
                    <a href="../assets/projects/717821L126-KISHORE S.pdf" download 
                    className='py-4 text-3xl text-black font-medium
                    bg-[length:200%] bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent'>Download Resume</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
