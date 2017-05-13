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
	// delete this.colors['#0d131a'];

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
