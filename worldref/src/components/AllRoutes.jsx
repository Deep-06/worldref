import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { ProductList } from '../pages/ProductList'
import { Signup } from '../pages/Signup'
import { PrivateRoutes } from './PrivateRoutes'
import { Cart } from '../pages/Cart'
import { Details } from '../pages/Details'
// import { useState } from 'react'
const AllRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={
        <PrivateRoutes>
          <Home />
        </PrivateRoutes>
      } />
      <Route path='/product' element={<ProductList />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='/cart' element={
        <PrivateRoutes>
          <Cart />
        </PrivateRoutes>
      } />

      <Route path='/details' element={
        <PrivateRoutes>
          <Details />
        </PrivateRoutes>
      } />
    </Routes>

  )
}

export default AllRoutes

// <Routes>
//     <Route path='/' element={<Login />} />
//     <Route path='/home' element={
//       <PrivateRoutes>
//         <Home />
//       </PrivateRoutes>
//     } />
//     <Route path='/product' element={<ProductList />} />
//     <Route path='/signup' element={<Signup />} />
//   </Routes> 