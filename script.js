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
   _________________
  |  0     ★        |
  |                 |
  |     \\o/        |
  |     -|~*       |
  |      |\\        |
  |     / \\        |
  |    *   ✧       |
  |       ★        |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Magician',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  I     ∞        |
  |                 |
  |      {⚡}       |
  |     /|\\        |
  |    / | \\       |
  |      |         |
  |     / \\        |
  |    ✦   ✦       |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The High Priestess',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  II   ☽ ☾       |
  |                 |
  |     [○]        |
  |      ◈         |
  |    ┏━━━┓       |
  |    ┃ ☨ ┃       |
  |    ┗━━━┛       |
  |    ❋   ❋       |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Empress',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  III   ♀        |
  |                 |
  |     \\♥/        |
  |      ❀         |
  |    ❀ ❀ ❀       |
  |   ❀  ❀  ❀      |
  |    \\♠/         |
  |     ♠          |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Emperor',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  IV    ♂        |
  |                 |
  |     [+]        |
  |    ┏━┻━┓       |
  |    ┃ ⚔ ┃       |
  |    ┗━┳━┛       |
  |    ◆ ◆ ◆       |
  |      ♦         |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Hierophant',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |   V            |
  |     ┏━╋━┓      |
  |     ┃ ☨ ┃      |
  |     ┗━╋━┛      |
  |      ╋         |
  |    † ╋ †       |
  |     ✝ ✝        |
  |      †         |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Lovers',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  VI    ♀ ♂      |
  |                 |
  |     o♡o        |
  |      ∪         |
  |    ❤   ❤       |
  |   ❤  ❤  ❤      |
  |      ♥         |
  |    ♥ ♥ ♥       |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Chariot',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  VII   <=☆=>    |
  |                 |
  |     [◊◊]       |
  |    <--|-->     |
  |      \\⚡/       |
  |     --⚡--      |
  |       ▲        |
  |    ◇  ◇  ◇     |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Strength',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  VIII  ∞        |
  |                 |
  |     \\o/        |
  |     (∞)        |
  |    /│\\         |
  |    ┗━┛         |
  |   ⚔   ⚔        |
  |      ⚔         |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Hermit',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  IX    ☄        |
  |                 |
  |     (○)        |
  |    ┏━|━┓       |
  |    ┃ | ┃       |
  |    ┗━|━┛       |
  |     ✧✧✧        |
  |      ✧         |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Wheel of Fortune',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  X     @        |
  |                 |
  |    ┏━━━┓       |
  |    ┃(@)┃       |
  |    ┃ @ ┃       |
  |    ┗━━━┛       |
  |     @ @        |
  |      @         |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Justice',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XI            |
  |                 |
  |     ⚖️         |
  |    =o=         |
  |     |          |
  |   † | †        |
  |    ===         |
  |     ⚔          |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Hanged Man',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XII           |
  |                 |
  |      |         |
  |    ┏━┻━┓       |
  |    ┃_o_┃       |
  |    ┗━━━┛       |
  |     / \\        |
  |    †   †       |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Death',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XIII          |
  |                 |
  |     †          |
  |    /|\\         |
  |   /-|-\\        |
  |     |          |
  |    / \\         |
  |   †   †        |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Temperance',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XIV           |
  |                 |
  |     \\|/        |
  |   U  |  U      |
  |    \\ | /       |
  |      |         |
  |     ~~~        |
  |    ~   ~       |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Devil',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XV            |
  |                 |
  |     >o<        |
  |    ┏━┻━┓       |
  |    ┃666┃       |
  |    ┗━┳━┛       |
  |      ▼         |
  |    ☠   ☠       |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Tower',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XVI           |
  |                 |
  |    [┃]         |
  |   ┏━┻━┓        |
  |   ┃   ┃        |
  |  ┏┻━━━┻┓       |
  |  ╰━━━━━╯       |
  |   ⚡ ⚡ ⚡      |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Star',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XVII          |
  |                 |
  |    \\│/         |
  |   --*--        |
  |    /│\\         |
  |   ✧ ✧ ✧       |
  |  ✦  ✦  ✦      |
  |     ★          |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Moon',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XVIII         |
  |                 |
  |    ☽☾          |
  |   (○)          |
  |    │           |
  |   ~ ~ ~        |
  |  ~ ~ ~ ~       |
  |    ☾ ☽         |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The Sun',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XIX           |
  |                 |
  |     \\│/        |
  |   --\\O/--      |
  |      │         |
  |     / \\        |
  |    ☀ ☀ ☀       |
  |      ☼         |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Judgement',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XX            |
  |                 |
  |      ☨         |
  |    /│\\         |
  |   /-│-\\        |
  |   /│\\          |
  |  / │ \\         |
  |    ✝          |
  |     _______    |
  |_________________|`
    },
    {
        name: 'The World',
        type: 'Major Arcana',
        asciiArt: `
   _________________
  |  XXI           |
  |                 |
  |    ┏━━━┓       |
  |    ┃(○)┃       |
  |    ┃ ✧ ┃       |
  |    ┗━━━┛       |
  |   ○ ○ ○        |
  |      ⊕         |
  |     _______    |
  |_________________|`
    }
];

const wandsCards = [
    {
        name: 'Ace of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  A             |
  |                 |
  |      ┃         |
  |    ━━┃━━       |
  |      ┃         |
  |    ━━┃━━       |
  |      ┃         |
  |      ✦         |
  |     _______    |
  |_________________|`
    },
    {
        name: '2 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  2             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '3 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  3             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '4 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  4             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '5 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  5             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '6 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  6             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '7 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  7             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '8 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  8             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '9 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  9             |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '10 of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  10            |
  |                 |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |  ━━┃━━━┃━━     |
  |    ┃   ┃       |
  |    ✧   ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Page of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  P             |
  |                 |
  |     o-┃        |
  |    /|\\         |
  |   / | \\        |
  |     |          |
  |    / \\         |
  |   ✦   ✦        |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Knight of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  Kn            |
  |                 |
  |     o-┃        |
  |    /|\\         |
  |   / | \\        |
  |     |          |
  |    / \\         |
  |   ✦   ✦        |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Queen of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  Q             |
  |                 |
  |     o-┃        |
  |    /|\\         |
  |   / | \\        |
  |     |          |
  |    / \\         |
  |   ✦   ✦        |
  |     _______    |
  |_________________|`
    },
    {
        name: 'King of Wands',
        type: 'Minor Arcana',
        suit: 'Wands',
        asciiArt: `
   _________________
  |  K             |
  |                 |
  |     o-┃        |
  |    /|\\         |
  |   / | \\        |
  |     |          |
  |    / \\         |
  |   ✦   ✦        |
  |     _______    |
  |_________________|`
    }
];

const cupsCards = [
    {
        name: 'Ace of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  A             |
  |                 |
  |      U         |
  |    ━━U━━       |
  |     ~~~        |
  |    ~~~~~       |
  |   ~~~~~~~      |
  |      ✧         |
  |     _______    |
  |_________________|`
    },
    {
        name: '2 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  2             |
  |                 |
  |    U   U       |
  |   ~~~  ~~~     |
  |  ~~~~~ ~~~~~   |
  |    ~~~~~       |
  |     ~~~        |
  |    ✧ ✧        |
  |     _______    |
  |_________________|`
    },
    {
        name: '3 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  3             |
  |                 |
  |   U  U  U      |
  |  ~~~ ~~~ ~~~   |
  | ~~~~~ ~~~~~    |
  |   ~~~~~~~      |
  |    ~~~~~       |
  |   ✧ ✧ ✧       |
  |     _______    |
  |_________________|`
    },
    {
        name: '4 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  4             |
  |                 |
  |  U  U  U  U    |
  | ~~~ ~~~ ~~~    |
  |~~~~~ ~~~~~ ~~  |
  |  ~~~~~~~       |
  |   ~~~~~        |
  |  ✧ ✧ ✧ ✧      |
  |     _______    |
  |_________________|`
    },
    {
        name: '5 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  5             |
  |                 |
  | U  U  U  U  U  |
  |~~~ ~~~ ~~~ ~~~ |
  |~~~~~ ~~~~~ ~~~ |
  |  ~~~~~~~       |
  |   ~~~~~        |
  | ✧ ✧ ✧ ✧ ✧     |
  |     _______    |
  |_________________|`
    },
    {
        name: '6 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  6             |
  |                 |
  | U  U  U  U  U  |
  |~~~ ~~~ ~~~ ~~~ |
  |~~~~~ ~~~~~ ~~~ |
  |  ~~~~~~~       |
  |   ~~~~~        |
  | ✧ ✧ ✧ ✧ ✧     |
  |     _______    |
  |_________________|`
    },
    {
        name: '7 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  7             |
  |                 |
  |U U U U U U U   |
  |~~~ ~~~ ~~~ ~~~ |
  |~~~~~ ~~~~~ ~~~ |
  | ~~~~~~~~~~~~   |
  |  ~~~~~~~~~~    |
  |✧ ✧ ✧ ✧ ✧ ✧ ✧  |
  |     _______    |
  |_________________|`
    },
    {
        name: '8 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  8             |
  |                 |
  |U U U U U U U U |
  |~~~ ~~~ ~~~ ~~~ |
  |~~~~~ ~~~~~ ~~~ |
  | ~~~~~~~~~~~~   |
  |  ~~~~~~~~~~    |
  |✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧|
  |     _______    |
  |_________________|`
    },
    {
        name: '9 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  9             |
  |     U U U U    |
  |   U U U U U    |
  | ~~~ ~~~ ~~~    |
  |~~~~~ ~~~~~ ~~~ |
  | ~~~~~~~~~~~~   |
  |  ~~~~~~~~~~    |
  |   ✧ ✧ ✧ ✧      |
  |     _______    |
  |________________|`
    },
    {
        name: '10 of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  10            |
  |   U U U U U    |
  |   U U U U U    |
  | ~~~ ~~~ ~~~    |
  |~~~~~ ~~~~~ ~~~ |
  | ~~~~~~~~~~~~   |
  |  ~~~~~~~~~~    |
  |  ✧ ✧ ✧ ✧ ✧     |
  |     _______    |
  |_________________|`
    },
    {
        name: 'Page of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  P              |
  |                 |
  |    o-U~         |
  |   /|\\          |
  |  / | \\         |
  |    |            |
  |   / \\          |
  |  ~~~✧~~~        |
  |     _______     | 
  |_________________|`
    },
    {
        name: 'Knight of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  Kn             |
  |                 |
  |   -U>~~~        |
  |   /|\\          |
  |  / | \\         |
  |    |            |
  |   / \\          |
  |  ~~~✧~~~        |
  |     _______     |
  |_________________|`
    },
    {
        name: 'Queen of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _______________
  |      Q        |
  |               |
  |     \\†/      |
  |    ~|~       |
  |     |        |
  |    / \\       |
  |   ✧   ✧      |
  |    _____     |
  |_______________|`
    },
    {
        name: 'King of Cups',
        type: 'Minor Arcana',
        suit: 'Cups',
        asciiArt: `
   _________________
  |  K              |
  |                 |
  |    +U+          |
  |   \\~|~/        |
  |    \\|/         |
  |     |           |
  |    / \\         |
  |   ✧~~~✧         |
  |     _______     |
  |_________________|`
    }
];

const swordsCards = [
    {
        name: 'Ace of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  A              |
  |                 |
  |       †         |
  |     --|--       |
  |       †         |
  |      /|\\       |
  |     / | \\      |
  |      ⚔          |
  |     _______     |
  |_________________|`
    },
    {
        name: '2 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  2              |
  |                 |
  |    †     †      |
  |   /|\\   /|\\   |
  |  --|--- --|--   |
  |   \\|/   \\|/   |
  |    †     †      |
  |     ⚔  ⚔        |
  |     _______     |
  |_________________|`
    },
    {
        name: '3 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  3              |
  |                 |
  |   †   †   †     |
  |  /|\\ /|\\ /|\\ |
  | --|- -|- -|--   |
  |  \\|/ \\|/ \\|/ |
  |   †   †   †     |
  |    ⚔  ⚔  ⚔      |
  |     _______     |
  |_________________|`
    },
    {
        name: '4 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  4              |
  |    †     †      |
  |   /|\\   /|\\   |
  |  --|--- --|--   |
  |   \\|/   \\|/   |
  |    †     †      |
  |   /|\\   /|\\   |
  |    †     †      |
  |     _______     |
  |_________________|`
    },
    {
        name: '5 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  5              |
  |                 |
  |   †   †   †     |
  |  /|\\ /|\\ /|\\ |
  | --|- -|- -|--   |
  |  \\|/ \\|/ \\|/ |
  |   †   †   †     |
  |    ⚔  ⚔  ⚔      |
  |     _______     |
  |_________________|`
    },
    {
        name: '6 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  6              |
  |                 |
  |   †   †   †     |
  |  /|\\ /|\\ /|\\ |
  | --|- -|- -|--   |
  |  \\|/ \\|/ \\|/ |
  |   †   †   †     |
  |    ⚔  ⚔  ⚔      |
  |     _______     |
  |_________________|`
    },
    {
        name: '7 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  7              |
  |                 |
  |   †   †   †     |
  |  /|\\ /|\\ /|\\ |
  | --|- -|- -|--   |
  |  \\|/ \\|/ \\|/ |
  |   †  †  †   †   |
  |    ⚔  ⚔  ⚔      |
  |     _______     |
  |_________________|`
    },
    {
        name: '8 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  8              |
  |                 |
  |   †   †   †  †  |
  |  /|\\ /|\\ /|\\ |
  | --|- -|- -|--   |
  |  \\|/ \\|/ \\|/ |
  |   †   †   †  †  |
  |    ⚔  ⚔  ⚔      |
  |     _______     |
  |_________________|`
    },
    {
        name: '9 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  9              |
  |                 |
  |   †   †   †  †  |
  |  /|\\ /|\\ /|\\ |
  | --|- -|- -|--   |
  |  \\|/ \\|/ \\|/ |
  |   † †  †  †  †  |
  |    ⚔  ⚔  ⚔      |
  |     _______     |
  |_________________|`
    },
    {
        name: '10 of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |  10             |
  |                 |
  |   † †  †  †  †  |
  |  /|\\ /|\\ /|\\ |
  | --|- -|- -|--   |
  |  \\|/ \\|/ \\|/ |
  |   † †  †  †  †  |
  |    ⚔  ⚔  ⚔      |
  |     _______     |
  |_________________|`
    },
    {
        name: 'Page of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |   P             |
  |                 |
  |    o-†          |
  |   /|\\          |
  |  / | \\         |
  |    |            |
  |   / \\          |
  |  ~~~✧~~~        |
  |     _______     | 
  |_________________|`
    },
    {
        name: 'Knight of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |   Kn            |
  |                 |
  |   -†>~~~        |
  |   /|\\          |
  |  / | \\         |
  |    |            |
  |   / \\          |
  |  ~~~✧~~~        |
  |     _______     |
  |_________________|`
    },
    {
        name: 'Queen of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _______________
  |      Q        |
  |               |
  |     \\†/      |
  |    ~|~       |
  |     |        |
  |    / \\       |
  |   ✧   ✧      |
  |    _____     |
  |_______________|`
    },
    {
        name: 'King of Swords',
        type: 'Minor Arcana',
        suit: 'Swords',
        asciiArt: `
   _________________
  |   K              |
  |                 |
  |    +†+          |
  |   \\~|~/        |
  |    \\|/         |
  |     |           |
  |    / \\         |
  |   ✧~~~✧         |
  |     _______     |
  |_________________|`
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

    // Create starry background
    createStarryBackground();

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

function createStarryBackground() {
    const stars = document.querySelector('.stars');
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size (1-3px)
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 1.5}s`;
        
        stars.appendChild(star);
    }
} 