import React from 'react';
import { PageTab } from '../types';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6 text-center sm:text-left">
          <div>
            <span className="font-serif font-bold text-white text-sm tracking-wide">
              KATAPAYADI LAB
            </span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Indian Knowledge Systems (IKS) — Academic Project Demonstration
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-amber-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('mnemonic')}
              className="hover:text-amber-400 transition text-amber-300"
            >
              Create Mnemonic
            </button>
            <button
              onClick={() => onNavigate('learn')}
              className="hover:text-amber-400 transition"
            >
              Learn
            </button>
            <button
              onClick={() => onNavigate('reverse')}
              className="hover:text-amber-400 transition"
            >
              Reverse Check
            </button>
            <button
              onClick={() => onNavigate('modern')}
              className="hover:text-amber-400 transition"
            >
              Modern Connection
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 text-center sm:text-left">
          <p>
            Developed for academic demonstration of traditional Indian mnemonic numerical systems.
          </p>
          <p className="font-mono">
            अङ्कानां वामतो गतिः • Katapayadi System
          </p>
        </div>
      </div>
    </footer>
  );
};
