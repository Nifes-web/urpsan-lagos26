import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#090D0B] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-3">
          11th Annual National Assembly
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
          Ready for Lagos'26?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 font-normal mb-8">
          {CONFERENCE_DATA.date} • {CONFERENCE_DATA.venue}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={CONFERENCE_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#0A6836] hover:bg-[#08532B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#inquiries"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-colors"
          >
            MAKE AN INQUIRY
          </a>
        </div>

      </div>
    </section>
  );
}
