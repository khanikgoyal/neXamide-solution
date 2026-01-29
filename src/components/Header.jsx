import Logo from "./Logo";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#00071e] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo />
        </div>
    
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
          <Link to="/aboutus" className="hover:text-[#b6fefe] transition">About us</Link>
          <Link to="/services" className="hover:text-[#b6fefe] transition">Services</Link>
          <Link to="/technologies" className="hover:text-[#b6fefe] transition">Technologies</Link>
          <Link to="/works" className="hover:text-[#b6fefe] transition">Works</Link>
          <Link to="/contact-us" className="hover:text-[#b6fefe] transition">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
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
          <Link to="/aboutus" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">About us</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Services</Link>
          <Link to="/technologies" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Technologies</Link>
          <a href="#work" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Work</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-[#4ade80]">Contacts</a>
        </motion.div>
      )}
    </header>
  );
}

export default Header;
