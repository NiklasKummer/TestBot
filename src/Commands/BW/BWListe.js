const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['mi'],
			description: 'Zeigt dir die Member und Leader an.',
			category: 'BW'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.id === ['746799380140654675', '746797630541267076', '746799378349686844', '746799297265270884'])) {
			const embed = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**TEAM**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
                Zusammenstellung der Gruppierung

				***LEITUNG***
				**Mara Winter/Mariella Bunnes**
				 <@!362993398237495306>
				 **Ela Stone**
				 <@!343013877614641153>

				***Mitglieder***
				<@!315196817803313155>
				<@!263247466583818240>
				<@!677609433618186260>
				<@!93452669397508096>
				<@!595315693868679172>
				<@!289819324489924610>
				<@!193443109206622208>

				***Probe-Member***
				
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
