// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let bx = 100;
let by = 400;
let bl = 100;
let bw = 60;

let ox = 600;
let oy = 400;
let or = 50;

// Request Animation Frame
requestAnimationFrame(draw);

// Call draw function once all pages resources have loaded
window.addEventListener("load", draw);

function draw() {
  // Draw Filled Rectangle
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 600);

  ctx.fillStyle = "red";
  ctx.fillRect(100, 50, 100, 60);

  ctx.fillStyle = "blue";
  ctx.fillRect(bx, by, bl, bw);

  // Draw Filled Circle
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(600, 100, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(ox, oy, or, 0, 2 * Math.PI);
  ctx.fill();

  // Redraw
  requestAnimationFrame(draw);
}

// Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Mouse Coordinates
  const mx = e.clientX - cnv.offsetLeft;
  const my = e.clientY - cnv.offsetTop;

  // Variables for Moving Shapes
  let bxx = bx + bl;
  let byy = by + bw;

  // Green Circle Distance
  let ag = mx - 600;
  let bg = my - 100;
  let cg = Math.sqrt(ag * ag + bg * bg);

  // Orange Circle Distance
  let ao = mx - ox;
  let bo = my - oy;
  let co = Math.sqrt(ao * ao + bo * bo);

  // If Statement
  if (mx > 75 && mx < 215 && my > 100 && my < 150) {
    document.body.style.backgroundColor = "red";
  } else if (mx > bx && mx < bxx && my > by && my < byy) {
    document.body.style.backgroundColor = "blue";
    bx = Math.floor(Math.random() * 399) + 1;
    by = Math.floor(Math.random() * 399) + 1;
    bl = Math.floor(Math.random() * 99) + 1;
    bw = Math.floor(Math.random() * 99) + 1;
  } else if (cg < 26) {
    document.body.style.backgroundColor = "green";
  } else if (co < or) {
    document.body.style.backgroundColor = "orange";
    or = Math.floor(Math.random() * 99) + 1;
    ox = Math.floor(Math.random() * 499) + 1;
    oy = Math.floor(Math.random() * 499) + 1;
  }
}

requestAnimationFrame(draw);




