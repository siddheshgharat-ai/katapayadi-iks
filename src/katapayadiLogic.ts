import { 
  MappingGroup, 
  NumberMnemonicResult, 
  DigitMnemonicStep, 
  MnemonicPatternCandidate,
  ReverseCheckResult, 
  ReverseCheckStep 
} from './types';

// Canonical Katapayadi Consonant Groups
export const CANONICAL_MAPPINGS: MappingGroup[] = [
  {
    digit: 1,
    consonantsDevanagari: ['क', 'ट', 'प', 'य'],
    consonantsTransliterated: ['Ka', 'Ṭa', 'Pa', 'Ya'],
    description: 'First series of 4 foundational consonants (Ka, Ṭa, Pa, Ya)'
  },
  {
    digit: 2,
    consonantsDevanagari: ['ख', 'ठ', 'फ', 'र'],
    consonantsTransliterated: ['Kha', 'Ṭha', 'Pha', 'Ra'],
    description: 'Second series (Kha, Ṭha, Pha, Ra)'
  },
  {
    digit: 3,
    consonantsDevanagari: ['ग', 'ड', 'ब', 'ल'],
    consonantsTransliterated: ['Ga', 'Ḍa', 'Ba', 'La'],
    description: 'Third series (Ga, Ḍa, Ba, La)'
  },
  {
    digit: 4,
    consonantsDevanagari: ['घ', 'ढ', 'भ', 'व'],
    consonantsTransliterated: ['Gha', 'Ḍha', 'Bha', 'Va'],
    description: 'Fourth series (Gha, Ḍha, Bha, Va)'
  },
  {
    digit: 5,
    consonantsDevanagari: ['ङ', 'ण', 'म', 'श'],
    consonantsTransliterated: ['Ṅa', 'Ṇa', 'Ma', 'Śa'],
    description: 'Nasals and palatal sibilant (Ṅa, Ṇa, Ma, Śa)'
  },
  {
    digit: 6,
    consonantsDevanagari: ['च', 'त', 'ष'],
    consonantsTransliterated: ['Ca', 'Ta', 'Ṣa'],
    description: 'Palatal stop, dental stop, retroflex sibilant (Ca, Ta, Ṣa)'
  },
  {
    digit: 7,
    consonantsDevanagari: ['छ', 'थ', 'स'],
    consonantsTransliterated: ['Cha', 'Tha', 'Sa'],
    description: 'Aspirated stops and dental sibilant (Cha, Tha, Sa)'
  },
  {
    digit: 8,
    consonantsDevanagari: ['ज', 'द', 'ह'],
    consonantsTransliterated: ['Ja', 'Da', 'Ha'],
    description: 'Voiced stops and aspirate (Ja, Da, Ha)'
  },
  {
    digit: 9,
    consonantsDevanagari: ['झ', 'ध'],
    consonantsTransliterated: ['Jha', 'Dha'],
    description: 'Voiced aspirated stops (Jha, Dha)'
  },
  {
    digit: 0,
    consonantsDevanagari: ['ञ', 'न'],
    consonantsTransliterated: ['Ña', 'Na'],
    description: 'Nasal consonants mapping to digit 0 (Ña, Na / ञ, न)'
  }
];

export const DEVANAGARI_CONSONANTS_MAP: Record<string, number> = {
  // Digit 1
  'क': 1, 'ट': 1, 'प': 1, 'य': 1,
  // Digit 2
  'ख': 2, 'ठ': 2, 'फ': 2, 'र': 2,
  // Digit 3
  'ग': 3, 'ड': 3, 'ब': 3, 'ल': 3,
  // Digit 4
  'घ': 4, 'ढ': 4, 'भ': 4, 'व': 4,
  // Digit 5
  'ङ': 5, 'ण': 5, 'म': 5, 'श': 5,
  // Digit 6
  'च': 6, 'त': 6, 'ष': 6,
  // Digit 7
  'छ': 7, 'थ': 7, 'स': 7,
  // Digit 8
  'ज': 8, 'द': 8, 'ह': 8,
  // Digit 9
  'झ': 9, 'ध': 9,
  // Digit 0 (Consonants only)
  'ञ': 0, 'न': 0
};

export const DEVANAGARI_STANDALONE_VOWELS = new Set([
  'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ॠ', 'ऌ', 'ॡ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'
]);

export const DEVANAGARI_MATRAS = new Set([
  '\u093e', '\u093f', '\u0940', '\u0941', '\u0942', '\u0943', '\u0944',
  '\u0945', '\u0946', '\u0947', '\u0948', '\u0949', '\u094a', '\u094b',
  '\u094c', '\u094d', '\u0901', '\u0902', '\u0903', '\u093c'
]);

// Known historical/educational mnemonic phrase associations
const HISTORICAL_MNEMONIC_EXAMPLES: Record<string, { word: string; meaning: string }> = {
  '12': {
    word: 'पर (Para)',
    meaning: 'Pa (1) - Ra (2), classical two-consonant mnemonic pattern'
  },
  '314159': {
    word: 'गोपीभाग्य (Gopībhāgya...)',
    meaning: 'Classical Kerala astronomical verse phrase encoding the ratio of a circle (Pi = 3.14159...)'
  },
  '426': {
    word: 'भारत (Bhārata)',
    meaning: 'Bha (4) - Ra (2) - Ta (6) forming the traditional name of India'
  },
  '25': {
    word: 'राम (Rāma)',
    meaning: 'Ra (2) - Ma (5), a classic two-syllable devotional name'
  },
  '1111': {
    word: 'कटपय (Ka-ṭa-pa-ya)',
    meaning: 'The 4 root consonants (Ka=1, Ṭa=1, Pa=1, Ya=1) naming the entire system'
  },
  '356': {
    word: 'गणपति (Ga-ṇa-pa-ti)',
    meaning: 'Ga (3) - Ṇa (5) - Pa (1) - Ta (6)'
  },
  '365': {
    word: 'गणेश (Ga-ṇe-śa)',
    meaning: 'Ga (3) - Ṇa (5) - Śa (5) / solar year representation'
  }
};

/**
 * Primary Core Engine: NUMBER -> KATAPAYADI PATTERNS -> MNEMONIC SYLLABLES
 * 
 * Takes a number and breaks down each digit into its candidate consonant choices,
 * generates structured syllable patterns, and provides sample educational mnemonic constructions.
 */
export function createMnemonicFromNumber(numberInput: string, maxPatterns = 8): NumberMnemonicResult {
  const cleaned = numberInput.replace(/\D/g, '');
  if (!cleaned) {
    return {
      valid: false,
      inputNumber: '',
      digitCount: 0,
      steps: [],
      patterns: [],
      totalCombinations: 0,
      traditionalReverseDigits: ''
    };
  }

  const steps: DigitMnemonicStep[] = [];
  const translitChoices: string[][] = [];
  const devanagariChoices: string[][] = [];
  let totalCombos = 1;

  for (let i = 0; i < cleaned.length; i++) {
    const digit = parseInt(cleaned[i], 10);
    const mapping = CANONICAL_MAPPINGS.find(m => m.digit === digit);

    const translit = mapping ? mapping.consonantsTransliterated : [];
    const devanagari = mapping ? mapping.consonantsDevanagari : [];
    const groupLabel = translit.join(' / ');

    translitChoices.push(translit);
    devanagariChoices.push(devanagari);
    totalCombos *= Math.max(1, translit.length);

    // Place value label for traditional "अङ्कानां वामतो गतिः" context
    const reverseIndex = cleaned.length - 1 - i;
    const placeValue = `10^${reverseIndex}`;

    steps.push({
      position: i + 1,
      digit,
      placeValueLabel: placeValue,
      consonantsTransliterated: translit,
      consonantsDevanagari: devanagari,
      groupLabel
    });
  }

  // Generate bounded candidate syllable patterns (Cartesian combinations)
  const patternCandidates: MnemonicPatternCandidate[] = [];

  function generatePatterns(index: number, currentTranslit: string[], currentDev: string[]) {
    if (patternCandidates.length >= maxPatterns) return;
    if (index === translitChoices.length) {
      patternCandidates.push({
        consonantSyllables: currentTranslit.join('-'),
        devanagariSyllables: currentDev.join(' - ')
      });
      return;
    }

    const tOptions = translitChoices[index];
    const dOptions = devanagariChoices[index];

    for (let o = 0; o < tOptions.length; o++) {
      if (patternCandidates.length >= maxPatterns) break;
      generatePatterns(
        index + 1, 
        [...currentTranslit, tOptions[o]], 
        [...currentDev, dOptions[o]]
      );
    }
  }

  generatePatterns(0, [], []);

  // Check if there is an established historical or educational phrase for this number
  const historicalMatch = HISTORICAL_MNEMONIC_EXAMPLES[cleaned];
  if (historicalMatch && patternCandidates.length > 0) {
    patternCandidates[0].sampleMnemonicWord = historicalMatch.word;
    patternCandidates[0].sampleMeaning = historicalMatch.meaning;
  }

  // Traditional reverse sequence (अङ्कानां वामतो गतिः)
  const reversedDigits = cleaned.split('').reverse().join('');

  return {
    valid: true,
    inputNumber: cleaned,
    digitCount: cleaned.length,
    steps,
    patterns: patternCandidates,
    totalCombinations: totalCombos,
    traditionalReverseDigits: reversedDigits
  };
}

// Preset Numbers for One-Click Exploration in Mnemonic Generator
export const NUMBER_PRESETS = [
  {
    label: '12 (Para)',
    number: '12',
    description: '1 → Pa, 2 → Ra, forming the simple mnemonic "Para"'
  },
  {
    label: '314159 (Kerala Constant)',
    number: '314159',
    description: 'Kerala astronomical mnemonic pattern'
  },
  {
    label: '426 (Bhārata)',
    number: '426',
    description: 'Bha (4) - Ra (2) - Ta (6), the sacred geographical name of India'
  },
  {
    label: '25 (Rāma)',
    number: '25',
    description: 'Ra (2) - Ma (5), a concise two-syllable devotional mnemonic'
  },
  {
    label: '1111 (Katapaya Series)',
    number: '1111',
    description: 'The four root consonants of the first series: Ka, Ṭa, Pa, Ya'
  },
  {
    label: '356 (Gaṇapati)',
    number: '356',
    description: 'Ga (3) - Ṇa (5) - Pa (1) - Ta (6), root consonants representing Lord Ganesha'
  }
];

// English phonetic rules for the secondary Reverse Check tool
interface PhoneticRule {
  pattern: RegExp;
  soundLabel: string;
  groupName: string;
  digit: number;
}

// Complete phonetic consonant recognition (multi-character and transliterated tokens prioritized)
const ENGLISH_PHONETIC_CONSONANTS: PhoneticRule[] = [
  // Digit 9: Jha, Dha
  { pattern: /^(jha|jh)/i, soundLabel: 'Jha', groupName: 'Jha / Dha', digit: 9 },
  { pattern: /^(dha|dh)/i, soundLabel: 'Dha', groupName: 'Jha / Dha', digit: 9 },

  // Digit 2: Kha, Ṭha, Pha, Ra
  { pattern: /^(kha|kh)/i, soundLabel: 'Kha', groupName: 'Kha / Ṭha / Pha / Ra', digit: 2 },
  { pattern: /^(ṭha|ṭh)/i, soundLabel: 'Ṭha', groupName: 'Kha / Ṭha / Pha / Ra', digit: 2 },
  { pattern: /^(pha|ph)/i, soundLabel: 'Pha', groupName: 'Kha / Ṭha / Pha / Ra', digit: 2 },
  { pattern: /^(ra|r)/i, soundLabel: 'Ra', groupName: 'Kha / Ṭha / Pha / Ra', digit: 2 },
  { pattern: /^(fa|f)/i, soundLabel: 'F (Pha)', groupName: 'Kha / Ṭha / Pha / Ra', digit: 2 },

  // Digit 4: Gha, Ḍha, Bha, Va
  { pattern: /^(gha|gh)/i, soundLabel: 'Gha', groupName: 'Gha / Ḍha / Bha / Va', digit: 4 },
  { pattern: /^(ḍha|ḍh)/i, soundLabel: 'Ḍha', groupName: 'Gha / Ḍha / Bha / Va', digit: 4 },
  { pattern: /^(bha|bh)/i, soundLabel: 'Bha', groupName: 'Gha / Ḍha / Bha / Va', digit: 4 },
  { pattern: /^(va|v)/i, soundLabel: 'Va', groupName: 'Gha / Ḍha / Bha / Va', digit: 4 },
  { pattern: /^(wa|w)/i, soundLabel: 'W (Va)', groupName: 'Gha / Ḍha / Bha / Va', digit: 4 },

  // Digit 5: Ṅa, Ṇa, Ma, Śa
  { pattern: /^(ṅa|ṅ|nga|ng)/i, soundLabel: 'Ṅa', groupName: 'Ṅa / Ṇa / Ma / Śa', digit: 5 },
  { pattern: /^(ṇa|ṇ)/i, soundLabel: 'Ṇa', groupName: 'Ṅa / Ṇa / Ma / Śa', digit: 5 },
  { pattern: /^(śa|ś|sha|sh)/i, soundLabel: 'Śa', groupName: 'Ṅa / Ṇa / Ma / Śa', digit: 5 },
  { pattern: /^(ma|m)/i, soundLabel: 'Ma', groupName: 'Ṅa / Ṇa / Ma / Śa', digit: 5 },

  // Digit 7: Cha, Tha, Sa
  { pattern: /^(cha|ch)/i, soundLabel: 'Cha', groupName: 'Cha / Tha / Sa', digit: 7 },
  { pattern: /^(tha|th)/i, soundLabel: 'Tha', groupName: 'Cha / Tha / Sa', digit: 7 },
  { pattern: /^(sa|s)/i, soundLabel: 'Sa', groupName: 'Cha / Tha / Sa', digit: 7 },

  // Digit 0: Ña, Na (Crucial: Match Ña/ña/Ñ/ñ/Nya/ny before single n)
  { pattern: /^(ña|ñ|Ña|Ñ|nya|ny)/i, soundLabel: 'Ña', groupName: 'Ña / Na', digit: 0 },
  { pattern: /^(na|n)/i, soundLabel: 'Na', groupName: 'Ña / Na', digit: 0 },

  // Digit 6: Ca, Ta, Ṣa
  { pattern: /^(ca|c)/i, soundLabel: 'Ca', groupName: 'Ca / Ta / Ṣa', digit: 6 },
  { pattern: /^(ṣa|ṣ|shha)/i, soundLabel: 'Ṣa', groupName: 'Ca / Ta / Ṣa', digit: 6 },
  { pattern: /^(ta|t)/i, soundLabel: 'Ta', groupName: 'Ca / Ta / Ṣa', digit: 6 },

  // Digit 1: Ka, Ṭa, Pa, Ya
  { pattern: /^(ka|k)/i, soundLabel: 'Ka', groupName: 'Ka / Ṭa / Pa / Ya', digit: 1 },
  { pattern: /^(ṭa|ṭ)/i, soundLabel: 'Ṭa', groupName: 'Ka / Ṭa / Pa / Ya', digit: 1 },
  { pattern: /^(pa|p)/i, soundLabel: 'Pa', groupName: 'Ka / Ṭa / Pa / Ya', digit: 1 },
  { pattern: /^(ya|y)/i, soundLabel: 'Ya', groupName: 'Ka / Ṭa / Pa / Ya', digit: 1 },

  // Digit 3: Ga, Ḍa, Ba, La
  { pattern: /^(ga|g)/i, soundLabel: 'Ga', groupName: 'Ga / Ḍa / Ba / La', digit: 3 },
  { pattern: /^(ḍa|ḍ)/i, soundLabel: 'Ḍa', groupName: 'Ga / Ḍa / Ba / La', digit: 3 },
  { pattern: /^(ba|b)/i, soundLabel: 'Ba', groupName: 'Ga / Ḍa / Ba / La', digit: 3 },
  { pattern: /^(la|l)/i, soundLabel: 'La', groupName: 'Ga / Ḍa / Ba / La', digit: 3 },

  // Digit 8: Ja, Da, Ha
  { pattern: /^(ja|j)/i, soundLabel: 'Ja', groupName: 'Ja / Da / Ha', digit: 8 },
  { pattern: /^(da|d)/i, soundLabel: 'Da', groupName: 'Ja / Da / Ha', digit: 8 },
  { pattern: /^(ha|h)/i, soundLabel: 'Ha', groupName: 'Ja / Da / Ha', digit: 8 },
  { pattern: /^(za|z)/i, soundLabel: 'Z (Ja)', groupName: 'Ja / Da / Ha', digit: 8 }
];

const ENGLISH_VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'ā', 'ī', 'ū', 'ṛ', 'ṝ', 'ḷ', 'ḹ', 'ē', 'ō']);

export function isDevanagari(text: string): boolean {
  return /[\u0900-\u097F]/.test(text);
}

/**
 * Secondary Verification Tool: Reverse Check (Word/Syllables -> Number)
 * Used to verify how an existing word/verse resolves back to its numeric digits.
 */
export function reverseCheckWord(input: string): ReverseCheckResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      originalInput: '',
      isEnglishInput: false,
      resolvedNumber: '',
      steps: [],
      phoneticTokens: [],
      unsupportedCount: 0
    };
  }

  const isDev = isDevanagari(trimmed);

  if (isDev) {
    return reverseCheckDevanagari(trimmed);
  } else {
    return reverseCheckEnglish(trimmed);
  }
}

function reverseCheckDevanagari(text: string): ReverseCheckResult {
  const steps: ReverseCheckStep[] = [];
  const digits: string[] = [];
  const tokens: string[] = [];
  let unsupportedCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (/\s|[।,.\-_!?;:()[\]{}"'`~@#$%^&*+=<>\\/]/.test(char)) {
      continue;
    }

    if (DEVANAGARI_MATRAS.has(char)) {
      continue;
    }

    if (char in DEVANAGARI_CONSONANTS_MAP) {
      const val = DEVANAGARI_CONSONANTS_MAP[char];
      digits.push(val.toString());
      tokens.push(char);

      const mappingGroup = CANONICAL_MAPPINGS.find(m => m.digit === val);
      const groupLabel = mappingGroup 
        ? `${mappingGroup.consonantsTransliterated.join(', ')} (${mappingGroup.consonantsDevanagari.join(' ')})`
        : `Digit ${val}`;

      steps.push({
        sound: char,
        originalPart: char,
        groupName: groupLabel,
        digit: val,
        type: 'consonant',
        note: val === 0
          ? `Consonant '${char}' maps to Katapayadi digit 0 (Ña / Na group)`
          : `Consonant '${char}' resolves to Katapayadi digit ${val}`
      });
    } else if (DEVANAGARI_STANDALONE_VOWELS.has(char)) {
      steps.push({
        sound: char,
        originalPart: char,
        groupName: 'Vowel (Svara)',
        digit: null,
        type: 'vowel',
        note: `Vowel '${char}' has no numeric value – ignored in numerical calculation.`
      });
    } else {
      unsupportedCount++;
      steps.push({
        sound: char,
        originalPart: char,
        groupName: 'Unsupported Sound',
        digit: null,
        type: 'unsupported',
        note: `Character '${char}' is outside standard Katapayadi consonant matrix`
      });
    }
  }

  return {
    originalInput: text,
    isEnglishInput: false,
    resolvedNumber: digits.join(''),
    steps,
    phoneticTokens: tokens,
    unsupportedCount
  };
}

function reverseCheckEnglish(text: string): ReverseCheckResult {
  const steps: ReverseCheckStep[] = [];
  const digits: string[] = [];
  const tokens: string[] = [];
  let unsupportedCount = 0;

  let remaining = text;

  while (remaining.length > 0) {
    const skipMatch = remaining.match(/^[\s,.\-_!?;:()[\]{}"'`~@#$%^&*+=<>\\/]+/);
    if (skipMatch) {
      remaining = remaining.slice(skipMatch[0].length);
      continue;
    }

    let matchedConsonant = false;
    for (const rule of ENGLISH_PHONETIC_CONSONANTS) {
      const match = remaining.match(rule.pattern);
      if (match) {
        const matchedStr = match[0];
        digits.push(rule.digit.toString());
        tokens.push(matchedStr);

        steps.push({
          sound: rule.soundLabel,
          originalPart: matchedStr,
          groupName: rule.groupName,
          digit: rule.digit,
          type: 'consonant',
          note: rule.digit === 0
            ? `Consonant '${matchedStr}' resolves to Katapayadi digit 0 (${rule.groupName} group)`
            : `Consonant sound '${matchedStr}' resolves to Katapayadi digit ${rule.digit}`
        });

        remaining = remaining.slice(matchedStr.length);
        matchedConsonant = true;
        break;
      }
    }

    if (matchedConsonant) {
      continue;
    }

    const firstChar = remaining[0].toLowerCase();
    if (ENGLISH_VOWELS.has(firstChar)) {
      steps.push({
        sound: remaining[0].toUpperCase(),
        originalPart: remaining[0],
        groupName: 'Vowel Sound (Svara)',
        digit: null,
        type: 'vowel',
        note: `Vowel '${remaining[0]}' has no numeric value – ignored in numerical calculation.`
      });
      remaining = remaining.slice(1);
      continue;
    }

    unsupportedCount++;
    steps.push({
      sound: remaining[0],
      originalPart: remaining[0],
      groupName: 'Unsupported Sound',
      digit: null,
      type: 'unsupported',
      note: `The character '${remaining[0]}' has no standard Katapayadi consonant mapping`
    });
    remaining = remaining.slice(1);
  }

  return {
    originalInput: text,
    isEnglishInput: true,
    resolvedNumber: digits.join(''),
    steps,
    phoneticTokens: tokens,
    unsupportedCount
  };
}

export const REVERSE_CHECK_PRESETS = [
  {
    label: 'Jha-Jha-Ga-Ña-Ca-Jha-Kha-Kha-Jha-Ja',
    word: 'Jha-Jha-Ga-Ña-Ca-Jha-Kha-Kha-Jha-Ja',
    description: 'Resolves to 9930692298 (includes Ña = 0)'
  },
  {
    label: 'BHARAT',
    word: 'BHARAT',
    description: 'Resolves to 426 (Bha=4, Ra=2, Ta=6)'
  },
  {
    label: 'KERALA',
    word: 'KERALA',
    description: 'Resolves to 123 (Ka=1, Ra=2, La=3)'
  },
  {
    label: 'RAMA',
    word: 'RAMA',
    description: 'Resolves to 25 (Ra=2, Ma=5)'
  },
  {
    label: 'KATAPAYA',
    word: 'KATAPAYA',
    description: 'Resolves to 1111 (Ka=1, Ta=1, Pa=1, Ya=1)'
  },
  {
    label: 'गोपीभाग्य',
    word: 'गोपीभाग्य',
    description: 'Classical verse phrase resolving to 31415 (First digits of Pi)'
  }
];
