const { Client, Collection } = require('discord.js');
const Util = require('./Util.js');

module.exports = class NiklasClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.events = new Collection();

		this.utils = new Util(this);

		this.owners = options.owners;
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Optionen sollten eine Art Objekt sein.');

		if (!options.token) throw new Error('Sie müssen den Token dem Client übergeben.');
		this.token = options.token;

		if (!options.prefix) throw new Error('Sie müssen ein Präfix dem Client übergeben.');
		if (typeof options.prefix !== 'string') throw new TypeError('Das Präfix sollte eine Art Zeichenfolge sein.');
		this.prefix = options.prefix;
	}

	async start(token = this.token) {
		this.utils.loadCommands();
		this.utils.loadEvents();
		super.login(token);
	}

};
