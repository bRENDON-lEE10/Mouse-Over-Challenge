// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let mouseX;
let mouseY;

let blueRect = {
    x: Math.random() * cnv.width,
    y: Math.random() *cnv.height,
    w: Math.random() * 30 +20,
    h: Math.random() * 30 + 20,
}

// Call draw function once all pages resources have loaded
window.addEventListener("load", draw);

function draw() {
        // LOGIC
        if (ptInRect(mouseX, mouseY, 50,50,200,80)){
            document.body.style.backroundColor = "red";
        }else if (ptInRect(mouseX, mouseY,600,100,50,0,2* Math.PI )){
            document.body.style.backroundColor = "green";
        }else if (ptInRect(mouseX, mouseY,600,450,50,0,2* Math.PI )){
            document.body.style.backroundColor = "orange";
        }
        
        if(ptInRect(mouseX,mouseY,blueRect.x,blueRect.y,blueRect.w,blueRect.h)){
            document.body.style.backroundcolor ="blue"
            blueRect = {
                x: Math.random() * cnv.width,
                y: Math.random() *cnv.height,
                w: Math.random() * 30 +20,
                h: Math.random() * 30 + 20,
            }
        }

// Draw Filled Rectangle
ctx.clearRect(0,0,cnv.width,cnv.height);

ctx.fillStyle = "red";
ctx.fillRect (100,50,100,60);

ctx.fillStyle = "blue";
ctx.fillRect (blueRect.x,blueRect.y, blueRect.w,blueRect.h);

// Draw Filled Circle
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(600,100,50,0,2* Math.PI);
ctx.fill();

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(600,450,50,0,2* Math.PI);
ctx.fill();

// Redraw
requestAnimationFrame(draw);
}

// Event Stuff
document.addEventListener("mousemove",mousemoveHandler);

function mousemoveHandler(e){
    // Get Rectangle info about canvas location
    letcnvRect = cnv.getBoundingClientRect();

    // Calc mouse cordinates using mouse event and canvas location info
    mouseX= Math.round(e.clientX - cnvRect.left);
    mouseY = Math.round(e.clientY - cnvRect.top);
}

// Helper Function

// Test if a point is in a rectangle
function ptInRect(x1,y1,x,y,w,h){
    if (x1 > x && x1< x + w && y1> y && y1 < y+h){
        return true;
    }else{
        return false;
    }

}





