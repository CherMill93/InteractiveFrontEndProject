// bttn function to look up APEX STATS
$("#searchForUs").click(function () {
  alert("button is clicked");
  localStorage.clear("player")
  // retrieving the console name from the radio buttons.
  var userConsoleEl = $("input[name='btnradio']:checked").val();
  console.log(userConsoleEl);

  // retrieve username from html page.
  var userNameEl = document.getElementById("playerName").value;
  console.log(userNameEl);
  
  var gamerUrl = "https://apex-legends.p.rapidapi.com/stats/" + userNameEl + "/" + userConsoleEl;
  
  // send out api call for APEX STATS
  $.ajax({
  
    async: true,
    crossDomain: true,
    url: gamerUrl,
    method: "GET",
    headers: {
      "x-rapidapi-host": "apex-legends.p.rapidapi.com",
      "x-rapidapi-key": "f9bc6f03c1mshb2c57ff601fa1adp19194fjsne941b06e9692"
    },

    // When response comes back this function will show our stats.
    success: function (response) {
      console.log(response);

      // Name of the player, Console logs are for us to view response from api call.
      console.log(response.global.name);
      var playerName = response.global.name;

      // player level
      console.log(response.global.level);
      var playerLevel = response.global.level;

      // Players rank
      console.log(response.global.rank.rankName);
      var playerRank = response.global.rank.rankName;

      // KD 
      console.log(response.total.kd.value);
      var playerKd = response.total.kd.value;

      // Total Kills
      console.log(response.total.kills.value);
      var playerTotalKills = response.total.kills.value;


      // post result into html page to display stats of players
      $("#name").text(playerName);
      $("#ourLevel").text(playerLevel);
      $("#compRank").text(playerRank);
      $("#kd").text(playerKd);
      $("#totalKills").text(playerTotalKills);

      //save user info into a var 
      var playerInfo = {
      name: playerName,
      level: playerLevel,
      rank: playerRank,
      kd: playerKd,
      kills: playerTotalKills,
      }

      // store the value in local storage
      window.localStorage.setItem("player", JSON.stringify(playerInfo))
    }
  })
});

// bttn function to look up code for TWITCH STATS
$("#twitchInfo").click(function () {
  alert("twitch button is clicked");

  // retrieve twitch username from html page.
  var twitchUserEl = document.getElementById("twitchUser").value;
  console.log(twitchUserEl);

  var twitchPop = "https://twitch-advanced.p.rapidapi.com/getUserDataByUsername/" + twitchUserEl;

  //  send out api call for TWITCH INFO
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
    console.log(response);
    console.log(response.view_count);
    $("#twitchUser").text(twitchUserEl.value)
    $("#twitchViewCount").text(response.view_count)
  }
})
});

// retrieve previous searchs of apex legends
// JSON.parse apex stats
var startUp = function(){
var previousApexStats = JSON.parse(window.localStorage.getItem("player"))
console.log(previousApexStats);
// apend apex stats to html
var pLevel = previousApexStats.level;
// post result into html page to display stats of players
$("#previousName").text(previousApexStats.name);
$("#previousLevel").text(pLevel);
$("#previousRank").text(previousApexStats.rank);
$("#previousKd").text(previousApexStats.kd);
$("#previousKills").text(previousApexStats.kills);

// retrieve twitch user
// JSON.parse twitch info
// append the data to 

}
startUp();