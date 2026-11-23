import { fetchCardFromID,fetchCardsByQuery,normalizeCardData } from "./api";
import { renderCard } from "./render";

export function initSearchForm(searchForm){
    searchForm.addEventListener("submit", async function(event){
        event.preventDefault();
        const resultsRegion = document.querySelector(".card-results-region");
        resultsRegion.textContent="";

        const searchInput = document.querySelector(".searchbar");
        const query = searchInput.value;

        const rawData = await fetchCardsByQuery(query);
        const normalizedData = normalizeCardData(rawData);

        console.log(rawData);
        console.log(normalizedData);

        normalizedData.forEach(function(card){
            resultsRegion.appendChild(renderCard(card));
        });



        // let cardElements = [];
        // normalizedData.forEach(function(cardObject){
        //     cardElements.push(renderCard(cardObject));
        // });

        // cardElements.forEach(function(cardElement){
        //     document.appendChild(cardElement);
        // });

    });
}