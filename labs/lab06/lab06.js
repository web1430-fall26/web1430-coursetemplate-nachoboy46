function initFaq(faqContainer){
    function innerFunction(event){
        if(event.target.matches('.faq-question')){
            const answerID = event.target.getAttribute('aria-controls');
            let answer = document.getElementById(answerID);
            const answerState = answer.hidden;

            const answerIDS = document.querySelectorAll('.faq-answer');
            answerIDS.forEach(answer => {answer.hidden = true});

            const questionIDS = document.querySelectorAll('.faq-question');
            questionIDS.forEach(question => {question.setAttribute('aria-expanded',"false")});

            answer.hidden = !answerState;
            if (answer.hidden){
                event.target.setAttribute('aria-expanded', 'false');
            } else {
                event.target.setAttribute('aria-expanded', 'true');
            }
        }
    }

    faqContainer.addEventListener("click", innerFunction);
}

function setActiveTab(tabs, panels, newIndex){
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

function initTabs(tabListContainer){
    // Moved panels up here so BOTH click and keydown functions can see it
    const panels = document.querySelectorAll('[role=tabpanel]');

    function innerFunction(event){
        const clickedTab = event.target.closest('[role="tab"]');

        if(clickedTab){
            const tabs = tabListContainer.querySelectorAll('[role="tab"]');
            tabs.forEach(tab => {tab.setAttribute('aria-selected', false)});

            panels.forEach(panel => {panel.hidden = true});

            clickedTab.setAttribute('aria-selected', true);

            const panelId = clickedTab.getAttribute('aria-controls');
            const targetPanel = document.getElementById(panelId);
            targetPanel.hidden = false;
        }
    }

    tabListContainer.addEventListener("click", innerFunction);

    function tabListFunction(event){
        // Fixed: changed tabList to tabListContainer
        const tabs = Array.from(tabListContainer.querySelectorAll('[role="tab"]'));
        const current = tabs.indexOf(document.activeElement);
        if (current === -1){
            return;
        }

        let next = null;
        if (event.key === "ArrowRight"){
            next = (current + 1) % tabs.length;
        }
        if (event.key === "ArrowLeft"){
            next = (current - 1 + tabs.length) % tabs.length;
        }
        if (event.key === "Home"){
            next = 0;
        }
        if (event.key === "End"){
            next = tabs.length - 1;
        }

        if (next !== null){
            event.preventDefault();
            setActiveTab(tabs, panels, next);
        }
    }

    tabListContainer.addEventListener("keydown", tabListFunction);
}

initFaq(document.querySelector('.faq'));
initTabs(document.querySelector('.tab-list'));