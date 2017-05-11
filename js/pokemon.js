import { POKEMON } from './pokemon_list';
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
    generateImgData(
      this.canvas,
      this.ctx,
      this.colors,
      this.currentPokeId,
      POKEMON
    );
    this.currentPokeId++;

  }
}
