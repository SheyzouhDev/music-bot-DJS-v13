const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.ADMINISTRATOR}`)
        ]
    });

    let ann = args.join(' ');
    message.channel.send(ann);
    message.delete();

};

exports.help = {
    name: 'annonce',
    description: '',
    usage: '',
    example: '`say message annonce`'
};

exports.conf = {
    aliases: [],
    cooldown: 3
};