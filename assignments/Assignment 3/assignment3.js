function initFaq(faqContainer){
    faqContainer.addEventListener("click", function (event){
        const answerId = event.target.closest('.faq-question').getAttribute("aria-controls");
        const answer = document.getElementById(answerId);
        let answerState = answer.hidden;

        const answers = document.querySelectorAll(".faq-answer");
        answers.forEach(answer => {answer.hidden = true});

        const questions = document.querySelectorAll(".faq-question");
        questions.forEach(question => {question.setAttribute('aria-expanded','false')});

        answer.hidden = !answerState;
        if(answer.hidden){
            event.target.setAttribute('aria-expanded','false'); 
        } else {
            event.target.setAttribute('aria-expanded','true'); 
        }
    });
}

function initTabs(tabsContainer){
    const panels = document.querySelectorAll('[role="tabpanel"]')

    tabsContainer.addEventListener("click", function (event){
        const tab = event.target.closest('[role="tab"]');

        if(!tab){
            return; //no remove, stops null errors somestimes
        }

        const tabs = document.querySelectorAll('[role="tab"]');
        tabs.forEach(tab => {tab.setAttribute('aria-selected', false)});

        const tabPanels = document.querySelectorAll('[role="tabpanel"]');
        tabPanels.forEach(panel => panel.hidden = true);

        tab.setAttribute('aria-selected','true');
        const targetPanel = document.getElementById(tab.getAttribute('aria-controls'));
        targetPanel.hidden = false;
    });

    function setActiveTab(tabs, panel, newIndex){
        tabs.forEach(function(tab, i){
            const currentPanel = panels[i];

            if(i === newIndex){
                tab.setAttribute('aria-selected','true');
                tab.tabIndex = 0;
                currentPanel.hidden = false;
            } else {
                tab.setAttribute('aria-selected','false');
                tab.tabIndex = -1;
                currentPanel.hidden = true;
            }
        });
        tabs[newIndex].focus();
    }

    tabsContainer.addEventListener("keydown", function (event){
        const tabs = Array.from(tabsContainer.querySelectorAll('[role="tab"]'));
        const current = tabs.indexOf(document.activeElement);
        if (current === -1){
            return;
        }

        let next = null;
        if(event.key === "ArrowRight"){
            next = (current + 1) % tabs.length;
        } else if(event.key === "ArrowLeft"){
            next = (current - 1 + tabs.length) % tabs.length;
        } else if(event.key === "Home"){
            next = 0;
        } else if(event.key === "End"){
            next = tabs.length-1;
        }

        if(next !== null){
            event.preventDefault();
            setActiveTab(tabs,panels,next);
        }
    });
}

initFaq(document.querySelector(".faq"));
initTabs(document.querySelector(".tabs-section"));