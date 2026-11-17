import { attachFormListener, attachShowMoreButtonListener } from "./events";
import { showMoreButton } from "./constants";

const form = document.getElementById('search-form');

attachFormListener(form);
attachShowMoreButtonListener(showMoreButton);