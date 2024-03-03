import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteSummary from './component/NoteSummary/NoteSummary'
import Login from './component/Login/Login'
import Home from './component/Home';
import NavBar from './component/NavBar/NavBar'
import Test from './component/Grading/Test'

function App() {


  return (
    <>

      
      <Router >
      <NavBar />
        <Routes>
          <Route path='/NoteSummary' element={<NoteSummary />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Test' element={<Test />} />
          <Route path='/' element={<Home />} />
           {/* <Route path='/NoteSummary' element={<NavBar />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
