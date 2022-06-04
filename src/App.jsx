
import {BrowserRouter,Routes,Route,Link,Switch} from "react-router-dom"
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import MyInterest from "./components/MyInterest";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path = '/' element = {<Home />}/>
        <Route exact path = '/about-me' element = {<AboutMe/>}/>
        <Route exact path="/my-interest" element = {<MyInterest />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
