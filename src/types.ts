export type PageTab = 'home' | 'mnemonic' | 'learn' | 'reverse' | 'modern';

export interface MappingGroup {
  digit: number;
  consonantsDevanagari: string[];
  consonantsTransliterated: string[];
  description: string;
}

export interface DigitMnemonicStep {
  position: number;
  digit: number;
  placeValueLabel: string; // e.g., Units (10^0), Tens (10^1)...
  consonantsTransliterated: string[];
  consonantsDevanagari: string[];
  groupLabel: string;
}

export interface MnemonicPatternCandidate {
  consonantSyllables: string; // e.g. "Ga-Ka-Gha-Ka-Ma-Dha"
  devanagariSyllables: string;
  sampleMnemonicWord?: string; // educational suggestive mnemonic
  sampleMeaning?: string;
}

export interface NumberMnemonicResult {
  valid: boolean;
  inputNumber: string;
  digitCount: number;
  steps: DigitMnemonicStep[];
  patterns: MnemonicPatternCandidate[];
  totalCombinations: number;
  traditionalReverseDigits: string;
}

export interface ReverseCheckStep {
  sound: string;
  originalPart: string;
  groupName: string;
  digit: number | null;
  type: 'consonant' | 'vowel' | 'unsupported';
  note: string;
}

export interface ReverseCheckResult {
  originalInput: string;
  isEnglishInput: boolean;
  resolvedNumber: string;
  steps: ReverseCheckStep[];
  phoneticTokens: string[];
  unsupportedCount: number;
}
