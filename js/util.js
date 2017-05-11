export const randomPokeNumber = function() {
  // add 1 to exclude 0 and include 151
  return (Math.floor(Math.random() * 151) + 1);
};

// hexcode is just rgb mapped in base 16
export const imgDataToHexCode = function(color) {
  let r = color.red.toString(16);
  let g = color.green.toString(16);
  let b = color.blue.toString(16);
  let result = '';
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

export const generateImgData = function(canvas, ctx, colors, currentId, group) {
  let imgData = ctx.getImageData(canvas.width/3, canvas.height/3,
    img.width, img.height).data;
  // return colors
};
