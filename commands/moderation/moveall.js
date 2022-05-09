const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.MOVE_MEMBERS)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.MOVE_MEMBERS}`)
        ]
    });

    let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
    if (!channel) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`❌**Vous devez mentioner un channel vacale **`)
        ]
    });

    message.guild.members.cache.forEach(member => member.voice.setChannel(channel))

};

exports.help = {
    name: 'moveall',
    description: 'move all user voice channel',
    usage: 'moove all channel',
    example: '!move all 🔊・Vocal #1'
};

exports.conf = {
    aliases: [],
    cooldown: 5
};