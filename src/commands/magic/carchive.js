var request = require('request');
var cheerio = require('cheerio');

function trimArr(arrayName) {
    $('span', arrayName).remove()
    for(var i=0;i<arrayName.length;i++) {
        arrayName[i] = arrayName[i].textContent.trim();
    }
}

module.exports = {
    meta: {
        help: 'Look up a sleight or effect on Conjuring Archive.',
        usage: '<message>',
        module: 'Util',
        level: 0
    },
    fn: (msg, suffix) => {

        request({
            method: 'GET',
            url: 'https://www.conjuringarchive.com/list/search?keyword=' +suffix.replace(' ', '+')
        }, (err, res, body) => {
            if (err) return console.error(err);
            let $ = cheerio.load(body);
            var ca_data = new Object();
            var creator_content = $('.creators');
            var title_content = $('.title');
            var comment_content = $('.comment');
            var page_content = $('.page');

            ca_data.creators = Array.from(creator_content);
            ca_data.titles = Array.from(title_content);
            ca_data.comments = Array.from(comment_content);
            ca_data.page = Array.from(page_content);

            console.log(JSON.stringify(ca_data));
            /*msg.channel.createMessage({ embed: {
                    color: 0x3498db,
                    author: { icon_url: bot.user.avatarURL, name: `${bot.user.username}#${bot.user.discriminator} (${bot.user.id})` },
                    title: `Penguin Magic`,
                    description: retVal
                } });*/
        });

    }
}