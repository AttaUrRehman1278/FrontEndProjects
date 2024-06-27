import { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecommendedVideos from './components/RecommendedVideos'
function App() {
  
  return (
    <>
      <Header/>
      <div className="app__page">
        {/* <Sidebar/> */}
        <RecommendedVideos/>
      </div>
    </>
  )
}

export default App
