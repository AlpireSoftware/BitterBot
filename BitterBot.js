const Discord = require("discord.js");
const Client = new Discord.Client();


client.on("ready", () => {

  console.log("BitterBot is alive!");

});
client.on("message", (message) =>{

  if(message.content.startswith("ping")) {
    message.channel.send("pong");
  }

});

client.login("GQnz32lHERiw_sPTmCMm6AaaRSzXioXY");
