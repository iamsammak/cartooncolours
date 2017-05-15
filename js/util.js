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

export const calculateNameWidth = function(nameElement, currentPokeId) {
  if (window.innerWidth <= 1057 && long_name_array.includes(currentPokeId)) {
    nameElement.style.fontSize = "13.5vw";
  } else {
    nameElement.style.fontSize = "143px";
  }
}

const long_names = {
  142: ["aerodactyl", 870],
  125: ["electabuzz", 860],
  115: ["kangaskhan", 960],
  107: ["hitmonchan", 921],
  103: ["exeggutor", 834],
  102: ["exeggcute", 840],
  81: ["magnemite", 845],
  73: ["tentacruel", 845],
  71: ["victreebel", 805],
  70: ["weepinbell", 834],
  69: ["bellsprout", 822],
  40: ["wigglytuff", 847],
  31: ["nidoqueen", 818],
  27: ["sandshrew", 867],
  12: ["butterfree", 874],
  5: ["charmeleon", 914],
  4: ["charmander", 950]
}

const long_name_array = [4,5,12,27,31,40,69,70,71,73,81,102,103,107,115,125,142];
