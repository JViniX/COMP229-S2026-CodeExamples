import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'

import MainRouter from './mainRouter'

function App() {

  return (
    <Router>
      <MainRouter />
    </Router>
  )
}

export default App
