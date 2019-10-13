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
            const urlElems = $('div.product-card.product-card--list')
            const productURL = $(urlElems[0]).find('a.full-width-link')[0]
            const productText = $(urlElems[0]).find('span.visually-hidden')[0]
            const productPrice = $(urlElems[0]).find('span.price-item--sale')[0]
            let priceVal = $(productPrice).text()
            priceVal = (priceVal === "") ? "N/A" : priceVal;
            const retVal = '\u200B' +`**Big Island**: [${$(productText).text()}](https://bigislandmagicshop.com${$(productURL).prop('href')}) - *${priceVal.replace(/\s/g,'')}*\t`;
            msg.channel.createMessage({ embed: {
                    color: 0x3498db,
                    author: { icon_url: bot.user.avatarURL, name: `${bot.user.username}#${bot.user.discriminator} (${bot.user.id})` },
                    title: `Big Island Magic Shop`,
                    description: retVal
                } });
        });
        /*
               request.post('https://i5po43q9gi-dsn.algolia.net/1/indexes/VIProducts/query?x-algolia-agent=Algolia%20for%20JavaScript%20(3.33.0)%3B%20Browser&x-algolia-application-id=I5PO43Q9GI&x-algolia-api-key=5391574bd7f2429fc2151f0e1402fc24', {
                   //For vanishing, we need to tie into the AJAX endpoint.
                   json: {

                   }

                }, (err, res, body) => {
                    if (err) return console.error(err);
                    console.log(body)
                    const retVal = '\u200B' +`**Vanishing Inc**: [${$(productText).text()}](https://www.vanishingincmagic.com${$(productURL).prop('href')}) - *${$(productPrice).text().replace(/\s/g,'')}*\t`;
                    msg.channel.createMessage({ embed: {
                            color: 0x3498db,
                            author: { icon_url: bot.user.avatarURL, name: `${bot.user.username}#${bot.user.discriminator} (${bot.user.id})` },
                            title: `Vanishing Inc`,
                            description: retVal
                        } });
        });
        */
    }
}