import React from 'react'
import Herosection from './Portfolio/herosection'
import About from './Portfolio/About'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Footer from "./Portfolio/footer"
import Navbar from './Portfolio/navbar'
export default function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Skills />
      <Projects />
      <hr />
    <Footer></Footer>
    </div>
  )
}
