import { hextoHSL } from "./utile";
//#84D2C5

const form = document.querySelector("form");
const input = document.querySelector("input")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value.toString());
    hextoHSL(input.value);
  });
  