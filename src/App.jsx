
import {BrowserRouter,Routes,Route,Link,Switch} from "react-router-dom"
import Home from "./components/Home";
import FloridaNight from './components/FloridaNight';
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path = '/' element = {<Home />}/>
        <Route exact path = '/florida-night' element = {<FloridaNight />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
