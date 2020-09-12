const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['p'],
			description: 'Zeigt den Ping des Bots an.',
			category: 'Utilities'
		});
	}

	async run(message) {
		message.delete();
		const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;
		// const choices = ['Ist das wirklich mein Ping?', 'Ist das okay? Ich kann nicht schauen!', 'Ich hoffe es ist nicht schlecht!'];
		// const response = choices[Math.floor(Math.random() * choices.length)];

		// For response put this "${response} -"  for Bot Latency
		msg.edit(`Bot Latenz: \`${latency}ms\`, API Latenz: \`${Math.round(this.client.ws.ping)}ms\``);
	}

};
