export async function fetchCards(query) {
  const encodedQuery = encodeURIComponent(query); //witchcraft
  const response = await fetch(`https://api.scryfall.com/cards/search?q=${encodedQuery}`);
  let data = null;

  if(response.status === 404){
    return {data:[]}; //makes it so no results displays properly, as scryfall retunrns 404 instead of empty arrays when there are not matches.
  }

  if (!response.ok){
    throw new Error(`Request failed: ${response.status}`)
  } else {
    data = await response.json();
  }
  return data;
}

export async function fetchCardsFromUrl(Url) {
  const response = await fetch(Url);
  let data = null;

  if(response.status === 404){
    return {data:[]}; //makes it so no results displays properly, as scryfall retunrns 404 instead of empty arrays when there are not matches.
  }

  if (!response.ok){
    throw new Error(`Request failed: ${response.status}`)
  } else {
    data = await response.json();
  }
  return data;
}