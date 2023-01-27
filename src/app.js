import { hextoHSL } from "./utile.js";
import { createColorPalette } from "./utile.js";
import { Color } from "./modules/Color.js";
import { convertHslToHex } from "./utile.js";
import { transformColorForShadow } from "./utile.js";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
//#84D2C5
//
const form = document.querySelector("form");
const input = document.querySelector("input");
const header = document.querySelector("header");
const colorContainer = document.querySelector("main");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(/^#[0-9A-F]{6}$/i.test(input.value)){
      console.log(input.value.toString());

      let hsl = hextoHSL(input.value);
      let palette = createColorPalette(hsl);
      displayColors(input.value.toString(), palette);
      

    } else{
      throw new Error("<<la valeur d'entrée>> is not a valid Hexadecimal color.")
    }
  });

  function displayColors(input, palette){
    header.classList.add("minimized");    
    document.body.style.background =`linear-gradient(-45deg, #${convertHslToHex(palette[0])}, #${convertHslToHex(palette[Math.round(palette.length/2)])}, #${convertHslToHex(palette[palette.length-1])})`;
    document.body.style.backgroundSize = `400% 400%`
    
    removeAllChildNodes(colorContainer);
    palette.forEach(arrayHSL => {
      const c = new Color(arrayHSL)
      c.display(colorContainer)
    });

    //changer propriété dans l'élément est un root.
    document.documentElement.style.setProperty(
      "--shadow-color",
      transformColorForShadow(hextoHSL(input))
    ) 
  }

  //enlever les enfants dans un container
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

//Récupérer un dataSet
  colorContainer.addEventListener("click", (e) => {
  couleurClicke = e.target.closest(".color").dataset.color;
//copier la couleur dans le presse paipier
  let notyf = new Notyf();
  navigator.clipboard.writeText(`${couleurClicke}`).then(function(){
    notyf.success('Couleur hex copiée!');
  }, function() {
    notify.error("Impossible de copier la couleur hexa")
  });
  });



  