import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'
import HeroSection from './pages/HeroSection'
import ServicesSection from './pages/ServicesSection'
import Technologies from './pages/Technologies'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    <Header/>
    <main className='min-h-[78vh]'>
       <HeroSection />
       <ServicesSection/> 
       <Technologies/>
    </main>
    <Footer/>
    </>
  )
}

export default App
