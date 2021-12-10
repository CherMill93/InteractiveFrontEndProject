// retrieve user input

// use userinput in api call
// send out api call
// bttn function to look up code
// $(document).on('click', '#searchForUs', function () { **was not needed keeping incase**
$("#searchForUs").click(function () {
  $('#mymodal').show()
  // alert("button is clicked");
  var userNameEl = document.getElementById("playerName").value;
  var userConsoleEl = document.querySelector("#userConsole").value;
  var twitchUserEl = document.getElementById("twitchUser").value;
  console.log(userNameEl);
  console.log(twitchUserEl);
  // var gamerTag = $(userNameEl);
  // console.log(gamerTag);
  //need to get value of this gamer console (aka X1,PS4,PC)
  // var userConsole = $(userConsoleEl);
  // console.log(userConsole)
  var gamerUrl = "https://apex-legends.p.rapidapi.com/stats/" + userNameEl + "/" +userConsoleEl;
  var twitchPop = "https://twitch-advanced.p.rapidapi.com/getUserDataByUsername/" + twitchUserEl;
  // when button is clicked this will call on settingsApex**not needed just kept here incase**
  // $.ajax(settingsApex).done(function (response) {**not needed just kept here incase**
 $.ajax({
    // var settingsApex = {**not needed just kept here incase**
    async: true,
    crossDomain: true,
    url: gamerUrl,
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
      $("#kd").text(playerKd);
      $("#totalKills").text(playerTotalKills);
    }
  })
  $.ajax({    
    async: true,
    crossDomain: true,
    url: twitchPop,
    method: "GET",
    headers: {
      "x-rapidapi-host": "twitch-advanced.p.rapidapi.com",
      "x-rapidapi-key": "f9bc6f03c1mshb2c57ff601fa1adp19194fjsne941b06e9692"
    },
    success: function (response) {
      console.log(response.view_count)
      $("#twitchViewCount").text(response.view_count)
    }
  });
});
