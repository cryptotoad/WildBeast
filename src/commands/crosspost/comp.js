module.exports = {
  meta: {
    help: 'Submits a video for Rocket\'s compilation',
    usage: '<message>',
    module: 'Util',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.guild.channels.get("620550337102872576").createMessage('\u200B' + `New video from <@${msg.author.id}>: ` + suffix)
  }
}
