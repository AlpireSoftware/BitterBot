/*
Please ignore any of the comments and contact me though GitHub
with any bugs or suggestions.
Thanks.
*/

const Discord = require("discord.js");
const commando = require("discord.js-commando");
const Client = new Discord.Client();

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands")

client.on("ready", () => {
  //Prints this out in the console.
  console.log(`Logged in as ${client.user.username}!`);
  //Remember to update this.
  console.log('Bot Version 0.1');
});

//Bot token from admin page in discord.
client.login("GQnz32lHERiw_sPTmCMm6AaaRSzXioXY");
