
import {BrowserRouter,Routes,Route,Link,Switch} from "react-router-dom"
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Home from "./components/Home";
import MyInterest from "./components/MyInterest";
import Navbar from "./components/Navbar";
import OtherProjects from "./components/OtherProjects";
import Photos from "./components/Photos";
import WhyMeditate from "./images/WhyMeditate";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path = '/' element = {<Home />}/>
        <Route exact path = '/about-me' element = {<AboutMe/>}/>
        <Route exact path="/my-interest" element = {<MyInterest />}/>
        <Route exact path="/other-projects" element = {<OtherProjects/>}/>
        <Route exact path="/photos" element = {<Photos />}/>
        <Route exact path="/blog" element = {<Blog />}/>
        <Route exact path="/blog/whyMeditate" element = {<WhyMeditate />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
