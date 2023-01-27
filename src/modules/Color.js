import * as convert from "color-convert";

export class Color {
  #hsl;
  #hex;
  #element;

  // new Color([h ,s ,l])
  constructor(color) {
    this.#hsl = color;
    this.#hex = convert.hsl.hex(this.#hsl);
    this.#element = this.#generateElement();
  }


  #generateElement() {
    let couleurTexte="#000000"
    if(this.#hsl[2] < 60){
        couleurTexte ="#ffffff";
    };

    const color = document.createElement("div");
    color.classList.add("color")
    color.dataset.color = `#${this.#hex}`;
    color.style.backgroundColor = `#${this.#hex}`;
    const p = `
	<p style="color: ${couleurTexte}">{${this.#hex.toString()}}</p>`;
    color.insertAdjacentHTML("afterbegin", p);

    return color;
  }

  display(element){
    element.append(this.#element)
  }
}
