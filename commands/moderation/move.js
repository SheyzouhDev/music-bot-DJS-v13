const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.MOVE_MEMBERS)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.MOVE_MEMBERS}`)
        ]
    });

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());
    if (!user) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`**Vous devez mentionner une personne**`)
        ]
    });

    let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
    if (!channel) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`**Vous devez mentionner un channel**`)
        ]
    });

    try {

        user.voice.setChannel(channel);

        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setDescription(`${user} a etais mouve ${channel}`)
            ]
        });

    } catch (error) {
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setDescription(`**Vous devez mentionner un channel**`)
            ]
        });
    };
};

exports.help = {
    name: 'move',
    description: 'mute user',
    usage: 'mute user reason',
    example: '!mute utilisateur raison'
};

exports.conf = {
    aliases: [],
    cooldown: 5
};