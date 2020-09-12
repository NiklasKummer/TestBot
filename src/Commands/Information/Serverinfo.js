const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydney: 'Sydney',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['server', 'guild', 'guildinfo'],
			description: 'Zeigt Informationen zu dem Server an, auf dem diese Nachricht ausgeführt wurde.',
			category: 'Information'
		});
	}

	async run(message) {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()
			.setTitle(`**Serverinformationen für __${message.guild.name}__**`)
			.setColor('#9f00fa')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('Allgemeines', [
				`**❯ Name:** ${message.guild.name}`,
				`**❯ ID:** ${message.guild.id}`,
				`**❯ Inhaber:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
				`**❯ Region:** ${regions[message.guild.region]}`,
				`**❯ Boost Stufe:** ${message.guild.premiumTier ? `Stufe ${message.guild.premiumTier}` : 'Keine'}`,
				`**❯ Expliziter Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
				`**❯ Überprüfung Stufe:** ${verificationLevels[message.guild.verificationLevel]}`,
				`**❯ Erstellungsdatum:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b'
			])
			.addField('Statistiken', [
				`**❯ Rollenanzahl:** ${roles.length}`,
				`**❯ Emoji anzahl:** ${emojis.size}`,
				`**❯ Reguläre Emoji anzahl:** ${emojis.filter(emoji => !emoji.animated).size}`,
				`**❯ Animierte Emoji anzahl:** ${emojis.filter(emoji => emoji.animated).size}`,
				`**❯ Mitgliederzahl:** ${message.guild.memberCount}`,
				`**❯ Benutzer:** ${members.filter(member => !member.user.bot).size}`,
				`**❯ Bots:** ${members.filter(member => member.user.bot).size}`,
				`**❯ Text Kanäle:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**❯ Spach Kanäle:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`**❯ Boost anzahl:** ${message.guild.premiumSubscriptionCount || '0'}`,
				'\u200b'
			])
			.addField('Anwesenheit', [
				`**❯ Online:** ${members.filter(member => member.presence.status === 'online').size}`,
				`**❯ Abwesend:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`**❯ Beschäftigt:** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`**❯ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
				'\u200b'
			])
			.addField(`Rollen [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'Keine')
			.setFooter(`${this.client.user.tag}`, this.client.user.displayAvatarURL())
			.setTimestamp();

		message.delete();
		message.channel.send(embed);
	}

};
