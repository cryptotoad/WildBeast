class Card {
    constructor(suit, value) {
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        this.csuit = suit;
        this.cname = values[value-1];
        this.cvalue = value < 10 ? value : 10
    }
    get name() {
        return this.cname
    }

    get suit() {
        return this.csuit
    }

    get value() {
        return this.cvalue
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.jog = []; //position of the jogs
        this.crimp = []; //position of crimped cards
        this.break = 0; //position of the break


        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(new Card(suits[suit], values[value]));
            }
        }
    }
    shuffle() {
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    faro() {
        const { deck } = this;
        let i = 0, y;
        var shuffledDeck = [];

        for (y = 0; y < 26; y++) {
            shuffledDeck.push(deck[y]);
            shuffledDeck.push(deck[y+26])
        }
        return shuffledDeck;
    }

    deal(){
        return this.deck.shift()
    }

    bottomDeal(){
        return this.deck.pop()
    }

}

module.exports = Deck;