const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:hammer: Botun Sahipleri**")
    .setColor("#FF000")
    .addField("+Botun Sahibi: Efecan#6825")
    .addField("+Botun 2. Sahibi: CanPvp#0733")
    .addField("+Botu Sunucunuza Eklediğiniz İçin Teşekkür Ederiz")
    .addField("+Botla ilgili Sıkıntı Veya Sorunuz Olursa Verilen Discord Linklerinden Bizi Ekleyin")
    .addField("+Öneriler İçinde Discordumu Eklemelisiniz By: Deka Bot Ekibi")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'botsahip',
  description: 'Botun sahiplerini Gösterir.',
  usage: 'botsahip'
};
