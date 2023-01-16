const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **Tank** 🚀')
	.setDescription("**ADMIN** \n`Tên : Nguyễn Quốc Khánh` \n`Năm sinh : 2012` \n`Sở thích : chơi game, ddos web.`\n `Zalo : 0394.726.226`\n ** Developer : Binek111 **")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['admin'],
  permLevel: 0
}

exports.help = {
  name: 'admin',
  description: 'Tank',
  usage: 'admin'
}
