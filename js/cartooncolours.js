// testing
import { POKEMON } from './pokemon_list';
import { pokemonNameToId, Pokemon } from './pokemon';
import { FIREEMBLEM } from './fireemblem_list';
import { fireemblemNameToId, FireEmblemHero } from './fireemblem';
import { imgDataToHexCode } from './util';
// end testing imports

document.addEventListener('DOMContentLoaded', () => {
  const loadCanvas = () => {
    const canvas = document.getElementById('colours-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.style.backgroundColor = "#B5FFDB";

    const pokemon = new Pokemon(canvas, ctx);
    // pokemon.loadData();
    //
    // const logRandomPokemon = document.getElementById("random-pokemon");
    // logRandomPokemon.addEventListener("click", pokemon.randomPokemon);
    //
    // const randomButton = document.getElementById("random-button");
    // randomButton.addEventListener("click", pokemon.loadPokemon);

    const hero = new FireEmblemHero(canvas, ctx);
    // hero.loadData();

    const logRandomPokemon = document.getElementById("random-pokemon");
    logRandomPokemon.addEventListener("click", hero.randomHero);

    const randomButton = document.getElementById("random-button");
    randomButton.addEventListener("click", hero.generateHeroData);
  };

  window.addEventListener('resize', loadCanvas, false);
  loadCanvas();

// Testing
  window.pokemon = POKEMON;
  window.pokemonNameToId = pokemonNameToId;
  window.fireemblem = FIREEMBLEM;
  window.fireemblemNameToId = fireemblemNameToId;
  window.imgDataToHexCode = imgDataToHexCode;
  console.log("Hello from inside cartooncolours.js");
});
