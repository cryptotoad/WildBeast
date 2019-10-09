const Deck = require('../../classes/deck')

module.exports = {
    meta: {
        help: 'Draw a random card.',
        module: 'Util',
        level: 0
    },
    fn: function (msg, suffix) {
        if (!suffix) {
            const deck1 = new Deck();
            deck1.shuffle();
            msg.channel.createMessage(`<@${msg.author.id}>, You have drawn the ${deck1.deal()}!`)
        } else {
            const deck1 = new Deck();
            deck1.shuffle();
            hand = "";
            if(parseInt(suffix) > 52 || parseInt(suffix) < 1 || isNaN(parseInt(suffix)) )
                suffix = 1;

            for(i=1;i<=parseInt(suffix);i++) {
                if(i == parseInt(suffix))
                    hand += deck1.deal() + "";
                else
                    hand += deck1.deal() + ", ";
            }



            msg.channel.createMessage(`<@${msg.author.id}>, You have drawn the ${hand}!`);
            }
        }
}



