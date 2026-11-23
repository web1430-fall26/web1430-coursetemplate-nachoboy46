import { getDecks } from "./state";

export function showLoading() {
    const resultsRegion = document.querySelector(".card-results-region");
    resultsRegion.textContent = '';
    const loader = document.createElement('div');
    loader.className = 'loader';
    resultsRegion.appendChild(loader);
}

export function showError(message) {
    const resultsRegion = document.querySelector(".card-results-region");
    resultsRegion.textContent = '';
    const errorMessage = document.createElement('p');
    errorMessage.className='status-error';
    errorMessage.innerText = message;
    resultsRegion.appendChild(errorMessage);
}

export function renderCard(cardObject){
    const cardEl = document.createElement("article");
    cardEl.className = "mtg-card";

    const nameEl = document.createElement("h2");
    nameEl.className = "mtg-card-name";
    nameEl.innerText = cardObject.name;
    cardEl.appendChild(nameEl);
    
    const costEl = document.createElement("p");
    costEl.className = "mtg-card-cost";
    costEl.innerText = cardObject.cost;
    cardEl.appendChild(costEl);

    // if(cardObject.colors.length > 0){
    //     const colorsEl = document.createElement("p");
    //     colorsEl.className = "mtg-card-colors"
    //     let colors = "";
    //     cardObject.colors.forEach(function(color){
    //         colors += color;
    //     });
    //     colorsEl.innerText = colors;
    //     cardEl.appendChild(colorsEl);
    // }

    const imageEl = document.createElement("img"); //adapt this to work for double sided cards
    imageEl.className = "mtg-card-image";
    imageEl.src = cardObject.art;
    imageEl.alt = `${cardObject.name} card art`;
    cardEl.appendChild(imageEl);

    const typeEl = document.createElement("p");
    typeEl.className = "mtg-card-type";
    typeEl.innerText = cardObject.type;
    cardEl.appendChild(typeEl);

    const textEl = document.createElement("p");
    textEl.className = "mtg-card-text";
    textEl.innerText = cardObject.text;
    cardEl.appendChild(textEl);

    // const dropdownEl = document.createElement("select");
    // dropdownEl.className="mtg-card-printing-dropdown";


    // cardObject.printings.forEach(function (printing){
    //     const option = document.createElement("option");
    //     option.textContent=`${printing.set_name}`;
    //     option.value = printing.id;
    //     dropdownEl.appendChild(option);
    // });
    // dropdownEl.value=cardObject.id; //selects current printing as starting dropdown

    //cardEl.appendChild(dropdownEl);

    const deckDropdownEl = document.createElement("select");
    deckDropdownEl.className="mtg-card-deck-dropdown";
    const noDeckOption = document.createElement("option");
    noDeckOption.textContent="No deck selected";
    noDeckOption.value="";
    deckDropdownEl.appendChild(noDeckOption);
    const decks = getDecks();
    let deckNames = decks.keys();
    deckNames.forEach(function(name){
        const option = document.createElement("option");
        option.textContent=`${name}`;
        option.value = name;
        deckDropdownEl.appendChild(option);
    });
    cardEl.appendChild(deckDropdownEl);

    return cardEl;
}