// retrieve user input


// use userinput in api call
// send out api call
// retrieve data recieved from api call
// post result into html page to display stats of players


var settingsApex = {
	"async": true,
	"crossDomain": true,
	"url": "https://apex-legends.p.rapidapi.com/stats/Legalleta/X1",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apex-legends.p.rapidapi.com",
		"x-rapidapi-key": "f9bc6f03c1mshb2c57ff601fa1adp19194fjsne941b06e9692"
	}
};

// bttn function to look up code
$(document).on('click', '#searchForUs', function(){ 
  alert("button is clicked");
  
  // when button is clicked this will call on settingsApex
  $.ajax(settingsApex).done(function (response) {
    console.log(response);
    // Name of the player
    console.log(response.global.name);
    $("#name").text(response.global.name);

    // player level
    console.log(response.global.level);
    $("#ourLevel").append(response.global.level);

    // Players rank
    console.log(response.global.rank.rankName);
     $("#compRank").text(response.global.rank.rankName);

    // KD 
    console.log(response.total.kd.value);
    $("#kd").append(response.total.kd.value);
    
    // Total Kills
    console.log(response.total.kills.value);
    $("#totalKills").append(response.total.kills.value);
  });
});

$("#statsForUs").ready(function() {
  $("#test1").click(function(){
    $("p").text("hello");
  });
});