let RedColor = document.querySelector('#color-selector #r-color');
let BlueColor = document.querySelector('#color-selector #b-color');
let GreenColor = document.querySelector('#color-selector #g-color');
let ButtomRange = document.querySelector('#color-selector #random');
let bodyTag = document.querySelector('body');

function ColorValue(){
    var redVal = RedColor.value;
    var greenVal = GreenColor.value;
    var blueVal = BlueColor.value;
    bodyTag.style.backgroundColor = 'rgb( ' + redVal + ', ' + greenVal + ', ' + blueVal + ' )';
}

function randomNumber(){
    var randomNumber1 = Math.floor(Math.random()*255);
    var randomNumber2 = Math.floor(Math.random()*255);
    var randomNumber3 = Math.floor(Math.random()*255);
    let arrayRandomNumber = [randomNumber1, randomNumber2, randomNumber3];
    return arrayRandomNumber; 
}

function RedColorValue(){
    ColorValue();
}

function BlueColorValue(){
    ColorValue();
}

function GreenColorValue(){
    ColorValue();
}


function ButtomRangeChangig(){
    let colors = randomNumber();
    RedColor.value = colors[0];
    GreenColor.value = colors[1];
    BlueColor.value = colors[2];
    ColorValue();
}
RedColor.addEventListener('input', RedColorValue);
BlueColor.addEventListener('input', BlueColorValue);
GreenColor.addEventListener('input', GreenColorValue);
ButtomRange.addEventListener('click', ButtomRangeChangig);