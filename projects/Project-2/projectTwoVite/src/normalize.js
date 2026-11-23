export async function normalizeCardData(rawData){
    const cards = await Promise.all(
        rawData.data.map(async function (cardObject){
            //const printings = await getCardPrintings(cardObject.prints_search_uri);

            return {
            id:cardObject.id,
            name:cardObject.name,
            printing:cardObject.set,
            text:cardObject.oracle_text,
            colors:cardObject.color_identity,
            cost:cardObject.mana_cost,
            art:cardObject.image_uris?.normal, //question mark is protection for if it has multiple faces
            type:cardObject.type_line,
            //printUri: cardObject.prints_search_uri
            //printings:printings.data
        };
        }));

    return cards;
}