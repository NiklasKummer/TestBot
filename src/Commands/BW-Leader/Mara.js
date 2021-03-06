const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['mara'],
			category: 'BW-Leader'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.name === 'BW-Leitung')) {
			const embed1 = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**Fehler**')
				.setDescription(`Du hast keine berechtigung für diesen Befehl!`)
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed1);
		}

		if (message.member.roles.cache.find(role => role.name === 'BW-Leitung')) {
			const embed = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**Meme**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                Mara´s Meme

					***Mara***
					"Ich farme bis ich umfalle" 
					"Mach das nicht brauchen dich noch"
					"Ja, ne "
					":A"
				
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
