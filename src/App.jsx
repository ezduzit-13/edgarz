
import {BrowserRouter,Routes,Route,Link,Switch} from "react-router-dom"
import AimlessReading from "./components/AimlessReading";
import FloridaNights from "./components/FloridaNights";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import NewMexicoPhotos from "./components/NewMexicoPhotos";
import {NavContextProvider} from "./context/NavContext";

function App() {
  return (
    <NavContextProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path = '/' element = {<Home />}/>
        <Route exact path = '/new-mexico-photos' element = {<NewMexicoPhotos />}/>
        <Route exact path = '/florida-nights-photos' element = {<FloridaNights />}/>
        <Route exact path = '/aimless-reading' element = {<AimlessReading />}/>
      </Routes>
    </BrowserRouter>
    </NavContextProvider>
  )
}

export default App;
