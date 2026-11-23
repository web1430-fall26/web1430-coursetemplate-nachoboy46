let decks = new Map();

function loadDecks(){
    const saved = localStorage.getItem("decks");
    if(saved){
        decks = new Map(JSON.parse(saved));
    } else {
        decks = new Map();
    }
}

function saveDecks(){
    const storedDecks = JSON.stringify(Array.from(decks.entries()));
    localStorage.setItem("decks",storedDecks);
}

export function createNewDeck(deckName){
    loadDecks();
    decks.set(deckName,[]);
    saveDecks();
}

export function getDecks(){
    loadDecks();
    return decks;
}

export function addToDeck(deckName,cardID){
    loadDecks();
    if(decks.has(deckName)){
        decks.get(deckName).push(cardID);
    } else {
        throw new Error(`Error: invalid key`);
    }
    saveDecks();
}

export function removeFromDeck(deckName,cardID){
    loadDecks();
    if(decks.has(deckName)){
        let cards = decks.get(deckName);
        const index = cards.findIndex(function(card){
            return card === cardID;
        });
        if (index !== -1){
            cards.splice(index,1);
        } else {
            throw new Error(`Error: no card in deck with taht name`);
        }
    } else {
        throw new Error(`Error: invalid key`);
    }
    saveDecks();
}


