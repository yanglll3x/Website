import { NavLink } from "react-router-dom"
import NameLogo from '../assets/images/NameLogo.svg';

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className ="flex items-center justify-center">
            <img src={NameLogo} alt="Logo" className="h-10 w-auto " />
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                About
            </NavLink>
            <NavLink to="/works" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                Works
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                Contact
            </NavLink>
        </nav>
    </header>
  ) 
}

export default Navbar