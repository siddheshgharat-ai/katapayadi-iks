import React, { useState } from 'react';
import { reverseCheckWord, REVERSE_CHECK_PRESETS } from '../katapayadiLogic';
import { KeyRound, CheckCircle2, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';

export const ReverseCheckSection: React.FC = () => {
  const [wordInput, setWordInput] = useState('BHARAT');

  const result = reverseCheckWord(wordInput);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn py-2">
      {/* Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-slate-600 font-mono text-xs font-bold uppercase tracking-wider">
          <KeyRound className="w-4 h-4 text-slate-700" />
          <span>Secondary Tool: Inverse Verification</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
          Reverse Check: Word ➔ Number
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Use this verification tool to test which numerical value an existing historical word, verse, or mnemonic syllable resolves into according to the Katapayadi matrix.
        </p>
      </section>

      {/* Verification Notice */}
      <div className="p-4 bg-slate-100 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-700 space-y-1">
        <span className="font-bold text-slate-900 block font-mono">
          Verification Workflow Note:
        </span>
        <p className="leading-relaxed">
          While Katapayadi’s primary historical role was representing numbers through mnemonics, this tool performs the reverse check to verify historical chronograms, verse codes, and names.
        </p>
      </div>

      {/* Preset Word Quick Buttons */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
          Try a Historical Word Preset:
        </span>
        <div className="flex flex-wrap gap-2">
          {REVERSE_CHECK_PRESETS.map((preset) => (
            <button
              key={preset.word}
              onClick={() => setWordInput(preset.word)}
              className="text-xs bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-800 border border-slate-200 px-3 py-1.5 rounded-lg transition font-medium"
            >
              <span className="font-bold text-slate-900 mr-1.5">{preset.word}</span>
              <span className="text-slate-500 text-[11px]">({preset.description})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
          Enter Word, Syllables, or Devanagari Phrase
        </label>
        <div className="relative">
          <input
            type="text"
            value={wordInput}
            onChange={(e) => setWordInput(e.target.value)}
            placeholder="Type a word (e.g. BHARAT, KERALA, RAMA, गोपीभाग्य)..."
            className="w-full text-base sm:text-lg font-mono px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none text-slate-900"
          />
          {wordInput && (
            <button
              onClick={() => setWordInput('')}
              className="absolute right-3 top-3.5 text-xs text-slate-400 hover:text-slate-600 font-mono"
            >
              Clear
            </button>
          )}
        </div>
        <p className="text-[11px] text-slate-500">
          Supports both Devanagari text and standard phonetic English transliteration.
        </p>
      </div>

      {/* Result Display */}
      {wordInput.trim() ? (
        <div className="space-y-6">
          {/* Resolved Number Summary */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Resolved Number:
              </span>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-amber-700 tracking-wider">
                {result.resolvedNumber || 'None'}
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200 sm:max-w-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verification Result</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Found {result.steps.filter(s => s.digit !== null).length} numeric consonant sound(s) in "{wordInput.trim()}".
              </p>
            </div>
          </div>

          {/* Detailed Verification Breakdown Table */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                Step-by-Step Sound Breakdown
              </h2>
              <span className="text-[11px] font-mono text-slate-500">
                {result.steps.length} Token(s) Analyzed
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono">
                    <th className="p-3">Sound Token</th>
                    <th className="p-3">Katapayadi Group</th>
                    <th className="p-3 text-center">Digit Value</th>
                    <th className="p-3">Linguistic Explanation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {result.steps.map((step, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition">
                      <td className="p-3 font-mono font-bold text-slate-900">
                        {step.sound}
                      </td>
                      <td className="p-3 font-mono text-slate-600 text-[11px]">
                        {step.groupName}
                      </td>
                      <td className="p-3 text-center font-mono font-bold">
                        {step.digit !== null ? (
                          <span className="inline-block px-2 py-0.5 bg-amber-500/10 text-amber-800 border border-amber-500/30 rounded">
                            {step.digit}
                          </span>
                        ) : step.type === 'vowel' ? (
                          <span className="text-slate-400 font-normal text-[11px] italic">
                            No numeric value
                          </span>
                        ) : (
                          <span className="text-rose-500 font-normal text-[11px]">
                            Unsupported
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-slate-600 text-[11px]">
                        {step.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center text-slate-400 text-xs sm:text-sm">
          Please enter a word or syllables above to perform the reverse check.
        </div>
      )}
    </div>
  );
};
