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

let voicesReady = false;
let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return Promise.resolve([]);
  }

  if (voicesReady) {
    return Promise.resolve(window.speechSynthesis.getVoices());
  }

  if (voicesPromise) {
    return voicesPromise;
  }

  voicesPromise = new Promise((resolve) => {
    const synth = window.speechSynthesis;

    const handleVoicesLoaded = () => {
      voicesReady = true;
      resolve(synth.getVoices());
      // 只处理一次，避免重复触发
      synth.onvoiceschanged = null;
    };

    // 某些浏览器在设置事件前就已经有 voice 数据
    const currentVoices = synth.getVoices();
    if (currentVoices.length > 0) {
      handleVoicesLoaded();
      return;
    }

    synth.onvoiceschanged = handleVoicesLoaded;

    // 兜底：部分浏览器不会触发 onvoiceschanged，或环境无可用语音，
    // 等待 2 秒后仍未加载也 resolve，让默认语音尝试播放，避免永远 pending。
    window.setTimeout(() => {
      if (!voicesReady) {
        handleVoicesLoaded();
      }
    }, 2000);
  });

  return voicesPromise;
}

function getAmericanEnglishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices.length) return null;

  // 1. 优先使用指定的高品质美音
  for (const name of preferredVoices) {
    const voice = voices.find(
      (v) => v.name === name && (v.lang === 'en-US' || v.lang.startsWith('en-US'))
    );
    if (voice) return voice;
  }

  // 2. 尝试任意高质量 en-US 语音
  const naturalUsVoice = voices.find(
    (v) =>
      v.lang === 'en-US' &&
      (v.name.includes('Natural') || v.name.includes('Enhanced') || v.name.includes('Premium'))
  );
  if (naturalUsVoice) return naturalUsVoice;

  // 3. 回退到任意 en-US 语音
  return voices.find((v) => v.lang === 'en-US') || null;
}

function doSpeak(text: string, options: SpeakOptions, voices: SpeechSynthesisVoice[]) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  const synth = window.speechSynthesis;

  // 停止正在播放的语音，避免重叠
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options.lang ?? 'en-US';
  // 在默认 1 的基础上降为 0.75，语速更慢、更适合小朋友跟读
  utterance.rate = options.rate ?? 0.75;
  utterance.pitch = 1;

  const voice = getAmericanEnglishVoice(voices);
  if (voice) {
    utterance.voice = voice;
  }

  // 某些浏览器需要用户交互后才能播放，这里由点击触发，满足条件
  synth.speak(utterance);
}

export function speak(text: string, options: SpeakOptions = {}) {
  if (!text || typeof window === 'undefined' || !window.speechSynthesis) return;

  loadVoices().then((voices) => {
    doSpeak(text, options, voices);
  });
}
