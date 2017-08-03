$.ajax( {
    url:'https://randomuser.me/api/',
    dataType: 'json' ,
    success: function(data) {
        console.log(data); 
        var first= data.results[0].name.first;
        var last= data.results[0].name.last;
        var photo = data.results[0].picture.large;
        var city = data.results[0].location.city;
        $('body').append(`<h2>First name: ${first} </h2>`);
        $('body').append(`<h2>Last name: ${last} </h2>`);
        $('body').append(`<h2>Picture: <img src= ${photo} </img> </h2>`);
        $('body').append(`<h2>Nationality: ${city} </h2>`);

    }
    

});