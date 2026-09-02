import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    useEffect(() => {
        if(showMobileMenu) {
            document.body.style.overflow = "hidden"
        }else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
            {/* <img src={assets.logo} className='cursor-pointer' alt="" /> */}
            <h1 className='text-3xl font-semibold text-white cursor-pointer text-shadow-black text-shadow-2xs'>Estate<span className='text-blue-600'>Core</span></h1>
            <ul className='hidden md:flex gap-8'>
                <a href="" className='text-white hover:text-gray-300 transition ease-in duration-200 hover:underline underline-offset-4'>Home</a>
                <a href="#About" className='text-white hover:text-gray-300 transition ease-in duration-200 hover:underline underline-offset-4'>About</a>
                <a href="#Projects" className='text-white hover:text-gray-300 transition ease-in duration-200 hover:underline underline-offset-4'>Projects</a>
                <a href="#Testimonials" className='text-white hover:text-gray-300 transition ease-in duration-200 hover:underline underline-offset-4'>Testimonials</a>
                <a href="#Contact" className='text-white hover:text-gray-300 transition ease-in duration-200 hover:underline underline-offset-4'>Contact Us</a>
            </ul>
            <a href='#Contact' className='cursor-pointer bg-white px-4 py-2 transitition ease-in duration-150 hover:rounded hover:bg-blue-600 hover:text-white hidden md:block'>Inquire Us</a>
            <img onClick={toggleMenu} src={assets.menu_icon} className='cursor-pointer md:hidden' alt="" />
        </div>
        {/* *********** Mobile-Menu *************/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0' } top-0 right-0 bottom-0 bg-white overflow-hidden transition-all`}>
            <div className='flex justify-end p-6'>
                <img onClick={toggleMenu} src={assets.cross_icon} className='w-6 cursor-pointer' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
                <a onClick={() => setShowMobileMenu(false)} href="#Header">Home</a>
                <a onClick={() => setShowMobileMenu(false)} href="#About">About</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Projects">Projects</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Testimonials">Testimonials</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Contact">Contact Us</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar