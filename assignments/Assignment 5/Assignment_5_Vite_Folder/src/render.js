import { resultsRegion, loaderSymbol } from "./constants"; 

export function renderCards(cards, keepPreviousCards=false) {
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

export function showError(message) {
  resultsRegion.textContent = '';
  loaderSymbol.textContent = '';
  const errorMessage = document.createElement('p');
  errorMessage.className='status-error'
  errorMessage.innerText = message;
  resultsRegion.appendChild(errorMessage);
}

export function showEmpty() {
  resultsRegion.textContent = '';
  loaderSymbol.textContent = '';
  const emptyMessage = document.createElement('p');
  emptyMessage.className='status=empty'
  emptyMessage.innerText = 'No cards found. Try a different search.';
  resultsRegion.appendChild(emptyMessage);
}

export function showLoading() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loaderSymbol.appendChild(loader);
}