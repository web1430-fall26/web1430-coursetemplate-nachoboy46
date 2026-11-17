import { attachFormListener, attachShowMoreButtonListener } from "./events";

const form = document.getElementById('search-form');

attachFormListener(form);
attachShowMoreButtonListener(showMoreButton);