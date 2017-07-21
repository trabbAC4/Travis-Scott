var side = 70;
var rows = 4;
var columns = 3;
var value = 0;
function setup() {

    createCanvas(1000, 1000)
    background(153)

    for (var x = 1; x <= columns; x++) //For loop my dude
    {
        for (var y = 1; y <= rows; y++) { // another for loop my dude
            rect(x * side, y * side, side, side) //Rows


        }
    }
}
    function mousePressed() {
        rect(mouseX, mouseY, side, side)
        if (value == 0) {
            value = 255;
        }
        else {
            value = 0;

        }

        }
    








