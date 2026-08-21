import React from 'react';
import { CANONICAL_MAPPINGS } from '../katapayadiLogic';
import { BookOpen, Compass, Sparkles, HelpCircle, Layers, Award } from 'lucide-react';

export const LearnSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn py-2">
      {/* Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>IKS Educational Reference</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
          How the Katapayadi System Works
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Katapayadi (कटापयादि) is one of ancient India’s most elegant mnemonic numeral systems. Explore its historical origins in Kerala astronomy, the canonical consonant matrix, the role of vowels, and traditional reading conventions.
        </p>
      </section>

      {/* Section A: Historical Purpose & Kerala Tradition */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Award className="w-5 h-5 text-amber-600" />
          <h2 className="text-base font-serif font-bold text-slate-900">
            1. Historical Purpose & Kerala Astronomical Tradition
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            Ancient Indian astronomers and mathematicians—most notably the <strong>Kerala School of Astronomy and Mathematics</strong> founded by figures like <em>Madhava of Sangamagrama</em> and earlier masters like <em>Haridatta</em> (who formalized the <em>Grahacāranibandhana</em> in the 7th century CE)—required methods to record and preserve immense numerical tables for planetary positions, lunar days (<em>tithis</em>), and trigonometric sine tables without written books.
          </p>
          <p>
            Rather than relying on abstract digits that could easily become corrupted during oral transmission or transcription, they created <strong>Katapayadi</strong> to embed numbers into beautiful Sanskrit and Malayalam verses, chronograms (<em>vakyas</em>), and devotional hymns.
          </p>
        </div>
      </section>

      {/* Section B: Canonical Katapayadi Consonant Mapping */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-serif font-bold text-slate-900">
              2. The Canonical Consonant Mapping Matrix
            </h2>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Digits 0–9</span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          The Sanskrit consonants are arranged in four groups (starting with <strong>Ka</strong>, <strong>Ṭa</strong>, <strong>Pa</strong>, and <strong>Ya</strong>) mapped to digits 1 through 9, while <strong>Ña</strong>, <strong>Na</strong>, and standalone vowels represent 0:
        </p>

        {/* Matrix Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono">
                <th className="p-3 text-center w-16">Digit</th>
                <th className="p-3">IAST Transliteration</th>
                <th className="p-3">Devanagari Consonants</th>
                <th className="p-3 hidden sm:table-cell">Linguistic Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CANONICAL_MAPPINGS.map((m) => (
                <tr key={m.digit} className="hover:bg-slate-50/70 transition">
                  <td className="p-3 text-center font-mono font-bold text-amber-700 bg-amber-500/5">
                    {m.digit}
                  </td>
                  <td className="p-3 font-mono font-semibold text-slate-900">
                    {m.consonantsTransliterated.join(', ')}
                  </td>
                  <td className="p-3 font-serif font-bold text-slate-900 text-sm">
                    {m.consonantsDevanagari.join('  ')}
                  </td>
                  <td className="p-3 text-slate-500 text-[11px] hidden sm:table-cell">
                    {m.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section C: Role of Vowels */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <h2 className="text-base font-serif font-bold text-slate-900">
            3. The Role of Vowels (Svaras)
          </h2>
        </div>

        <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            In Katapayadi, vowels attached to consonants (<em>mātrās</em> like <em>-a, -ā, -i, -ī, -u, -e, -o</em>) do <strong>not</strong> have numerical value by themselves when attached to consonants.
          </p>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5 font-mono">
            <div className="text-slate-900 font-bold">
              • क (Ka) = 1,  का (Kā) = 1,  कि (Ki) = 1,  कु (Ku) = 1,  के (Ke) = 1
            </div>
            <div className="text-slate-900 font-bold">
              • र (Ra) = 2,  रा (Rā) = 2,  रि (Ri) = 2,  रु (Ru) = 2
            </div>
            <p className="text-slate-500 text-[11px] font-sans pt-1">
              Vowels serve as phonetic vehicles allowing words to be pronounced fluidly and tailored to Sanskrit poetic meters (<em>chandas</em>).
            </p>
          </div>
        </div>
      </section>

      {/* Section D: Traditional Reading Convention */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Compass className="w-5 h-5 text-indigo-600" />
          <h2 className="text-base font-serif font-bold text-slate-900">
            4. Traditional Reading Convention: “अङ्कानां वामतो गतिः”
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            A foundational principle of classical Indian mathematics is the Sanskrit maxim:
          </p>
          <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-lg text-center space-y-1">
            <span className="font-serif font-bold text-base text-indigo-950 block">
              “अङ्कानां वामतो गतिः” (aṅkānāṃ vāmato gatiḥ)
            </span>
            <span className="text-xs text-indigo-800 italic block">
              “The digits move from right to left.”
            </span>
          </div>
          <p>
            When an astronomer composed a mnemonic word or verse, the first syllable typically represented the <strong>units digit</strong> ($10^0$), the second syllable represented the <strong>tens digit</strong> ($10^1$), the third represented <strong>hundreds</strong> ($10^2$), and so forth.
          </p>
        </div>
      </section>

      {/* Section E: Complete Worked Historical Example */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          <h2 className="text-base font-serif font-bold text-slate-900">
            5. Complete Worked Historical Example: Number ➔ Mnemonic Word
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            Let us trace how an ancient scholar would turn the numerical sequence <strong>426</strong> into the famous word <strong>BHARAT</strong>:
          </p>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-800">1. Start with Target Number:</span>
              <span className="font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">4 2 6</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-800">2. Select Katapayadi Consonants:</span>
              <span className="font-mono text-slate-700">
                4 ➔ Bha (भ), 2 ➔ Ra (र), 6 ➔ Ta (त)
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-800">3. Form Consonant Framework:</span>
              <span className="font-mono font-bold text-indigo-700">Bh - R - T</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-800">4. Vocalize with Vowels:</span>
              <span className="font-serif font-bold text-amber-900 text-sm">
                “भारत” (Bhā-ra-ta)
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-1">
            In reverse verification, the word <strong>BHARAT</strong> immediately confirms the digits: <strong>Bha (4)</strong>, <strong>Ra (2)</strong>, <strong>Ta (6)</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};
