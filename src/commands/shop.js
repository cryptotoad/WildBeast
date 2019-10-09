var request = require('request');
var cheerio = require('cheerio');

module.exports = {
    meta: {
        help: 'Look up price comparisons for magic.',
        usage: '<message>',
        module: 'Util',
        level: 0
    },
    fn: (msg, suffix) => {

        request({
            method: 'GET',
            url: 'https://www.penguinmagic.com/s/' +suffix.replace(' ', '+')
        }, (err, res, body) => {
            if (err) return console.error(err);
            let $ = cheerio.load(body);
            const productURL = $('a.search_title')[0]
            const productText = $(productURL).text()
            const productPrice = $('span.search_price')[0]
            const retVal = '\u200B' +`**Penguin**: [${productText}](https://penguinmagic.com${$(productURL).prop('href')}) - *${$(productPrice).text().replace(/\s/g,'')}*\t`;
            msg.channel.createMessage({ embed: {
                    color: 0x3498db,
                    author: { icon_url: bot.user.avatarURL, name: `${bot.user.username}#${bot.user.discriminator} (${bot.user.id})` },
                    title: `Penguin Magic`,
                    description: retVal
                } });
        });

        request({
            method: 'GET',
            url: 'https://bigislandmagicshop.com/search?q=' + encodeURIComponent(suffix)
        }, (err, res, body) => {
            if (err) return console.error(err);
            let $ = cheerio.load(body);
            const productURL = $('a.full-width-link')[0]
            const productText = $(productURL).find('span.visually-hidden')[0]
            const productPrice = $('span.price-item')[0]
            const retVal = '\u200B' +`**Big Island**: [${$(productText).text()}](https://bigislandmagicshop.com${$(productURL).prop('href')}) - *${$(productPrice).text().replace(/\s/g,'')}*\t`;
            msg.channel.createMessage({ embed: {
                color: 0x3498db,
                author: { icon_url: bot.user.avatarURL, name: `${bot.user.username}#${bot.user.discriminator} (${bot.user.id})` },
                title: `Big Island Magic Shop`,
                description: retVal
            } });
        });


    }

}