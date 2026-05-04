// ============================================================
//  COMPONENT: Navbar.jsx
// ============================================================

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../../assets/BE5 logo.jpeg'

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Planner',  to: '/planner' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 backdrop-blur-xl bg-[#0A0A18]/90 shadow-lg shadow-violet-950/30' : 'py-4 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="BE5 Events Logo" className="h-10 w-auto rounded-lg object-contain" />
          <span className="font-heading text-xl font-bold text-gradient-primary hidden sm:block">
            BE5 <span className="text-gradient-gold">Events</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === to
                    ? 'bg-violet-600/20 text-violet-300'
                    : 'text-[#A89BC2] hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden md:flex items-center gap-1.5 text-sm text-[#A89BC2] hover:text-white transition-colors"
          >
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200"
            style={{ background: 'linear-gradient(135deg,#7C3AED,#9333EA)' }}
          >
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#A89BC2] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl glass-card overflow-hidden">
          <ul className="py-2 px-3 space-y-1">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === to
                      ? 'bg-violet-600/20 text-violet-300'
                      : 'text-[#A89BC2] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <Link
                to="/contact"
                className="block text-center px-4 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#9333EA)' }}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
