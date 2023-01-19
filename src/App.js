import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Field from './Pages/Field/Field';
import Welcome from './Pages/Welcome/Welcome';
import Addfield from './Pages/Addfield/Addfield';
import Newfarm from './Pages/Newfarm/Newfarm';
import AddSensor from './Pages/AddSensor/AddSensor';


function App () {
  return (
    <BrowserRouter>
      <Routes>
       <Route path= "/" element= {<Home />} />
       <Route path = "/field" element= { <Field />} />
       <Route path = "/welcome" element= { <Welcome />} />
       <Route path = "/addfield" element= { <Addfield />} />
       <Route path = "/addsensor" element= { <AddSensor />} />
       <Route path = "/newfarm" element= { <Newfarm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
