const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['bi', 'bot'],
			description: 'Zeigt Informationen zum Bot an.',
			category: 'Information'
		});
	}

	async run(message) {
		const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setThumbnail(this.client.user.displayAvatarURL())
			.setColor('#9f00fa')
			.addField('Allgemeines', [
				`**❯ Client:** ${this.client.user.tag} (${this.client.user.id})`,
				`**❯ Befehle:** ${this.client.commands.size}`,
				`**❯ Servers:** ${this.client.guilds.cache.size.toLocaleString()} `,
				`**❯ Benutzer:** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ Kanäle:** ${this.client.channels.cache.size.toLocaleString()}`,
				`**❯ Erstellungsdatum:** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Version:** v${version}`,
				`**❯ Discord.js:** v${djsversion}`,
				'\u200b'
			])
			.addField('System', [
				`**❯ Platform:** ${process.platform}`,
				`**❯ Betriebszeit:** ${ms(os.uptime() * 1000, { long: true })}`,
				`**❯ CPU:**`,
				`\u3000 Kerne: ${os.cpus().length}`,
				`\u3000 Model: ${core.model}`,
				`\u3000 Geschwindigkeit: ${core.speed}MHz`,
				`**❯ Speicher:**`,
				`\u3000 Gesamt: ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}`,
				`\u3000 Gebraucht: ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`
			])
			.setTimestamp()
			.setFooter(`${this.client.user.tag}`, this.client.user.displayAvatarURL());

		message.delete();
		message.channel.send(embed);
	}

};
