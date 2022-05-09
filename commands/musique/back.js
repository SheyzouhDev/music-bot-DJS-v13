exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);
    if (!queue.previousTracks[1]) return message.channel.send(`Aucune musique n'a été jouée avant ${message.author}... réessayez ? ❌`);

    await queue.back();
    message.channel.send(`Lecture de la piste **précédente** ✅`);

};

exports.help = {
    name: 'back',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['previous'],
    cooldown: 5
};