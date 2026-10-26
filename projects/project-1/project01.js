import * as Data from "./data.js";

function renderCardSection(){
    const card = document.createElement('article');
    card.className='prettyCard';
    

}

function renderColorSwatch(_colorName, _colorRGB){
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

    return swatch;
}

function renderMtgCard(_cardName,_image,_cardType,_text,_cost=null){
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

function initMtgCardButtons(cardsSection){
    cardsSection.addEventListener('click',function(event){
        if(event.target.matches('.mtg-card-show-more-button')){
            const card = event.target.closest('.mtg-card');
            const hiddenSection = card.querySelector('.mtg-card-hidden-section');
            if(hiddenSection.getAttribute("aria-hidden") === "true"){
                hiddenSection.hidden = false;
                 hiddenSection.setAttribute('aria-hidden', "false");
            } else {
                hiddenSection.hidden = true;
                hiddenSection.setAttribute('aria-hidden', "true");
            }
        }
    });
}

function getValidCards(){
    const cards = document.querySelectorAll(".mtg-card");
    cards.forEach(function (card){
        if(card.getAttribute("aria-hidden") === "false"){
            console.log(card.querySelector(".mtg-card-name").textContent);
        }
    });
}

function searchCards(_searchTerm = null){
    if(_searchTerm === ""){
        cards.forEach(function (card){
            card.style.display = "block";
            card.setAttribute("aria-hidden","false");
            return;
        });
    }

    const cards = document.querySelectorAll(".mtg-card");
    const searchBar = document.getElementById("search-bar");
    let searchTerm = null;
    if(!_searchTerm){
        searchTerm = searchBar.value.trim().toLowerCase();
    } else {
        searchTerm = _searchTerm;
    }
    
    
    cards.forEach(function (card){
        const nameElement = card.querySelector(".mtg-card-name");
        const cardName = nameElement.textContent.toLocaleLowerCase();
        if(cardName.includes(searchTerm)){
            card.style.display = "block";
            card.setAttribute("aria-hidden","false");
        } else {
            card.style.display = "none";
            card.setAttribute("aria-hidden","true");
        }
    });

    getValidCards();
}

function initSearchBar(searchBar){
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function (event){
        event.preventDefault();
    });
    searchBar.addEventListener('input', function (event){
        event.preventDefault();
        searchCards();
    });
}

// function initLinks(links){
//     links.addEventListener("click", function (event){
//         event.preventDefault();
//         searchCards("");
//     });
// }


//initLinks(document.querySelector(".header-top-cards-list"));

//card initialization

Data.cardsData.sort(function (a,b){
    return a.name.localeCompare(b.name); // the return is very important, remember that Ammon.
});
Data.cardsData.forEach(function (cardData){
    document.getElementById('mtg-cards-section').appendChild(renderMtgCard(cardData.name,cardData.art,cardData.type,cardData.text,cardData.cost));
});

initSearchBar(document.getElementById("search-bar"));
initMtgCardButtons(document.getElementById('mtg-cards-section'));

const colorSwatchesSection = document.getElementById('color-swatches-section');
colorSwatchesSection.appendChild(renderColorSwatch('Old Glory Red', 'B31942'))
colorSwatchesSection.appendChild(renderColorSwatch('Old Glory Blue', '002868'))
colorSwatchesSection.appendChild(renderColorSwatch('Black', '000000'))
colorSwatchesSection.appendChild(renderColorSwatch('White', 'FFFFFF'))
colorSwatchesSection.appendChild(renderColorSwatch('Carbon', '232323'))

getValidCards();
