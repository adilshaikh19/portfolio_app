import React from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'
import SocialLinks from './component/SocialLinks'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Experience from './component/Experience'
import Contact from './component/Contact'
import SocialLinkMobile from './component/SocialLinkMobile'

const App = () => {
  return (
  
    <div>
        <NavBar />
        <Home />
        {/* <SocialLinkMobile /> */}
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
        
    </div>
    
  )
}

export default App