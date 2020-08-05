module.exports = {
  meta: {
    help: 'Enters an application for a rank',
    usage: '<message>',
    module: 'Util',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.createMessage(`\u200B  <@${msg.author.id}>, Your application has been sent for review. Results will be posted soon.`) // eris does escaping for us
    msg.channel.guild.channels.get("570304645734334467").createMessage('\u200B' + `New application from <@${msg.author.id}>: ` + suffix)
    msg.delete()
  }
}
