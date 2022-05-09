const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.MANAGE_CHANNELS}`)
        ]
    });

    message.channel.clone().then(msg => msg.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`**La salon a était clone avec succes ✅, par** <@${message.author.id}>`)
        ]
    }));

    message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`⌛ **Se salon se supprimera automatiquement dans 10 secondes... patience** `)
        ]
    });

    setTimeout(() => {
        message.channel.delete();
    }, 10000);

    setTimeout(() => {
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setDescription(`⌛ **Se salon se supprimera automatiquement dans 3 secondes... patience**`)
            ]
        });
    }, 7000);

    setTimeout(() => {
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setDescription(`⌛ **Se salon se supprimera automatiquement dans 2 secondes... patience**`)
            ]
        });
    }, 8000);

    setTimeout(() => {
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setDescription(`⌛ **Se salon se supprimera automatiquement dans 1 secondes... patience**`)
            ]
        });
    }, 9000);

};

exports.help = {
    name: 'nuke',
    description: 'clone channel',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['clone'],
    cooldown: 5
};