import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import './App.css'

function App () {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
