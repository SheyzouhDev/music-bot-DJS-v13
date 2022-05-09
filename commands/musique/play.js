const { QueryType } = require('discord-player');

exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send(`Veuillez saisir une recherche valide ${message.author}... réessayer ? ❌`);

    const res = await player.search(args.join(' '), {
        requestedBy: message.member,
        searchEngine: QueryType.AUTO
    });

    if (!res || !res.tracks.length) return message.channel.send(`Aucun résultat trouvé ${message.author}... réessayer ? ❌`);

    const queue = await player.createQueue(message.guild, {
        metadata: message.channel
    });

    try {
        if (!queue.connection) await queue.connect(message.member.voice.channel);
    } catch {
        await player.deleteQueue(message.guild.id);
        return message.channel.send(`Je ne peux pas rejoindre le canal vocal ${message.author}... réessayer ? ❌`);
    }

    await message.channel.send(`Chargement de votre ${res.playlist ? 'playlist' : 'piste'}... 🎧`);

    res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

    if (!queue.playing) await queue.play();

};

exports.help = {
    name: 'play',
    description: '',
    usage: '',
    example: ''
};

exports.conf = {
    aliases: ['p'],
    cooldown: 5
};