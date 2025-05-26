import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import { AnimatePresence } from 'framer-motion'

function App() {
  

  return (
    <AnimatePresence>
     <Layout />
    </AnimatePresence>
  )
}

export default App
