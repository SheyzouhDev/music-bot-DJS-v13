const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.MUTE_MEMBERS}`)
        ]
    });

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`**Vous devez mentionner une personne**`)
        ]
    });

    if (user.id == client.user.id) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`**Je ne peux pas utiliser cette commande**`)
        ]
    });

    let muteRoleName = client.guilds.cache.get(message.guild.id).roles.cache.find(role => role.name === 'Muted');

    user.roles.remove(muteRoleName)

    message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${user} **A était unmute par** <@${message.author.id}>`)
        ]
    });

};

exports.help = {
    name: 'unmute',
    description: 'unmute user',
    usage: 'unmute <user> <reason>',
    example: ''
};

exports.conf = {
    aliases: [],
    cooldown: 5
};