import React from 'react'
import { About, Footer, Navbar, OurTeams, SkinDiases } from '../../components'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <div className="bg-[url('./assets/image/bg-image.jpeg')] bg-fixed min-h-screen bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <div className="relative font-poppins flex flex-col md:flex-row md:justify-between md:items-center text-white mt-28">
                <div className='mx-3 md:mx-50'>
                    <div className='mb-10' data-aos='fade-down' data-aos-duration="2000">
                        <p className='font-600 md:font-700 text-xl md:text-2xl'>Welcome to the</p>
                        <p className='text-red-600 mt-2 mb-5 font-800 capitalize text-5xl md:text-6xl text-home'>skin disease detection</p>
                        <p className='md:w-[450px] text-[14px] md:text-[15px] font-500 leading-6'>Mari kenali kondisi kulit Anda, temukan gejala penyakitnya, dan dapatkan solusi pencegahan serta penanganan yang tepat. </p>
                    </div>
                    <Link to='/prediction-skin-disease'>
                        <p className='border-animate font-600' data-aos='fade-up-right' data-aos-duration="1500"></p>
                    </Link>
                </div>
                <div className='mx-3 md:mx-50 flex items-center'>
                    <div className='text-xl mt-10 md:mt-0 gap-3 flex flex-row md:block items-center'>
                        <div className='border-2 border-red-500 h-10 rounded-full p-2' data-aos='fade-down-right' data-aos-duration='800'>
                            <Link to="https://twitter.com/FGartian" target='_blank'>
                                <BsTwitter className='text-red-500'/>
                            </Link>
                        </div>
                        <div className='my-3 border-2 h-10 border-red-500 rounded-full p-2' data-aos='fade-down-right' data-aos-duration='1500'>
                            <Link to="https://www.instagram.com/frzygar/" target='_blank'>
                                <BsInstagram className='text-red-500'/>
                            </Link>
                        </div>
                        <div className='border-2 h-10 border-red-500 rounded-full p-2' data-aos='fade-down-right' data-aos-duration='2000'>
                            <Link to="https://www.facebook.com/frizy08/" target='_blank'>
                                <ImFacebook className='text-red-500'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About/>
        <SkinDiases/>
        <div className='mx-50'>
            <OurTeams/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home