'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section 
      className="w-full bg-gradient-to-b from-[#c01f5b] to-[#4b2a6b] py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Left Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <HeroItem
              color="#00bcd4"
              text="Medical Admissions Program"
            />
            <HeroItem
              color="#f59e0b"
              text="University 'K' Admissions Program"
            />
            <HeroItem
              color="#ff5c8a"
              text="Model Test Program"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <HeroItem
              color="#8b2c2c"
              text="Engineering Admissions Program"
            />
            <HeroItem
              color="#6b6b6b"
              text="University 'Kh' Admissions Program"
            />
            <HeroItem
              color="#7e22ce"
              text="Class 6-10 Academic Program"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Center */}
        <motion.div 
          className="mt-10 flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <HeroItem
            color="#2563eb"
            text="Talent Hunt Program"
            wide
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

/* Reusable Item */
function HeroItem({ color, text, wide }) {
  const itemMotionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={`flex items-center gap-4 bg-white rounded-full shadow-lg px-5 py-3
      ${wide ? "w-full md:w-2/3 justify-center" : ""}`}
      variants={itemMotionVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Icon */}
      <motion.div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: color }}
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        ★
      </motion.div>

      {/* Text */}
      <p className="text-gray-900 font-semibold text-sm md:text-base">
        {text}
      </p>
    </motion.div>
  );
}

export default Hero;
