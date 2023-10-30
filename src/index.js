import add from "./calc";
import printMe from "./print";
import './style.css';
import Skepta from './skepta.jpg';

console.log(add(5,4));
console.log(add(9,7));

const body = document.querySelector('body');
body.textContent = "Meridian Man Skepta, Boy Better Know";

const element = document.createElement('div');
const myImage = new Image();
myImage.src = Skepta;

body.appendChild(element);
element.appendChild(myImage);

printMe(); 