const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(1000);
message.channel.send("Sohbeti Silip Süpürdüm").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Sohbetteki Herseyi Siler',
  usage: 'temizle'
};
