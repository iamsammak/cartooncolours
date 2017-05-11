import { POKEMON, totalCount } from './pokemon_list';
import { randomNumber, imgDataToHexCode, generateImgData } from './util';

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
    this.currentPokeId = 143;
    this.pokemonData = {};
    this.image = null;

    // let that = this, binding of this
    this.randomPokemon = this.randomPokemon.bind(this);
    this.generatePokemonData = this.generatePokemonData.bind(this);
    this.loadPokemon = this.loadPokemon.bind(this);
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

  loadData() {
    let that = this;
    $.getJSON('./js/pokemon_data.json', function(data) {
      that.pokemonData = data;
      that.loadPokemon();
    });
  }

  // metapod, fearow, geodude are extra large
  loadPokemon() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console.log(POKEMON[this.currentPokeId][0]);

    let img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = POKEMON[this.currentPokeId][1];
    img.onload = () => {
      let canvasToImageScale = 2.5;
      let imageScale = img.width / img.height;
      img.height = this.canvas.height / canvasToImageScale;
      img.width = img.height * imageScale;

      let canvasMidpoint = [this.canvas.width/2, this.canvas.height/2];
      let imgMidpoint = [img.width/2, img.height/2];

      let dx = canvasMidpoint[0] - imgMidpoint[0];
      let dy = canvasMidpoint[1] - imgMidpoint[1];
      let dWidth = img.width;
      let dHeight = img.height;

      this.ctx.drawImage(img, dx, dy, dWidth, dHeight);
    };

    // this part will be deleted later after creating search
    if (this.currentPokeId >= 151) {
      this.currentPokeId = 1;
    } else {
      this.currentPokeId++;
    }
  }

  randomPokemon() {
    let randomId = randomNumber(151);
    this.currentPokeId = randomId;
    this.loadPokemon();
  }
}
