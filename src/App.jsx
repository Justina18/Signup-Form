import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inputs from './Components/Inputs'
import Upload from './Components/Upload'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={ <Inputs/> } />
          <Route path="/upload" element={ <Upload/> } /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App