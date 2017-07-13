var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetLength = alphabet.length
function randLetter(index) {
   var randomIndex = Math.random() * index;
   var result = Math.floor(randomIndex);
   return result;
}
// edit this shit my dude 
console.log(alphabet[randLetter(alphabet.length)]);

function randWord() {
    function randsentence(words){
   var sent = ""
   
   for (var i = 0; i<words; i++){
       sent =  sent + randWord(words) + "  "
   }
   return sent
}

console.log(randsentence(6)+ ".")
    
}