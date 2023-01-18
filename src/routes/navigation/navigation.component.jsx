import { Outlet ,NavLink} from "react-router-dom"


import {useAuth} from '../../context/auth.context'
import { signOutUser } from '../../util/firebase/firebase.utils'
import "./navigation.styles.css"

const Navigations = ()=>{
const auth = useAuth()
// console.log(auth.user)

// const handleSignOut = async ()=>{
//    await signOutUser()
//    auth.setUser(null)
// }

    return(<>
    <nav className="navigation">
        <NavLink className="logo-container" to='/'>Agino</NavLink>
        <div className="nav-links-container">
            <NavLink className="nav-link" to='/addNewFarm'>+</NavLink>
            <NavLink className="nav-link" to='/profile'>Profile</NavLink>
            <NavLink className="nav-link" to='/help'>help</NavLink>
            {
                auth.user ? (<NavLink className="nav-link" onClick={signOutUser}>Sign Out</NavLink>) :
                 (<NavLink className='nav-link' to='/auth'>Login</NavLink>)
            }      
        </div>
    </nav>
    <Outlet/>
    
    </>)
}

export default Navigations