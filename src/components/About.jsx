import React from 'react'
import { image1, image2, image3 } from '../assets/image'

const About = () => {
  return (
    <div id='about' className='font-poppins text-white mt-40'>
        <div className='flex items-center justify-center gap-1' data-aos='fade-down' data-aos-duration='1000'>
            <div className='w-10 h-[5px] bg-red-500 rounded-bl-xl rounded-tr-xl'></div>
            <p className='text-center font-700 text-red-500 text-3xl'>About</p>
            <div className='w-10 h-[5px] bg-red-500 rounded-tr-xl rounded-bl-xl'></div>
        </div>
        <div className='flex flex-col ld:flex-row items-center mt-24 relative mx-2 md:ml-50'>
            <div className='flex ml-[450px] md:ml-0 lg:-ml-28'>
                <div className='w-[300px]' data-aos='zoom-out-left' data-aos-duration='1000'>
                    <img src={image1} alt="penyakit-kulit" className='w-[270px] h-[270px] rounded-full'/>
                </div>
                <div className='w-[300px] relative' data-aos='fade-down-left' data-aos-duration='1000'>
                    <img src={image2} alt="penyakit-kulit" className='w-[240px] h-[240px] border-[8px] border-white rounded-full relative -left-28 -top-20'/>
                </div>
                <div className='w-[300px] relative z-50' data-aos='fade-down-right' data-aos-duration='1000'>
                    <img src={image3} alt="penyakit-kulit" className='w-[185px] border-[1.5px] border-red-500 h-[185px] rounded-full z-50 relative -left-[430px] top-[150px]'/>
                </div>   
            </div>
            <div className='relative md:-top-24 md:left-40  top-28 lg:-top-72 lg:left-52'>
                <div className='mx-3 md:w-[420px] lg:w-[500px] md:mx-0'>
                    <p className='text-center md:text-start capitalize text-3xl lg:text-4xl text-red-500 font-700 mb-5' data-aos='flip-down' data-aos-duration='1000'>skin disease detection</p>
                    <p className='text-[13px] lg:text-[14px] leading-6 lg:font-500'  data-aos='zoom-in-up' data-aos-duration='900'>
                        Aplikasi ini adalah sebuah solusi inovatif yang dirancang untuk mendeteksi 4 jenis penyakit kulit. Dengan menggunakan algoritma deep learning yang canggih, aplikasi ini mampu memproses data dengan cepat dan memberikan hasil yang akurat. Pengguna dapat mengidentifikasi jenis penyakit kulit yang mungkin mereka alami dan memperoleh informasi yang berguna untuk pencegahan dan penanganan yang tepat. Aplikasi ini menjadi alat yang berguna dalam menjaga kesehatan kulit dan meningkatkan kualitas hidup pengguna.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About