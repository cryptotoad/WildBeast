module.exports = {
    meta: {
        help: 'Verify a user.',
        usage: '@user @user2 <role name>',
        module: 'Util',
        level: 0
    },
    fn: function (msg, suffix) {
        const roleToRemove = "Unverified";
        const regExp = new RegExp(roleToRemove, 'i')
        const role = msg.channel.guild.roles.find(r => r.name.match(regExp));
        let guildMember = msg.member;
        guildMember.removeRole(role.id, `User Validation`).then(() => {});
        msg.delete()
    }
}