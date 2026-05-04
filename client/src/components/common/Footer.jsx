// ============================================================
//  COMPONENT: Footer.jsx
// ============================================================

import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'
import logo from '../../assets/BE5 logo.jpeg'

const QUICK_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Planner',  to: '/planner' },
  { label: 'Contact',  to: '/contact' },
]

const SERVICES_LINKS = [
  'Wedding Planning',
  'Pre-Wedding Shoot',
  'Engagement Ceremony',
  'Corporate Events',
  'Birthday Parties',
  'Anniversary Events',
]

const SOCIALS = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Youtube,   href: '#', label: 'YouTube' },
  { Icon: Twitter,   href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#060610]">
      {/* Glow top edge */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="BE5 Events" className="h-10 rounded-lg" />
              <span className="font-heading text-xl font-bold">
                <span className="text-gradient-primary">BE5</span>
                <span className="text-gradient-gold"> Events</span>
              </span>
            </Link>
            <p className="text-sm text-[#A89BC2] leading-relaxed mb-6">
              Where Every Event Becomes a Story. Premium wedding &amp; event management in Jaipur, Rajasthan.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full glass-card text-[#A89BC2] hover:text-white hover:border-violet-500/50 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-[#A89BC2] hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wider uppercase">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-[#A89BC2] hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-violet-400 mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-sm text-[#A89BC2] hover:text-white transition-colors block">+91 98765 43210</a>
                  <a href="tel:+919876543210" className="text-sm text-[#A89BC2] hover:text-white transition-colors block">+91 98765 43210</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-violet-400 shrink-0" />
                <a href="mailto:hello@be5eventery.com" className="text-sm text-[#A89BC2] hover:text-white transition-colors">
                  hello@be5eventery.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-violet-400 mt-0.5 shrink-0" />
                <span className="text-sm text-[#A89BC2]">Jaipur, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A89BC2]">
            © {new Date().getFullYear()} BE5 Events. All rights reserved.
          </p>
          <p className="text-xs text-[#A89BC2]">
            Crafted with ❤️ in Jaipur
          </p>
        </div>
      </div>
    </footer>
  )
}
