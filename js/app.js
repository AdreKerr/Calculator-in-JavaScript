//make it work

//text showen
let screen1 = document.getElementById("clear");
screen1.addEventListener("click",clear);

// equal sign
let sovleEqual = document.getElementById("equal");
sovleEqual.addEventListener("click",solve);



// functions for the calclator
// display screen
function display(val) {
    document.getElementById("result").value += val;
}//end funtion display
// solve equation
function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}//end fucntion solve
// clear screen
function clear() {
    document.getElementById("result").value = "";
}//end funciton clear