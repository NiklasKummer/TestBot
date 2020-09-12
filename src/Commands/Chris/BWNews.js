const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['BWN'],
			category: 'Chris'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.name === 'FauleSocke')) {
			const embed1 = new MessageEmbed()
				.setColor('ff2d00')
				.setTitle('**Fehler**')
				.setDescription(`Du hast keine berechtigung für diesen Befehl!`)
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed1);
		}

		if (message.member.roles.cache.find(role => role.name === 'FauleSocke')) {
			const embed = new MessageEmbed()
				.setColor('ff2d00')
				.setTitle('**NEWS**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                WICHTIGE NEWS!

				***NEWS***

				Wir als BlueWolf wollen am 04.09.2020 richtig fett geld auf Evo verdienen seit alle dabei :D

				@everyone
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
