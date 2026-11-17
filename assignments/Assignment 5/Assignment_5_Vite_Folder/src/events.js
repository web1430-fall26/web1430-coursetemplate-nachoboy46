import { renderCards, showError, showEmpty, showLoading  } from "./render";
import { normalizeCards } from "./normalize";
import { fetchCards, fetchCardsFromUrl } from "./api";
import { showMoreButton, resultsRegion } from "./constants";

export function attachFormListener(form){
    form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();

    if (!query) {
        showError('Please enter a search term.');
        return;
    }

    showLoading();  

    try {
        const grossData = await fetchCards(query);
        console.log(grossData);
        if(grossData.has_more){
        showMoreButton.disabled = false;
        resultsRegion.setAttribute('data-next-page-url',grossData.next_page);
        } else {
        showMoreButton.disabled = true;
        resultsRegion.setAttribute('data-next-page-url','');
        }
        

        const data = normalizeCards(grossData.data);
        if(data.length > 0){
        renderCards(data);
        } else {
        showEmpty();
        }
    } catch (error) {
        showError('Unable to load results. Please check your connection and try again.');
        console.error(error);
    }
    });
}

export function attachShowMoreButtonListener(showMoreButton){
    showMoreButton.addEventListener('click',async function(){
    showLoading();
    const moreGrossData = await fetchCardsFromUrl(resultsRegion.getAttribute('data-next-page-url'));
    if(moreGrossData.has_more){
        showMoreButton.disabled = false;
        resultsRegion.setAttribute('data-next-page-url',moreGrossData.next_page);
    } else {
        showMoreButton.disabled = true;
        resultsRegion.setAttribute('data-next-page-url','');
    }
    const goodData = normalizeCards(moreGrossData.data);
    renderCards(goodData,true);
    });
}