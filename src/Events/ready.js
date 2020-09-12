const Event = require('../Structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Angemeldet als ${this.client.user.tag}`,
			`Geladen ${this.client.commands.size} Befehle!`,
			`Geladen ${this.client.events.size} Events!`
		].join('\n'));

		const activities = [
			`Willkommen bei BlueWolf!`,
			`+help | Erstellt von Niklas`,
			`BW-Leader Mara | Ela`,
			`${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Mitglieder!`,
			`Schön das du hier bist.`,
			`Hoffe du bleibst uns treu.`,
			`#Familie for ever`
		];

		let i = 0;
		setInterval(() => this.client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 9000);

		this.client.user.setActivity('Willkommen bei BlueWolf!', { type: 'PLAYING' });
	}

};
