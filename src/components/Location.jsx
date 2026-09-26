import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export default function Location() {
  return (
    <section id="venue" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A6836] block mb-2">
                Conference Venue
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 mb-4">
                University of Lagos
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                The conference sessions will be held at the University of Lagos (UNILAG) main campus in Akoka, Yaba, Lagos State.
              </p>

              <div className="border-t border-slate-100 pt-6 space-y-3 text-sm text-slate-700">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                    Campus Location
                  </span>
                  <span className="font-medium text-slate-900">
                    Akoka, Yaba, Lagos State, Nigeria
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                    Dates
                  </span>
                  <span className="font-medium text-slate-900">
                    20th to 23rd October 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={CONFERENCE_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 min-h-[360px] bg-slate-100 border border-slate-200">
            <iframe
              title="University of Lagos (UNILAG) Map"
              src={CONFERENCE_DATA.googleMapsEmbedUrl}
              className="w-full h-full min-h-[360px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
