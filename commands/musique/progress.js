exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    const progress = queue.createProgressBar();
    
    const timestamp = queue.getPlayerTimestamp();
    if (timestamp.progress == 'Infini') return message.channel.send(`Jouer un live, pas de données à afficher 🎧`);

    message.channel.send(`${progress} (**${timestamp.progress}**%)`);

};

exports.help = {
    name: 'progress',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['pbar'],
    cooldown: 5
};