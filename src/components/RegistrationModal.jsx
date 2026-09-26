import React from 'react';
import { X, Clock, Phone, MessageCircle, AlertCircle, Calendar, MapPin } from 'lucide-react';
import { CONFERENCE_DATA, getWhatsAppUrl } from '../data/conference';

export default function RegistrationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100">
        {/* Top green accent strip */}
        <div className="h-2.5 bg-gradient-to-r from-[#0A6836] via-[#10B981] to-[#F97316]" />

        <div className="p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A6836]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A6836] flex items-center justify-center border border-emerald-100">
              <Clock className="w-6 h-6 text-[#0A6836]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A6836] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Lagos'26 Registration
              </span>
              <h3 id="modal-headline" className="text-xl font-bold text-slate-900">
                Registration Link Coming Soon
              </h3>
            </div>
          </div>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            The official online registration portal is being finalized and will open shortly.
            In the meantime, you can reach out directly to the conference secretariat below for registration assistance, seat reservation, or sponsorship inquiries.
          </p>

          {/* Conference Summary Badge */}
          <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200/80 space-y-2 text-xs md:text-sm text-slate-700">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#0A6836] shrink-0" />
              <span><strong>Date:</strong> {CONFERENCE_DATA.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span><strong>Venue:</strong> {CONFERENCE_DATA.venue}</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-200">
              <span className="text-slate-500 font-medium">Current Fee (Late Payment):</span>
              <span className="text-base font-extrabold text-[#DC2626]">{CONFERENCE_DATA.currentFee}</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Contact Secretariat Directly
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={`tel:${CONFERENCE_DATA.contact1.tel}`}
                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {CONFERENCE_DATA.contact1.display}</span>
              </a>

              <a
                href={getWhatsAppUrl(CONFERENCE_DATA.contact1.raw)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Line 1</span>
              </a>

              <a
                href={`tel:${CONFERENCE_DATA.contact2.tel}`}
                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {CONFERENCE_DATA.contact2.display}</span>
              </a>

              <a
                href={getWhatsAppUrl(CONFERENCE_DATA.contact2.raw)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Line 2</span>
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
