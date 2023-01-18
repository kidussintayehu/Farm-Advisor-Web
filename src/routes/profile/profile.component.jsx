import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth.context'

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

   const handleLogout = ()=>{
        auth.setUser(null)
        navigate('/auth')
    }
  return (
    <> 
       <div>
        Wel come {}
        </div> 
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile