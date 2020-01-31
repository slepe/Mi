exports.run = (client, message, args, Discord) => {
    const user = message.fetchUser();

    if (user && user.avatarURL) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor(message.color)
                .setDescription(`**${user}**'s avatar:`)
                .setImage(user.avatarURL({ size: 2048 }))
        );
    } else {
        return message.channel.embed(`**${message.authorName}**, I can't find that user`);
    }
};

exports.meta = {
    operatorOnly: false,
    name: "avatar",
    usage: "pfp <user>",
    description: "Shows avatar of @mentioned user or self"
};
