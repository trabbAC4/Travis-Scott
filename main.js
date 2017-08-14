var name = prompt("What'syour name?");
var favFood= prompt("What is your favorite food!");

firebase.database().ref(name).set(
    {
        food: favFood

    }
)

