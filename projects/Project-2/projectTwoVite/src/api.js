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

export function normalizeCardData(rawData){
    let cards = [];
    rawData.data.forEach(function(cardObject){
        cards.push({
            id:cardObject.id,
            name:cardObject.name,
            printing:cardObject.set,
            text:cardObject.oracle_text,
            colors:cardObject.color_identity,
            art:cardObject.image_uris?.normal, //question mark is protection for if it has multiple faces
            type:cardObject.type_line
        })
    });
    return cards;
}