import { FIREEMBLEM, totalCount } from './fireemblem_list';
import { randomNumber, imgDataToHexCode, generateImgData } from './util';

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
    this.currentHeroId = 2;
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
    if (this.currentHeroId >= 151) {
      this.currentHeroId = 1;
    } else {
      this.currentHeroId++;
    }
  }

  randomHero() {
    let randomId = randomNumber(151);
    this.currentHeroId = randomId;
    this.loadHero();
  }
};
