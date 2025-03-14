import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/dev.jpeg";
import { motion, useScroll } from "framer-motion";
import resumePDF from "../assets/Devansh-resume.pdf";
import { useEffect, useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
      ease: "easeInOut"
    },
  },
});

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    });
  }, [scrollY]);

  return (
    <div className="border-b border-neutral-800 pb-12 lg:pb-16 min-h-screen">
      <div className="flex flex-wrap items-center">
        
        {/* Left Side (Text + Button) */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Name */}
            <motion.h1 
              variants={container(0)} 
              initial="hidden" 
              animate="visible"
              className="pb-8 text-5xl font-extralight tracking-tight text-white lg:mt-16 lg:text-6xl lg:ml-8"
            >
              Devansh Lingamaneni
            </motion.h1>

            {/* Title */}
            <motion.span 
              variants={container(0.5)} 
              initial="hidden" 
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text 
              text-3xl font-medium tracking-tight text-transparent lg:ml-8"
            >
              AI Developer
            </motion.span>

            {/* Description */}
            <motion.p 
              variants={container(1)} 
              initial="hidden" 
              animate="visible"
              className="my-2 max-w-xl py-6 font-light leading-relaxed text-neutral-300 text-lg lg:ml-8"
            >
              {HERO_CONTENT}
            </motion.p>
            
            {/* Download Resume Button */}
            <motion.a
              href={resumePDF}
              download="Devansh_Lingamaneni_Resume.pdf"
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium flex items-center space-x-2 lg:ml-8 shadow-md hover:bg-purple-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download Resume</span>
            </motion.a>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex justify-center items-center h-full">
            <motion.img 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
              src={profilepic} 
              alt="Devansh Lingamaneni" 
              className="object-cover max-h-[450px] rounded-lg shadow-2xl border border-neutral-700"
            />
          </div>
        </div>
      </div>
      {showScroll && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
        >
          <p className="text-neutral-400 text-sm mb-2">Scroll Down</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-purple-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;