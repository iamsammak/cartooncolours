import { POKEMON } from './pokemon_list';
import { pokemonNameToId } from './pokemon';
import { FIREEMBLEM } from './fireemblem_list';
import { fireemblemNameToId } from './fireemblem';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('colours-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // ctx.fillStyle="red";
  // ctx.fillRect(0,0,300,150);
  // ctx.clearRect(20,20,100,50);

  let img = new Image();
  img.src = "http://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg";
  img.onload = function() {
    // ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, canvas.width / 2.5, canvas.height / 3.5);
  };


  const logRandomPokemon = function() {
    console.log("snorlax");
  };

  let randomPokemon = document.getElementById("random-pokemon");
  randomPokemon.addEventListener("click", logRandomPokemon);


// Testing
  window.pokemon = POKEMON;
  window.pokemonNameToId = pokemonNameToId;
  window.fireemblem = FIREEMBLEM;
  window.fireemblemNameToId = fireemblemNameToId;
  console.log("Hello from inside cartooncolours.js");
});
