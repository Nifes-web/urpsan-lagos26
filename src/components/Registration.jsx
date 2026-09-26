import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export default function Registration() {
  return (
    <section id="registration" className="py-16 sm:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A6836] block mb-2">
            Delegate Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
            Registration
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Registration grants admission to all four conference days, the official delegate package, and certification.
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-10">
          
          {/* Active Standard Late Fee: ₦15,000 (Dominant) */}
          <div className="bg-white p-8 sm:p-10 border-2 border-[#0A6836] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A6836]">
                  Active Registration
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 bg-[#DC2626] text-white uppercase tracking-wider">
                  Late Payment
                </span>
              </div>

              <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-2">
                {CONFERENCE_DATA.currentFee}
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-6">
                Per Delegate • Currently Active
              </span>

              <div className="border-t border-slate-100 pt-6 space-y-2.5 text-sm text-slate-700">
                <p>• Admission to all conference sessions and lectures</p>
                <p>• Official delegate materials and conference kit</p>
                <p>• Verified certificate of participation</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={CONFERENCE_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-[#0A6836] hover:bg-[#08532B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Early Bird Discount: ₦10,000 (Expired) */}
          <div className="bg-slate-100 p-8 sm:p-10 border border-slate-200 flex flex-col justify-between opacity-75">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Early Bird Discount
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-300 text-slate-700 uppercase tracking-wider">
                  Closed
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-extrabold text-slate-400 line-through tracking-tight mb-2">
                {CONFERENCE_DATA.earlyBirdFee}
              </div>
              <span className="text-xs uppercase tracking-wider text-[#DC2626] font-semibold block mb-6">
                Concluded on {CONFERENCE_DATA.earlyBirdDeadline}
              </span>

              <div className="border-t border-slate-200 pt-6 text-sm text-slate-500">
                <p>
                  The early bird registration period ended on 18th September. All new delegates must register under the active late payment fee (₦15,000).
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                disabled
                className="w-full py-3.5 px-6 bg-slate-200 text-slate-500 font-bold text-xs uppercase tracking-wider cursor-not-allowed text-center"
              >
                EARLY BIRD CLOSED
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
