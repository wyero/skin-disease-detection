import React, { useState } from 'react'
import {IoCloudUploadOutline} from 'react-icons/io5'
import {AiOutlineDoubleLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { api } from '../../api/api'
import { typeDisease } from '../../data'

const Predict = () => {

  const [file, setFile] = useState('')
  const [predict, setPredict] = useState('')
  const [preview, setPreview] = useState('')

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('file', file)
      const response = await api.post('/api/predict', formData)
      const {prediksi} = response.data
      setPredict(prediksi)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='font-poppins md:mx-50 flex flex-col md:flex-row flex-start p-3 flex-wrap'>
      <div className=''>
        <div className='flex flex-col md:flex-row md:items-center gap-5 relative'>
          <Link to='/'>
            <AiOutlineDoubleLeft className='text-white text-2xl' data-aos='fade-up-right' data-aos-duration='2000'/>
          </Link>
          <p className='text-red-500 font-800 text-3xl md:text-4xl capitalize text-center' data-aos='fade-down-right' data-aos-duration='1000'>skin disease detection</p>
        </div>
        <div className='text-white lg:ml-12 mt-3 group w-14 relative'>
          <p className='font-600 text-[15px] cursor-pointer hover:opacity-80 duration-200'>Detail</p>
          <p className='hidden w-screen md:w-[480px] text-[13px] group-hover:block absolute z-50 bg-slate-800 p-3 rounded-sm'>Dapatkan prediksi penyakit kulit secara instan dengan mengunggah gambar kulit Anda. Aplikasi Skin Disease Detection akan menganalisis gambar dengan menggunakan algoritma deep learning yang canggih untuk memberikan hasil prediksi yang akurat. Prosesnya sangat mudah. Cukup unggah gambar kulit yang ingin Anda analisis, dan dalam beberapa detik, aplikasi akan memberikan informasi mengenai kemungkinan jenis penyakit kulit yang Anda alami. Dengan bantuan aplikasi ini, Anda dapat segera mengetahui kondisi kulit Anda dan mengambil langkah-langkah yang diperlukan untuk perawatan lebih lanjut.</p>
        </div>
        <div className='mb-5'>
          <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <div className='mb-7'>
              <label htmlFor="image" className='cursor-pointer text-white font-700 mt-5 flex flex-col items-center'>
                <IoCloudUploadOutline className='text-7xl mb-2' data-aos='flip-left' data-aos-duration='1000'/>
                <span data-aos='fade-up-right' data-aos-duration='1000'>Upload Image</span>
              </label>
              <input className='hidden' type="file" id='image' onChange={loadImage}/>
            </div>
            <button disabled={!file} className={`${!file ? 'bg-red-600 opacity-60 text-white rounded-sm font-700 w-24 h-9' : 'bg-red-600 text-white rounded-sm font-700 w-24 h-9 duration-75 hover:bg-inherit hover:border-2 hover:border-red-500 hover:text-red-500'}`}>Prediksi</button>
          </form>
        </div>
      </div>
      {predict && 
        <div className='text-white w-[400px] mt-4 md:mt-0 mx-auto bg-slate-800 rounded-md p-3 h-[95vh] overflow-auto'>
          <p className='text-center font-600 text-xl mb-5'>Hasil Prediksi</p>
          <p className='mb-3 text-md'>Jenis penyakit kulit : <span className='font-700'>{predict}</span></p>
          <div className='text-[13px]'>
            <img src={preview} alt={predict} className='w-[300px] h-[170px] my-3 mx-auto rounded-md'/>
            {predict && 
              typeDisease.filter(type => type.name.toLocaleLowerCase().includes(predict.toLocaleLowerCase()))
              .map(type => (
                <div key={type.id}>
                  <p className='leading-5'>{type.desc}</p>
                  <p className='my-2'>Gejala Penyakit {predict} : </p>
                  <ul className='list-disc ml-3'>
                    {type.sub.map(sub => (
                      <li key={sub.id}>{sub.title}</li>
                    ))}
                  </ul>
                  <p className='my-2'><span className='font-700'>Penanganan Penyakit {predict}</span> {type.vit} : </p>
                  <ol className='list-decimal ml-3'>
                    {type.handling.map(h => (
                      <li key={h.id} className='my-1'>{h.title}</li>
                    ))}
                  </ol>
                  <p className='my-2'>{type.text}</p>
              </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Predict