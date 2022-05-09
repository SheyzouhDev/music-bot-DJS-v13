exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    const success = queue.setPaused(false);
    return message.channel.send(success ? `La musique actuelle ${queue.current.title} a repris ✅` : `Quelque chose s'est mal passé ${message.author}... réessayer ? ❌`);

};

exports.help = {
    name: 'resume',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['rs'],
    cooldown: 5
};