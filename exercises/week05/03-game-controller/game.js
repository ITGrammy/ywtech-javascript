// 1. variables that control the player's size, color, and position
let x = 300;
let y = 200;
let width = 100;
let color = "purple";

// 2. setup: this function only runs once when the page first loads
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  drawPlayer();
}

// 3. this function draws the player (currently a circle)
//    based on the values stored in the variables:
function drawPlayer() {
  clear();
  fill(color);
  circle(x, y, width); // x position, y position, diameter
  drawGrid(window.innerWidth, window.innerHeight);
}

function movePlayer(ev) {
  // open the console in your browser to see what happens :)
  console.log(ev.code);
  if (ev.code === "ArrowUp") {
    y = y - 10; //subtract 10 from variable/

    console.log("Move player up!!!!");
  } 
  else if (ev.code === "ArrowDown") {
    y = y + 10;
  }

  else if (ev.code === "ArrowLeft") {
    x = x - 10;
  }

  else if (ev.code === "ArrowRight") {
    x = x + 10;
  }





  // re-draw the player
  drawPlayer();
}

// This is another way of adding an event listener in JavaScript:
document.addEventListener("keydown", movePlayer);
