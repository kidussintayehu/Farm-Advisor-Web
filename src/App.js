import {
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Field from './Pages/Field/Field';
import Welcome from './Pages/Welcome/Welcome';
import Addfield from './Pages/Addfield/Addfield';
import SignUpPage from './Pages/authentication/sign-up-page';
import PrivateRoutes from './util/route/private-route.util';
import Navigations from './Pages/navigation/navigation.component'
import SignInForm from "./Components/sign-in-form/sign-in-form.component";
import SignUpForm from "./Components/sign-up-form/sign-up-form.component";

function App () {
  return (
   <Routes>
    <Route element={<PrivateRoutes/>}>
       <Route path='/' element={<Navigations/>}  >
          <Route index element={<Home/>}/>
          <Route path = "/field" element= { <Field />} />
          <Route path = "/welcome" element= { <Welcome />} />
          <Route path = "/addfield" element= { <Addfield />} />
        </Route>
      </Route>
      <Route path='/auth' element={<SignUpPage/>}/>
      <Route path='/login' element={<SignInForm/>}/>
      <Route path='/signUp' element={<SignUpForm/>}/>

    </Routes>
  )
}

export default App
