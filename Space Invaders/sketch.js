var x = 600;
var y = 700;


function setup() {
 createCanvas(800, windowHeight);

}

function draw() {
 if (keyIsDown(LEFT_ARROW) && x>0)
   x-=10;

 if (keyIsDown(RIGHT_ARROW) && x < 750)
   x+=10;

 clear();
 background('black')
 fill(0, 255, 0);
 rect(x,y,50,50)
//


} 