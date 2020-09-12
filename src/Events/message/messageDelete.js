const Event = require('../../Structures/Event');
const NiklasEmbed = require('../../Structures/NiklasEmbed');

module.exports = class extends Event {

	async run(message) {
		if (!message.guild || message.author.bot) return;
		const attachments = message.attachments.size ? message.attachments.map(attachment => attachment.proxyURL) : null;
		const embed = new NiklasEmbed()
			.setColor('#ebebeb')
			.setAuthor(message.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Nachricht gelöscht')
			.setDescription([
				`**❯ Naricht ID:** ${message.id}`,
				`**❯ Kanal:** ${message.channel}`,
				`**❯ Autor:** ${message.member.displayName}`,
				`${attachments ? `**❯ Anhänge:** ${attachments.join('\n')}` : ''}`
			]);
		if (message.content.length) {
			embed.splitFields(`**❯ Nachricht gelöscht:** ${message.content}`);
		}

		const channel = message.guild.channels.cache.find(ch => ch.name === 'bot-testing');
		if (channel) channel.send(embed);
	}

};
