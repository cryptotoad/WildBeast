module.exports = {
    meta: {
        help: 'Claim the magician role.',
        module: 'Util',
        level: 7
    },
    fn: function (msg, suffix) {
        const roleToAdd = "Heckler";
        const regExp = new RegExp(roleToAdd, 'i')
        const role = msg.channel.guild.roles.find(r => r.name.match(regExp));
        let members = msg.mentions.filter(u => u.id !== bot.user.id).map((user) => msg.channel.guild.members.get(user.id))
        members[0].roles.forEach(logMapElements, members[0])
        members[0].addRole(role.id, `Heckler command`)
        msg.channel.createMessage(`\u200B Toggled Heckler role for <@${members[0].id}>`) // eris does escaping for us
    }
}

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
    this.removeRole(value, 'Heckler Command')
}