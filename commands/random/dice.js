const commando = require('discord.js-commando');

module.exports = cass RollDiceCommand extends commando.Commando {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'random',
      memebrName: 'roll',
      description: 'Rolls a die'
    });
  }
  async run(message, args) {
    var dice = Math.floor(Math.random() * 6) +1;
    message.reply("You rolled a " + dice);
  }
}
