import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Welcome from './components/Welcome'
import Task from './components/Task'
import Activityfeed from './components/Activityfeed'
import Taskpriorities from './components/Taskpriorities'


function App() {
  

  return (
    <div className="grid-container">
        
        <Sidebar/>
        <Header/>
        <Welcome/>
        <Task/>
        <Activityfeed/>
        <Taskpriorities/>
        
        
        
    </div>
  )
}

export default App
