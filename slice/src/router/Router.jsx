import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import Admin from '../pages/admin/Admin'
import NotFound from '../pages/notFound/NotFound'
import Deatil from '../pages/home/sections/detail/Deatil'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/detail' element={<Deatil/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router