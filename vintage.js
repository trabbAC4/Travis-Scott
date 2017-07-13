var choices = ["rock", "scissors", "paper"];


var p1choice = choices[2];
var p2choice = choices[2];

if (p1Choice == p2Choice) {
    console.log("It's a tie!")
}
else if(p1choice=== "scissors") {
    if (p2choice === "rock") {
        console.log("Player one loses");
        console.log("Player two wins");

    }
else 
{
    console.log("Player one wins");
    console.log("Player two wins");
}
} else if (p1hoice ===  "rock") {
    if ( p2choice === "scissors") {
        console.log("Player one wins");
        console.log("Player two wins");

    }
    else {
        console.log("Player one wins");
        console.log("Player two loses");

    }

} else if (p1choice === "paper") {
    if (p2choice === "scissors"){
        console.log("Player one loses");
        console.log("Player two loses");

    }
    else {
        console.log("Player one wins");
        console.log("Player two wins");

    }

}