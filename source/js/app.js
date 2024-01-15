import './modules/heading';
import './modules/playlist';
import './modules/playlist-item';
import WaveSurfer from 'wavesurfer.js'

console.log(WaveSurfer); 

const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#4F4A85',
  progressColor: '#383351',
  url: '/source/audio.mp3',
})