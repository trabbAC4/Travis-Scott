
// Declare an array with two Cool Nick entries to increase his odds
var people = ["travis scott, yung thug, migos, vintage Don. T,"]
function coolNick(number){
// Function to get random number
var  randomNumber = Math.random() *number;  
var result = Math.floor(randomNumber);
return result;
}
// Prints out a random name based to the function
console.log(coolNick(20));