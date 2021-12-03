const Discord = require("discord.js");
const Carlo = new Discord.Client();
Carlo.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`Type Something Here - شتێک لێرە بنووسە`,];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Carlo.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
Carlo.on("ready", () => {
    var join = Carlo.channels.get(""); ///id Voice
    if (join) join.join();
  });
Carlo.login(""); ///Token
