import * as Data from "./data.js";
import * as Render from "./render.js";

function renderCardSection(){
    const card = document.createElement('article');
    card.className='prettyCard';
    

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
    const cards = document.querySelectorAll(".mtg-card");
    const searchBar = document.getElementById("search-bar");

    if(_searchTerm === ""){
        cards.forEach(function (card){
            card.style.display = "block";
            card.setAttribute("aria-hidden","false");
            return;
        });
    }

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

function initShowCodeButton(showCodeButton){
    showCodeButton.addEventListener('click', function(event){
        if(event.target.matches('.show-code-button')){
            const codeSection = document.getElementById('code-section');
            if(codeSection.getAttribute('aria-hidden') === 'trueg'){
                codeSection.hidden = false;
                codeSection.setAttribute('aria-hidden','false');
            } else {
                codeSection.hidden = true;
                codeSection.setAttribute('aria-hidden','true');
            }
            
        }
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
    document.getElementById('mtg-cards-section').appendChild(Render.renderMtgCard(cardData.name,cardData.art,cardData.type,cardData.text,cardData.cost));
});

initSearchBar(document.getElementById("search-bar"));
initMtgCardButtons(document.getElementById('mtg-cards-section'));
initShowCodeButton(document.getElementById('show-code-button'));

const colorSwatchesSection = document.getElementById('color-swatches-section');
colorSwatchesSection.appendChild(Render.renderColorSwatch('Old Glory Red', 'B31942', "--primary-color"))
colorSwatchesSection.appendChild(Render.renderColorSwatch('Old Glory Blue', '002868', "--secondary-color"))
colorSwatchesSection.appendChild(Render.renderColorSwatch('Black', '000000', '--black'))
colorSwatchesSection.appendChild(Render.renderColorSwatch('White', 'FFFFFF', '--white'))
colorSwatchesSection.appendChild(Render.renderColorSwatch('Carbon (Background Color)', '232323', "--carbon"))

getValidCards();
