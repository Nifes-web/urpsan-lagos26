import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONFERENCE_DATA, getWhatsAppUrl } from '../data/conference';

export default function Contact() {
  const contactLines = [
    {
      title: 'Secretariat Line 1',
      display: CONFERENCE_DATA.contact1.display,
      tel: CONFERENCE_DATA.contact1.tel,
      raw: CONFERENCE_DATA.contact1.raw,
    },
    {
      title: 'Secretariat Line 2',
      display: CONFERENCE_DATA.contact2.display,
      tel: CONFERENCE_DATA.contact2.tel,
      raw: CONFERENCE_DATA.contact2.raw,
    },
  ];

  return (
    <section id="inquiries" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A6836] block mb-2">
            Secretariat & Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
            Sponsorship & Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            For sponsorship packages, delegate assistance, directions, and general conference inquiries, reach out through either phone line.
          </p>
        </div>

        {/* Contact Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {contactLines.map((line, idx) => (
            <div key={idx} className="bg-slate-50 p-8 sm:p-10 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {line.title}
                </span>
                <a
                  href={`tel:${line.tel}`}
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-[#0A6836] transition-colors block mb-6 font-mono"
                >
                  {line.display}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <a
                  href={`tel:${line.tel}`}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>

                <a
                  href={getWhatsAppUrl(line.raw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
