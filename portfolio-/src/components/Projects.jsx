import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for project transitions
const projectVariants = {
  enter: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      // Only handle scroll if hovering over the projects section
      if (!isHovered || isScrolling) return;
      
      // Check if we can navigate (prevent scrolling if at boundaries)
      const canScrollDown = currentProject < PROJECTS.length - 1;
      const canScrollUp = currentProject > 0;
      
      if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) {
        e.preventDefault();
        e.stopPropagation();
        setIsScrolling(true);
        
        if (e.deltaY > 0) {
          // Scroll down - next project
          setCurrentProject((prev) => prev + 1);
        } else {
          // Scroll up - previous project
          setCurrentProject((prev) => prev - 1);
        }
        
        // Reset scrolling flag after animation
        setTimeout(() => setIsScrolling(false), 600);
      }
      // If at boundaries or not hovering, allow normal page scroll
    };

    const projectsSection = projectsSectionRef.current;
    if (projectsSection) {
      projectsSection.addEventListener('wheel', handleWheel, { passive: false });
      return () => projectsSection.removeEventListener('wheel', handleWheel);
    }
  }, [isScrolling, currentProject, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDotClick = (index) => {
    if (!isScrolling) {
      setCurrentProject(index);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only handle arrow keys when hovering over the projects section
      if (!isHovered || isScrolling) return;
      
      if (e.key === 'ArrowDown' && currentProject < PROJECTS.length - 1) {
        e.preventDefault();
        setCurrentProject(prev => prev + 1);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 600);
      } else if (e.key === 'ArrowUp' && currentProject > 0) {
        e.preventDefault();
        setCurrentProject(prev => prev - 1);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 600);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentProject, isScrolling, isHovered]);

  return (
    <div 
      id="projects-section" 
      ref={projectsSectionRef}
      className="border-b border-neutral-900 pb-4 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Section Title */}
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.75 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent animate-pulse"
      >
        Projects
      </motion.h1>

      {/* Scroll indicator for better UX */}
      <div className="text-center mb-4">
        <span className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
          isHovered 
            ? 'text-cyan-300 bg-cyan-900/30 border border-cyan-600' 
            : 'text-neutral-500 bg-neutral-800'
        }`}>
          {isHovered ? 'Project navigation active - scroll to change projects' : 'Hover over this section to navigate projects'}
        </span>
      </div>

      {/* Project Display Area */}
      <div className="h-[70vh] flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            variants={projectVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full max-w-6xl mx-auto px-4"
          >
            <div className={`flex flex-wrap lg:justify-center border rounded-xl p-6 lg:p-8 backdrop-blur-sm shadow-2xl transition-all duration-300 ${
              isHovered 
                ? 'border-cyan-600 bg-neutral-900/80 shadow-cyan-600/20' 
                : 'border-neutral-800 bg-neutral-900/60'
            }`}>
              {/* Project Image */}
              <div className="w-full lg:w-2/5 flex justify-center mb-6 lg:mb-0">
                <motion.img
                  src={PROJECTS[currentProject].image}
                  alt={PROJECTS[currentProject].title}
                  className="rounded-lg w-full max-w-[350px] h-[280px] lg:h-[320px] object-cover shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Project Details */}
              <div className="w-full lg:w-3/5 lg:pl-8 flex flex-col justify-center">
                <motion.h2 
                  className="mb-4 text-2xl lg:text-3xl font-bold text-cyan-400"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {PROJECTS[currentProject].title}
                </motion.h2>
                
                <motion.p 
                  className="mb-6 text-neutral-300 leading-relaxed text-base lg:text-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {PROJECTS[currentProject].description}
                </motion.p>
                
                {/* Tech stack badges */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {PROJECTS[currentProject].technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="rounded-lg bg-neutral-800 px-3 py-2 text-sm font-medium text-cyan-300 border border-neutral-700 hover:border-cyan-400 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentProject
                ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                : 'bg-neutral-600 hover:bg-neutral-500'
            } ${isScrolling ? 'pointer-events-none' : ''}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="flex justify-center mt-4">
        <span className="text-neutral-400 text-sm">
          {currentProject + 1} / {PROJECTS.length}
        </span>
      </div>

      {/* Navigation Instructions */}
      <div className="flex justify-center mt-6">
        <div className="text-neutral-500 text-xs text-center">
          <p className={isHovered ? 'text-cyan-400' : ''}>
            {isHovered ? 'Use scroll wheel or arrow keys to navigate' : 'Hover here and scroll to navigate'}
          </p>
          <div className="flex items-center justify-center mt-2 space-x-4">
            <span className={`flex items-center space-x-1 ${isHovered ? 'text-cyan-300' : ''}`}>
              <span className="text-cyan-400">↑↓</span>
              <span>Arrow Keys</span>
            </span>
            <span className={`flex items-center space-x-1 ${isHovered ? 'text-cyan-300' : ''}`}>
              <span className="text-cyan-400">🖱️</span>
              <span>Mouse Wheel</span>
            </span>
            <span className={`flex items-center space-x-1 ${isHovered ? 'text-cyan-300' : ''}`}>
              <span className="text-cyan-400">•</span>
              <span>Click Dots</span>
            </span>
          </div>
        </div>
      </div>

      {/* Side Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden lg:block">
        <button
          onClick={() => currentProject > 0 && handleDotClick(currentProject - 1)}
          disabled={currentProject === 0 || isScrolling}
          className={`p-2 rounded-full transition-all duration-300 ${
            currentProject === 0
              ? 'text-neutral-700 cursor-not-allowed'
              : `text-cyan-400 hover:bg-neutral-800 hover:scale-110 ${isHovered ? 'bg-neutral-800/50' : ''}`
          }`}
          aria-label="Previous project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden lg:block">
        <button
          onClick={() => currentProject < PROJECTS.length - 1 && handleDotClick(currentProject + 1)}
          disabled={currentProject === PROJECTS.length - 1 || isScrolling}
          className={`p-2 rounded-full transition-all duration-300 ${
            currentProject === PROJECTS.length - 1
              ? 'text-neutral-700 cursor-not-allowed'
              : `text-cyan-400 hover:bg-neutral-800 hover:scale-110 ${isHovered ? 'bg-neutral-800/50' : ''}`
          }`}
          aria-label="Next project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Visual hover indicator */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none border-2 border-cyan-500/20 rounded-lg"
        />
      )}
    </div>
  );
};

export default Projects;