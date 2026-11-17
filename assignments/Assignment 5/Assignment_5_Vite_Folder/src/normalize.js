export function normalizeCards(data) {
  let list = [];
  data.forEach(function(card){
    list.push({
    name: card.name || 'Unkown Name',
    art: card.image_uris?.normal || card.card_faces?.[0]?.image_uris?.normal || 'no-art', //The question marks are important
    oracleText: card.oracle_text || 'Unkown Oracle Text',
    flavorText: card.flavor_text});
  });
  return list;
}