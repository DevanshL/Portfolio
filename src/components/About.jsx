import about_profile from '../assets/dev2.jpeg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='my-20 text-center text-6xl text-white'
      >
        About <span className='text-neutral-500'>Me</span>
      </motion.h1>    
      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center h-full">
            <img 
              src={about_profile} 
              alt="DL" 
              className="object-cover w-full max-w-[400px] rounded-2xl shadow-xl aspect-[1]"
            />
          </div>
        </motion.div>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }} 
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className='my-2 max-w-xl py-6 font-light leading-relaxed text-neutral-300 text-lg lg:ml-8'>{ABOUT_TEXT}</p>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About;