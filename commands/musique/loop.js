const { QueueRepeatMode } = require('discord-player');

exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    if (args.join('').toLowerCase() === 'queue') {

        if (queue.repeatMode === 1) return message.channel.send(`Vous devez d'abord désactiver la musique en cours en mode boucle (${client.config.app.px}loop) ${message.author}... réessayer ? ❌`);
        const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

        return message.channel.send(success ? `Mode de répétition **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** toute la file d'attente sera répétée indéfiniment 🔁` : `Quelque chose s'est mal passé ${message.author}... réessayer ? ❌`);
    } else {
        if (queue.repeatMode === 2) return message.channel.send(`Vous devez d'abord désactiver la file d'attente courante en mode boucle (${client.config.app.px}loop queue) ${message.author}... réessayer ? ❌`);

        const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

        return message.channel.send(success ? `Mode de répétition **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** la musique en cours sera répétée à l'infini (vous pouvez boucler la file d'attente avec l'option <queue>) 🔂` : `Quelque chose s'est mal passé ${message.author}... réessayer ? ❌`);
    };

};

exports.help = {
    name: 'loop',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['lp', 'repeat'],
    cooldown: 5
};