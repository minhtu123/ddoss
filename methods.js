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
	.setTitle('🚀 **PANEL** 🚀')
  .setDescription("**FIREWALL** \n `CFB`  `CF-UAM`  `CF-TLS` \n **LAYER 7** \n `IDK`  `HULK`  `CFSockets`  `HTTP-STORM`  `HTTP-V2`  `HTTP-GET`  `TLS-STRONG`  `TLSV1`  `HTTP-FLOOD`  `HTTP-BY`  `HTTP-VIP`  `HTTP-RAW`  `HTTP-RAND`  `HTTPS-GO`  `HTTP-GO`  \n **LAYER 4** \n `TCP-KILL` \n `UDP-KILL` \n **Sẽ sớm update thêm Methods**")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['methods'],
  permLevel: 0
}

exports.help = {
  name: 'methods',
  description: 'Tank',
  usage: 'methods'
}
