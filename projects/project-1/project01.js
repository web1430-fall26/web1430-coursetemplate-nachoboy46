// document.addEventListener("DOMContentLoaded", function(){
//     const symbolMap = {
//         '{1}': 'ms-1',
//         '{W}': 'ms-w',
//         '{U}': 'ms-u',
//         '{B}': 'ms-b',
//         '{R}': 'ms-r',
//         '{G}': 'ms-g',
//         '{T}': 'ms-t'
//     }

//     const elements = document.querySelectorAll(".card-mana-cost, .card-text");

//     elements.forEach(function (el){
//         let content = el.innerHTML;

//         for(const text in symbols){
//             let cssClass = sybmols[text];
//             let replacement = `<i class="ms ${cssClass} ms-cost ms-shadow"></i>`;
//             content = content.replaceAll(text, replacement);
//         }
//         el.innerHTML = content;
//     });
// });

function initSearchBar(searchBar){
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function (event){
        event.preventDefault();
    });

    searchBar.addEventListener('input', function (event){
        event.preventDefault();
        const cards = document.querySelectorAll(".card");
        const searchBar = document.getElementById("search-bar");
        const searchTerm = searchBar.value.trim().toLowerCase();

        cards.forEach(function (card){
            const nameElement = card.querySelector(".card-name");
            const cardName = nameElement.textContent.toLocaleLowerCase();
            if(cardName.includes(searchTerm)){
                card.style.display = "block";
                card.setAttribute("aria-hidden","false");
            } else {
                card.style.display = "none";
                card.setAttribute("aria-hidden","true");
            }
        });
    });
}

initSearchBar(document.getElementById("search-bar"));