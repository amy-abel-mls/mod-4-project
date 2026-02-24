const bgMusic = document.getElementById('bg-music');
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Restore saved preference (default to muted if nothing saved)
export const musicOn = localStorage.getItem('musicOn') === 'true';

const loadSound = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return await audioCtx.decodeAudioData(arrayBuffer);
};

// Sfx files
export const clickBuffer = await loadSound('/mod-4-project/assets/click.mp3');
export const scrollBuffer = await loadSound('/mod-4-project/assets/scroll.mp3');

export const playSound = (buffer, volume) => {
  // AudioContext may be suspended until user interaction
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const source = audioCtx.createBufferSource();
  const gainNode = audioCtx.createGain();
  gainNode.gain.value = volume;

  source.buffer = buffer;
  source.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  source.start(0);
};

// Start or resume music
export const startOrResumeAudio = () => {
  bgMusic.volume = 0.1;
  bgMusic.muted = false;
  bgMusic.play();
  localStorage.setItem('musicOn', 'true');
};

// Pause audio when window loses focus
export const pauseAudio = () => {
  bgMusic.muted = true;
  localStorage.setItem('musicOn', 'false');
};

export const userGestures = ['click', 'keydown', 'touchstart'];

export const onFirstGesture = () => {
  bgMusic.volume = 0.1;
  if (musicOn) {
    bgMusic.muted = false;
    bgMusic.play();
    localStorage.setItem('musicOn', 'true');
  }
  userGestures.forEach((e) => document.removeEventListener(e, onFirstGesture));
};
