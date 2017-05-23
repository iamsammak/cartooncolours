export const randomNumber = function(limit) {
  // add 1 to exclude 0 and include 'limit'
  return (Math.floor(Math.random() * limit) + 1);
};

// hexcode is just rgb mapped in base 16
export const imgDataToHexCode = function(color) {
  let r = color.red.toString(16);
  let g = color.green.toString(16);
  let b = color.blue.toString(16);
  // prepend '0' before 0-9 digits
  if (r.length === 1) {
    r = '0' + r;
  }
  if (g.length === 1) {
    g = '0' + g;
  }
  if (b.length === 1) {
    b = '0' + b;
  }

  return '#' + r + g + b;
};

export const generateImgData = function(img, canvas, ctx, colors, currentId, group) {
  let imageData = ctx.getImageData(canvas.width/3, canvas.height/3,
    img.width, img.height).data;

  for (let i = 0; i < imageData.length - 3; i+=4) {
    let r = imageData[i];
    let g = imageData[i + 1];
    let b = imageData[i + 2];

    let imageColor = imgDataToHexCode({red: r, green: g, blue: b});

    if (imageColor in colors) {
      colors[imageColor] += 1;
    } else {
      colors[imageColor] = 1;
    }
  }
  let sortedColors = [];
  delete colors['#000000'];
  // delete colors['#ffffff'];
	delete colors['#0d131a'];

  Object.keys(colors).forEach(color => {
    sortedColors.push({
      color: color,
      count: colors[color]
    });
  });

  // sorts from largest to smallest
  sortedColors.sort((a, b) => b.count - a.count);
  let topTenColors = [];

  for (let k = 0; k < 10; k++) {
    topTenColors.push(sortedColors[k]);
  }

  return topTenColors;
};

export const calculateColorPercentage = function(palette) {
  let totalCount = 0;
  let colorRatio = [];

  palette.forEach(p => totalCount += p.count);
  palette.forEach(p => {
    let color = p.color;
    let percentage = p.count / totalCount;
    colorRatio.push({
      color, percentage
    });
  });
  return colorRatio;
};

// this function can be replaced with a mixin
export const calculateNameWidth = function(nameElement, currentId, longNameArray) {
  if (window.innerWidth <= 1057 && longNameArray.includes(currentId)) {
    nameElement.style.fontSize = "13vw";
  } else {
    nameElement.style.fontSize = "143px";
  }
}

// capitalize's string
export const capitalize = function(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// hexcode to RGB
const RGB = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "a": 10,
  "b": 11,
  "c": 12,
  "d": 13,
  "e": 14,
  "f": 15
}
export const hexToRGB = function(palette) {
  let rgb = [];
  for (let i = 0; i < palette.length; i++) {
    let hexcode = palette[i].color;
    let r = hexcode.slice(1,3);
    let g = hexcode.slice(3,5);
    let b = hexcode.slice(5);

    r = RGB[r[0]] * 16 + RGB[r[1]];
    g = RGB[g[0]] * 16 + RGB[g[1]];
    b = RGB[b[0]] * 16 + RGB[b[1]];

    let rgbString = "rgb(" + r + ", " + g + ", " + b + ")";
    rgb.push(rgbString);
  }

  return rgb;
}
