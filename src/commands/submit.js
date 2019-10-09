module.exports = {
  meta: {
    help: 'Enters an submission to the contest',
    usage: '<message>',
    module: 'Util',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.guild.channels.get("474336784541548556").createMessage('\u200B' + `New application from <@${msg.author.id}>: ` + suffix)
  }
}
