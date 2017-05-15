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

// I feel like there has to be a better way than this:
  const navBar = document.getElementById("nav-bar");
  navBar.style.width = window.innerWidth - 8 + "px";

  const pokemon = new Pokemon(canvas, ctx);
  pokemon.loadData();

  const logRandomCharacter = document.getElementById("random-button");
  logRandomCharacter.addEventListener("click", pokemon.randomPokemon);

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", pokemon.backPokemon);

  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", pokemon.loadPokemon);

  const searchInput = document.getElementById("search-bar-input");
  searchInput.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      pokemon.searchPokemon(this.value);
    };
  });

  document.addEventListener("keydown", function(e) {
    if (document.activeElement.nodeName != "BODY") { return; }

    if (e.which === 32) {
      pokemon.randomPokemon();
    } else if (e.which === 37 || e.which === 40) {
      pokemon.backPokemon();
    } else if (e.which === 38 || e.which === 39) {
      pokemon.loadPokemon();
    }
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
