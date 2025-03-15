import { EXPERIENCES } from '../constants/';
import { motion, useMotionValue, useSpring } from 'framer-motion'; 
import { useEffect, useState } from 'react';

const Experience = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isPointer, setIsPointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    // Check if device is desktop (not mobile)
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Initial check
    checkDevice();
    
    // Listen for resize events
    window.addEventListener('resize', checkDevice);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);
  
  useEffect(() => {
    // Only add cursor events if on desktop
    if (!isDesktop) return;
    
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
    };
    
    const checkPointer = () => {
      const element = document.elementFromPoint(cursorX.get(), cursorY.get());
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        setIsPointer(computedStyle.cursor === 'pointer');
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', checkPointer);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', checkPointer);
    };
  }, [cursorX, cursorY, isDesktop]);

  return (
    <>
      {/* Custom cursor elements - only shown on desktop */}
      {isDesktop && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full z-50 pointer-events-none"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
          />
          <motion.div
            className="fixed top-0 left-0 w-12 h-12 border-2 border-blue-400 rounded-full z-40 pointer-events-none mix-blend-difference"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              scale: isPointer ? 0.8 : 1,
              opacity: 0.5
            }}
          />
          <motion.div
            className="fixed top-0 left-0 z-30 pointer-events-none"
            style={{
              x: cursorX,
              y: cursorY,
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <motion.path
                d="M0,30 C20,30 30,0 30,0 C30,0 40,30 60,30 C40,30 30,60 30,60 C30,60 20,30 0,30"
                fill="none"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                animate={{ 
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              />
            </svg>
          </motion.div>
          
          {/* Hide default cursor only on desktop */}
          <style jsx global>{`
            * {
              cursor: none !important;
            }
          `}</style>
        </>
      )}
      
      <div className='border-b border-neutral-900 pb-16 md:pb-24'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='my-12 md:my-20 text-left md:text-center text-5xl md:text-6xl text-white pl-6 md:pl-0'
        >
          Experience
        </motion.h1>
        <div className="px-6 md:flex md:flex-col md:items-center">
          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="mb-20 md:flex md:w-full md:max-w-5xl md:gap-10 md:items-start"
            >
              {/* Left side - Date and Image */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <p className='text-lg md:text-xl text-neutral-400 mb-4'>{experience.year}</p>
                
                {/* Animated icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  className="mb-6"
                >
                  <motion.div 
                    className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                    animate={{ 
                      boxShadow: ["0px 0px 0px rgba(168, 85, 247, 0.2)", "0px 0px 15px rgba(168, 85, 247, 0.6)", "0px 0px 0px rgba(168, 85, 247, 0.2)"]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </motion.div>
                
                {/* Company/Project Image - Matched to description height */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="overflow-hidden rounded-lg bg-neutral-800 h-64 md:h-auto"
                >
                  {experience.image ? (
                    <motion.img 
                      src={experience.image} 
                      alt={`${experience.company}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-yellow-400 text-black min-h-[200px]">
                      <span className="text-6xl font-bold">{experience.company.substring(0, 2)}</span>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Right side - Description */}
              <div className="md:w-2/3 md:pt-12">
                <h6 className='text-xl md:text-2xl text-white font-semibold mb-3'>
                  {experience.role} - <span className='text-neutral-300'>
                    {experience.company}
                  </span>
                </h6>
                <p className='mb-5 text-neutral-400 text-sm md:text-base leading-relaxed'>{experience.description}</p>
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + techIndex * 0.1 }}
                      className='mr-2 mb-2 rounded-md bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400'
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;