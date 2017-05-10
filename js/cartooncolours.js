import { POKEMON } from './pokemon_list';
import { pokemonNameToId } from './pokemon';
import { FIREEMBLEM } from './fireemblem_list';
import { fireemblemNameToId } from './fireemblem';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('colours-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


// Testing
  window.pokemon = POKEMON;
  window.pokemonNameToId = pokemonNameToId;
  window.fireemblem = FIREEMBLEM;
  window.fireemblemNameToId = fireemblemNameToId;
  console.log("Hello from inside cartooncolours.js");
});
