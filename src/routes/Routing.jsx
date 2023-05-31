import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Predict, Home } from '../pages'
import Aos from 'aos'

const Routing = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/prediction-skin-disease' element={<Predict/>}/>
        </Routes>
    </Router>
  )
}

export default Routing