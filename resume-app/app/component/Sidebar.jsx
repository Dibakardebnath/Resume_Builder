import React from 'react'
import Profile from './Profile'
import Summery from './Summery'
import Education from './Education'
import Skills from './Skills'
import Language from './Language'
import Interest from './Interest'
import Projects from './Projects'

const Sidebar = () => {
  return (
    <div  className="p-4 col-span-1 shadow-lg  border-gray-500  bg-#f8f8f9-200">
     <Profile/>
     <Summery/>
     <Education/>
     <Skills/>
     <Language/>
     <Interest/>
     <Projects/>
    </div>
  )
}

export default Sidebar
