import React from 'react'
import {assets} from '../assets/assets'
import {Phone, Mail, MapPin} from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-[#101828]'>
        <div className='w-full container mx-auto px-6 md:px-20 lg:px-32 overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
                <div>
                    {/* <img src={assets.logo_dark} alt="Company Logo" /> */}
                    <h1 className='text-3xl font-semibold text-white cursor-pointer text-shadow-black text-shadow-2xs'>Estate<span className='text-blue-600'>Core</span></h1>
                    <p className='text-white text-[14px] mt-4 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta aperiam quibusdam, eum dolores unde laboriosam libero veritatis mollitia.</p>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className='md:mx-auto'>
                    <h2 className='text-2xl text-white font-bold'>
                        Company
                        <div className='w-16 h-0.5 bg-white'></div>
                    </h2>
                    <ul className='flex flex-col gap-1 mt-4'>
                        <li><a href="#Header" className='text-white text-[14px]'>Home</a></li>
                        <li><a href="#About" className='text-white text-[14px]'>About</a></li>
                        <li><a href="#Projects" className='text-white text-[14px]'>Projects</a></li>
                        <li><a href="#Testimonials" className='text-white text-[14px]'>Testimonials</a></li>
                        <li><a href="#Contact" className='text-white text-[14px]'>Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl text-white font-bold'>
                        Contact Information
                        <div className='w-16 h-0.5 bg-white'></div>
                    </h2>
                    <ul className='mt-4 space-y-3'>
                        <li className='flex items-center gap-2'>
                            <div className='p-0.5 bg-white rounded'><Phone /></div>
                            <p className='text-white text-[14px]'>+92 332000000</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <div className='p-0.5 bg-white rounded'><Mail /></div>
                            <p className='text-white text-[14px]'>info@estatecore.com</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <div className='p-0.5 bg-white rounded'><MapPin /></div>
                            <p className='text-white text-[14px]'>House # 1 ABC Street, XYZ, Pakistan</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-white text-sm text-center border-t-[0.5px] border-[rgba(199,192,192,0.61)] p-2'>
                &copy; {new Date().getFullYear()} All rights are reserved <span className='underline font-bold px-1'>Practice by TA</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer