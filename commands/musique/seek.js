const ms = require('ms');

exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    const timeToMS = ms(args.join(' '));
    if (timeToMS >= queue.current.durationMS) return message.channel.send(`Le temps indiqué est supérieur au temps total du morceau en cours ${message.author}... réessayer ? ❌\n*Essayez par exemple un temps valide comme **5s, 10s, 20 secondes, 1m**...*`);

    await queue.seek(timeToMS);
    message.channel.send(`Temps défini sur la chanson en cours **${ms(timeToMS, { long: true })}** ✅`);

};

exports.help = {
    name: 'seek',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: [],
    cooldown: 5
};