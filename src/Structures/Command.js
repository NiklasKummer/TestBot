module.exports = class Command {

	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || ['Kein Alias angegeben.'];
		this.description = options.description || 'Keine Beschreibung angegeben.';
		this.category = options.category || 'Miscellaneous';
		this.usage = `${this.client.prefix}${this.name} ${options.usage || ''}`.trim();
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		throw new Error(`Befehl ${this.name} bietet keine Ausführungsmethode!`);
	}

};
