const driver = require('../../selectors/database-selector')


module.exports = {
    meta: {
        help: 'Warn a user.',
        module: 'Util',
        level: 6
    },
    fn: function (msg, suffix) {
        driver.editGuildMember()
    }
}
