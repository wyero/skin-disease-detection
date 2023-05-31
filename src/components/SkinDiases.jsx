import React from 'react'
import { Link } from 'react-router-dom'
import { menuDisease } from '../data'

const SkinDiases = () => {
  return (
    <div id='skin-disease' className='font-poppins text-white mt-52 md:mt-20 lg:mt-0 mx-50'>
        <div className='flex items-center justify-center gap-1' data-aos='fade-down' data-aos-duration='1000'>
            <div className='w-10 h-[5px] bg-red-500 rounded-bl-xl rounded-tr-xl'></div>
            <p className='text-center font-700 text-red-500 text-3xl'>Types of Skin Diseases</p>
            <div className='w-10 h-[5px] bg-red-500 rounded-tr-xl rounded-bl-xl'></div>
        </div>
        <div className='mt-10 flex justify-center flex-wrap gap-2 mx-50'>
            {menuDisease.map(menu => (
                <div key={menu.id}>
                    <div className='group duration-200 cursor-pointer gap-10 w-[260px] h-[200px] overflow-hidden' data-aos="zoom-in" data-aos-duration="900">
                        <img src={menu.image} alt={menu.name} className='w-[260px] h-[200px] rounded-sm opacity-50 duration-200 group-hover:opacity-30'/>
                        <div className='duration-200'>
                            <p className='absolute top-16 left-3 text-white font-700 text-[17px] group-hover:hidden'>{menu.name}</p>
                            <p className='z-50 relative -top-44 text-red text-[13px] leading-6 hidden group-hover:block w-[260px] h-[200px] p-2 gont-600'>{menu.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="bg-[url('./assets/image/image3.jpeg')] bg-cover h-[300px] bg-no-repeat bg-center mt-32 rounded-sm opacity-80 p-5 flex items-center">
            <div>
                <p className='font-800 z-50 text-xl md:w-[600px] mb-5'>Tunggu apa lagi? Segera gunakan aplikasi Skin Disease Detection dan jaga kesehatan kulit Anda dengan baik!</p>
                <div  className='bg-red-600 text-white w-20 h-9 flex justify-center items-center font-700 rounded-sm hover:opacity-80 duration-150'>
                    <Link to='/prediction-skin-disease'>Mulai</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkinDiases