import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Field from './Pages/Field/Field';
import Welcome from './Pages/Welcome/Welcome';

function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path= "/" element= {<Home />} />
    <Route path = "/field" element= { <Field />} />
    <Route path = "/welcome" element= { <Welcome />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
