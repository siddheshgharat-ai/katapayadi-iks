import React from 'react';
import { PageTab } from '../types';
import { Sparkles, BookOpen, ArrowRight, Brain, Lightbulb, CheckCircle2 } from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (tab: PageTab) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn py-2">
      {/* Hero Section */}
      <section className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-800 border border-amber-500/20 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Indian Knowledge Systems (IKS) College Project
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
          KATAPAYADI
        </h1>

        <p className="text-base sm:text-lg font-serif italic text-amber-800">
          An Ancient Indian Mnemonic Numerical System
        </p>

        <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed pt-1">
          Katapayadi is a traditional Indian mnemonic system in which <strong>numbers are represented through meaningful syllables, words, or verses</strong>. By mapping numerical digits (0–9) to specific consonant sounds, ancient astronomers and mathematicians transformed difficult numeric tables and mathematical constants into easily memorable poetic verses.
        </p>

        {/* Primary Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('mnemonic')}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg text-xs transition shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Try a Number (Create Mnemonic)</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
          </button>

          <button
            onClick={() => onNavigate('learn')}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-lg text-xs transition shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Learn How It Works</span>
          </button>
        </div>
      </section>

      {/* Primary Historical Concept Visual Flow */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Primary Historical Purpose: Number ➔ Mnemonic Word
          </h2>
          <span className="text-[11px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-semibold">
            Core Workflow
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          In ancient India, scholars started with a <strong>numerical value</strong> (such as an astronomical period or mathematical constant) and converted it into a <strong>memorable word or verse</strong>:
        </p>

        {/* 5-Step Process Diagram */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-center">
            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Step 1</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 block">Number</span>
              <span className="text-[11px] text-amber-700 font-mono font-bold">1 2</span>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Step 2</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 block">Katapayadi Rule</span>
              <span className="text-[10px] text-slate-500 font-mono">1➔Ka/Ṭa/Pa/Ya, 2➔Kha...</span>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Step 3</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 block">Select Consonants</span>
              <span className="text-[10px] text-slate-600 font-mono">Pa + Ra</span>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Step 4</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 block">Add Vowels</span>
              <span className="text-[10px] text-slate-600 font-mono">P-a + R-a</span>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg shadow-2xs">
              <span className="text-[9px] font-mono text-amber-700 block uppercase font-bold">Step 5</span>
              <span className="font-bold text-amber-900 text-xs sm:text-sm mt-0.5 block">Mnemonic Word</span>
              <span className="text-xs font-serif font-bold text-amber-800">“पर” (Para)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Number -> Word? Educational Comparison */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-indigo-600" />
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider font-sans">
            Why Number ➔ Word? (The Mnemonic Advantage)
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Katapayadi was created because raw numerical data is unnatural for human oral memory, whereas rhythmic, meaningful language is easy to recall:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-rose-800 uppercase block">
              Hard to Remember (Raw Numbers)
            </span>
            <div className="font-mono text-sm sm:text-base font-bold text-rose-950 tracking-wider">
              4 2 6
            </div>
            <p className="text-xs text-rose-800/80 leading-relaxed">
              Abstract sequences of digits are prone to mental fatigue, oral transmission errors, and confusion during recitations.
            </p>
          </div>

          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase block">
              Mnemonic Representation (Word / Phrase)
            </span>
            <div className="font-serif text-sm sm:text-base font-bold text-emerald-950">
              “भारत” (Bhārata)
            </div>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Bha (4) - Ra (2) - Ta (6) forms a familiar and meaningful cultural word that is effortlessly stored and recalled in human memory.
            </p>
          </div>
        </div>
      </section>

      {/* Core Insights: What is Katapayadi & Why It Was Useful */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            What is Katapayadi?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Katapayadi is an ancient Indian alphanumeric system in which consonant sounds of the alphabet are divided into groups mapped to digits 0 through 9. Its name comes from the four consonants that lead the digit <strong>1</strong> series: <em>Ka</em>, <em>Ṭa</em>, <em>Pa</em>, and <em>Ya</em> (कटापयादि).
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            Why Was It Useful?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Because multiple consonants map to each digit (a <strong>many-to-one mapping</strong>), poets and astronomers had creative freedom to choose syllables that fit the poetic meter (<em>chandas</em>) without changing the encoded numbers.
          </p>
        </div>
      </div>
    </div>
  );
};
