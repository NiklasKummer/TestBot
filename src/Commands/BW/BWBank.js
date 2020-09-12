const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['bonk'],
			category: 'BW'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.id === ['746799380140654675', '746797630541267076', '746799378349686844', '746799297265270884'])) {
			const embed = new MessageEmbed()
				.setColor('ff2d00')
				.setTitle('**BANK**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                WICHTIGE NEWS!

				***BANK***
				Wir brechen gerade die BANK auf kommt Schnnell noch Vorbei sonst Pech!
				
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
