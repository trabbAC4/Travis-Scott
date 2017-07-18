var x = 0;
var y = 5;
function setup() {
    createCanvas(windowWidth, windowHeight);
}
// Draw this fucking function nigga over and over again
function draw() {
   background("purple");
    fill(200, 5, 3)
    ellipse(x, 0, x)
    x= x+ 10;
    if (x > width) {
        x = 0;
    }
}