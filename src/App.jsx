import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JoinMovement from './components/JoinMovement'
import LocalTime from './components/LocalTime'
import WallOfHeroes from './components/WallOfHeroes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans">
      <Navbar />
      <Hero />
      <JoinMovement />
      <LocalTime />
      <WallOfHeroes />
      <Footer />
    </div>
  )
}

export default App
