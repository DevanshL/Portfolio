import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-16 md:pb-24'>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='my-12 md:my-20 text-center text-5xl md:text-6xl text-white'
      >
        My <span className='text-neutral-400'> Projects</span>
      </motion.h1>
      <div className="flex flex-col items-center px-4 md:px-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="w-full md:w-4/5 lg:w-3/4 mb-16 flex flex-col md:flex-row"
          >
            <motion.div 
              className="md:w-1/3 mb-4 md:mb-0 md:mr-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </motion.div>
            <div className="md:w-2/3">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white font-medium mb-2"
              >
                {project.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-neutral-400 text-sm mb-3"
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap">
                {project.technologies?.map((tech, idx) => (
                  <motion.span 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="mr-2 mb-2 rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-400"
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
  );
};

export default Projects;