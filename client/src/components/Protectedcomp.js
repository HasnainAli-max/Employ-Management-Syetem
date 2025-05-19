import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const Protectedcomp = () => {

    let auth = localStorage.getItem('token')  
    

    return auth ? <Outlet /> : <Navigate to="/login" />
}

export default Protectedcomp
