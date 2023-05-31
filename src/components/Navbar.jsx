import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/image'
import { MdMenuOpen } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuOpen = <MdMenuOpen className='text-3xl cursor-pointer duration-200' onClick={() => setOpen(!open)}/>
  const menuClose = <IoClose className='text-3xl cursor-pointer duration-200' onClick={() => setOpen(!open)}/>

  const scroolToMenu = (id) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div className='mx-3 text-white font-poppins flex justify-between lg:justify-between lg:mx-50 items-center mt-2'>
        <Link to='/' className='text-5xl font-700 mr-14' data-aos='flip-right' data-aos-duration='1000'>
          <img src={logo} alt="skin-disease-detection" className='w-36 h-16'/>
        </Link>
        {/* mobile menu */}
        <div className='relative md:hidden'>
          {open ? menuClose : menuOpen}
          {open && <div className='font-500 text-white text-[14px] bg-black py-5 w-[300px] absolute flex flex-col items-start -left-52 h-[80vh] z-50 bg-opacity-60 px-10 gap-10 top-12'>
              <button onClick={() => scroolToMenu('home')} className='hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>Home</button>
              <button onClick={() => scroolToMenu('about')} className='hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>About</button>
              <button onClick={() => scroolToMenu('skin-disease')} className='mr-9 hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>Types of Skin Diseases</button>
              <button onClick={() => scroolToMenu('our-team')} className='hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>Our Team</button>
          </div>}
        </div>
        {/* laptop menu */}
        <div className='relative hidden md:block'>
          <div className='font-500 text-white text-[14px]'>
            <button onClick={() => scroolToMenu('home')} className='hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>Home</button>
            <button onClick={() => scroolToMenu('about')} className='mx-9 hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>About</button>
            <button onClick={() => scroolToMenu('skin-disease')} className='mr-9 hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>Types of Skin Diseases</button>
            <button onClick={() => scroolToMenu('our-team')} className='hover:text-red-500 duration-200' data-aos='fade-up-right' data-aos-duration='1000'>Our Team</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar