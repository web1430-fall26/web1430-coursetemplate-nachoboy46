const form          = document.getElementById('search-form');
const input         = document.getElementById('search-input');
const resultsRegion = document.getElementById('results-region');
const loaderSymbol = document.getElementById('loading-symbol');
const showMoreButton = document.querySelector('.load-more-cards-button');

async function fetchCards(query) {
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

async function fetchCardsFromUrl(Url) {
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
  const loader = document.createElement('div');
  loader.className = 'loader';
  loaderSymbol.appendChild(loader);
}


function showError(message) {
  resultsRegion.textContent = '';
  loaderSymbol.textContent = '';
  const errorMessage = document.createElement('p');
  errorMessage.className='status-error'
  errorMessage.innerText = message;
  resultsRegion.appendChild(errorMessage);
}

function showEmpty() {
  resultsRegion.textContent = '';
  loaderSymbol.textContent = '';
  const emptyMessage = document.createElement('p');
  emptyMessage.className='status=empty'
  emptyMessage.innerText = 'No cards found. Try a different search.';
  resultsRegion.appendChild(emptyMessage);
}

function renderCards(cards, keepPreviousCards=false) {
  if(!keepPreviousCards){
    resultsRegion.textContent = '';
  }
  loaderSymbol.textContent = '';
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
        art.alt = `Image of the ${cardData.name} magic the gathering card`;
    } else {
        art.src = 'art/noArt.jpg';
        art.alt = 'blank image placeholder art';
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

console.log('sl');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showError('Please enter a search term.');
    return;
  }

  showLoading();  

  try {
    const grossData = await fetchCards(query);
    console.log(grossData);
    if(grossData.has_more){
      showMoreButton.disabled = false;
      resultsRegion.setAttribute('data-next-page-url',grossData.next_page);
    } else {
      showMoreButton.disabled = true;
      resultsRegion.setAttribute('data-next-page-url','');
    }
    

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

showMoreButton.addEventListener('click',async function(event){
  showLoading();
  const moreGrossData = await fetchCardsFromUrl(resultsRegion.getAttribute('data-next-page-url'));
  if(moreGrossData.has_more){
    showMoreButton.disabled = false;
    resultsRegion.setAttribute('data-next-page-url',moreGrossData.next_page);
  } else {
    showMoreButton.disabled = true;
    resultsRegion.setAttribute('data-next-page-url','');
  }
  const goodData = normalizeCards(moreGrossData.data);
  renderCards(goodData,true);
});


