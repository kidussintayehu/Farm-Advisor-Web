import {Routes,Route} from 'react-router-dom'
// import { useAuth } from './context/auth.context';

import Home from './routes/home/home.component';
import Help from './routes/help/help.component'
import Navigations from './routes/navigation/navigation.component'
import Profile from './routes/profile/profile.component'
import Authentication from './routes/authentication/authentication.component'
import NoMatch from './component/no-match/no-match.component'
import PrivateRoutes from './util/route/private-route.util';
import AddNewFarm from './component/add-farm/addNewFarm.component';




function App() {
// const auth = useAuth()
  return (

    <Routes>
      <Route element={<PrivateRoutes/>}>
       <Route path='/' element={<Navigations/>}  >
          <Route index element={<Home/>}/>
          <Route path='addNewFarm' element={<AddNewFarm/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='help' element={<Help/>}/>
        </Route>
      </Route>
      <Route path='auth' element={<Authentication/>}/>
      
      {/* <Route path='login' element={<Login/>}/> */}
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
        );
      }
      
      export default App;
     
