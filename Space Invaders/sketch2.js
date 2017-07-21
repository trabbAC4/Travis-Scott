var sbutton;
var canvas;
function setup(){
canvas = createCanvas(800,600);
background('black');
textSize(60);
fill('white');
text("S P A C E - I N V A D E R S",20,73)
sbutton = createButton('START');
sbutton.position(350,450)
sbutton.size(100,50)
}
function mouseClicked(){
   console.log(mouseX+","+mouseY)
   
}