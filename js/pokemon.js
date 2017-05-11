import { POKEMON } from './pokemon_list';

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

    // let that = this, binding of this
    this.randomPokemon = this.randomPokemon.bind(this);
  }

// Testing Random button which will eventually load a random image
  logRandomPokemon() {
    // add 1 to exclude 0 and include 151
    let pokeNum = Math.floor(Math.random() * 151) + 1;
    console.log(POKEMON[pokeNum][0]);
  }

  randomPokemon() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let randNum = Math.floor(Math.random() * 151) + 1;

    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = POKEMON[randNum][1];
    img.onload = () => {
      // fix proportions later
      this.ctx.drawImage(img, this.canvas.width / 2, this.canvas.height / 3);
    };
    let imgData = this.ctx.getImageData(this.canvas.width / 2.5, this.canvas.height / 3.5, 500, 600).data;
    console.log(imgData);
    // debugger
  }
}
