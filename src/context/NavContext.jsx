
import React,{useState, createContext, useContext} from 'react'


const NavContext = createContext(null)

export function useNavOptions(){
  return useContext(NavContext)
}

export function NavContextProvider({children}){
  const [navTrigger,setTrigger] = useState(false)

function showMenu(){
  return setTrigger(!navTrigger)
}

const navOptions = {
  navTrigger:navTrigger,
  setMenu:showMenu,
  newWord:'new word',
}

  return (
    <>
    <NavContext.Provider value = {navOptions}>
      {children}
    </NavContext.Provider>
    </>
  )
}





