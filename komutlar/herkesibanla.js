const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Banlanayacağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Adlı Kullanıcı Sizi Banladı :hammer: (Gerçek DEGİLDİR**')
        .setImage(`https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'banla',
  description: 'Seçtiğiniz kullanıcıyı banlarsınız (gerçek değil).',
  usage: 'banla'
};
