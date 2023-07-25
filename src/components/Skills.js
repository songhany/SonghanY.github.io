import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-1 px-3 shadow-dark cursor-pointer absolute '
      whileHover={{scale: 1.1}}
      initial={{x:0, y:0}}
      animate={{ x:x, y:y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-1 px-3 shadow-dark'
          whileHover={{scale: 1.1}}
        >
          React
        </motion.div>

        <Skill name="HTML" x="-21vw" y="-2vw" />
        <Skill name="CSS" x="-10vw" y="-8vw" />
        <Skill name="Javascript" x="16vw" y="6vw" />
        <Skill name="Typescript" x="23vw" y="-3vw" />
        <Skill name="Node.js" x="15vw" y="15vw" />
        <Skill name="Next.js" x="22vw" y="23vw" />
        <Skill name="Python" x="0vw" y="12vw" />
        <Skill name="Java" x="16vw" y="-12vw" />
        <Skill name="Docker" x="26vw" y="-18vw" />
        <Skill name="AWS " x="30vw" y="-10vw" />
        <Skill name="Express" x="0vw" y="22vw" />
        <Skill name="Redux" x="32vw" y="6vw" />
        <Skill name="Webpack" x="29vw" y="15vw" />
        <Skill name="SCSS" x="-22vw" y="-12vw" />
        <Skill name="Git" x="-23vw" y="-21vw" />
        <Skill name="MongoDB" x="0vw" y="-17vw" />
        <Skill name="PostgreSQL" x="10vw" y="-26vw" />
        <Skill name="Redis" x="-10vw" y="-26vw" />
        <Skill name="Material UI" x="-16vw" y="8vw" />
        <Skill name="Tailwind CSS" x="-15vw" y="17vw" />
        <Skill name="Jest" x="-30vw" y="6vw" />
        <Skill name="Cypress" x="-30vw" y="15vw" />
        <Skill name="Micro-frontend" x="-18vw" y="25vw" />
      </div>
    </>
  )
}

export default Skills