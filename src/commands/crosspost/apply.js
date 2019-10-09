module.exports = {
  meta: {
    help: 'Enters an application for a rank',
    usage: '<message>',
    module: 'Util',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.guild.channels.get("474337896766111775").createMessage('\u200B' + `New application from <@${msg.author.id}>: ` + suffix)
  }
}
