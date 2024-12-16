import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilepic from "../assets/profilePic.png"

const Hero = () => {
  return( 
  <div className="border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-10 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl">Kishore S</h1>
                <span className="bg-gradient-to-r from-purple-300 via-slate-500
                to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
                <p className="my-2 max-w-xl py-10 ">{HERO_CONTENT}</p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-10">
            <div className="flex justify-center md:w-[500px] md:h-[500px] object-contain">
                <img src={profilepic} alt="Kishore Profile" className='rounded'/>
            </div>  
        </div>
    </div>
  </div>
  );
};

export default Hero;
