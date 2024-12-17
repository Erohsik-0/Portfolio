import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilepic from "../assets/profilePic.png";
import {motion} from "framer-motion";

const movement = (delay) => ({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay},}
});

const Hero = () => {
  return( 
  <div className="border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={movement(0.5)} initial="hidden" animate="visible"
                className="pb-10 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl">
                    Kishore S
                </motion.h1>
                <motion.span variants={movement(0.75)} initial="hidden" animate="visible"
                className="bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Full Stack Developer
                </motion.span>
                <motion.p variants={movement(1)} initial="hidden" animate="visible"
                className="my-2 max-w-xl py-10 ">
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-10">
            <div className="flex justify-center md:w-[500px] md:h-[500px] object-contain">
                <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}}
                src={profilepic} alt="Kishore Profile" className='rounded'/>
            </div>  
        </div>
    </div>
  </div>
  );
};

export default Hero;
