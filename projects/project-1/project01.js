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
            if(hiddenSection.getAttribute("aria-expanded") === "true"){
                hiddenSection.hidden = true;
                hiddenSection.setAttribute('aria-hidden', "true");
                hiddenSection.setAttribute('aria-expanded','false');
                event.target.textContent = "Show more";
                event.target.setAttribute('aria-pressed','false');
            } else {
                hiddenSection.hidden = false;
                hiddenSection.setAttribute('aria-hidden', "false");
                hiddenSection.setAttribute('aria-expanded','true');
                event.target.textContent = "Show less";
                event.target.setAttribute('aria-pressed','true');
            }
        }
    });
}

function initMtgCardHorizontalButtons(cardsSection){
    cardsSection.addEventListener('click',function(event){
        if(event.target.matches('.mtg-card-show-more-button')){
            const card = event.target.closest('.mtg-card-horizontal');
            const hiddenSection = card.querySelector('.mtg-card-hidden-section');
            if(hiddenSection.getAttribute("aria-expanded") === "true"){
                hiddenSection.hidden = true;
                hiddenSection.setAttribute('aria-hidden', "true");
                hiddenSection.setAttribute('aria-expanded','false');
                event.target.textContent = "Show more";
                event.target.setAttribute('aria-pressed','false');
            } else {
                hiddenSection.hidden = false;
                hiddenSection.setAttribute('aria-hidden', "false");
                hiddenSection.setAttribute('aria-expanded','true');
                event.target.textContent = "Show less";
                event.target.setAttribute('aria-pressed','true');
            }
        }
    });
}

function initMtgCardNoImageButtons(cardsSection){
    cardsSection.addEventListener('click',function(event){
        if(event.target.matches('.mtg-card-show-more-button')){
            const card = event.target.closest('.mtg-card-no-image');
            const hiddenSection = card.querySelector('.mtg-card-hidden-section');
            if(hiddenSection.getAttribute("aria-expanded") === "true"){
                hiddenSection.hidden = true;
                hiddenSection.setAttribute('aria-hidden', "true");
                hiddenSection.setAttribute('aria-expanded','false');
                event.target.textContent = "Show more";
                event.target.setAttribute('aria-pressed','false');
            } else {
                hiddenSection.hidden = false;
                hiddenSection.setAttribute('aria-hidden', "false");
                hiddenSection.setAttribute('aria-expanded','true');
                event.target.textContent = "Show less";
                event.target.setAttribute('aria-pressed','true');
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
            if(codeSection.getAttribute('aria-hidden') === 'true'){
                codeSection.hidden = false;
                codeSection.setAttribute('aria-hidden','false');
            } else {
                codeSection.hidden = true;
                codeSection.setAttribute('aria-hidden','true');
            }
            
        }
    });
}

function initTabButtons(tabsSection){
    tabsSection.addEventListener('click', function(event){
        const button = event.target.closest("[role='tab']");
        if (!button){
            return;
        }
        const buttons = tabsSection.querySelectorAll("[role='tab']");
        buttons.forEach(function(button){
            button.setAttribute('aria-selected','false');
        });
        const sections = tabsSection.querySelectorAll('.tab');
        sections.forEach(function(tab){
            tab.hidden = true;
            tab.setAttribute('aria-hidden','true');
        })

        button.setAttribute('aria-selected','true')
        const correctSection = tabsSection.querySelector('#'+button.getAttribute('aria-controls'));
        correctSection.hidden = false;
        correctSection.setAttribute('aria-hidden','false');
    });
}

function initaccordionSection(accordionSection){
    accordionSection.addEventListener('click',function(event){
        const accordionButton=event.target.closest('.accordion-button');
        if(!accordionButton){
            return;
        }
        const buttonState = accordionButton.getAttribute('aria-selected');

        const accordionButtons=accordionSection.querySelectorAll('.accordion-button');
        accordionButtons.forEach(function(button){
            button.setAttribute('aria-selected','false');
        });
        const accordionBodySections = document.querySelectorAll('.accordion-section-body');
        accordionBodySections.forEach(function(accordionBodySection){
            accordionBodySection.setAttribute('aria-hidden','true');
            accordionBodySection.hidden = true;
        });

        if(buttonState != 'true'){
            accordionButton.setAttribute('aria-selected','true');
            const accordionBodySection = accordionSection.querySelector('#'+accordionButton.getAttribute('aria-controls'));
            accordionBodySection.setAttribute('aria-hidden','false');
            accordionBodySection.hidden = false;
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
    document.getElementById('mtg-cards-tab').appendChild(Render.renderMtgCard(cardData.name,cardData.art,cardData.type,cardData.text,cardData.cost));
    document.getElementById('mtg-cards-horizontal-tab').appendChild(Render.renderMtgCardHorizontal(cardData.name,cardData.art,cardData.type,cardData.text,cardData.cost));
    document.getElementById('mtg-cards-no-image-tab').appendChild(Render.renderMtgCardNoImage(cardData.name,cardData.type,cardData.text,cardData.cost));
});


initSearchBar(document.getElementById("search-bar"));
initMtgCardButtons(document.getElementById('mtg-cards-tab'));
initMtgCardHorizontalButtons(document.getElementById('mtg-cards-horizontal-tab'));
initMtgCardNoImageButtons(document.getElementById('mtg-cards-no-image-tab'))
initShowCodeButton(document.getElementById('show-code-button'));
initTabButtons(document.getElementById('tabs-section'));
initaccordionSection(document.getElementById('accordion-section'))

const colorSwatchesSection = document.getElementById('color-swatches-section');
colorSwatchesSection.appendChild(Render.renderColorSwatch('Old Glory Red', 'B31942', "--primary-color"))
colorSwatchesSection.appendChild(Render.renderColorSwatch('Old Glory Blue', '002868', "--secondary-color"))
colorSwatchesSection.appendChild(Render.renderColorSwatch('Black', '000000', '--black'))
colorSwatchesSection.appendChild(Render.renderColorSwatch('White', 'FFFFFF', '--white'))
colorSwatchesSection.appendChild(Render.renderColorSwatch('Carbon (Background Color)', '232323', "--carbon"))

getValidCards();
