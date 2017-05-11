import { POKEMON } from './pokemon_list';
import { pokemonNameToId } from './pokemon';
import { FIREEMBLEM } from './fireemblem_list';
import { fireemblemNameToId } from './fireemblem';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('colours-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.backgroundColor = "#B5FFDB";

  // ctx.fillStyle="red";
  // ctx.fillRect(0,0,300,150);
  // ctx.clearRect(20,20,100,50);

  // let img = new Image();
  // img.src = "http://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg";
  // img.onload = function() {
  //   // ctx.drawImage(img, 0, 0);
  //   ctx.drawImage(img, canvas.width / 2.5, canvas.height / 3.5);
  //   // ctx.drawImage(image, dx, dy);
  //   // ctx.drawImage(image, dx, dy, dWidth, dHeight);
  //   // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  // };

  // Testing Random button which will eventually load a random image
  const logRandomPokemon = function() {
    // add 1 to exclude 0 and include 151
    let pokeNum = Math.floor(Math.random() * 151) + 1;
    console.log(POKEMON[pokeNum][0]);
  };

  let randomPokemon = document.getElementById("random-pokemon");
  randomPokemon.addEventListener("click", logRandomPokemon);

  const randomImage = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let randNum = Math.floor(Math.random() * 4);
    let fourImages = [1, 2, 3, 143];

    let img = new Image();
    img.src = POKEMON[fourImages[randNum]][1];
    img.onload = function() {
      ctx.drawImage(img, canvas.width / 2.5, canvas.height / 3.5, 500, 600);
    };
  };

  let randomButton = document.getElementById("random-button");
  randomButton.addEventListener("click", randomImage);


// Testing
  window.pokemon = POKEMON;
  window.pokemonNameToId = pokemonNameToId;
  window.fireemblem = FIREEMBLEM;
  window.fireemblemNameToId = fireemblemNameToId;
  console.log("Hello from inside cartooncolours.js");
});
