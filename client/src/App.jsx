import React from 'react'
import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Project from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './component/Header'
import Footer from './component/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}
