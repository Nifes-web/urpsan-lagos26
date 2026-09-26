import React from 'react';
import { CONFERENCE_DATA } from '../data/conference';

export default function Footer() {
  return (
    <footer className="bg-[#050706] text-slate-400 py-12 text-xs border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          <div className="md:col-span-6 space-y-2">
            <span className="font-bold uppercase tracking-wider text-white text-sm block">
              {CONFERENCE_DATA.organizationBody}
            </span>
            <p className="text-slate-400 max-w-sm">
              {CONFERENCE_DATA.conferenceName} — {CONFERENCE_DATA.locationBrand}
            </p>
          </div>

          <div className="md:col-span-3 space-y-1">
            <span className="uppercase tracking-widest text-white text-[11px] font-semibold block mb-2">
              Assembly Details
            </span>
            <p>{CONFERENCE_DATA.date}</p>
            <p>{CONFERENCE_DATA.venue}</p>
          </div>

          <div className="md:col-span-3 space-y-1">
            <span className="uppercase tracking-widest text-white text-[11px] font-semibold block mb-2">
              Inquiries
            </span>
            <p className="font-mono text-white/90">{CONFERENCE_DATA.contact1.display}</p>
            <p className="font-mono text-white/90">{CONFERENCE_DATA.contact2.display}</p>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 {CONFERENCE_DATA.organizationBody}. All Rights Reserved.</p>
          <p className="uppercase tracking-wider">Lagos'26 Official Conference Landing Page</p>
        </div>

      </div>
    </footer>
  );
}
