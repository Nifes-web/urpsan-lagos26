import React from 'react';
import { CONFERENCE_DATA } from '../data/conference';

export default function ThemeSection() {
  const pillars = [
    {
      num: '01',
      title: 'Digital Spatial Innovation',
      desc: 'Applying geographic information systems, spatial modeling, and smart data analytics to current municipal challenges.'
    },
    {
      num: '02',
      title: 'Smart Infrastructure & Mobility',
      desc: 'Examining integrated transport solutions, sustainable mobility, and infrastructure planning for expanding cities.'
    },
    {
      num: '03',
      title: 'Sustainable Ecosystems',
      desc: 'Balancing rapid demographic expansion with ecological conservation, open spaces, and environmental management.'
    },
    {
      num: '04',
      title: 'Resilient Communities',
      desc: 'Developing planning frameworks to mitigate flood risks, climate hazards, and socioeconomic vulnerabilities.'
    }
  ];

  return (
    <section id="theme" className="py-20 sm:py-28 bg-[#05331B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="border-b border-white/15 pb-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
            Conference Theme
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Equipping Future-Ready Planners
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 font-normal leading-relaxed max-w-3xl">
            "{CONFERENCE_DATA.themeSupporting}"
          </p>
        </div>

        {/* 4 Numbered Thematic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((item) => (
            <div key={item.num} className="border-t border-white/15 pt-5">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                Pillar {item.num}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
