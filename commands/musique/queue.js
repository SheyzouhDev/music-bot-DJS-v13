const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);

    if (!queue) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    if (!queue.tracks[0]) return message.channel.send(`Aucune musique dans la file d'attente après celle en cours ${message.author}... réessayer ? ❌`);

    const embed = new MessageEmbed();
    const methods = ['', '🔁', '🔂'];

    embed.setColor('RED');
    embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
    embed.setAuthor(`File d'attente du serveur - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

    const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`);

    const songs = queue.tracks.length;
    const nextSongs = songs > 5 ? `And **${songs - 5}** other song(s)...` : `In the playlist **${songs}** song(s)...`;

    embed.setDescription(`Current ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

    embed.setTimestamp();
    embed.setFooter('La musique passe avant tout - Fait avec cœur par KyZix ❤️', message.author.avatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });

};

exports.help = {
    name: 'queue',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['q'],
    cooldown: 5
};