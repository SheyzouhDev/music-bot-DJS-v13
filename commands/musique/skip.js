exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    const success = queue.skip();
    return message.channel.send(success ? `Musique actuelle ${queue.current.title} sautée ✅` : `Quelque chose s'est mal passé ${message.author}... réessayer ? ❌`);

};

exports.help = {
    name: 'skip',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['s'],
    cooldown: 5
};