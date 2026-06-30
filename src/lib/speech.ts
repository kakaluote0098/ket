interface SpeakOptions {
  rate?: number;
  lang?: string;
}

const preferredVoices = [
  'Samantha',
  'Alex',
  'Google US English',
  'Microsoft Zira - English (United States)',
  'Microsoft David - English (United States)',
  'Microsoft Mark - English (United States)',
  'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Jenny Online (Natural) - English (United States)',
  'Apple Samantha',
  'com.apple.speech.synthesis.voice.Samantha',
  'Fred',
  'Victoria',
];

function getAmericanEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  // 1. Try preferred voice names
  for (const name of preferredVoices) {
    const voice = voices.find(
      (v) => v.name === name && (v.lang === 'en-US' || v.lang.startsWith('en-US'))
    );
    if (voice) return voice;
  }

  // 2. Try any high-quality en-US voice (often contains "Natural" or "Enhanced")
  const naturalUsVoice = voices.find(
    (v) =>
      v.lang === 'en-US' &&
      (v.name.includes('Natural') || v.name.includes('Enhanced') || v.name.includes('Premium'))
  );
  if (naturalUsVoice) return naturalUsVoice;

  // 3. Fallback to any en-US voice
  return voices.find((v) => v.lang === 'en-US') || null;
}

export function speak(text: string, options: SpeakOptions = {}) {
  if (!text || typeof window === 'undefined' || !window.speechSynthesis) return;

  // Cancel any ongoing speech to avoid overlapping
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options.lang ?? 'en-US';
  utterance.rate = options.rate ?? 0.6375;
  utterance.pitch = 1;

  const voice = getAmericanEnglishVoice();
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
}

// Ensure voices are loaded on supported browsers
if (typeof window !== 'undefined' && window.speechSynthesis) {
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Voices are now available; next speak() call will select the best one.
      window.speechSynthesis.getVoices();
    };
  }
}
