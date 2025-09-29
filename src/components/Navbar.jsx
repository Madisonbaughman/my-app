import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class='sticky top-0 z-50 navbr bg-[#A38C79]'>
        <div className='flex justify-evenly w-1/2' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center'><Menu className='w-full h-full'/></div>
                
            
        </div>
        <div className='w-1/2'>
            {isOpen && (
            <ul className='navcontents'>
                <li className='flex items-center'><Link to="/" >Home</Link></li>
                <li className='flex items-center'><Link to="/about" >About</Link></li>
                <li className='flex items-center'><Link to="/services" >Services</Link></li>
                <li className='flex items-center'><Link to="/contact">Contact</Link></li>
            </ul>
            )}
        </div>
    </nav>
  );
}

export default Navbar;