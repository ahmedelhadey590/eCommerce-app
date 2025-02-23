import { useState } from 'react';
import logo2 from '../assets/logo2.png'
import { MdLanguage } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";



const Navbar = () => {
    const [isMenuOpen,setIsMenu] = useState(false);
    const toggleMenu =() => {
        setIsMenu(!isMenuOpen)
    }
    const navItems =[
        {link:"Overview",path:"home"},
        {link:"Feature",path:"feature"},
        {link:"About",path:"about"},
        {link:"Pricing",path:"pricing"},
    ]
  return (
    <nav className='bg-white md:px-4 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                <img src={logo2} alt=""  className='w-10 inline-block items-center'/><span>Company</span></a>

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path})=> <a key={link} href={path} 
                        className='block hover:text-gray-300'>{link}</a>)
                    }
                </ul>
            </div>
            <div className='space-x-12 hidden md:flex items-center'>
                <a href="/" className='hidden lg:flex items-center hover:text-secondary'><MdLanguage className='mr-2'/>
                <span>language</span></a>
                <button  className='bg-secondary py-2 px-4 transition-all duration-300 rounded
                 hover:text-white
                 hover:bg-indigo-600'>Sign up</button>

            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                    {
                        isMenuOpen ? (<HiOutlineXMark className='w-6 h-6 text-primary' />
                        ) : (<MdOutlineMenu className='w-6 h-6 text-primary'/>
                        )
                    }

                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
