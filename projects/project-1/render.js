export function renderMtgCard(_title,_image,_cardType,_body,_cost=null){
    const mtgCard = document.createElement('article');
    mtgCard.className = "mtg-card";
    mtgCard.setAttribute("aria-hidden", "false");

    const cardTitle = document.createElement("h3");
    cardTitle.className = "mtg-card-title"
    cardTitle.textContent = _title;
    mtgCard.appendChild(cardTitle);

    const cardImageSpacer = document.createElement("div");
    const cardImage = document.createElement("img");
    cardImageSpacer.appendChild(cardImage);
    cardImage.className = "mtg-card-image";
    cardImage.src = _image;
    cardImage.alt = ("Image of the "+_title+" magic the gathering card");
    mtgCard.appendChild(cardImageSpacer);

    const hiddenSection = document.createElement("div");
    hiddenSection.className="mtg-card-hidden-section";
    hiddenSection.hidden = true;
    hiddenSection.setAttribute('aria-hidden','true');
    hiddenSection.setAttribute('aria-expanded','false');
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

    const cardBodySpacer = document.createElement('div');
    const cardBody = document.createElement('p');
    cardBodySpacer.appendChild(cardBody);
    cardBody.className = "mtg-card-body"
    cardBody.textContent = _body;
    hiddenSection.appendChild(cardBodySpacer);

    const button = document.createElement('button');
    button.setAttribute('tabindex','-1');
    button.className = "mtg-card-show-more-button";
    button.textContent = 'Show more';
    button.setAttribute('aria-pressed', 'false');
    mtgCard.appendChild(button);

    return mtgCard;
}

export function renderMtgCardHorizontal(_title,_image,_cardType,_body,_cost=null){
    const mtgCard = document.createElement('article');
    mtgCard.className = "mtg-card-horizontal";
    mtgCard.setAttribute("aria-hidden", "false");

    const cardTitle = document.createElement("h3");
    cardTitle.className = "mtg-card-title"
    cardTitle.textContent = _title;
    mtgCard.appendChild(cardTitle);

    const hiddenSection = document.createElement("div");
    hiddenSection.className="mtg-card-hidden-section";
    hiddenSection.hidden = true;
    hiddenSection.setAttribute('aria-hidden','true');
    hiddenSection.setAttribute('aria-expanded','false');
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

    const cardBodySpacer = document.createElement('div');
    const cardBody = document.createElement('p');
    cardBodySpacer.appendChild(cardBody);
    cardBody.className = "mtg-card-body"
    cardBody.textContent = _body;
    hiddenSection.appendChild(cardBodySpacer);

    const button = document.createElement('button');
    button.setAttribute('tabindex','-1');
    button.className = "mtg-card-show-more-button";
    button.textContent = 'Show more';
    button.setAttribute('aria-pressed', 'false');
    mtgCard.appendChild(button);

    const cardImageSpacer = document.createElement("div");
    const cardImage = document.createElement("img");
    cardImageSpacer.appendChild(cardImage);
    cardImage.className = "mtg-card-image";
    cardImage.src = _image;
    cardImage.alt = ("Image of the "+_title+" magic the gathering card");
    mtgCard.appendChild(cardImageSpacer);

    return mtgCard;
}

export function renderMtgCardNoImage(_title,_cardType,_body,_cost=null){
    const mtgCard = document.createElement('article');
    mtgCard.className = "mtg-card-no-image";
    mtgCard.setAttribute("aria-hidden", "false");

    const cardTitle = document.createElement("h3");
    cardTitle.className = "mtg-card-title"
    cardTitle.textContent = _title;
    mtgCard.appendChild(cardTitle);

    const hiddenSection = document.createElement("div");
    hiddenSection.className="mtg-card-hidden-section";
    hiddenSection.hidden = true;
    hiddenSection.setAttribute('aria-hidden','true');
    hiddenSection.setAttribute('aria-expanded','false');
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

    const cardBodySpacer = document.createElement('div');
    const cardBody = document.createElement('p');
    cardBodySpacer.appendChild(cardBody);
    cardBody.className = "mtg-card-body"
    cardBody.textContent = _body;
    hiddenSection.appendChild(cardBodySpacer);

    const button = document.createElement('button');
    button.setAttribute('tabindex','-1');
    button.className = "mtg-card-show-more-button";
    button.textContent = 'Show more';
    button.setAttribute('aria-pressed', 'false');
    mtgCard.appendChild(button);

    return mtgCard;
}

export function renderColorSwatch(_colorName, _colorRGB, _cssVariableName){
    const swatch = document.createElement('section');
    swatch.style.width = '160px'
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