
var ID = "71deed2d";
var YOUR_KEY = "2d77351e5bfb5df159363806c4cda76c";
var bigMacURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=71deed2d&appKey=2d77351e5bfb5df159363806c4cda76c"
function setup() {
    const displayCals = (data) => {
        let cals = data.hits[0].fields.nf_calories
        let totalFat= data.hits[0].fields.nf_total_fat

        $('body').append('<h1> There are $(cals) calories in a Big Mac. </h1>')
        $('body').append("<h2> There are $(totalFat) grams of fat. </h2>")

    }
    $.getJSON(nutritionUrl, displayCals)
}
$(document).ready(setup)
  
