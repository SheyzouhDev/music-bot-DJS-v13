const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.MANAGE_CHANNELS}`)
        ]
    });

    if (!client.lockit) client.lockit = [];
    let validUnlocks = ['release', 'unlock'];

    if (validUnlocks.includes()) {
        message.channel.permissionOverwrites.edit(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor(message.guild.me.displayHexColor)
                    .setDescription(`Channel unlock`)
                ]
            });
        });
    } else {
        message.channel.permissionOverwrites.edit(message.guild.id, {
            SEND_MESSAGES: true
        }).then(() => {

            message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor(message.guild.me.displayHexColor)
                    .setDescription(`**Salon débloquer**✅`)
                ]
            });
        });
    };
};

exports.help = {
    name: 'unlock',
    description: '',
    usage: ' ',
    example: ''
};

exports.conf = {
    aliases: [],
    cooldown: 5
};