import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#A38C79] shadow-md">
      <div className="custom-container !py-0">
        {/* Taller navbar for better presence */}
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-semibold tracking-wide font-['Roboto_Slab']"
          >
            MBODY Better
          </Link>

          {/* Desktop links */}
          <ul className="hidden gap-10 md:flex text-lg">
            <li>
              <Link
                className="hover:underline font-['Roboto_Slab']"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline font-p[]" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:underline font-p[]" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-3"
            onClick={() => setIsOpen((o) => !o)}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-black/10 bg-[#A38C79]/90"
        >
          <ul className="mx-auto max-w-6xl px-4 py-4 space-y-3 text-lg">
            {[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md px-3 py-2 hover:bg-black/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
