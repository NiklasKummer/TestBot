const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['bb'],
			description: 'RIP EVO.',
			category: 'BW'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.id === ['746799380140654675', '746797630541267076', '746799378349686844', '746799297265270884'])) {
			const embed = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**BYEEEEEE EVO**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                Bye EVO

                @everyone - W I C H T I G -
                Liebe Community, nach mehrfacher Absprache innerhalb der Leitung, (7Personen) haben wir uns schweren
                Herzens dazu entschieden, den Arma3 Server nicht zu starten. Wir werden in der Hinsicht uns in ein 
                neues Projekt stürzen, und zwar GTA RolePlay über Alt;V. Aufgrund der stets sinkenden Spielerzahl in
                Arma3 und der Pöbelcommunity wird das mit GTA ein "Tapetenwechsel", bei welchem wir auch innerhalb 
                der Leitung wachsendes Interesse und steigenden Ansporn dazu gewinnen. 
                Die ersten Schritte ist das Development. Solltet ihr Rückfragen haben, meldet
                euch gerne im Support. Vielen Dank für euer Verständnis!
				
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
