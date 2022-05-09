const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.SEND_MESSAGES)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.SEND_MESSAGES}`)
        ]
    });

    message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`**Voici le meilleur discord : https://discord.gg/ya47g8SA5w**.`)
        ]
    })
};

exports.help = {
    name: 'discord',
    description: 'discord',
    usage: 'discord',
    example: '!discord'
};

exports.conf = {
    aliases: [],
    cooldown: 5
};