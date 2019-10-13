module.exports = {
    meta: {
        help: 'Enters a suggestion for the bot',
        usage: '<message>',
        module: 'Util',
        level: 0
    },
    fn: (msg, suffix) => {
        msg.channel.guild.channels.get("632750723574136873").createMessage('\u200B' + `<@&632751083009212446> New suggestion from <@${msg.author.id}>: ` + suffix)
    }
}

