import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/Songhan.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'


const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    }, [springValue, value])
  })

  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!"/>
          <div className='grid w-full grid-cols-8 gap-16 '>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'>
                Hi, I&apos;m Sony Yu. With 5+ years of experience as a software engineer using HTML, CSS, JavaScript, TypeScript, Next.js, MongoDB, Express, React and Node.js. I am always looking for 
                new and innovative ways to bring my clients&apos; visions to life.
              </p>
              <p className='my-4 font-medium'>
                I am skilled in building responsive web applications using media queries, Tailwind CSS, Bootstrap, and Material UI. Additionally, I also have experience in designing schemes and handling data storage in both NoSQL and SQL databases, like MongoDB, PostgreSQL, and Redis. I am familiar with server-side applications with data structures and OOP design patterns for modern web APIs.
              </p>
              {/* <p className='font-medium'>
                I have worked with all stages of the software development lifecycle for Single-Page Applications and have experience creating applications with RESTful API and building web services that comply with the REST architecture. I am well-versed in version control using Git and have worked in Agile teams using Scrum methodology to create high-performance websites.
              </p> */}
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light'>
              {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl' /> */}
                <Image src={profilePic} alt="Songhan" className='w-full h-auto rounded-2xl' />
            </div>
          

            <div className='col-span-2 flex flex-col items-end justify-between'>
              {/* <div className='flex flex-col item-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  10+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
              </div> */}

              <div className='flex flex-col item-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  5+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
              </div>

              <div className='flex flex-col item-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumber value={30} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
              </div>
            </div>
        
          </div>

          <Skills />
          {/* <Experience /> */}
        </Layout>
      </main>
    </>
  )
}

export default about