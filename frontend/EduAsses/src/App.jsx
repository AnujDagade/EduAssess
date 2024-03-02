import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteSummary from './component/NoteSummary/NoteSummary'
import Login from './component/Login/Login'
import Home from './component/Home';


function App() {


  return (
    <>

      
      <Router >
        <Routes>
          <Route path='/NoteSummary' element={<NoteSummary />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
