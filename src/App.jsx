import { useState } from 'react'
import './App.css'
import { useTypewriter } from './components/typewriter/typewriter.jsx'

function App() {
  const featureText = useTypewriter('cool girl book club.', 150);

  return (
    <>
      <div id="hero-root">
        <p className="header">{featureText}</p>
      </div>
    </>
  )
}

export default App
