module.exports = {
  meta: {
    help: 'Enters a checkin',
    usage: '<message>',
    module: 'Util',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.guild.channels.get("529914958558003242").createMessage('\u200B' + `New checkin from <@${msg.author.id}>: ` + suffix)
  }
}
