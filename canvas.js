let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let randomColor = "hsl(" + 360 * Math.random() + ", 50%, 50%)";

//make square
context.fillStyle = randomColor;
context.fillRect(150, 150, 300, 300);

//new filled square
function newColorSquare(){
    let randomColor = "hsl(" + 360 * Math.random() + ", 50%, 50%)";

    //erase original square
    context.clearRect(150, 150, 300, 300); 

    //redraw square
    context.beginPath(); //start new path
    context.rect(150, 150, 300, 300); //set dimension of square
    context.fillStyle = randomColor; //set color
    context.fill(); //fill square
}

let shape = document.getElementById("shapeCanvas");
shape.addEventListener("click", newColorSquare); //detect click then newColorSquare()







