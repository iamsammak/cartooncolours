import { FIREEMBLEM, totalCount } from './fireemblem_list';
import { randomNumber,
  imgDataToHexCode,
  generateImgData,
  calculateColorPercentage,
  calculateNameWidth,
  capitalize,
  hexToRGB } from './util';

export const fireemblemNameToId = (obj, name) => {
  for (let prop in obj ) {
    // console.log(`obj.${prop} = ${obj[prop]}`);
    if (obj[prop][0] === name) {
      return parseInt(prop)
    }
  }
}

export class FireEmblemHero {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.colors = {};
    this.currentHeroId = 1;
    this.fireEmblemData = {};
    this.image = null;

    // let that = this, binding of this
    this.randomHero = this.randomHero.bind(this);
    this.generateHeroData = this.generateHeroData.bind(this);
    this.loadHero = this.loadHero.bind(this);
  }

  generateHeroData() {
    this.colors = {};

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = FIREEMBLEM[this.currentHeroId][1];
    img.onload = () => {
      this.ctx.drawImage(img, this.canvas.width/3, this.canvas.height/3);

      let topColors = generateImgData(
        img,
        this.canvas,
        this.ctx,
        this.colors,
        this.currentHeroId,
        FIREEMBLEM
      );

      this.fireEmblemData[this.currentHeroId] = {
        name: FIREEMBLEM[this.currentHeroId][0],
        colors: topColors
      };

      if (this.currentHeroId < totalCount) {
        this.currentHeroId++;
        this.generateHeroData();
      } else {
        console.log("Data Creation Complete");
        console.log(JSON.stringify(this.fireEmblemData));
      }
    };
  }

  loadData() {
    let that = this;
    $.getJSON('./js/fireemblem_data.json', function(data) {
      that.fireEmblemData = data;
      that.loadHero();
    });
  }

  // metapod, fearow, geodude are extra large
  loadHero() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console.log(FIREEMBLEM[this.currentHeroId][0]);

    let img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = FIREEMBLEM[this.currentHeroId][1];
    img.onload = () => {
      let canvasToImageScale = 1.5;
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
    if (this.currentHeroId >= totalCount) {
      this.currentHeroId = 1;
    } else {
      this.currentHeroId++;
    }
  }

  randomHero() {
    let randomId = randomNumber(totalCount);
    this.currentHeroId = randomId;
    this.loadHero();
  }
};

//
//
// export class Pokemon {
//   constructor(canvas, ctx, leadPokeId) {
//     this.canvas = canvas;
//     this.ctx = ctx;
//     this.colors = {};
//     this.currentPokeId = leadPokeId;
//     this.pokemonData = {};
//     this.image = null;
//
//     // let that = this, binding of this
//     this.randomPokemon = this.randomPokemon.bind(this);
//     this.generatePokemonData = this.generatePokemonData.bind(this);
//     this.loadPokemon = this.loadPokemon.bind(this);
//     this.backPokemon = this.backPokemon.bind(this);
//     // for testing, probably won't need later
//     this.displayPalette = this.displayPalette.bind(this);
//   }
//
//   generatePokemonData() {
//     // currentPokeId must be set to 1 to get Complete Pokemon Data
//     // comment out if/else below, look for TODO bulbasaur
//     console.log("Warning: Change currentPokeId back to 1");
//
//     this.colors = {};
//
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
//
//     let img = new Image();
//     img.crossOrigin = "anonymous";
//     img.src = POKEMON[this.currentPokeId][1];
//     img.onload = () => {
//       this.ctx.drawImage(img, this.canvas.width/3, this.canvas.height/3);
//
//       let topColors = generateImgData(
//         img,
//         this.canvas,
//         this.ctx,
//         this.colors,
//         this.currentPokeId,
//         POKEMON
//       );
//
//       this.pokemonData[this.currentPokeId] = {
//         name: POKEMON[this.currentPokeId][0],
//         colors: topColors
//       };
//
//       if (this.currentPokeId < totalCount) {
//         this.currentPokeId++;
//         this.generatePokemonData();
//       } else {
//         console.log("Data Creation Complete: Hit 151");
//         console.log(JSON.stringify(this.pokemonData));
//       }
//     };
//   }
//
//   // could refractor this function to use a promise instead
//   loadData() {
//     let that = this;
//     $.getJSON('./js/pokemon_data2.json', function(data) {
//       that.pokemonData = data;
//       that.loadPokemon();
//     });
//   }
//
//   loadPokemon() {
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     console.log(POKEMON[this.currentPokeId][0]);
//     // reset input field upon submission
//     document.getElementById("search-bar-input").value = "";
//
//     let img = new Image();
//     img.crossOrigin = 'anonymous';
//     img.src = POKEMON[this.currentPokeId][1];
//     img.onload = () => {
//       let canvasToImageScale = 2.5;
//       let imageScale = img.width / img.height;
//       img.height = this.canvas.height / canvasToImageScale;
//       img.width = img.height * imageScale;
//
//       let canvasMidpoint = [this.canvas.width/2, this.canvas.height/2];
//       let imgMidpoint = [img.width/2, img.height/2];
//
//       let dx = canvasMidpoint[0] - imgMidpoint[0];
//       let dy = canvasMidpoint[1] - imgMidpoint[1];
//       let dWidth = img.width;
//       let dHeight = img.height;
//
//       this.ctx.drawImage(img, dx, dy, dWidth, dHeight);
//     };
//
//     this.displayPalette();
//
//     // this part will be deleted later after creating search
//     // TODO bulbasaur: comment out below if/else to generate Full Data
//     if (this.currentPokeId >= totalCount) {
//       this.currentPokeId = 1;
//     } else {
//       this.currentPokeId++;
//     }
//   }
//
//   backPokemon() {
//     if (this.currentPokeId === 2) {
//       this.currentPokeId = 151;
//     } else if (this.currentPokeId === 1) {
//       this.currentPokeId = 150;
//     } else {
//       this.currentPokeId = this.currentPokeId - 2;
//     }
//     this.loadPokemon();
//   }
//
//   randomPokemon() {
//     let randomId = randomNumber(totalCount);
//     this.currentPokeId = randomId;
//     this.loadPokemon();
//   }
//
//   searchPokemon(input) {
//     input = input.toLowerCase().trim();
//     if (input >= 1 && input <= 151) {
//       this.currentPokeId = input;
//     } else if (POKEMON_NAMES.includes(input)) {
//       this.currentPokeId = POKEMON_NAMES.indexOf(input) + 1;
//     }
//     this.loadPokemon();
//   }
//
//   displayPalette() {
//     let palette = this.pokemonData[this.currentPokeId].colors;
//     let rgb = hexToRGB(palette);
//     let ratioPalette = calculateColorPercentage(palette);
//
//     document.getElementById("main-color").remove();
//
//     let name = document.getElementById("pokemon-name");
//     name.style.color = palette[1].color;
//     name.style.textShadow = "-1px 0 " + palette[2].color + ", 0 2px " + palette[2].color + ", 5px 0 " + palette[2].color + ", 0 -1px " + palette[2].color
//     name.innerHTML = POKEMON[this.currentPokeId][0];
//
//     let modalName = document.getElementById("palette-name");
//     let cName = capitalize(POKEMON[this.currentPokeId][0]);
//     modalName.style.color = palette[0].color;
//     modalName.innerHTML = "#" + this.currentPokeId + " " + cName;
//
//     // calculateNameWidth(name, this.currentPokeId, longNameArray);
//
//     let h1 = document.createElement('h1');
//     h1.setAttribute("id", "main-color");
//     h1.style.backgroundColor = palette[0].color;
//     document.getElementById("palette-background").appendChild(h1);
//
//     let mainHexCode = document.getElementById("main-hexcode");
//     mainHexCode.innerHTML = palette[0].color;
//
//     let modalMainColor = document.getElementById("modal-main-color");
//     modalMainColor.style.backgroundColor = palette[0].color;
//     let modalMainHexCode = document.getElementById("m-hexcode0")
//     modalMainHexCode.innerHTML = palette[0].color;
//     let modalMainRGB = document.getElementById("m-rgb0");
//     modalMainRGB.innerHTML = rgb[0];
//     let modalMainHtml = document.getElementById("m-html0");
//     modalMainHtml.innerHTML = "style=\"color:" + palette[0].color + ';"';
//     let modalMainCss = document.getElementById("m-css0");
//     modalMainCss.innerHTML = ".color-1 {color: " + palette[0].color + ";}";
//
//     for (let i = 1; i < palette.length; i++) {
//       let h3 = document.getElementById("color" + i);
//       h3.style.backgroundColor = palette[i].color;
//       let hexcode = document.getElementById("hexcode" + i);
//       hexcode.innerHTML = palette[i].color;
//       let modalColor = document.getElementById("modal-color" + i);
//       modalColor.style.backgroundColor = palette[i].color;
//       let modalHex = document.getElementById("m-hexcode" + i);
//       modalHex.innerHTML = palette[i].color;
//       let modalRGB = document.getElementById("m-rgb" + i);
//       modalRGB.innerHTML = rgb[i];
//       let modalHtml = document.getElementById("m-html" + i);
//       modalHtml.innerHTML = "style=\"color:" + palette[i].color + ';"';
//       let modalCss = document.getElementById("m-css" + i);
//       modalCss.innerHTML = ".color-" + (i+1) + " {color: " + palette[i].color + ";}";
//     }
//   }
//
//   // need for resize Canvas function
//   logCurrentPokeId() {
//     return this.currentPokeId - 1;
//   }
// }
