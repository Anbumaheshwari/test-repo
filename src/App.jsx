import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Offers from './Components/Offers'
import Content from './Components/Content'



const App = () => {
  return (
    <div>
      <Navbar/>
     <main>
      <div id='home'>
        <Home/>
      </div>
      <div id='offers'>
        <Offers/>
      </div>
      <div id='content'>
        <Content/>
      </div>
     </main>
      </div>
  )
}

export default App