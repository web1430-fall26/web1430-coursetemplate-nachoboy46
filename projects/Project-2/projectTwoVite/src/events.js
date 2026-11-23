import { fetchCardFromID,fetchCardsByQuery } from "./api";
import { normalizeCardData } from "./normalize";
import { renderCard, showLoading, showError } from "./render";
import { createNewDeck } from "./state";

export function initSearchForm(searchForm){
    searchForm.addEventListener("submit", async function(event){
        event.preventDefault();
        showLoading();
        const resultsRegion = document.querySelector(".card-results-region");

        try{
            const searchInput = document.querySelector(".searchbar");
            const query = searchInput.value;

            const rawData = await fetchCardsByQuery(query);
            const normalizedData = await normalizeCardData(rawData);

            console.log(rawData);
            console.log(normalizedData);

            resultsRegion.textContent="";
            normalizedData.forEach(function(card){
                resultsRegion.appendChild(renderCard(card));
            });
        } catch(error){
            showError(error);
        }
        

        // let cardElements = [];
        // normalizedData.forEach(function(cardObject){
        //     cardElements.push(renderCard(cardObject));
        // });

        // cardElements.forEach(function(cardElement){
        //     document.appendChild(cardElement);
        // });

    });
}

export function initTabs(tabButtonsSection){
    tabButtonsSection.addEventListener("click",function(event){
        const tabButton = event.target.closest(".tab-button");
        if(!tabButton){
            return;
        }
        const tabButtons = tabButtonsSection.querySelectorAll(".tab-button");
        tabButtons.forEach(function(currentButton){
            currentButton.setAttribute("aria-selected","false");
            const shownTab=document.querySelector("#"+currentButton.getAttribute("aria-controls"));
            shownTab.setAttribute("aria-hidden","true");
            shownTab.hidden=true;
        });
        tabButton.setAttribute("aria-selected","true");
        const shownTab=document.querySelector("#"+tabButton.getAttribute("aria-controls"));
        shownTab.setAttribute("aria-hidden","false");
        shownTab.hidden=false;

        console.log("yeye");
    });
}

export function initNewDeckForm(deckForm){
    deckForm.addEventListener("submit", function(event){
        event.preventDefault();
        const deckInput = deckForm.querySelector("#deck-name-input");
        const deckName = deckInput.value.trim();
        if(!deckName){
            return;
        }
        createNewDeck(deckName);
        deckInput.value = "";
    });
}