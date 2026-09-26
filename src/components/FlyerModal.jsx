import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export default function FlyerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flyer-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative max-w-2xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl z-10 border border-slate-700 flex flex-col max-h-[92vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/90 border-b border-slate-700/80">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <h3 id="flyer-modal-title" className="text-sm font-semibold text-white">
              Official Conference Flyer (Lagos'26)
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href={CONFERENCE_DATA.assets.flyerFull}
              download="URPSAN-Lagos26-Conference-Flyer.jpg"
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-1 text-xs"
              title="Download Flyer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Flyer Image Container */}
        <div className="overflow-y-auto p-4 flex items-center justify-center bg-slate-950">
          <img
            src={CONFERENCE_DATA.assets.flyerFull}
            alt="11th URPSAN Annual National Conference Lagos'26 Official Flyer"
            className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Caption */}
        <div className="px-5 py-2.5 bg-slate-900 text-slate-400 text-xs text-center border-t border-slate-800">
          11th URPSAN Annual National Conference • 20th – 23rd October 2026 • University of Lagos
        </div>
      </div>
    </div>
  );
}
