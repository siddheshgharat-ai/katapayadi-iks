import React, { useState } from 'react';
import { createMnemonicFromNumber, NUMBER_PRESETS } from '../katapayadiLogic';
import { Sparkles, Info, Layers, Brain, ArrowRight, Compass, Check, Copy } from 'lucide-react';

export const CreateMnemonicSection: React.FC = () => {
  const [numberInput, setNumberInput] = useState('12');
  const [copiedPattern, setCopiedPattern] = useState<string | null>(null);

  const result = createMnemonicFromNumber(numberInput, 8);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPattern(text);
    setTimeout(() => setCopiedPattern(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn py-2">
      {/* Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Primary Interactive Tool</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
          Create a Katapayadi Mnemonic
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Enter a numerical sequence to determine its candidate Katapayadi consonant groups, generate pronounceable syllable frameworks, and discover how mnemonic words and verses are formed.
        </p>
      </section>

      {/* Mandatory Many-to-One Explanation Banner */}
      <div className="p-4 bg-amber-500/10 border-l-4 border-amber-600 rounded-r-lg text-xs sm:text-sm text-slate-700 space-y-1.5 shadow-2xs">
        <div className="flex items-center gap-1.5 font-bold text-amber-900">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>Many-to-One Mapping Principle</span>
        </div>
        <p className="leading-relaxed">
          Katapayadi is a <strong>many-to-one mapping</strong>. Each number can correspond to several consonants. Therefore, a numerical sequence can produce multiple possible syllable patterns. A meaningful mnemonic word or phrase can then be selected or constructed from these possibilities.
        </p>
      </div>

      {/* Preset Quick Number Buttons */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
          Try a Historical Number Preset:
        </span>
        <div className="flex flex-wrap gap-2">
          {NUMBER_PRESETS.map((preset) => (
            <button
              key={preset.number}
              onClick={() => setNumberInput(preset.number)}
              className="text-xs bg-slate-50 hover:bg-amber-50 hover:border-amber-300 text-slate-800 border border-slate-200 px-3 py-1.5 rounded-lg transition font-medium"
            >
              <span className="font-mono font-bold text-amber-800 mr-1.5">{preset.number}</span>
              <span className="text-slate-600 text-[11px]">({preset.label.split('(')[1]?.replace(')', '') || preset.label})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Field */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
          Enter Digits (0–9)
        </label>
        <div className="relative">
          <input
            type="text"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value.replace(/\D/g, ''))}
            placeholder="Type digits (e.g. 314159, 426, 25, 1111)..."
            className="w-full text-lg sm:text-xl font-mono px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-slate-900 tracking-wider"
          />
          {numberInput && (
            <button
              onClick={() => setNumberInput('')}
              className="absolute right-3 top-3.5 text-xs text-slate-400 hover:text-slate-600 font-mono"
            >
              Clear
            </button>
          )}
        </div>
        <p className="text-[11px] text-slate-500">
          Enter any number to see the step-by-step resolution from digit to consonant choices and syllable skeletons.
        </p>
      </div>

      {/* Step-by-Step Educational Pipeline */}
      {numberInput.trim() ? (
        result.valid ? (
          <div className="space-y-6">
            {/* Step 1 & 2: Digit Analysis Breakdown */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] flex items-center justify-center font-bold">
                    1
                  </span>
                  Digit Analysis & Katapayadi Consonant Groups
                </h2>
                <span className="text-[11px] font-mono text-slate-500">
                  {result.digitCount} Digits
                </span>
              </div>

              <div className="space-y-2.5">
                {result.steps.map((step) => (
                  <div
                    key={step.position}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-2xs">
                        {step.digit}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                          Digit #{step.position}
                        </span>
                        <span className="font-bold text-slate-900 text-sm">
                          {step.groupLabel}
                        </span>
                      </div>
                    </div>

                    {/* Devanagari Consonant Badges */}
                    <div className="flex items-center gap-1.5 font-serif text-slate-800 text-base">
                      {step.consonantsDevanagari.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-900 font-bold"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Possible Syllable Patterns */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] flex items-center justify-center font-bold">
                    2
                  </span>
                  Possible Syllable Frameworks (Sample Combinations)
                </h2>
                <span className="text-[11px] font-mono text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-semibold">
                  {result.patterns.length} Sample(s) Shown
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                By choosing one consonant from each digit's pool, poets generated root sound skeletons:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.patterns.map((pat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 hover:border-amber-300 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        Pattern Candidate #{idx + 1}
                      </span>
                      <button
                        onClick={() => handleCopy(pat.consonantSyllables)}
                        className="text-[11px] text-amber-700 hover:text-amber-900 flex items-center gap-1 font-mono"
                      >
                        {copiedPattern === pat.consonantSyllables ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="font-mono font-bold text-slate-900 text-sm">
                      {pat.consonantSyllables}
                    </div>

                    <div className="font-serif text-slate-700 text-xs">
                      {pat.devanagariSyllables}
                    </div>

                    {pat.sampleMnemonicWord && (
                      <div className="pt-2 mt-2 border-t border-slate-200 text-xs">
                        <span className="font-bold text-amber-900 font-serif text-sm block">
                          {pat.sampleMnemonicWord}
                        </span>
                        <span className="text-slate-600 text-[11px] block mt-0.5">
                          {pat.sampleMeaning}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: From Consonant Patterns to Mnemonic Representation */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Brain className="w-5 h-5 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                  3. From Consonant Patterns to Mnemonic Representation
                </h3>
              </div>

              {/* How Katapayadi Works */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  How Katapayadi Works
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The Katapayadi system assigns numerical values to specific consonant sounds. Our tool converts each input digit into its possible consonant groups and generates candidate consonant patterns.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  These patterns are not necessarily complete words. Traditionally, suitable consonants could be selected and combined with vowels to create pronounceable and memorable words or phrases.
                </p>
              </div>

              {/* Simple Example */}
              <div className="p-4 sm:p-5 bg-amber-50/60 border border-amber-200 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  Simple Example
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Suppose the input number is: <span className="font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">12</span>
                </p>

                <div className="bg-white p-3.5 rounded-lg border border-amber-200/80 space-y-2 text-xs sm:text-sm">
                  <p className="font-semibold text-slate-800">Using the Katapayadi mapping:</p>
                  <ul className="space-y-1 font-mono text-xs text-slate-700 pl-2">
                    <li>• <span className="font-bold text-amber-800">1</span> → Ka / Ṭa / Pa / Ya</li>
                    <li>• <span className="font-bold text-amber-800">2</span> → Kha / Ṭha / Pha / Ra</li>
                  </ul>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    The system can select: <span className="font-mono font-bold text-slate-900">Pa + Ra</span>
                  </p>
                  <p>
                    By adding vowels, it becomes a pronounceable pattern:
                  </p>
                  <div className="p-3 bg-white border border-amber-300 rounded-lg text-center font-mono font-bold text-sm sm:text-base text-amber-950 shadow-2xs">
                    12 → Pa + Ra → “Para”
                  </div>
                  <p className="pt-1">
                    This demonstrates the basic mnemonic idea: a numerical sequence can be represented through consonant patterns and shaped into something easier to remember.
                  </p>
                  <p className="text-[11px] text-slate-500 italic">
                    <strong>Note:</strong> Different consonant choices can produce different possible patterns, so one number does not have only one possible representation.
                  </p>
                </div>
              </div>

              {/* Our Computational Model (Visual Flow) */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  Our Computational Model
                </h4>
                
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl overflow-x-auto">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 min-w-[560px] sm:min-w-0">
                    <div className="flex-1 text-center p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Input</span>
                      <span className="font-bold text-slate-900 text-xs mt-0.5 block">Number</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0 hidden sm:block" />
                    <span className="text-slate-400 sm:hidden">↓</span>

                    <div className="flex-1 text-center p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Mapping</span>
                      <span className="font-semibold text-slate-800 text-xs mt-0.5 block">Katapayadi Digit–Consonant Mapping</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0 hidden sm:block" />
                    <span className="text-slate-400 sm:hidden">↓</span>

                    <div className="flex-1 text-center p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Output</span>
                      <span className="font-semibold text-slate-800 text-xs mt-0.5 block">Possible Consonant Pattern</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0 hidden sm:block" />
                    <span className="text-slate-400 sm:hidden">↓</span>

                    <div className="flex-1 text-center p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Vocalization</span>
                      <span className="font-semibold text-slate-800 text-xs mt-0.5 block">Pronounceable Mnemonic Pattern</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-amber-500 flex-shrink-0 hidden sm:block" />
                    <span className="text-amber-500 sm:hidden">↓</span>

                    <div className="flex-1 text-center p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-lg shadow-2xs">
                      <span className="text-[10px] font-mono text-amber-700 block uppercase font-bold">Goal</span>
                      <span className="font-bold text-amber-900 text-xs mt-0.5 block">Easier to Remember</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traditional Reading Convention Note */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <Compass className="w-4 h-4 text-indigo-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Traditional Reading Convention: “अङ्कानां वामतो गतिः”
                </h3>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
                <p>
                  In some traditional applications, particularly in astronomical and mathematical texts, the numerical values represented by consonants are read according to a <strong>right-to-left convention</strong>.
                </p>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-center flex items-center justify-center gap-2 text-xs text-slate-700">
                  <span className="font-semibold text-indigo-700">Units ($10^0$)</span>
                  <span className="text-slate-400">←</span>
                  <span className="font-semibold text-indigo-700">Tens ($10^1$)</span>
                  <span className="text-slate-400">←</span>
                  <span className="font-semibold text-indigo-700">Hundreds ($10^2$)</span>
                  <span className="text-slate-400">←</span>
                  <span className="font-semibold text-indigo-700">Thousands ($10^3$)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center text-slate-500 text-xs sm:text-sm">
            Please enter digits (0–9) only.
          </div>
        )
      ) : (
        <div className="p-8 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center text-slate-400 text-xs sm:text-sm">
          Please enter a number above to generate Katapayadi consonant choices and mnemonic syllable patterns.
        </div>
      )}
    </div>
  );
};
