var x = 600;
var y = 600;


function setup() {
 createCanvas(800, 800);

}

function draw() {
 if (keyIsDown(LEFT_ARROW))
   x-=10;

 if (keyIsDown(RIGHT_ARROW))
   x+=10;

 clear();
 background('black')
 fill(255, 0, 0);
rect(x,y,500,50)
if (x>canvas.width) && (x = 0) {}
}