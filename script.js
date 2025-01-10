// Define the TarotCard type structure
const TarotCard = {
    name: '',
    type: '',
    suit: '',
    asciiArt: ''
};

// Define all card arrays
const majorArcana = [
    {
        name: 'The Fool',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |   0   |
  |  o    |
  | ---O--|
  |  / \\ |
  |_______|`
    },
    {
        name: 'The Magician',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |   I   |
  |  /|\\  |
  |  / \\  |
  |_______|`
    },
    {
        name: 'The High Priestess',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  II   |
  | ( )   |
  |  |    |
  |_______|`
    },
    {
        name: 'The Empress',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  III  |
  | \\o/   |
  |  |    |
  |_______|`
    },
    {
        name: 'The Emperor',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  IV   |
  | [+]   |
  |  |    |
  |_______|`
    },
    {
        name: 'The Hierophant',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |   V   |
  | {o}   |
  |  |    |
  |_______|`
    },
    {
        name: 'The Lovers',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  VI   |
  | o o   |
  |  V    |
  |_______|`
    },
    {
        name: 'The Chariot',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  VII  |
  | <==>  |
  |  ^    |
  |_______|`
    },
    {
        name: 'Strength',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  | VIII  |
  | \\o/  |
  | (~)   |
  |_______|`
    },
    {
        name: 'The Hermit',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  IX   |
  | (o)   |
  |  |    |
  |_______|`
    },
    {
        name: 'Wheel of Fortune',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |   X   |
  | (@)   |
  |  @    |
  |_______|`
    },
    {
        name: 'Justice',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XI   |
  | =o=   |
  |  |    |
  |_______|`
    },
    {
        name: 'The Hanged Man',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XII  |
  |  |    |
  | _o_   |
  |_______|`
    },
    {
        name: 'Death',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  | XIII  |
  |  /|\\ |
  |  |    |
  |_______|`
    },
    {
        name: 'Temperance',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XIV  |
  | \\|/  |
  |  |    |
  |_______|`
    },
    {
        name: 'The Devil',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XV   |
  | >o<   |
  |  ^    |
  |_______|`
    },
    {
        name: 'The Tower',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XVI  |
  | [|]   |
  |_/_\\_||
  |_______|`
    },
    {
        name: 'The Star',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  | XVII  |
  | \\|/   |
  | ---*--|
  |_______|`
    },
    {
        name: 'The Moon',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  | XVIII |
  | (O)   |
  |  ~    |
  |_______|`
    },
    {
        name: 'The Sun',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XIX  |
  | \\O/  |
  |  |    |
  |_______|`
    },
    {
        name: 'Judgement',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XX   |
  | /|\\  |
  | /|\\  |
  |_______|`
    },
    {
        name: 'The World',
        type: 'Major Arcana',
        asciiArt: `
   _______
  |       |
  |  XXI  |
  | ( )   |
  |  X    |
  |_______|`
    }
];

const wandsCards = [
    {
        name: 'Ace of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   A   |
  |   |   |
  |_______|`
    },
    {
        name: '2 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   2   |
  |  | |  |
  |       |
  |_______|`
    },
    {
        name: '3 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   3   |
  | | | | |
  |       |
  |_______|`
    },
    {
        name: '4 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   4   |
  |  | |  |
  |  | |  |
  |_______|`
    },
    {
        name: '5 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   5   |
  | | | | |
  |  | |  |
  |_______|`
    },
    {
        name: '6 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   6   |
  | | | | |
  | | | | |
  |_______|`
    },
    {
        name: '7 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   7   |
  | | | | |
  ||| |  ||
  |_______|`
    },
    {
        name: '8 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   8   |
  | ||| | |
  | | | |||
  |_______|`
    },
    {
        name: '9 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   9   |
  | | | | |
  | | | | |
  |_______|`
    },
    {
        name: '10 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |  10   |
  | | | | |
  | | | | |
  |_______|`
    },
    {
        name: 'Page of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   P   |
  | o-| | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Knight of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |  Kn   |
  | -|> | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Queen of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   Q   |
  | \\|/ | |
  | -O-  |
  |_______|`
    },
    {
        name: 'King of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _______
  |       |
  |   K   |
  | +|+ | |
  | \\|/  |
  |_______|`
    }
];

const cupsCards = [
    {
        name: 'Ace of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   A   |
  |   U   |
  |_______|`
    },
    {
        name: '2 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   2   |
  |  U U  |
  |_______|`
    },
    {
        name: '3 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   3   |
  | U U U |
  |_______|`
    },
    {
        name: '4 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   4   |
  | U U U |
  |_______|`
    },
    {
        name: '5 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   5   |
  | U U U |
  |_______|`
    },
    {
        name: '6 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   6   |
  | U U U |
  |_______|`
    },
    {
        name: '7 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   7   |
  | U U U |
  |_______|`
    },
    {
        name: '8 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   8   |
  | U U U |
  |_______|`
    },
    {
        name: '9 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   9   |
  | U U U |
  |_______|`
    },
    {
        name: '10 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |  10   |
  | U U U |
  |_______|`
    },
    {
        name: 'Page of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   P   |
  | o U | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Knight of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |  Kn   |
  | -U> | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Queen of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   Q   |
  | \\U/ ||
  | (O)   |
  |_______|`
    },
    {
        name: 'King of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______
  |       |
  |   K   |
  | +U+ | |
  | \\|/  |
  |_______|`
    }
];

const swordsCards = [
    {
        name: 'Ace of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   A   |
  |   †   |
  |_______|`
    },
    {
        name: '2 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   2   |
  |  † †  |
  |_______|`
    },
    {
        name: '3 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   3   |
  | † † † |
  |_______|`
    },
    {
        name: '4 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   4   |
  | †  †  |
  | †  †  |
  |_______|`
    },
    {
        name: '5 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   5   |
  | † † † |
  |_______|`
    },
    {
        name: '6 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   6   |
  | † † † |
  |_______|`
    },
    {
        name: '7 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   7   |
  | † † † |
  |_______|`
    },
    {
        name: '8 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   8   |
  | † † † |
  |_______|`
    },
    {
        name: '9 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   9   |
  | † † † |
  |_______|`
    },
    {
        name: '10 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |  10   |
  | † † † |
  |_______|`
    },
    {
        name: 'Page of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   P   |
  | o † | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Knight of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |  Kn   |
  | -†> | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Queen of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   Q   |
  | \\†/ | |
  | (O)  |
  |_______|`
    },
    {
        name: 'King of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______
  |       |
  |   K   |
  | +†+ | |
  | \\|/  |
  |_______|`
    }
];

const pentaclesCards = [
    {
        name: 'Ace of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   A   |
  |   o   |
  |_______|`
    },
    {
        name: '2 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   2   |
  |  o o  |
  |_______|`
    },
    {
        name: '3 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   3   |
  | o o o |
  |_______|`
    },
    {
        name: '4 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   4   |
  | o o o |
  |_______|`
    },
    {
        name: '5 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   5   |
  | o o o |
  |_______|`
    },
    {
        name: '6 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   6   |
  | o o o |
  |_______|`
    },
    {
        name: '7 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   7   |
  | o o o |
  |_______|`
    },
    {
        name: '8 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   8   |
  | o o o |
  |_______|`
    },
    {
        name: '9 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   9   |
  | o o o |
  |_______|`
    },
    {
        name: '10 of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |  10   |
  | o o o |
  |_______|`
    },
    {
        name: 'Page of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   P   |
  | o O | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Knight of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |  Kn   |
  | -O> | |
  | /|\\  |
  |_______|`
    },
    {
        name: 'Queen of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   Q   |
  | \\O/ | |
  | (O)  |
  |_______|`
    },
    {
        name: 'King of Pentacles',
        type: 'Minor Arcana',
        suit: 'Pentacles',
        asciiArt: `
   _______
  |       |
  |   K   |
  | +O+ | |
  | \\|/  |
  |_______|`
    }
];

class TarotDeck {
    constructor() {
        // Use all the defined card arrays instead of placeholders
        this.cards = [
            ...majorArcana,
            ...wandsCards,
            ...cupsCards,
            ...swordsCards,
            ...pentaclesCards
        ];
        this.reset();
    }

    reset() {
        this.currentDeck = [...this.cards];
        this.shuffle();
    }

    shuffle() {
        for (let i = this.currentDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentDeck[i], this.currentDeck[j]] = [this.currentDeck[j], this.currentDeck[i]];
        }
    }

    drawCards(count) {
        if (count > this.currentDeck.length) {
            count = this.currentDeck.length;
        }
        return this.currentDeck.splice(0, count);
    }

    getRemainingCards() {
        return this.currentDeck.length;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const deck = new TarotDeck();
    const drawButton = document.getElementById('drawCards');
    const resetButton = document.getElementById('resetDeck');
    const readingArea = document.getElementById('readingArea');
    const remainingCards = document.getElementById('remainingCards');

    function updateRemainingCards() {
        remainingCards.textContent = `REMAINING CARDS: ${deck.getRemainingCards()}`;
    }

    function displayReading(cards) {
        readingArea.innerHTML = '';
        cards.forEach(card => {
            const cardElement = document.createElement('pre');
            cardElement.className = 'card';
            cardElement.textContent = card.asciiArt;
            
            const nameElement = document.createElement('div');
            nameElement.className = 'card-name';
            nameElement.textContent = card.name;
            
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.appendChild(cardElement);
            cardContainer.appendChild(nameElement);
            
            readingArea.appendChild(cardContainer);
        });
    }

    drawButton.addEventListener('click', () => {
        const question = document.getElementById('question').value;
        const cardCount = parseInt(document.getElementById('cardCount').value);
        
        if (!question) {
            alert('Please enter a question first!');
            return;
        }

        const drawnCards = deck.drawCards(cardCount);
        displayReading(drawnCards);
        updateRemainingCards();
    });

    resetButton.addEventListener('click', () => {
        deck.reset();
        readingArea.innerHTML = '';
        updateRemainingCards();
    });

    // Initial setup
    updateRemainingCards();
}); 