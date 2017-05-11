import { POKEMON, totalCount } from './pokemon_list';
import { randomPokeNumber, imgDataToHexCode, generateImgData } from './util';

export const pokemonNameToId = (obj, pokeName) => {
  for (let prop in obj ) {
    // console.log(`obj.${prop} = ${obj[prop]}`);
    if (obj[prop][0] === pokeName) {
      return parseInt(prop)
    }
  }
}

export class Pokemon {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.colors = {};
    this.currentPokeId = 1;
    this.pokemonData = {};

    // let that = this, binding of this
    this.randomPokemon = this.randomPokemon.bind(this);
    this.generatePokemonData = this.generatePokemonData.bind(this);
  }

  randomPokemon() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let pokeNum = randomPokeNumber();
    console.log(POKEMON[pokeNum][0]);

    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = POKEMON[pokeNum][1];
    img.onload = () => {
      // fix proportions later
      this.ctx.drawImage(img, this.canvas.width / 3, this.canvas.height / 3);
    };
    let imgData = this.ctx.getImageData(this.canvas.width / 3, this.canvas.height / 3, 500, 600).data;
    // debugger
  }

  generatePokemonData() {
    this.colors = {};

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = POKEMON[this.currentPokeId][1];
    img.onload = () => {
      this.ctx.drawImage(img, this.canvas.width/3, this.canvas.height/3);

      let topColors = generateImgData(
        img,
        this.canvas,
        this.ctx,
        this.colors,
        this.currentPokeId,
        POKEMON
      );

      this.pokemonData[this.currentPokeId] = {
        name: POKEMON[this.currentPokeId][0],
        colors: topColors
      };

      if (this.currentPokeId < totalCount) {
        this.currentPokeId++;
        this.generatePokemonData();
      } else {
        console.log("Hit 151");
        console.log(JSON.stringify(this.pokemonData));
      }
    };
  }
}
