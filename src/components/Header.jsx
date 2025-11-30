import React from 'react'
import logo from '../assets/logoWithoutBGSm.png'
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import ServicesSection from '../pages/ServicesSection';
function Header() {
  return (
    <header className="w-full bg-[#00071e] text-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
        <img src={logo} alt="N Examind Logo" className="h-12 w-auto object-contain" />
        </div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
        <a href="#home" className="hover:text-[#b6fefe] transition">About us</a>
        <a href="#services" className="hover:text-[#b6fefe] transition">Services</a>
        <a href="#pricing" className="hover:text-[#b6fefe] transition">Technologies</a>
        <a href="#about" className="hover:text-[#b6fefe] transition">Work</a>
        <a href="#contact" className="hover:text-[#b6fefe] transition">Contacts</a>
        </nav>


        {/* Mobile Menu Icon */}
        <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl focus:outline-none"
        >
        {open ? <FiX /> : <FiMenu />}
        </button>
        </div>


        {/* Mobile Menu */}
        {open && (
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="md:hidden bg-[#0a0f1a] pb-4 px-4 text-lg flex flex-col gap-4 shadow-lg"
        >
        <a href="#home" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">About us</a>
        <a href={ServicesSection} onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Services</a>
        <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Technologies</a>
        <a href="#about" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Work</a>
        <a href="#contact" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Contacts</a>
        </motion.div>
        )}
        </header>
  )
}

export default Header