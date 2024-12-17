import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:75,opacity:0}} transition={{duration:0.75}}
      className='my-10 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent animate-pulse'>Get in Touch</motion.h1>
      <div className='text-center'>
        <motion.p whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:1}}
        className='my-6'>{CONTACT.address}</motion.p>
        <motion.p whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:1.25}}
        className='my-6'>{CONTACT.phoneNo}</motion.p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kishorekishore9725@gmail.com&su=Subject&body=Message" target="_blank" rel="noopener noreferrer" 
        className='my-4 hover:underline hover:text-cyan-400 hover:bg-neutral-900 rounded px-2 py-1'>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
