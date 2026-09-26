import React from 'react';
import { Target, Users, Sparkles, Building, CheckCircle } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Supporting tag banner */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0A6836] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Supporting Mission</span>
          </div>
          <p className="text-sm font-bold text-slate-500 mt-2 tracking-wide uppercase">
            "{CONFERENCE_DATA.supportingTagline}"
          </p>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            ABOUT THE CONFERENCE
          </h2>
          <div className="w-20 h-1.5 bg-[#0A6836] mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0A6836] flex items-center justify-center font-black">
                11th
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  National Convergence in Lagos
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {CONFERENCE_DATA.organizationBody}
                </p>
              </div>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              The <strong>11th URPSAN Annual National Conference (Lagos'26)</strong> is the flagship national gathering convened by the <strong>Urban and Regional Planning Students Association of Nigeria (URPSAN National Body)</strong>.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Hosted at the prestigious <strong>University of Lagos (UNILAG)</strong> from <strong>20th – 23rd October, 2026</strong>, this milestone conference brings together planning students, emerging professionals, scholars, and key stakeholders dedicated to the sustainable evolution of Nigeria’s built environment.
            </p>

            <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-100 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A6836]">
                Guiding Purpose
              </h4>
              <p className="text-slate-800 text-sm font-semibold italic">
                "{CONFERENCE_DATA.theme}"
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              As cities across Nigeria and Africa experience unprecedented urban growth, the conference creates a focused national platform to examine contemporary digital technologies, spatial intelligence, resilience strategies, and smart-city practices shaping our future settlements.
            </p>
          </div>

          {/* Core Focus Areas (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0A6836] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  Future-Ready Competencies
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Preparing student planners to harness GIS, data analytics, and digital innovation for responsive urban planning.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  Smart & Sustainable Communities
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Exploring strategies for climate resilience, urban equity, and sustainable living in rapidly growing metropolitan areas.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  National Planning Network
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Fostering professional collaboration, inter-university exchange, and student fellowship across all geopolitical zones of Nigeria.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
