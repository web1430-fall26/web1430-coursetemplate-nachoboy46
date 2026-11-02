const form          = document.getElementById('search-form');
const input         = document.getElementById('search-input');
const resultsRegion = document.getElementById('results-region');


async function fetchCards(query) {
  const encodedQuery = encodeURIComponent(query); //witchcraft
  const response = await fetch(`https://api.scryfall.com/cards/search?q=${encodedQuery}`);
  let data = null;
  if (!response.ok){
    throw new Error(`Request failed: ${response.status}`)
  } else {
    data = await response.json();
  }
  return data;
}

function normalizeCards(data) {
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

function showLoading() {
  resultsRegion.textContent = '';
  const loader = document.createElement('div');
  loader.className = 'loader';
  resultsRegion.appendChild(loader);
}

function showError(message) {
  resultsRegion.textContent = '';
  const errorMessage = document.createElement('p');
  errorMessage.className='status-error'
  errorMessage.innerText = message;
  resultsRegion.appendChild(errorMessage);
}

function showEmpty() {
  resultsRegion.textContent = '';
  const emptyMessage = document.createElement('p');
  emptyMessage.className='status=empty'
  emptyMessage.innerText = 'No books found. Try a different search.';
  resultsRegion.appendChild(emptyMessage);
}

function renderCards(cards) {
  resultsRegion.textContent = '';
  cards.forEach(function(cardData){
    const card = document.createElement('article');
    card.className='mtg-card';

    const title = document.createElement('h2');
    title.innerText=cardData.name;
    card.appendChild(title);

    const art = document.createElement('img');
    art.className='card-art';  
    if(cardData.art !== 'no-art'){
        art.src = cardData.art;
    } else {
        art.src = 'art/noArt.jpg';
    }
    card.appendChild(art);
    

    if (cardData.oracleText !== 'Unkown Oracle Text'){
        const text = document.createElement('p');
        text.className='card-text';
        text.innerText =cardData.oracleText;
        card.appendChild(text);
    }

    if(cardData.flavorText !== undefined){
        const flavorText = document.createElement('p');
        flavorText.className='card-flavor-text';
        flavorText.innerText =cardData.flavorText;
        card.appendChild(flavorText);
    }
    
    resultsRegion.appendChild(card);
});
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showError('Please enter a search term.');
    return;
  }

  showLoading();

  try {
    const grossData = await fetchCards('the');
    const data = normalizeCards(grossData.data);
    if(data.length > 0){
      renderCards(data);
    } else {
      showEmpty();
    }
  } catch (error) {
    showError('Unable to load results. Please check your connection and try again.');
    console.error(error);
  }
});
