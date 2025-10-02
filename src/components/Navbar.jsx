import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#A38C79]">
      {/* Bar */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Left: brand/logo placeholder (you can swap text for an <img />) */}
          <Link to="/" className="text-lg font-semibold tracking-wide">
            MBODY Better
          </Link>

          {/* Desktop links */}
          <ul className="hidden gap-8 md:flex">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/about">About</Link></li>
            <li><Link className="hover:underline" to="/services">Services</Link></li>
            <li><Link className="hover:underline" to="/contact">Contact</Link></li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2"
            onClick={() => setIsOpen((o) => !o)}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-black/10">
          <ul className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            <li>
              <Link
                to="/"
                className="block rounded-md px-3 py-2 hover:bg-black/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block rounded-md px-3 py-2 hover:bg:black/10 hover:bg-black/10"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block rounded-md px-3 py-2 hover:bg-black/10"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block rounded-md px-3 py-2 hover:bg-black/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
