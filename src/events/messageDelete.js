module.exports = async (ctx) => {
  const msg = ctx[0]


  if(msg.author.id == "631254675185991680" && msg.channel.name == "staff-logs") { //Erdnase messages in #staff-logs
    msg.channel.guild.channels.get("456558636362104851").createMessage(`${msg.content}\n\n\n`)
  } else {
    msg.channel.guild.channels.get("456558636362104851").createMessage(`Messsage from <@${msg.author.id}> has been removed in ${msg.channel.name} \n**Message**: ${msg.content}\n\n\n`)
  }
}
