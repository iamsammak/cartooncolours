import { POKEMON, POKEMON_NAMES, totalCount } from './pokemon_list';
import { randomNumber,
         imgDataToHexCode,
         generateImgData,
         calculateColorPercentage } from './util';

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
    this.image = null;

    // let that = this, binding of this
    this.randomPokemon = this.randomPokemon.bind(this);
    this.generatePokemonData = this.generatePokemonData.bind(this);
    this.loadPokemon = this.loadPokemon.bind(this);
    // for testing, probably won't need later
    this.displayPalette = this.displayPalette.bind(this);
  }

  generatePokemonData() {
    // currentPokeId must be set to 1 to get Complete Pokemon Data
    console.log("Warning: Change currentPokeId back to 1");

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
        console.log("Data Creation Complete: Hit 151");
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

    this.displayPalette();

    // this part will be deleted later after creating search
    if (this.currentPokeId >= totalCount) {
      this.currentPokeId = 1;
    } else {
      this.currentPokeId++;
    }
  }

  randomPokemon() {
    let randomId = randomNumber(totalCount);
    this.currentPokeId = randomId;
    this.loadPokemon();
  }

  searchPokemon(input) {
    input = input.toLowerCase();
    if (input >= 1 && input <= 151) {
      this.currentPokeId = input;
    } else if (POKEMON_NAMES.includes(input)) {
      this.currentPokeId = POKEMON_NAMES.indexOf(input) + 1;
      this.loadPokemon();
    }
  }

  displayPalette() {
    let palette = this.pokemonData[this.currentPokeId].colors;
    let ratioPalette = calculateColorPercentage(palette);

    document.getElementById("main-color").remove();

    let name = document.getElementById("pokemon-name");
    name.style.color = palette[1].color;
    name.style.textShadow = "-1px 0 " + palette[2].color + ", 0 2px " + palette[2].color + ", 4px 0 " + palette[2].color + ", 0 -1px " + palette[2].color
    name.innerHTML = POKEMON[this.currentPokeId][0];

    let h1 = document.createElement('h1');
    h1.setAttribute("id", "main-color");
    h1.style.backgroundColor = palette[0].color;
    document.getElementById("palette-background").appendChild(h1);

    let mainHexCode = document.getElementById("main-hexcode");
    mainHexCode.innerHTML = palette[0].color;
    console.log(palette[0].color);

    for (let i = 1; i < palette.length; i++) {
      let h3 = document.getElementById("color" + i);
      h3.style.backgroundColor = palette[i].color;
      let hexcode = document.getElementById("hexcode" + i);
      hexcode.innerHTML = palette[i].color;
    }
  }
}
