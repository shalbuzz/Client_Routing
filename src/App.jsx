import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = ()=>{
  return(
  <div className="head">
   <Router>
    <Page/>
    <Routes>
      <Route path='/' element={<About/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
   </Router>
  </div>
  )
}
export default App;