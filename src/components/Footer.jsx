import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-700 bg-white flex-shrink-0 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <img src={logo} alt="TAGANA" className="w-full h-full object-contain p-1" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-wide text-white">TAGANA</span>
          </div>
          <p className="font-body text-sm text-gray-400 leading-relaxed max-w-xs">
            Platform monitoring IoT cerdas untuk keamanan dan efisiensi operasional Anda.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-gray-500 mb-4">
            Navigasi
          </h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Fitur', href: '/#features' },
              { label: 'Cara Kerja', href: '/#how-it-works' },
              { label: 'Download', href: '/#download' },
              { label: 'Kebijakan Privasi', href: '/privacy-policy', isRoute: true },
              { label: 'Data Safety', href: '/data-safety', isRoute: true },
            ].map((l) => (
              <li key={l.label}>
                {l.isRoute ? (
                  <Link
                    to={l.href}
                    className="font-body text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="font-body text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-gray-500 mb-4">
            Kontak
          </h4>
          <a
            href="mailto:taganahiliriset@gmail.com"
            className="flex items-center gap-2 font-body text-sm text-gray-400 hover:text-primary transition-colors"
          >
            <Mail size={15} />
            taganahiliriset@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-gray-600">
            © {new Date().getFullYear()} TAGANA. Semua hak dilindungi.
          </p>
          <p className="font-body text-xs text-gray-600">
            Terakhir diperbarui: 15 September 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

