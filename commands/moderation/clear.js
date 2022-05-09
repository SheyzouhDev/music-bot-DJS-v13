const { Permissions, MessageEmbed } = require('discord.js');
const perms = require('../../permissions.json');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${perms.permissions.MANAGE_MESSAGES}`)
        ]
    });

    const amount = args[0];
    if (!amount || isNaN(amount)) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`❌**Vous devez notez des chiffres**`)
        ]
    });

    const amountParsed = parseInt(amount);
    if (amountParsed > 100) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`❌**Vous pouvez pas supprimer plus de 100 messages**`)
        ]
    });

    message.channel.bulkDelete(args[0]).catch(console.error)

    message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`**${args[0]} messages supprimer** ✅`)
        ]
    });
};

exports.help = {
    name: 'clear',
    description: '',
    usage: 'clear [total message]',
    example: 'clear'
};

exports.conf = {
    aliases: [],
    cooldown: 5
};