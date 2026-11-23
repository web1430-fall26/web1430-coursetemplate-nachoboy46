import './style.css'
import { initSearchForm, initTabs, initNewDeckForm } from './events'

const searchForm = document.querySelector(".search-form");
initSearchForm(searchForm);
initTabs(document.querySelector(".tab-buttons-section"));
initNewDeckForm(document.querySelector("#deck-form"));

//document.querySelector('#app').innerHTML = `
//`
//implement once you finish in index
