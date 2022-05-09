exports.run = async (client, message, args) => {

    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.channel.send(`La recherche a expiré ${message.author}... réessayez ? ❌`);

    message.author.send(`Vous avez enregistré la piste ${queue.current.title} | ${queue.current.author} du serveur ${message.guild.name} ✅`).then(() => {
        message.channel.send(`Je vous ai envoyé le titre de la musique par messages privés ✅`);
    }).catch(error => {
        message.channel.send(`Impossible de vous envoyer un message privé ${message.author}... réessayer ? ❌`);
    });

};

exports.help = {
    name: 'save',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['sv'],
    cooldown: 5
};