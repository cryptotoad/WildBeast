module.exports = {
  meta: {
    help: 'Submits a video for feedback',
    usage: '<message>',
    module: 'Util',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.guild.channels.get("638544837926191167").createMessage('\u200B' + `New video from <@${msg.author.id}>: ` + suffix)
    msg.delete()
  }
}
