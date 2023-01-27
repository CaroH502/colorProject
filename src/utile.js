import * as convert from "color-convert";
//#84D2C5

export const hextoHSL = (input) => {
  const inputString = input.toString();

  const hslOrigin = convert.hex.hsl(inputString);
  //arrondir la luminosité
  hslOrigin[2] = Math.round(hslOrigin[2] / 10) * 10;
  console.log(hslOrigin);

  //appelle fonction créant la palette de couleurs
  //createColorPalette(hslOrigin);
  return hslOrigin;
};

export const createColorPalette = (hslOrigin) => {
  const palette = [];
  [h, s] = hslOrigin;
  for (let i = 0; i <= 100; i += 10) {
    palette.push([h, s, i]);
  }
  console.log(palette);
  return palette;
};

export const convertHslToHex = (color) =>{
  return convert.hsl.hex(color)
}

export const transformColorForShadow = (colorHSL) => {
 return `"${colorHSL[0]}deg ${colorHSL[1]}% ${colorHSL[2]}%"`
}

//faire la fonction qui fait la palette de couleurs*/
