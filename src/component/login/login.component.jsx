// import React from 'react'
// import { useNavigate ,useLocation} from 'react-router-dom'
// import { useState } from 'react'
// import { useAuth } from '../../context/auth.context'

// const Login = () => {
//   const [user,setUser] = useState('')
//   const auth = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()

//   const redirectPath = location.state?.path || '/'
//   const handleLogin = () =>{
//         auth.login(user)
//         navigate(redirectPath,{replace:true})
//   }
//     return (
//     <div>
//       <h1>Login page</h1>
//         <label htmlFor="login">
//             Username:{' '}
//             <input type="text" onChange={(e)=>setUser(e.target.value)} />
//         </label>
//         <button onClick={handleLogin}>Login</button>

//     </div>
//   )
// }

// export default Login