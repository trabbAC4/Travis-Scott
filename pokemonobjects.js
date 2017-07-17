var pokemonRoster =
[
   [
       {
       name: "CharizardX", 
       atk: 100,
       def: 200,
       hp: 150,
       legend: true,
       type: "fire",
       }
   ]
   
   [{
       name: "Bidoof",
       atk: 100,
       def: 200,
       hp: 150,
       legend: true,
       type: "fire",
       }
   ]
   
   [
      {
       name: "Mewtwo",
       atk: 100,
       def: 200,
       hp: 150,
       legend: true,
       type: "fire",
       }
   ]
   
   [   {
       name :"Blaziken",
       atk: 100,
       def: 200,
       hp: 150,
       legend: true,
       type: "fire",
       }
   ]
   
   [
      {
       name: "Infernape",
       atk: 100,
       def: 200,
       hp: 150,
       legend: true,
       type: "fire",
       }
   ]

   [
    {
       name: "CooltAHMIDUR",
       atk: 100,
       def: 200,
       hp: 150,
       legend: true,
       type: "fire",
    }
       
   ]
]

function printRoster() {
    console.log(pokemonRoster);
}
function pokemon(hp, level, name, types, attack, legendary) {
    this.hp = hp;
    this.level = level;
    this.name = name;
    this.types = types;
    this.attack = attack;
    this.legendary = legendary;
}

var CharizardX = new Pokemon("Charizard", 130, 111, 78, ["Fire", "Dragon"] , 92, false);
var 


printRoster();