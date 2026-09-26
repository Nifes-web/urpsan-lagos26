import React from 'react';
import { CONFERENCE_DATA } from '../data/conference';

export default function ConferenceInfo() {
  return (
    <section id="overview" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A6836] block mb-2">
              Conference Context
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
              About the 11th National Assembly
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <p>
              The <strong className="font-semibold text-slate-900">11th URPSAN Annual National Conference (Lagos'26)</strong> is organized by the <strong className="font-semibold text-slate-900">Urban and Regional Planning Students Association of Nigeria (URPSAN National Body)</strong>.
            </p>
            <p>
              Hosted at the University of Lagos from 20th to 23rd October 2026, the conference convenes planning students, educators, and built-environment stakeholders from across the nation to discuss sustainable urbanism, spatial data, and the future of Nigerian communities.
            </p>
          </div>
        </div>

        {/* Content-Driven Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Event Edition
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0A6836] tracking-tight">
              {CONFERENCE_DATA.editionNumber}
            </div>
            <p className="text-xs text-slate-600 mt-1 uppercase tracking-wide">
              Annual National Conference
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Location Brand
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {CONFERENCE_DATA.locationBrand}
            </div>
            <p className="text-xs text-slate-600 mt-1 uppercase tracking-wide">
              Host City Identity
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Duration
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              4 Days
            </div>
            <p className="text-xs text-slate-600 mt-1 uppercase tracking-wide">
              20th to 23rd October 2026
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Host Campus
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              UNILAG
            </div>
            <p className="text-xs text-slate-600 mt-1 uppercase tracking-wide">
              University of Lagos, Akoka
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
