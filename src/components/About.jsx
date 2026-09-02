import React, {useState, useEffect} from 'react'
import {assets} from '../assets/assets'
import {motion} from 'framer-motion'
import {ArrowUpRight} from 'lucide-react'

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {
        if(isModalOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
        }

        return () => {
            document.body.style.overflow = 'unset'; // Cleanup on component unmount
        }
    }, [isModalOpen]);
  return (
    <>
    <motion.div
        initial={{opacity: 0, x: 200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        className='flex flex-col justify-center items-center container mx-auto py-4 px-6 my-10 md:px-20 lg:px-32' id='About'>
        <h1 className='font-bold text-2xl sm:text-4xl'>About <span className='font-light underline underline-offset-4 under decoration-1'>Us</span></h1>
        <p className='text-gray-500 max-w-80 text-center mt-2 mb-10'>Passionate About Properties, Dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row md:gap-20 mb-8'>
            <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />
            <div>
                <div className='grid grid-cols-2 gap-6 md:gap-10 my-10'>
                    <div>
                        <h1 className='text-4xl font-semibold'>10+</h1>
                        <p className='text-gray-500'>Years of Excellence</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>12+</h1>
                        <p className='text-gray-500'>Project Completed</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>20+</h1>
                        <p className='text-gray-500'>Mn. Sq. Ft. Delievered</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>25+</h1>
                        <p className='text-gray-500'>Ongoing projects</p>
                    </div>
                </div>
                <p className='mb-10 text-gray-600 text-sm max-w-lg'>At EstateCore, we make finding the right property simple, transparent, and rewarding. Whether you’re searching for your dream home, a modern apartment, or a valuable investment opportunity, our goal is to connect you with properties that match your lifestyle and ambitions. With a commitment to professionalism, trust, and personalized service, we guide our clients through every step of the real estate journey.
                </p>
                <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={() => setIsModalOpen(true)}
                    className='bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 cursor-pointer flex items-center gap-1'>
                        Learn more<ArrowUpRight />
                </motion.button>
            </div>
        </div>
    </motion.div>


    {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto
                       bg-white rounded-2xl shadow-2xl p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center
                         justify-center rounded-full bg-gray-100
                         text-gray-600 hover:bg-gray-200 hover:text-gray-900
                         transition cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="pr-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                About EstateCore
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Building Better Real Estate Experiences
              </h2>

              <div className="space-y-5 text-gray-600 leading-7">
                <p>
                  EstateCore is a modern real estate company dedicated to
                  helping individuals, families, and investors discover
                  exceptional property opportunities. We believe that buying,
                  selling, or investing in property should be a simple,
                  transparent, and stress-free experience.
                </p>

                <p>
                  Our platform brings together carefully selected properties,
                  from beautiful family homes and contemporary apartments to
                  premium commercial spaces and investment opportunities.
                </p>

                <p>
                  We focus on understanding our clients' needs and providing
                  personalized guidance throughout their real estate journey.
                  From discovering the right property to making informed
                  decisions, our team is committed to delivering professional
                  service at every step.
                </p>

                <p>
                  At EstateCore, our mission is more than simply connecting
                  buyers and properties. We aim to build lasting relationships
                  based on trust, integrity, and excellence while helping our
                  clients find properties where their future can grow.
                </p>
              </div>

              {/* Mission / Vision */}
              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                <div className="p-5 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm leading-6">
                    To simplify real estate through trusted properties,
                    transparent service, and personalized solutions.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm leading-6">
                    To become a trusted destination for people looking to
                    discover, invest in, and build their future through real
                    estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default About