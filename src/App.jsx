import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JoinMovement from './components/JoinMovement'
import LocalTime from './components/LocalTime'
import WallOfHeroes from './components/WallOfHeroes'
import Footer from './components/Footer'

function App() {
  const [heroes, setHeroes] = useState([]);

  const handleJoin = (name) => {
    const newHero = { name, country: "IN" };
    setHeroes([newHero, ...heroes]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans">
      <Navbar />
      <Hero />
      <JoinMovement onJoin={handleJoin} />
      <LocalTime />
      <WallOfHeroes heroes={heroes} />
      <Footer />
    </div>
  )
}

export default App
