import { FaNodeJs } from "react-icons/fa";
import {RiJavaFill, RiReactjsLine} from "react-icons/ri";
import {SiPython , SiMongodb, SiMysql} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent pb-8 animate-pulse'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-100 p-4 animate-bounce'>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-100 p-4 animate-bounce'>
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-100 p-4 animate-bounce'>
                <SiPython className="text-7xl text-purple-900"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-100 p-4 animate-bounce'>
                <RiJavaFill className="text-7xl text-orange-500"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-100 p-4 animate-bounce'>
                <SiMongodb className="text-7xl text-green-600"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-100 p-4 animate-bounce'>
                <SiMysql className="text-7xl text-cyan-400"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-100 p-4 animate-bounce'>
                <TbBrandFramerMotion className="text-7xl text-red-700"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
