import { POKEMON } from './pokemon_list';
import { FIREEMBLEM } from './fireemblem_list';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('colours-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


// Testing
  window.pokemon = POKEMON;
  window.fireemblem = FIREEMBLEM;
  console.log("Hello from inside cartooncolours.js");
});
