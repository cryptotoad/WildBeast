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

        var headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0',
            'Accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.5',
            'content-type': 'application/x-www-form-urlencoded',
            'Origin': 'https://www.vanishingincmagic.com',
            'Connection': 'keep-alive',
            'Referer': 'https://www.vanishingincmagic.com/search/?q=c&fR[BrandIDs][0]=1&fR[Type][0]=Product',
            'TE': 'Trailers'
        };

        //var dataString = '{requests:[{indexName:VIProducts,params:query=' + encodeURIComponent(suffix) + '&hitsPerPage=12&maxValuesPerFacet=8&page=0&facets=%5B%22type%22%2C%22BrandIDs%22%2C%22Type%22%2C%22ProductType%22%2C%22PriceUSD%22%5D&tagFilters=&facetFilters=%5B%22BrandIDs%3A1%22%2C%22Type%3AProduct%22%5D}]}';

        var dataString = '' +
            '{"requests":[{"indexName":"VIProducts","params":"query: ' + encodeURIComponent(suffix) + '&' +
            'hitsPerPage=12' + '&' +
            'maxValuesPerFacet=8' + '&' +
            'page=0' + '&' +
            'facets=["type","BrandIDs","Type","ProductType","PriceUSD"]' + '&' +
            'tagFilters' + '&' +
            'facetFilters=["BrandIDs:1","Type:Product"]"}]}'

        var options = {
            url: 'https://i5po43q9gi-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.33.0)%3B%20Browser%3B%20JS%20Helper%20(2.28.0)&x-algolia-application-id=I5PO43Q9GI&x-algolia-api-key=5391574bd7f2429fc2151f0e1402fc24',
            method: 'POST',
            headers: headers,
            body: dataString
        };

       /* request(options,
        (err, res, body) => {
                if (err) return console.error(err);
                console.log(body)
                const retVal = '\u200B' +`**Vanishing Inc**: `;
                msg.channel.createMessage({ embed: {
                        color: 0x3498db,
                        author: { icon_url: bot.user.avatarURL, name: `${bot.user.username}#${bot.user.discriminator} (${bot.user.id})` },
                        title: `Vanishing Inc`,
                        description: retVal
                    } });
            }); */
    }
}