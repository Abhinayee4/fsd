import React from 'react'
import SideNavBar from '../../components/sidenavbar/SideNavBar'
import HomePage from '../../components/homepage/HomePage'
import './Home.css'

const Home=({sideNavbar})=> {
  return (
    <div className='home'>
        <SideNavBar sideNavbar={sideNavbar}/>
        <HomePage sideNavbar={sideNavbar}/>
    </div>
  )
}
export default Home
