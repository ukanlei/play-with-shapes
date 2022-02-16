
//filled square
function filledSquare(){
    let canvasForSquare = document.getElementById("canvasForSquare");
    context = canvasForSquare.getContext("2d");
    randomColor = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    //erase original square
    context.clearRect(0, 0, 600, 600); 
    //draw square
    context.beginPath(); //start new path
    context.rect(150, 150, 300, 300); //set dimension of square
    context.fillStyle = randomColor; //set color
    context.fill(); //fill square
}

//filled circle
function filledCircle(){
    let canvasForCircle = document.getElementById("canvasForCircle");
    context = canvasForCircle.getContext("2d");

    let randomColor = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    context.clearRect(0, 0, 600, 600);
    //draw circle
    context.beginPath(); //start new path
    context.arc(300,300,150,0, Math.PI*2);
    context.fillStyle = randomColor; //set color
    context.fill(); //fill square
}

filledSquare();
filledCircle();


/*function swapCanvas(){
    if(canvasForSquare.style.visibility == "visible"){
        canvasForSquare.style.visibility = "hidden";
        canvasForCircle.style.visibility = "visible";
  }else{
        canvasForSquare.style.visibility="visible";
        canvasForCircle.style.visibility="hidden";
  }
}

//make buttons work
let circleBtn = document.getElementById("circleBtn");
let squareBtn = document.getElementById("squareBtn");
circleBtn = circleBtn.addEventListener("click", filledCircle)
squareBtn = squareBtn.addEventListener("click", filledSquare);
//*/









/*function clickToChangeColor(){
    let shape = document.getElementById("shapeCanvas");
    let changeShape = shape.addEventListener("click", filledCircle); //detect click then filledCircle()
    return changeShape;
}*/




