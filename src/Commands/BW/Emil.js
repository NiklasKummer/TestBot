const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['Emil'],
			description: 'Zeigt dir wie man heulen kann an.',
			category: 'BW'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.id === ['746799380140654675', '746797630541267076', '746799378349686844', '746799297265270884'])) {
			const embed = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**Meme**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                Emil´s Meme

					***Emil Ebert***
					"Ich gewinne immer im JackPot"
					"Ach Stimmt ja war ja nur Luck"
					"Peter Parker zieht immer ab"
					"Emil heult"
				
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
