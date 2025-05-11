import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'


function App() {
  const [sideNavbar,setSideNavbar] = useState(true);

   const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }
  return (
    <div className="App">
     <NavBar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar}/>
    <Home sideNavbar={sideNavbar}/>
    </div>
  )
}

export default App
