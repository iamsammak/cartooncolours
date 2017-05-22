// for webpacking css
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

// testing
  // let canvasR = document.getElementById('colours-canvas-right');
  // let ctxR = canvasR.getContext('2d');
  // canvasR.width = window.innerWidth / 2;
  // canvasR.height = window.innerHeight;
  // canvasR.style.left = (window.innerWidth / 2) + "px";

  document.body.style.backgroundColor = "#B5FFDB";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// testing
  // ctxR.clearRect(canvasR.width, 0, canvasR.width, canvasR.height);

  let leadPokeId = 4;
  let secondPokeId = 1;

  let pokemon = new Pokemon(canvas, ctx, leadPokeId);
  // let pokemon2 = new Pokemon(canvasR, ctxR, secondPokeId)
  // pokemon2.loadData();
  pokemon.loadData();

// Save Palette Button - Modal open/close
  const displayModal = () => {
    console.log("toggle modal");
    let modal = document.getElementById("modal");
    modal.classList.toggle("open");
  }

  let saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", displayModal);
  let modalClose = document.getElementById("modal-close");
  modalClose.addEventListener("click", displayModal);
  let modalContainer = document.getElementById("modal-container");
  window.onclick = e => {
    if (e.target === modalContainer) {
      displayModal();
    }
  };

// Random Button
  let logRandomCharacter = document.getElementById("random-button");
  logRandomCharacter.addEventListener("click", pokemon.randomPokemon);

// Back Button
  let backButton = document.getElementById("back-button");
  backButton.addEventListener("click", pokemon.backPokemon);

// Next Button
  let nextButton = document.getElementById("next-button");
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

// add button menu for mobile views
  const displayButtons = () => {
    let headerRight = document.getElementById("header-right");
    headerRight.classList.toggle("open");
  }

  let menu = document.getElementById("menu");
  menu.addEventListener("click", displayButtons);

// Reload canvas on window resize
  const resizeCanvas = () => {
    // grabs old pokemon id before creating a new canvas
    leadPokeId = pokemon.logCurrentPokeId();

    // reassign variables
    canvas = document.getElementById('colours-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pokemon = new Pokemon(canvas, ctx, leadPokeId);
    // essentially rerender/repopulate DOM view
    pokemon.loadData();
  };

  window.addEventListener('resize', resizeCanvas, false);

// Testing
  window.pokemon = POKEMON;
  window.fireemblem = FIREEMBLEM;
  window.pokemonNames = POKEMON_NAMES;
  // window.canvas = canvas;
// TODO will need to check the colorData later, ex Eirika's doesn't look right
});
