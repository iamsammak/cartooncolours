require("../css/colours.scss");

// testing
import { POKEMON } from './pokemon_list';
import { FIREEMBLEM } from './fireemblem_list';
// end testing imports

import { Pokemon } from './pokemon';
import { FireEmblemHero } from './fireemblem';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('colours-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.style.backgroundColor = "#B5FFDB";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const pokemon = new Pokemon(canvas, ctx);
  pokemon.loadData();
  //
  const logRandomCharacter = document.getElementById("random");
  logRandomCharacter.addEventListener("click", pokemon.randomPokemon);

  const randomButton = document.getElementById("random-button");
  randomButton.addEventListener("click", pokemon.loadPokemon);

  const searchInput = document.getElementById("search-bar-input");
  searchInput.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      pokemon.searchPokemon(this.value);
    };
  });

  // window.addEventListener('resize', loadCanvas, false);

// Testing
  window.pokemon = POKEMON;
  window.fireemblem = FIREEMBLEM;
// TODO we have a bug with resizing Canvas
// TODO will need to check the colorData later, ex Eirika's doesn't look right
  window.canvas = canvas;
  console.log("Hello from inside cartooncolours.js");
});
