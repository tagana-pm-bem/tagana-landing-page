import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const navLinks = [
  { label: 'Beranda', href: '/', isAnchor: false },
  { label: 'Kebijakan Privasi', href: '/privacy-policy', isAnchor: false },
  { label: 'Data Safety', href: '/data-safety', isAnchor: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Helper to determine if a link is active
  const currentPath = location.pathname + location.hash
  const isActive = (href) => {
    if (href === '/' && (currentPath === '/' || currentPath === '')) return true;
    if (href !== '/' && currentPath === href) return true;
    return false;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-subtle' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-heading font-bold text-xl group">
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-border bg-white shadow-sm flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
            <img src={logo} alt="TAGANA" className="w-full h-full object-contain p-0.5 mix-blend-multiply" />
          </div>
          <span className="text-blue-600 tracking-wide transition-colors group-hover:text-blue-700">TAGANA</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const active = isActive(l.href)
            return (
              <li key={l.href}>
                {l.isAnchor ? (
                  <a
                    href={l.href}
                    className={`font-body text-sm font-600 transition-colors ${
                      active ? 'text-primary' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.href}
                    className={`font-body text-sm font-600 transition-colors ${
                      active ? 'text-primary' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#download"
            className="bg-primary hover:bg-primary-hover text-white font-body text-sm font-bold px-5 py-2 rounded-full transition-colors glow-primary"
          >
            Download App
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((l) => {
            const active = isActive(l.href)
            return (
              <div key={l.href}>
                {l.isAnchor ? (
                  <a
                    href={l.href}
                    className={`block font-body text-base transition-colors ${
                      active ? 'text-primary font-bold' : 'text-text-secondary hover:text-primary'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.href}
                    className={`block font-body text-base transition-colors ${
                      active ? 'text-primary font-bold' : 'text-text-secondary hover:text-primary'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                )}
              </div>
            )
          })}
          <a
            href="/#download"
            className="bg-primary text-white font-body font-bold text-sm px-5 py-3 rounded-full text-center transition-colors hover:bg-primary-hover block mt-2"
            onClick={() => setOpen(false)}
          >
            Download App
          </a>
        </div>
      )}
    </header>
  )
}
