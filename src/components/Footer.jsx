import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {

    const handler = (() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
   })
return (
<footer className="bg-[#020b1b] text-white py-10 px-6 mt-20 border-t border-gray-800">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
{/* Brand */}
<div>
<Logo />
<p className="text-gray-400 text-sm leading-6">
Empowering next‑gen AI solutions with precision, trust, and innovation.
</p>
</div>


{/* Quick Links */}
<div>
<h3 className="text-lg font-semibold mb-3">Quick Links</h3>
<ul className="space-y-2 text-gray-300 text-sm">
<li className="hover:text-blue-400 cursor-pointer">
    <Link to="/aboutus" onClick={handler}className="hover:text-[#b6fefe] transition">About us</Link>
</li>
<li className="hover:text-blue-400 cursor-pointer">
          <Link to="/services" onClick={handler} className="hover:text-[#b6fefe] transition">Services</Link>
</li>
<li className="hover:text-blue-400 cursor-pointer">
          <Link to="/technologies" onClick={handler} className="hover:text-[#b6fefe] transition">Technologies</Link>
</li>
<li className="hover:text-blue-400 cursor-pointer">
    <Link to="/contact-us" onClick={handler} className="hover:text-[#b6fefe] transition">Contact Us</Link>
</li>
</ul>

</div>


{/* Services */}
<div>
<h3 className="text-lg font-semibold mb-3">Our Services</h3>
<ul className="space-y-2 text-gray-300 text-sm">
<li className="hover:text-blue-400 cursor-pointer">AI Automation</li>
<li className="hover:text-blue-400 cursor-pointer">Web Development</li>
<li className="hover:text-blue-400 cursor-pointer">Branding & UI/UX</li>
<li className="hover:text-blue-400 cursor-pointer">Custom Solutions</li>
</ul>
</div>


{/* Socials */}
<div>
<h3 className="text-lg font-semibold mb-3">Follow Us</h3>
<div className="flex items-center space-x-4 mt-2">
<a className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition cursor-pointer">
<FaFacebookF size={16} />
</a>
<a className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition cursor-pointer">
<FaInstagram size={16} />
</a>
<a className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition cursor-pointer">
<FaLinkedinIn size={16} />
</a>
</div>
</div>
</div>


{/* Bottom */}
<div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
© {new Date().getFullYear()} neXamind. All rights reserved.
</div>
</footer>
);
}

export default Footer