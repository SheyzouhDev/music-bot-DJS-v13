exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    const success = queue.setPaused(true);
    return message.channel.send(success ? `Musique actuelle ${queue.current.title} en pause ✅` : `Quelque chose s'est mal passé ${message.author}... réessayer ? ❌`);

};

exports.help = {
    name: 'pause',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: [],
    cooldown: 5
};