import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 w-full h-[72px] bg-[#e6e6e6]">
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex items-center justify-center h-full w-1/3">
          <img src={Logo} className="w-[220px]" alt="Logo" />
        </div>
        <div className="flex items-center justify-center h-full w-1/3">
          <ul className="flex items-center justify-between gap-8 mr-8">
            <li className="text-lg font-bold cursor-pointer"><Link to="/about">About</Link></li>
            <li className="text-lg font-bold cursor-pointer">Projects</li>
            <li className="text-lg font-bold cursor-pointer">Experiences</li>
            <li className="text-lg font-bold cursor-pointer">Testomonials</li>
            <li className="text-lg font-bold cursor-pointer">Contact</li>
          </ul>
          <div className="flex items-center justify-center h-full">
            <h2 className="text-lg font-bold text-orange-500 cursor-pointer">Sun</h2>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
