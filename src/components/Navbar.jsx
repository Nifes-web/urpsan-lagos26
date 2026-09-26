import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'Overview', href: '#overview' },
    { name: 'Theme', href: '#theme' },
    { name: 'Registration', href: '#registration' },
    { name: 'Venue', href: '#venue' },
    { name: 'Inquiries', href: '#inquiries' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <img
              src={CONFERENCE_DATA.assets.emblem}
              alt="URPSAN Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full border border-slate-200"
            />
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 leading-none">
                URPSAN <span className="text-[#0A6836]">LAGOS'26</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide mt-1">
                11th National Conference
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#0A6836] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href={CONFERENCE_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-[#0A6836] hover:bg-[#08532B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={CONFERENCE_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#0A6836] text-white text-xs font-bold uppercase tracking-wider"
            >
              Register
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0A6836] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <a
              href={CONFERENCE_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center space-x-1.5 py-3 bg-[#0A6836] text-white text-xs font-bold uppercase tracking-wider"
            >
              <span>Register for Lagos'26</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
