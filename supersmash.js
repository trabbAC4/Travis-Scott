//Makes the prompt work
var prompt = require('prompt-sync')();

//Maps, attacks, and characters
var mashArray = ["my crib", "Mushroom Kingdom", "Saffron City", "Hyrule Castle"];
var firstQuestion = [1, 2];
var secondQuestion = ["Mario", "Link"];

//Function to ask the questions

function questions() {
    var answer1 = prompt('How many times will you strike? ' + "[" + firstQuestion + "] ");
    var answer2 = prompt('Who will you choose to fight?' + "[" + secondQuestion + "] ");
    var arena = Math.floor(Math.random() * mashArray.length);
    console.log('You strike ' + answer2 + " " + answer1 + " times at " + mashArray[arena] + " arena!");
}
 
questions();

console.log('Too bad! Mewtwo wins! You lose my dude!');