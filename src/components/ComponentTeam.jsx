import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ComponentTeam = ({data}) => {
    const {image, name, title, univ, link} = data
  return (
    <div>
        <div className='w-[300px] relative h-[330px] overflow-hidden text-center shadow-sm rounded-md shadow-white flex flex-col items-center py-5 cursor-pointer'>
            <img src={image} alt={name} className='w-[130px] h-[130px] rounded-full duration-200 mb-2'/>
            <p className='mt-2 font-800 capitalize text-lg'>{name}</p>
            <p className='font-700 text-md text-gray-300 my-1'>{univ}</p>
            <p className='font-600 text-md text-gray-400'>{title}</p>
            <div className='mt-3 absolute bottom-5'>
                <Link to={link} target="_blank" rel="noopener noreferrer">
                    <BsInstagram className='text-3xl text-red-500 hover:rotate-[360deg] duration-300'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ComponentTeam