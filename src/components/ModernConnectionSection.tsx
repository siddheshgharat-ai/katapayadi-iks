import React from 'react';
import { Cpu, Brain, Table2, ShieldAlert, Sparkles, Binary } from 'lucide-react';

export const ModernConnectionSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn py-2">
      {/* Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase tracking-wider">
          <Cpu className="w-4 h-4" />
          <span>IKS & Computer Science Connection</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
          Modern Computing Connections
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          How the 1,500-year-old Katapayadi concept of <strong>Number ➔ Symbolic Mapping ➔ Human-Friendly Representation</strong> connects directly to modern computer science, information theory, and digital memory architectures.
        </p>
      </section>

      {/* Conceptual Bridge Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-xl space-y-3 shadow-xs">
        <span className="text-[11px] font-mono text-amber-400 uppercase font-bold tracking-wider block">
          The Core Computational Insight
        </span>
        <div className="text-sm sm:text-base font-serif leading-relaxed text-slate-200">
          “Modern computers translate difficult raw binary/hexadecimal data into human-memorable word lists (like BIP-39 mnemonic seed phrases). Ancient Indian scholars pioneered this exact concept 1,500 years earlier by mapping numeric tables into poetic Sanskrit syllables.”
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Pillar 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Brain className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
            1. Mnemonic Data Representation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            In modern systems, large numeric identifiers are mapped to recognizable words (e.g. BIP-39 cryptocurrency wallets converting a 256-bit private key into 12 or 24 English words). Katapayadi is one of the earliest documented formal systems for human-oriented numerical representation.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
            <Binary className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
            2. Number-to-Symbol Encodings
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Computer science frequently maps numerical digits to sets of discrete characters (such as Base64, ASCII/Unicode tables, and phone keypad T9 text entry). Katapayadi established a deterministic partitioning of consonants into 10 equivalence classes.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <Table2 className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
            3. Deterministic Lookup Tables
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Katapayadi operates as an immutable lookup table: digit ➔ consonants. This is computationally identical to standard array indexing and static hash tables used in compiler lexers and finite state machines.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
            4. Digital IKS & Manuscript Preservation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Modern computational linguistics uses Katapayadi parsers to automatically extract astronomical dates, lunar calendars, and geometric constants from digitized palm-leaf manuscripts across Kerala and Tamil Nadu archives.
          </p>
        </div>
      </div>

      {/* Academic Disclaimer Box */}
      <section className="bg-amber-500/10 border border-amber-500/30 p-5 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase font-mono">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Academic Note on Cryptography vs. Mnemonics</span>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          Katapayadi was designed as an <strong>open mnemonic system</strong> to aid human memory and oral preservation—not as a modern cryptographic cipher. Because the mapping rules were widely known and published in treaties, it was used for memorization, chronograms, and poetic verification rather than military-grade secret encryption.
        </p>
      </section>
    </div>
  );
};
