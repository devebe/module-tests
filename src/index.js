import add from "./calc";
import './style.css';
import Skepta from './skepta.jpg';

console.log(add(5,4));

const body = document.querySelector('body');
body.textContent = "Meridian Man Skepta";

const element = document.createElement('div');
const myImage = new Image();
myImage.src = Skepta;

body.appendChild(element);
element.appendChild(myImage);