const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    const track = queue.current;

    const embed = new MessageEmbed();
    embed.setColor('RED');
    embed.setThumbnail(track.thumbnail);
    embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

    const methods = ['disabled', 'track', 'queue'];

    const timestamp = queue.getPlayerTimestamp();
    const trackDuration = timestamp.progress == 'Infini' ? 'infini' : track.duration;

    embed.setDescription(`Volume **${queue.volume}**%\nDurée **${trackDuration}**\nMode en boucle **${methods[queue.repeatMode]}**\nDemandé par ${track.requestedBy}`);

    embed.setTimestamp();
    embed.setFooter('La musique passe avant tout - Fait avec cœur par KyZix ❤️', message.author.avatarURL({ dynamic: true }));

    const saveButton = new MessageButton();

    saveButton.setLabel('Save this track');
    saveButton.setCustomId('saveTrack');
    saveButton.setStyle('SUCCESS');

    const row = new MessageActionRow().addComponents(saveButton);

    message.channel.send({ embeds: [embed], components: [row] });

};

exports.help = {
    name: 'nowplaying',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['np'],
    cooldown: 5
};