module.exports = {
    meta: {
        help: 'Claim the magician role.',
        module: 'Util',
        level: 0
    },
    fn: function (msg, suffix) {
        const roleId = "326588667617607691";
        let guildMember = msg.member;
        if(!guildMember.roles.includes(roleId))
        {
            guildMember.addRole(roleId, `Claimed via command`).then(() => {});
        } else {
            guildMember.removeRole(roleId, `Removed via command`).then(() => {});
        }
        msg.channel.createMessage(`\u200B Toggled Magician role for <@${msg.author.id}>`) // eris does escaping for us

    }
}