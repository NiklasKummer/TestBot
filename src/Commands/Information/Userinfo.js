const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['user', 'ui'],
			description: 'Zeigt Informationen zu einem bereitgestellten Benutzer oder dem Nachrichtenautor an.',
			category: 'Information',
			usage: '[user]'
		});
	}

	async run(message, [target]) {
		const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const userFlags = member.user.flags.toArray();
		const embed = new MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor('#9f00fa')
			.addField('Benutzer', [
				`**❯ Nutzername:** ${member.user.username}`,
				`**❯ Diskriminator:** ${member.user.discriminator}`,
				`**❯ ID:** ${member.id}`,
				`**❯ Abzeichen:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Keine'}`,
				`**❯ Benutzerbild:** [Link zum Benutzerbild](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**❯ Account erstellt:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**❯ Status:** ${member.user.presence.status}`,
				`**❯ Spiel:** ${member.user.presence.game || 'Spielt kein Spiel.'}`,
				`\u200b`
			])
			.addField('Mitglied', [
				`**❯ Höchste Rolle:** ${member.roles.highest.id === message.guild.id ? 'Keine' : member.roles.highest.name}`,
				`**❯ Server-Beitrittsdatum:** ${moment(member.joinedAt).format('LL LTS')}`,
				`**❯ Rollen [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'Keine'}`,
				`\u200b`
			])
			.setFooter(`${this.client.user.tag}`, this.client.user.displayAvatarURL())
			.setTimestamp();

		message.delete();
		return message.channel.send(embed);
	}

};
