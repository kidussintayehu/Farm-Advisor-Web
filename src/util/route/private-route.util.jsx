import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/auth.context'

const PrivateRoutes = () => {
    const auth = useAuth()
    console.log(auth.user)
    
  return (
    auth.user ? <Outlet/> : <Navigate to='/auth'/>

  )
}

export default PrivateRoutes