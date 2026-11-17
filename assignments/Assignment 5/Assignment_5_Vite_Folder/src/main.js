import { attachFormListener, attachShowMoreButtonListener } from "./events";

const form          = document.getElementById('search-form');
const showMoreButton = document.querySelector('.load-more-cards-button');

attachFormListener(form);
attachShowMoreButtonListener(showMoreButton);