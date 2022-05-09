exports.run = async (client, message, args) => {

    let ping = Date.now();
    await message.channel.send(`Ping en cours ...`).then(async (m) => await m.edit(`Ping : ${Date.now() - ping} ms`));
}

exports.help = {
    name: 'ping',
    description: 'view latency Proton',
    usage: 'ping',
    example: 'ping'
};

exports.conf = {
    aliases: [],
    cooldown: 5
};