export async function fetchCardFromID(cardID){
    const response = await fetch(`https://api.scryfall.com/cards/${cardID}`);
    if (response.ok){
        const cardData = await response.json();
        return cardData;
    } else {
        throw new Error(`Request failed ${response.status}`);
    }
}

export async function fetchCardsByQuery(query){
    const response = await fetch(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`);
    if (response.ok){
        const cardData = await response.json();
        return cardData;
    } else {
        throw new Error(`Request failed ${response.status}`);
    }
}

export async function getCardPrintings(printingsURL){
    const response = await fetch(printingsURL);

    if(response.ok){
        const printings = await response.json();
        return printings;
    } else {
        throw new Error(`Printings request failed ${response.status}`)
    }
}

