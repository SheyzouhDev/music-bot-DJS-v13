exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);

    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    queue.destroy();

    message.channel.send(`La musique s'est arrêtée sur ce serveur, à la prochaine ✅`);

};

exports.help = {
    name: 'stop',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: [],
    cooldown: 5
};