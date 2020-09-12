const Event = require('../../Structures/Event');
const NiklasEmbed = require('../../Structures/NiklasEmbed');
const { Util: { escapeMarkdown } } = require('discord.js');
const { diffWordsWithSpace } = require('diff');

module.exports = class extends Event {

	async run(old, message) {
		if (!message.guild || old.content === message.content || message.author.bot) return;

		const embed = new NiklasEmbed()
			.setColor('#ebebeb')
			.setAuthor(old.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Nachricht aktualisiert')
			.setDescription([
				`**❯ Naricht ID:** ${old.id}`,
				`**❯ Kanal:** ${old.channel}`,
				`**❯ Autor:** ${old.author.tag} (${old.author.id})`
			])
		// .setUrl(old.url)
			.splitFields(diffWordsWithSpace(escapeMarkdown(old.content), escapeMarkdown(message.content))
				.map(result => result.added ? `**${result.value}**` : result.removed ? `~~${result.value}~~` : result.value)
				.join(' '));

		const channel = message.guild.channels.cache.find(ch => ch.name === '╠chat-logs');
		if (channel) channel.send(embed);
	}

};

