var points = 0
var sen1 = "Easy sentence."
var sen2 = "MEdium sEntencE."
var sen3 = "hArD As FuG sEnTEnce."
var inp; //global

function setup() {
   createCanvas(windowWidth,windowHeight);
   background('purple');
   inp = createInput('');
   inp.position(0,140);
   inp.input(myInputEvent);
}
function draw() {
   
  fill(0)
   textSize(20);
   textFont("Helvectia")
   text("Please type the sentence below." , 0, 20)
   var sen1 ="Easy sentence."
   text(sen1, 0 , 100)
   text("Current Points: " , 0 ,200)
   
}
function keyPressed() {
    if (keyCode === ENTER) {
         if (inp.value() != sen1) {
             alert("you're losing lmao")
             points = points - 10
         }
    }
}
function keyPressed() {
    if (keyCode === ENTER) {
         console.log(inp.value())
         if (inp.value() == sen1 || inp.value() == sen2 || inp.value() == sen3 ) {
             alert("I'm winning")
             clear();
             points = points + 10
             text("Current Points: " + points ,  0 ,200)
   
           
 

        } else {
             alert("ur losing")
             clear();
             points = points - 10
             text("Current Points: " + points ,  0 ,200)
   
        }
         }
    }


function myInputEvent() {
   console.log('you are typing: ');
}