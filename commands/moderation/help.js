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
            .addField("command","`!annonce` `!ban` `!clear` `!discord` `!kick` `!lock` `!unlock` `!moveall` `!mute` `!unmute` `!nuke` `!ping` `!testprotec`")
        ]
    })
};

exports.help = {
    name: 'help',
    description: 'help',
    usage: 'help',
    example: '!help'
};

exports.conf = {
    aliases: [],
    cooldown: 5
};