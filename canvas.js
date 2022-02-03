let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

//make square
context.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
context.fillRect(150, 150, 300, 300);

//change color on click
function changeColor(){
    
}