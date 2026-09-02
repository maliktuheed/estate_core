import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        className='container mx-auto px-6 py-10 md:px-20 lg:px-32' id='Testimonials'>
        <h1 className='text-2xl md:text-4xl text-center font-bold'>Customer <span className='font-light underline underline-offset-4 decoration-1 under'>Testimonials</span></h1>
        <p className='text-gray-500 max-w-80 mx-auto mt-2 text-center mb-12'>Real stories from those who found home with us</p>

        <div className='flex flex-wrap justify-center gap-5'>
            {testimonialsData.map((testimonial, index) => {
                return(
                    <div key={index} className='max-w-85 px-8 py-12 bg-gray-100 rounded-xl transition-all duration-200 hover:shadow-lg text-center hover:scale-102 cursor-default'>
                        <img src={testimonial.image} className='h-20 w-20 rounded-full mx-auto' alt={testimonial.alt} />
                        <h2 className='text-lg text-gray-800 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4'>{testimonial.title}</p>
                        <div className='flex justify-center text-red-500 mb-4'>
                            {Array.from({length: testimonial.rating}, (item, index) => (
                                <img key={index} src={assets.star_icon} alt='' />
                            ))}
                        </div>
                        <p className='text-gray-600 text-sm'>{testimonial.text}</p>
                    </div>
                )
            })}
        </div>
    </motion.div>
  )
}

export default Testimonials