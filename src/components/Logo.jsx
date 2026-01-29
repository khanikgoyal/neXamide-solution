import logo from '../assets/newLogo1.png';
import { Link } from "react-router-dom";

export default function Logo({logoClass=""}) {
   const handler = (() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
   })
    return (
        <Link to="/" onClick={handler}>    
            <img  src={logo} alt="neXamind Logo" className={`h-12 w-auto object-contain ${logoClass}`} />
        </Link>
    )
}