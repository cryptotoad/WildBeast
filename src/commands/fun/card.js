const Deck = require('../../classes/deck')

module.exports = {
    meta: {
        help: 'Draw a random card.',
        module: 'Util',
        level: 0
    },
    fn: function (msg, suffix) {
        if (!suffix) {
            suffix = 1
        }7
            const deck1 = new Deck();
            ;
            global.logger.log(JSON.stringify(deck1.faro()))
            deck1.shuffle();
            let hand = "";
            if(parseInt(suffix) > 52 || parseInt(suffix) < 1 || isNaN(parseInt(suffix)) )
                suffix = 1;
            let value = 0
            let value2 = 0
            for(i=1;i<=parseInt(suffix);i++) {
                let card = deck1.deal()
                value += card.value
                value2 += card.value == 1 ? 10 : 0

                if(i == parseInt(suffix))
                    hand += card.name + " of " + card.suit
                else
                    hand += card.name + " of " + card.suit + ", ";
            }
            tempStr = (value2 > 0) ? "/" + (value + value2) + ")" : ")"
            hand += " (" + value + tempStr

            msg.channel.createMessage(`<@${msg.author.id}>, You have drawn the ${hand}!`)
        }
}



