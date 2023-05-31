import React from 'react'
import ComponentTeam from './ComponentTeam'
import { data } from '../data'

const OurTeams = () => {
  return (
    <div id='our-team' className='font-poppins text-white mt-40'>
        <div className='flex items-center justify-center gap-1' data-aos='fade-down' data-aos-duration='1000'>
            <div className='w-10 h-[5px] bg-red-500 rounded-bl-xl rounded-tr-xl'></div>
            <p className='text-center font-700 text-red-500 text-3xl'>Our Team</p>
            <div className='w-10 h-[5px] bg-red-500 rounded-tr-xl rounded-bl-xl'></div>
        </div>
        <div className='flex justify-center mt-10 flex-wrap gap-6 md:mx-50' data-aos='fade-up-left' data-aos-duration='2000'>
            {data.map(data => (
                <ComponentTeam key={data.id} data={data}/>
            ))}
        </div>
    </div>
  )
}

export default OurTeams