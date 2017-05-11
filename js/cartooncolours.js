// testing
import { POKEMON } from './pokemon_list';
import { pokemonNameToId, Pokemon } from './pokemon';
import { FIREEMBLEM } from './fireemblem_list';
import { fireemblemNameToId } from './fireemblem';
import { imgDataToHexCode } from './util';
// end testing imports

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('colours-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.style.backgroundColor = "#B5FFDB";

  const pokemon = new Pokemon(canvas, ctx);

  const logRandomPokemon = document.getElementById("random-pokemon");
  logRandomPokemon.addEventListener("click", pokemon.randomPokemon);

  const randomButton = document.getElementById("random-button");
  // randomButton.addEventListener("click", pokemon.randomPokemon);
  randomButton.addEventListener("click", pokemon.generatePokemonData);


// Testing
  window.pokemon = POKEMON;
  window.pokemonNameToId = pokemonNameToId;
  window.fireemblem = FIREEMBLEM;
  window.fireemblemNameToId = fireemblemNameToId;
  window.imgDataToHexCode = imgDataToHexCode;
  console.log("Hello from inside cartooncolours.js");
});


// let img = new Image();
// img.src = "http://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg";
// img.onload = function() {
//   // ctx.drawImage(img, 0, 0);
//   ctx.drawImage(img, canvas.width / 2.5, canvas.height / 3.5);
//   // references: d = destination, s = source image
//   // ctx.drawImage(image, dx, dy);
//   // ctx.drawImage(image, dx, dy, dWidth, dHeight);
//   // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// };
