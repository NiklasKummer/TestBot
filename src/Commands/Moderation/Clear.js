const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['cl'],
			category: 'Moderation'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		const messageArray = message.content.split(' ');
		const args = messageArray.slice(1);

		message.delete();
		if (!message.member.hasPermission('ADMINISTRATION')) return message.reply('Dir fehlen Rechte dazu!').then(mt => mt.delete(5000));

		let deleteAmount;

		if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Das ist keine Zahl').then(mt => mt.delete(5000)); }

		if (parseInt(args[0]) > 10) {
			message.replay('Du kannst maximal 10 Narichten auf einmal löschen.');
		} else {
			deleteAmount = parseInt(args[0]);
		}

		message.delete();
		message.channel.bulkDelete(deleteAmount + 1, true);
		message.reply(`**Erfolgreich ${deleteAmount} Narichten gelöscht**`);
	}

};
