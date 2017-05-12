require("../css/colours.scss");

// testing
import { POKEMON } from './pokemon_list';
import { FIREEMBLEM } from './fireemblem_list';
// end testing imports

import { Pokemon } from './pokemon';
import { FireEmblemHero } from './fireemblem';

document.addEventListener('DOMContentLoaded', () => {
  const loadCanvas = () => {
    const canvas = document.getElementById('colours-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.style.backgroundColor = "#B5FFDB";

    const pokemon = new Pokemon(canvas, ctx);
    pokemon.loadData();

    const logRandomPokemon = document.getElementById("random-pokemon");
    logRandomPokemon.addEventListener("click", pokemon.randomPokemon);

    const randomButton = document.getElementById("random-button");
    randomButton.addEventListener("click", pokemon.loadPokemon);

    const searchInput = document.getElementById("search-bar-input");
    searchInput.addEventListener("keydown", function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        pokemon.searchPokemon(this.value);
      };
    });

    // const hero = new FireEmblemHero(canvas, ctx);
    // hero.loadData();
    //
    // const logRandomPokemon = document.getElementById("random-pokemon");
    // logRandomPokemon.addEventListener("click", hero.randomHero);
    //
    // const randomButton = document.getElementById("random-button");
    // randomButton.addEventListener("click", hero.loadHero);
  };

  window.addEventListener('resize', loadCanvas, false);
  loadCanvas();

// Testing
  window.pokemon = POKEMON;
  window.fireemblem = FIREEMBLEM;
  console.log("Hello from inside cartooncolours.js");
});
