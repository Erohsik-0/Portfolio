import { FaNodeJs } from "react-icons/fa";
import {RiJavaFill, RiReactjsLine} from "react-icons/ri";
import {SiPython , SiMongodb, SiMysql} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";

const icon = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:0.75}} 
        className='my-20 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent pb-8 animate-pulse'>Technologies</motion.h1>
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:75,opacity:0}} transition={{duration:0.75}}
             className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={icon(3.2)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-100 p-4'>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={icon(2.5)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-100 p-4 '>
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={icon(2.2)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-100 p-4 '>
                <SiPython className="text-7xl text-purple-900"/>
            </motion.div>
            <motion.div variants={icon(3)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-100 p-4 '>
                <RiJavaFill className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div variants={icon(2.8)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-100 p-4 '>
                <SiMongodb className="text-7xl text-green-600"/>
            </motion.div>
            <motion.div variants={icon(2)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-100 p-4 '>
                <SiMysql className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={icon(3.5)} initial="initial" animate="animate"  
                className='rounded-2xl border-4 border-neutral-100 p-4 '>
                <TbBrandFramerMotion className="text-7xl text-red-700"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
