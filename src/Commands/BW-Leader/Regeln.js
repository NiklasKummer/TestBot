const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['mara'],
			category: 'BW-Leader'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.find(role => role.id === ['746799380140654675', '746797630541267076', '746799378349686844', '746799297265270884'])) {
			const embed = new MessageEmbed()
				.setColor('0066FF')
				.setTitle('**BW-Chat-Regeln**')
				.setThumbnail(this.client.user.displayAvatarURL())
				.setDescription(`
				Regeln von BlueWolf
				
				Nutzung von Beleidigungen und verletztenden Wörtern/Sätzen
				❯ Dazu zählen rassistische, extremistische, diskriminierende, sexistische und beleidigende Ausdrücke
				
				Sprache
				❯ Benutze nach Möglichkeit bitte die deutsche Sprache
				
				Chat & Sprachkanäle
				❯ Vermeide unnötiges Taggen von Teammitgliedern oder anderen Spielern.
				❯ Vermeide Spam in den Textkanälen.
				❯ Channel Hopping ist verboten.
				❯ Benutze die Bot-Textkanäle für Befehle.
				
				Respekt
				❯ Respektiere alle Member des Discords.
				
				Eigenwerbung
				❯ Vermeide das Senden von Discord-Links, diese werde von uns sofort entfernt.
				❯ Links zu YouTube, Twitch und weiteren Sozialen Medien sind nur in Promotion Kanäle erlaubt.
			`)
				.setImage('')
				.setFooter(`BlueWolf`, this.client.user.displayAvatarURL());
			message.delete();
			message.channel.send(embed);
		}
	}

};
