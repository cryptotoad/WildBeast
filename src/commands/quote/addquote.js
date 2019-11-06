const driver = require('../../selectors/database-selector')
module.exports = {
  meta: {
    help: 'Submits a video for feedback',
    usage: '<message>',
    module: 'Util',
    level: 0
  },
  fn: async (msg, suffix) => {
    var quote = await msg.channel.getMessage(suffix)

    var qdb = await driver.create('quotes', {
      author: `${quote.author.username}#${quote.author.discriminator}`,
      content: `${quote.content}`
    })

    await msg.channel.createMessage(`Quote added from user: ${quote.author.username}#${quote.author.discriminator} - "${quote.content}"`)
    console.log(await driver.getAllQuotes())
  }
}
