const Command = require('../../Structures/Command');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ut'],
			description: 'Zeigt die aktuelle Betriebszeit des Bots.',
			category: 'Utilities'
		});
	}

	async run(message) {
		message.delete();
		message.channel.send(`Betriebszeit: \`${ms(this.client.uptime, { long: true })}\``);
	}

};
