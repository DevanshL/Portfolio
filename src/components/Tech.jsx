import { RiReactjsLine } from 'react-icons/ri';
import { SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiOllama } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-6xl text-white'>Technologies</motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-blue-400'/>
        </motion.div>
        <motion.div 
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className='text-7xl text-orange-500'/>
        </motion.div>
        <motion.div 
          variants={iconvariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className='text-7xl text-red-500'/>
        </motion.div>
        <motion.div 
          variants={iconvariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiOpenai className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div 
          variants={iconvariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHuggingface className='text-7xl text-yellow-300'/>
        </motion.div>
        <motion.div 
          variants={iconvariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl text-white border-4 border-neutral-800 p-4">
          <SiOllama className='text-7xl text-white-300'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tech;