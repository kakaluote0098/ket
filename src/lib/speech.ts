interface SpeakOptions {
  rate?: number;
  lang?: string;
}

export function speak(text: string, options: SpeakOptions = {}) {
  if (!text || typeof window === 'undefined') return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options.lang ?? 'en-US';
  utterance.rate = options.rate ?? 0.85;
  window.speechSynthesis.speak(utterance);
}
