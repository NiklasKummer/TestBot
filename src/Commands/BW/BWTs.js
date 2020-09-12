const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['Ts'],
			description: 'Zeigt dir die TeamSpeak Adresse und Passwort.',
			category: 'BW'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.id === ['746799380140654675', '746797630541267076', '746799378349686844', '746799297265270884'])) {
			const embed = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**TeamSpeak**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                TeamSpeak Adresse

                ***TeamSpeak***
                BlueWolfs.voiceserver.me
                ***Passwort***
                    2589
				
				
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
