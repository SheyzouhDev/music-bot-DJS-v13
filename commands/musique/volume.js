//const maxVol = config.opt.maxVol;

exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

    const vol = parseInt(args[0]);
    if (!vol) return message.channel.send(`Le volume actuel est ${queue.volume} 🔊\n*Pour modifier le volume, entrez un nombre valide entre **1** et **${maxVol}**.*`);

    if (queue.volume === vol) return message.channel.send(`Le volume que vous souhaitez modifier est déjà le volume actuel ${message.author}... réessayez ? ❌`);
    if (vol < 0 || vol > maxVol) return message.channel.send(`Le nombre spécifié n'est pas valide. Saisissez un nombre compris entre **1** et **${maxVol}** ${message.author}... réessayez ? ❌`);

    const success = queue.setVolume(vol);
    return message.channel.send(success ? `Le volume a été modifié en **${vol}**/**${maxVol}**% 🔊` : `Une erreur s'est produite ${message.author}... réessayer ? ❌`);

};

exports.help = {
    name: 'volume',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['vol'],
    cooldown: 5
};