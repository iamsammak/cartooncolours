require("../css/colours.scss");

// testing
import { POKEMON, POKEMON_NAMES } from './pokemon_list';
import { FIREEMBLEM } from './fireemblem_list';
// end testing imports

import { Pokemon } from './pokemon';
import { FireEmblemHero } from './fireemblem';

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('colours-canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.style.backgroundColor = "#B5FFDB";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// I feel like there has to be a better way than this:
  let navBar = document.getElementById("nav-bar");
  navBar.style.width = window.innerWidth - 8 + "px";

  let pokemon = new Pokemon(canvas, ctx);
  console.log(pokemon);
  pokemon.loadData();

// Random Button
  const logRandomCharacter = document.getElementById("random-button");
  logRandomCharacter.addEventListener("click", pokemon.randomPokemon);

// Back Button
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", pokemon.backPokemon);

// Next Button
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", pokemon.loadPokemon);

// Search Bar
  const searchInput = document.getElementById("search-bar-input");
  searchInput.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      pokemon.searchPokemon(this.value);
    };
  });

// keys mapped: "spacebar" and arrow keys
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

  const resizeCanvas = () => {
    console.log("resize");
    canvas = document.getElementById('colours-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    navBar = document.getElementById("nav-bar");
    navBar.style.width = window.innerWidth - 8 + "px";

    pokemon = new Pokemon(canvas, ctx);
    console.log(pokemon);
    pokemon.loadData();
  };

  window.addEventListener('resize', resizeCanvas, false);

// Testing
  window.pokemon = POKEMON;
  window.fireemblem = FIREEMBLEM;
  window.pokemonNames = POKEMON_NAMES;
// TODO we have a bug with resizing Canvas
// TODO will need to check the colorData later, ex Eirika's doesn't look right
  window.canvas = canvas;
  console.log("Hello from inside cartooncolours.js");
});
