import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from './Components/page'
function App() {


  return (
   <Router>
    <Routes>
  
    <Route path="/" element={<Page/>} />
    
 

     
    </Routes>
  
  
  
   </Router>
  )
}

export default App
