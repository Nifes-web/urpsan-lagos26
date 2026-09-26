import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative bg-[#090D0B] text-white overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* Background Urban Photography with Dark Forest Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: `url('${CONFERENCE_DATA.assets.heroBackdrop}')` }}
        role="presentation"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#090D0B] via-[#090D0B]/85 to-[#090D0B]/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Organization and Location Line */}
        <div className="border-b border-white/15 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">
            {CONFERENCE_DATA.organizationName} • {CONFERENCE_DATA.organizationBody}
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            11th Edition • {CONFERENCE_DATA.locationBrand}
          </div>
        </div>

        {/* Headline and Theme */}
        <div className="max-w-4xl mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4">
            11th URPSAN Annual National Conference
          </h1>
          <p className="text-lg sm:text-2xl text-emerald-400 font-bold uppercase tracking-wide mb-3">
            {CONFERENCE_DATA.themeLead}
          </p>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            {CONFERENCE_DATA.themeSupporting}
          </p>
        </div>

        {/* Date and Venue Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl border-t border-white/15 pt-6 mb-10 text-sm">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">
              Conference Dates
            </span>
            <span className="text-lg sm:text-xl font-bold text-white block">
              {CONFERENCE_DATA.date}
            </span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">
              Host Venue
            </span>
            <span className="text-lg sm:text-xl font-bold text-white block">
              {CONFERENCE_DATA.venue}
            </span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <a
            href={CONFERENCE_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#0A6836] hover:bg-[#08532B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#inquiries"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-colors"
          >
            MAKE AN INQUIRY
          </a>

          <a
            href="#venue"
            className="inline-flex items-center justify-center px-5 py-3.5 text-white/70 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            View Location
          </a>
        </div>

      </div>
    </section>
  );
}
