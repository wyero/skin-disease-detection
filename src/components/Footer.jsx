import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import { Link } from 'react-router-dom'
import { logo } from '../assets/image'

const Footer = () => {
    const scroolToMenu = (id) => {
        const element = document.getElementById(id)
        if(element){
          element.scrollIntoView({behavior: 'smooth'})
        }
      }
  return (
    <div className='flex justify-evenly items-center mt-20 bg-slate-900 font-poppins py-7 flex-wrap'>
        <img src={logo} alt="skin-disease-detection" data-aos='zoom-out-down' data-aos-duration='800' className='w-[200px] mb-2'/>
        <p className='text-white text-[13px] w-[350px] leading-6' data-aos='flip-right' data-aos-duration='1000'>Skin Disease Detection adalah sebuah aplikasi yang telah dirancang untuk mendeteksi empat jenis penyakit kulit. Aplikasi ini menggunakan algoritma deep learning, yang memungkinkan pengguna untuk mengidentifikasi jenis penyakit kulit yang mungkin mereka alami.</p>
        <div className='text-white capitalize flex gap-10 mt-3'>
           <div>
            <p className='text-red-500 font-600 mb-2' data-aos='flip-right' data-aos-duration='800'>tautan cepat</p>
            <div className='text-[13px] flex flex-col font-500 gap-2 items-start' data-aos='fade-down-right' data-aos-duration='1000'>
                    <button onClick={() => scroolToMenu('home')} className='hover:translate-x-3 duration-150 hover:opacity-70'>Home</button>
                    <button onClick={() => scroolToMenu('about')} className='hover:translate-x-3 duration-150 hover:opacity-70'>About</button>
                    <button onClick={() => scroolToMenu('skin-disease')} className='hover:translate-x-3 duration-150 hover:opacity-70'>Types of Skin Diseases</button>
                    <button onClick={() => scroolToMenu('our-team')} className='hover:translate-x-3 duration-150 hover:opacity-70'>Our Team</button>
                    <Link to='/prediction-skin-disease' className='hover:translate-x-3 duration-150 hover:opacity-70'>predict</Link>
            </div>
           </div>
           <div>
            <p className='text-red-500 font-600 mb-2' data-aos='flip-left' data-aos-duration='800'>follow us</p>
            <div className='flex gap-3 text-lg'>
                <Link to="https://twitter.com/FGartian" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 duration-150' data-aos='fade-down' data-aos-duration='800'>
                    <BsTwitter className='hover:rotate-[360deg] duration-300'/>
                </Link>
                <Link to="https://www.instagram.com/frzygar/" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 duration-150' data-aos='fade-down' data-aos-duration='1200'>
                    <BsInstagram className='hover:rotate-[360deg] duration-300'/>
                </Link>
                <Link to="https://www.facebook.com/frizy08/" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 duration-150' data-aos='fade-down' data-aos-duration='1600'>
                    <ImFacebook className='hover:rotate-[360deg] duration-300'/>
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer