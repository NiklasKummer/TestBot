const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['prbe'],
			description: 'Zeigt dir den Neusten BW Probemember an.',
			category: 'Chris'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.name === 'FauleSocke')) {
			const embed1 = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**Fehler**')
				.setDescription(`Du hast keine berechtigung für diesen Befehl!`)
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed1);
		}

		if (message.member.roles.cache.find(role => role.name === 'FauleSocke')) {
			const embed = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**Neuer Probe Member bei BW**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                Neu als Probemember!

				Probemember: <@!636164091911602206>
				
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
