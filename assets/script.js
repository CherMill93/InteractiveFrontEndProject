// retrieve user input
var userNameEl = document.querySelector("#playerName")
var userConsoleEl = document.querySelector("#userConsole")

console.log(userNameEl);

// use userinput in api call
// send out api call
// bttn function to look up code
// $(document).on('click', '#searchForUs', function () { **was not needed keeping incase**
$("#searchForUs").click(function () {
  alert("button is clicked");
  var gamerTag = $(userNameEl);
  //need to get value of this gamer console (aka X1,PS4,PC)
  var userConsole = $(userConsoleEl);
  console.log(userConsole)
  var gamerUrl = "https://apex-legends.p.rapidapi.com/stats/legalleta/x1";

  // when button is clicked this will call on settingsApex
  // $.ajax(settingsApex).done(function (response) {
  $.ajax({
    // var settingsApex = {
    async: true,
    crossDomain: true,
    url:gamerUrl,
    method: "GET",
    headers: {
      "x-rapidapi-host": "apex-legends.p.rapidapi.com",
      "x-rapidapi-key": "f9bc6f03c1mshb2c57ff601fa1adp19194fjsne941b06e9692"
    },
      success: function (response) {
      // retrieve data recieved from api call
      console.log(response);
      var playerLevel = response.global.level;
      var playerKd = response.total.kd.value;
      var playerTotalKills = response.total.kills.value;

      // Name of the player
      console.log(response.global.name);
      // player level
      console.log(response.global.level);
      // Players rank
      console.log(response.global.rank.rankName);
      // KD 
      console.log(response.total.kd.value);
      // Total Kills
      console.log(response.total.kills.value);

      // post result into html page to display stats of players
      $("#name").text(response.global.name);
      $("#ourLevel").text(playerLevel);
      $("#compRank").text(response.global.rank.rankName);
      $("#kd").html(playerKd);
      $("#totalKills").html(playerTotalKills);
      }
})
});
