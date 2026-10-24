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

function renderMtgCard(_cardName,_image,_cardType,_text,_cost=null){
    const mtgCard = document.createElement('article');
    mtgCard.className = "mtg-card";
    mtgCard.setAttribute("aria-hidden", "false");

    const cardHeader = document.createElement("h3");
    cardHeader.className = "mtg-card-name"
    cardHeader.textContent = _cardName;
    mtgCard.appendChild(cardHeader);

    const cardArtSpacer = document.createElement("div");
    const cardImage = document.createElement("img");
    cardArtSpacer.appendChild(cardImage);
    cardImage.className = "mtg-card-art";
    cardImage.src = _image;
    cardImage.alt = ("Image of the "+_cardName+" magic the gathering card");
    mtgCard.appendChild(cardArtSpacer);

    if(_cost){
        const cardCostSpacer = document.createElement("div");
        const cardCost = document.createElement("span");
        cardCostSpacer.appendChild(cardCost);
        cardCost.className = "mtg-card-cost"
        cardCost.textContent = _cost;
        mtgCard.appendChild(cardCostSpacer);
    }
    
    const cardTypeSpacer = document.createElement("div");
    const cardType = document.createElement("span");
    cardTypeSpacer.appendChild(cardType);
    cardType.className = "mtg-card-type"
    cardType.textContent = _cardType;
    mtgCard.appendChild(cardTypeSpacer);

    const cardTextSpacer = document.createElement('div');
    const cardText = document.createElement('p');
    cardTextSpacer.appendChild(cardText);
    cardText.className = "mtg-card-text"
    cardText.textContent = _text;
    mtgCard.appendChild(cardTextSpacer);

    return mtgCard;
}

function searchCards(_searchTerm = null){
    if(_searchTerm === ""){
        cards.forEach(function (card){
            card.style.display = "block";
            card.setAttribute("aria-hidden","false");
            return;
        });
    }

    const cards = document.querySelectorAll(".mtgCard");
    const searchBar = document.getElementById("search-bar");
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

function initLinks(links){
    links.addEventListener("click", function (event){
        event.preventDefault();
        searchCards("");
    });
}

initSearchBar(document.getElementById("search-bar"));
initLinks(document.querySelector(".header-top-cards-list"));

//card initialization
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Captain America, Living Legend', 'art/captainAmericaLivingLegend.webp','Legendary Creature - Human Soldier Hero', 'Vigilance \nWhenever a creature you control becomes tapped during your turn, if it’s the first time that creature has become tapped this turn, untap it.','{1}{W}{U}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Time Warp', 'art/timeWarp.webp', 'Sorcery', 'Target player takes an extra turn after this one.', '{3}{U}{U}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Lightning Greaves', 'art/lightningGreaves.webp', 'Artifact', 'card-text">Equipped creature has haste and shroud. (It can’t be the target of spells or abilities.) \nEquip {0}', '{2}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Full Throttle', 'art/dft-127-full-throttle.webp', 'Sorcery', 'After this main phase, there are two additional combat phases. At the beginning of each combat this turn, untap all creatures that attacked this turn.', '{4}{R}{R}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Fireball', 'art/clb-175-fireball.webp', 'Sorcery', 'This spell costs {1} more to cast for each target beyond the first. Fireball deals X damage divided evenly, rounded down, among any number of targets.', '{X}{R}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('The One Ring', 'art/ltr-246-the-one-ring.webp', 'Legendary Artifact', ' When The One Ring enters, if you cast it, you gain protection from everything until your next turn. At the beginning of your upkeep, you lose 1 life for each burden counter on The One Ring. \n{T}: Put a burden counter on The One Ring, then draw a card for each burden counter on The One Ring.', '{4}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard("Aladdin's Ring", 'art/9ed-286-aladdin-s-ring.webp', 'Artifact', '{8}, {T}: This artifact deals 4 damage to any target.', '{8}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Blech, Loafing Pest', 'art/sos-176-blech-loafing-pest.webp', 'Legendary Creature - Pest', 'Whenever you gain life, put a +1/+1 counter on each Pest, Bat, Insect, Snake, and Spider you control.','{1}{B}{G}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Unite the Coalition','art/dmc-15-unite-the-coalition.webp','Instant','Choose five. You may choose the same mode more than once.\n• Target permanent phases out.\n• Target player draws a card.\n• Exile target player’s graveyard.\n• Unite the Coalition deals 2 damage to any target.\n• Destroy target artifact or enchantment.','{2}{W}{U}{B}{R}{G}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Rally the Forces','art/mbs-73-rally-the-forces.webp','Instant','Attacking creatures get +1/+0 and gain first strike until end of turn.','{2}{R}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Unity of Purpose','art/ogw-66-unity-of-purpose.webp','Instant','Support 2. (Put a +1/+1 counter on each of up to two target creatures.)\nUntap each creature you control with a +1/+1 counter on it.','{3}{U}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Bargaining Table','art/mmq-288-bargaining-table.webp','Artifact','{X},{T}: Draw a card, where X is the number of cards in an opponent’s hand.','{4}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Collective Effort','art/emn-17-collective-effort.webp','Sorcery','Escalate—Tap an untapped creature you control. (Pay this cost for each mode chosen beyond the first.)\nChoose one or more —\n• Destroy target creature with power 4 or greater.\n• Destroy target enchantment.\n• Put a +1/+1 counter on each creature target player controls.','{1}{W}{W}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Back for More','art/iko-177-back-for-more.webp','Instant','Return target creature card from your graveyard to the battlefield. When you do, it fights up to one target creature you don’t control. (Each deals damage equal to its power to the other.)','{4}{B}{G}'));
document.getElementById("mtg-cards-section").appendChild(renderMtgCard('Strength in Numbers','art/tsp-224-strength-in-numbers.webp','Instant','Until end of turn, target creature gains trample and gets +X/+X, where X is the number of attacking creatures.','{G}'));


//document.getElementById("mtg-cards-section").appendChild(renderMtgCard());
