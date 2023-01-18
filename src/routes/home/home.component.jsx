import{Outlet} from 'react-router-dom'

// import {ReactComponent as CrnLogo} from "../../../asset/file.svg";

const Home = ()=>{
return(
<>
<p>home</p>
{/* <div><CrnLogo/></div> */ } 
<Outlet/>
</>
)
}

export default Home