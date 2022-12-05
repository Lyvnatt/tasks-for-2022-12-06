let btn = document.querySelector(".btn");
let red = document.querySelector(".bulb-red");
let yellow = document.querySelector(".bulb-yellow");
let green = document.querySelector(".bulb-green");

btn.addEventListener("click", changeColor); 

let activeColor = "yellow";

function changeColor() {
  
  if (activeColor == "yellow") {
    red.style.backgroundColor = "#8a8a8a";
    yellow.style.backgroundColor = "#ff9600";
    green.style.backgroundColor = "#8a8a8a";

    activeColor = "green";

  } else if (activeColor == "green") {
    red.style.backgroundColor = "#8a8a8a";
    yellow.style.backgroundColor = "#8a8a8a";
    green.style.backgroundColor = "#016907";

    activeColor = "red";

  } else {
    red.style.backgroundColor = "#e30a0a";
    yellow.style.backgroundColor = "#8a8a8a";
    green.style.backgroundColor = "#8a8a8a";

    activeColor = "yellow";
  }
}