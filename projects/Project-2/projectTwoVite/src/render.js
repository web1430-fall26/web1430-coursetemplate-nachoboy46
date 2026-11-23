export function renderCard(cardObject){
    const cardEl = document.createElement("article");
    cardEl.className = "mtg-card";

    const nameEl = document.createElement("h2");
    nameEl.className = "mtg-card-name";
    nameEl.innerText = cardObject.name;
    cardEl.appendChild(nameEl);

    const imageEl = document.createElement("img"); //adapt this to work for double sided cards
    imageEl.className = "mtg-card-image";
    imageEl.src = cardObject.art;
    imageEl.alt = `${cardObject.name} card art`;
    cardEl.appendChild(imageEl);

    if(cardObject.colors.length > 0){
        const colorsEl = document.createElement("p");
        colorsEl.className = "mtg-card-colors"
        let colors = "";
        cardObject.colors.forEach(function(color){
            colors += color;
        });
        colorsEl.innerText = colors;
        cardEl.appendChild(colorsEl);
    }

    const typeEl = document.createElement("p");
    typeEl.className = "mtg-card-type";
    typeEl.innerText = cardObject.type;
    cardEl.appendChild(typeEl);

    const textEl = document.createElement("p");
    textEl.className = "mtg-card-text";
    textEl.innerText = cardObject.text;
    cardEl.appendChild(textEl);

    return cardEl;
}