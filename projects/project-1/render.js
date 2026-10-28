export function renderMtgCard(_cardName,_image,_cardType,_text,_cost=null){
    const mtgCard = document.createElement('article');
    mtgCard.className = "mtg-card";
    mtgCard.setAttribute("aria-hidden", "false");

    const cardHeader = document.createElement("h3");
    cardHeader.className = "mtg-card-name"
    cardHeader.textContent = _cardName;
    mtgCard.appendChild(cardHeader);

    const cardArtSpacer = document.createElement("div");
    const cardImage = document.createElement("img");
    cardArtSpacer.appendChild(cardImage);
    cardImage.className = "mtg-card-art";
    cardImage.src = _image;
    cardImage.alt = ("Image of the "+_cardName+" magic the gathering card");
    mtgCard.appendChild(cardArtSpacer);

    const hiddenSection = document.createElement("div");
    hiddenSection.className="mtg-card-hidden-section";
    hiddenSection.hidden = true;
    hiddenSection.setAttribute('aria-hidden','true');
    
    mtgCard.appendChild(hiddenSection);

    if(_cost){
        const cardCostSpacer = document.createElement("div");
        const cardCost = document.createElement("span");
        cardCostSpacer.appendChild(cardCost);
        cardCost.className = "mtg-card-cost"
        cardCost.textContent = _cost;
        hiddenSection.appendChild(cardCostSpacer);
    }
    
    const cardTypeSpacer = document.createElement("div");
    const cardType = document.createElement("span");
    cardTypeSpacer.appendChild(cardType);
    cardType.className = "mtg-card-type"
    cardType.textContent = _cardType;
    hiddenSection.appendChild(cardTypeSpacer);

    const cardTextSpacer = document.createElement('div');
    const cardText = document.createElement('p');
    cardTextSpacer.appendChild(cardText);
    cardText.className = "mtg-card-text"
    cardText.textContent = _text;
    hiddenSection.appendChild(cardTextSpacer);

    const button = document.createElement('button');
    button.className = "mtg-card-show-more-button";
    button.textContent = 'show more';
    mtgCard.appendChild(button);


    return mtgCard;
}

export function renderColorSwatch(_colorName, _colorRGB, _cssVariableName){
    const swatch = document.createElement('section');
    swatch.style.width = '140px'
    swatch.className="color-swatch";
    swatch.style.background = '#E0E0E0';
    swatch.style.textAlign = 'center';


    const colorNameSpacer = document.createElement('div');
    const colorName = document.createElement('h3');
    colorNameSpacer.appendChild(colorName);
    colorNameSpacer.style.margin = '3px';
    colorName.innerText = _colorName;
    swatch.appendChild(colorNameSpacer);

    const swatchColor = document.createElement('div');
    swatchColor.style.background = `#${_colorRGB}`;
    swatchColor.style.width = '120px';
    swatchColor.style.height = '60px';
    swatchColor.style.display = 'inline-block';
    swatch.appendChild(swatchColor);

    const rgbSectionSpacer = document.createElement('div');
    const rgbSection = document.createElement('span');
    rgbSectionSpacer.appendChild(rgbSection);
    rgbSection.innerText='#'+_colorRGB;
    swatch.appendChild(rgbSectionSpacer);

    const cssVariableNameSpacer = document.createElement('div');
    const cssVariableName = document.createElement('span');
    cssVariableNameSpacer.appendChild(cssVariableName);
    cssVariableName.innerText=_cssVariableName;
    swatch.appendChild(cssVariableNameSpacer);

    return swatch;
}