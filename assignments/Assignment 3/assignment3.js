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



initFaq(document.querySelector(".faq"));