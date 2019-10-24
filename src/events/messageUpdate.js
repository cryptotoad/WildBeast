module.exports = async (ctx) => {

  //Long ass regex to match url
  var re_weburl = new RegExp(
      "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
      "i"
  );

  const msg = ctx[0]
  const roleNoPing = "Staff";
  const regExp = new RegExp(roleNoPing, 'i')
  const role = msg.channel.guild.roles.find(r => r.name.match(regExp));

  if (!msg.member.roles.includes(role.id))
    author = `<@${msg.author.id}>`
  else
    author = `${msg.author.username}#${msg.author.discriminator}`

  if (re_weburl.test(msg.content)) { //If it's a URL we just send that
    msg.channel.guild.channels.get("456558636362104851").createMessage(`**${author} has posted a link in** #${msg.channel.name}\n **Link:** ${msg.content}\n\n\n`)
  }
  else {
    if (ctx.length >= 2 && ctx[1] !== null)
      msg.channel.guild.channels.get("456558636362104851").createMessage(`**${author} has edited a message in** #${msg.channel.name}\n **Old Message:** ${ctx[1].content} \n **New Message:** ${msg.content}\n\n\n`)
    else
      msg.channel.guild.channels.get("456558636362104851").createMessage(`**${author} has edited a message in** #${msg.channel.name}\n **New Message:** ${msg.content}\n\n\n`)
  }
}
