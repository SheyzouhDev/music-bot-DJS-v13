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
            .setDescription(`❌**Vous devez mentionner une personne !**`)
        ]
    });

    if (user.roles.highest.position >= message.member.roles.highest.position) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`❌**Vous ne pouvez pas muet cette utilisateur, son rôle est supérieur au vôtre**`)
        ]
    });

    if (user.id == client.user.id) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`❌**Je ne peux pas utiliser cette commande**`)
        ]
    });

    let reason = args.join(' ').slice(22);
    if (!reason) return message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`❌**Vous devez mentionner une raison**`)
        ]
    });

    let muteRoleName = client.guilds.cache.get(message.guild.id).roles.cache.find(role => role.name === 'Muted');
    if (!muteRoleName) {
        try {
            muteRoleName = await message.guild.roles.create({
                name: 'Muted',
                color: '#000000',
                permission: []
            });

            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.permissionOverwrites.create(muteRoleName, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CONNECT: false,
                    SPEAK: false,
                    STREAM: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        };
    };

    user.roles.add(muteRoleName)

    message.channel.send({
        embeds: [new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${user} **A était muet par** <@${message.author.id}>`)
        ]
    });
};

exports.help = {
    name: 'mute',
    description: 'mute user',
    usage: 'mute user reason',
    example: '!mute utilisateur raison'
};

exports.conf = {
    aliases: [],
    cooldown: 5
};