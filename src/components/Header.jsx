import React from 'react'
import Navbar from './Navbar'
import { motion, scale } from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen w-full bg-center bg-cover overflow-hidden mb-4 flex justify-center items-center' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar />
        
        <motion.div
          initial={{opacity: 0, y: 100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className='container mx-auto py-4 px-6 md:px-20 lg:px-32 text-center'>

            <h1
              className='text-white text-6xl md:text-[80px] inline-block max-w-3xl font-semibold pt-20'
            >
              Discover Your Dream Property, Redefine Your Lifestyle.
            </h1>

            <div className='space-x-6 mt-16'>
                <a
                  href="#Projects"
                  className='border border-white py-3 px-8 text-white rounded hover:bg-white hover:text-black font-medium'
                >
                  Projects
                </a>
                <a
                  href="#Contact"
                  className='bg-blue-600 py-3 px-8 text-white rounded hover:bg-blue-500'
                >
                  Contact Us
                </a>
            </div>

        </motion.div>
    </div>
  )
}

export default Header