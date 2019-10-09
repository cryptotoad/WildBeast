module.exports = {
    meta: {
        help: 'Claim the cardist role.',
        module: 'Util',
        level: 0
    },
    fn: function (msg, suffix) {
        const roleToAdd = "Cardist";
        const regExp = new RegExp(roleToAdd, 'i')
        const role = msg.channel.guild.roles.find(r => r.name.match(regExp));
        let guildMember = msg.member;
        if(!guildMember.roles.includes(role.id))
        {
            guildMember.addRole(role.id, `Claimed via command`).then(() => {});
        } else {
            guildMember.removeRole(role.id, `Removed via command`).then(() => {});
        }
        msg.channel.createMessage(`\u200B Toggled Cardist role for <@${msg.author.id}>`) // eris does escaping for us
    }
}