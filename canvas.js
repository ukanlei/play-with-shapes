let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let randomColor = "hsl(" + 360 * Math.random() + ", 50%, 50%)";

//make square
context.fillStyle = randomColor;
context.fillRect(150, 150, 300, 300);


//new filled square
function newColorSquare(){
    randomColor = "hsl(" + 360 * Math.random() + ", 50%, 50%)";

    //erase original square
    context.clearRect(150, 150, 300, 300); 

    //redraw square
    context.beginPath(); //start new path
    context.rect(150, 150, 300, 300); //set dimension of square
    context.fillStyle = randomColor; //set color
    context.fill(); //fill square
}

//Create filled circle
function filledCircle(){

    context.clearRect(0, 0, 600, 600);
    //draw circle
    context.beginPath(); //start new path
    context.arc(300,300,150,0, Math.PI*2);
    context.fillStyle = randomColor; //set color
    context.fill(); //fill square
}

let circleBtn = document.getElementById("CircleBtn");
circleBtn.addEventListener("click", filledCircle)


let shape = document.getElementById("shapeCanvas");
shape.addEventListener("click", newColorSquare); //detect click then newColorSquare()







