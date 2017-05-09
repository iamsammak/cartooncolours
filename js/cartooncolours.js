import { POKEMON } from './pokemon_list';

document.addEventListener('DOMContentLoaded', () => {
  const canva = document.getElementById('colours-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


// Testing
  window.pokemon = POKEMON;
  console.log("Hello from inside cartooncolours.js");
});
