const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['halp'],
			description: 'Zeigt alle Bot Befehle an.',
			category: 'Utilities',
			usage: '[command]'
		});
	}

	async run(message, [command]) {
		const embed = new MessageEmbed()
			.setColor('#9f00fa')
			.setAuthor(`${message.guild.name} Hilfemenü`, message.guild.iconURL({ dynamic: true }))
			.setThumbnail(this.client.user.displayAvatarURL())
			.setFooter(`Angefordert von ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
			.setTimestamp();

		if (command) {
			const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

			message.delete();
			if (!cmd) return message.channel.send(`Ungültiger Befehl name. \`${command}\``);

			embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Befehlshilfe`, this.client.user.displayAvatarURL());
			embed.setDescription([
				`**❯ Aliase:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`,
				`**❯ Beschreibung:** ${cmd.description}`,
				`**❯ Kategorie:** ${cmd.category}`,
				`**❯ Verwendung:** ${cmd.usage}`
			]);

			message.delete();
			return message.channel.send(embed);
		} else {
			embed.setDescription([
				`Dies sind die verfügbaren Befehle für ${message.guild.name}`,
				`Das Präfix des Bots lautet: ${this.client.prefix}`,
				`Befehlsparameter: \`<>\` ist streng & \`[]\` ist optional
				`
			]);
			let categories;
			if (!this.client.owners.includes(message.author.id)) {
				categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
			} else {
				categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
			}

			for (const category of categories) {
				embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd =>
					cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' '));
			}
			message.delete();
			return message.channel.send(embed);
		}
	}

};
