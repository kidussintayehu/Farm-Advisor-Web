import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Field from './Pages/Field/Field';

function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path= "/" element= {<Home />} />
    <Route path = "/field" element= { <Field />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
