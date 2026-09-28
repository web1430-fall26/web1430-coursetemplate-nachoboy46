function getSplitPrice(mealTotal, tipPercentage, numberOfPeople){ //Meal total is in a number formatted XX.XX, tip percentage is a number formated XX, number of people is a non-zero and non-negative integer
    if(numberOfPeople <= 0){
        return -1;
    }

    const actualTotal = mealTotal * (1 + (tipPercentage/100));
    return [actualTotal,actualTotal/numberOfPeople];
}

function validate(mealTotal, tipPercentage, numberOfPeople){
    if (isNaN(mealTotal) || isNaN(tipPercentage) || isNaN(numberOfPeople)){
        return 'ERROR: All inputs must be numeric'
    }
    if (numberOfPeople <= 0){
        return 'ERROR: There must be at least one eater.'
    }
    if (tipPercentage < 0 || tipPercentage > 100){
        return 'ERROR: Tip value must be between 0 and 100'
    }
    if (mealTotal < 0){
        return 'ERROR: The minimum meal total is $0.'
    }
    return null;
}

function renderResults(results, errorMessage) {
    const outputElement = document.getElementById('eaterOutputAmount');
    const errorElement = document.getElementById('errorMessage');

    const eatersInputELement = document.getElementById('eaters');
    const baseCostInputElement = document.getElementById('baseCost');
    const tipInputElement = document.getElementById('tip');
    
    errorElement.textContent = "";
    eatersInputELement.removeAttribute('aria-invalid');
    baseCostInputElement.removeAttribute('aria-invalid');
    tipInputElement.removeAttribute('aria-invalid');

    if (errorMessage) {
        errorElement.textContent = errorMessage;
        outputElement.textContent = '';

        eatersInputELement.setAttribute('aria-invalid', 'true');
        baseCostInputElement.setAttribute('aria-invalid', 'true');
        tipInputElement.setAttribute('aria-invalid', 'true');
        return;
    }

    const formattedTotal = `$${results[0].toFixed(2)}`;
    const formattedPerPerson = `$${results[1].toFixed(2)}`;

    outputElement.textContent = `The total price is ${formattedTotal}, and the price per person is ${formattedPerPerson}`;
}


 function clickHandler() {//Meal total is in a number formatted XX.XX, tip percentage is a number formated XX, number of people is a non-zero and non-negative integer
    const eatersVar = parseFloat(document.getElementById('eaters').value);
    const baseCostVar = parseFloat(document.getElementById('baseCost').value);
    const tipVar= parseFloat(document.getElementById('tip').value);
            
    const errorText = validate(baseCostVar,tipVar,eatersVar)

    if(errorText !== null){
        renderResults(null, errorText);
        return;
    }

    const results = getSplitPrice(baseCostVar,tipVar,eatersVar);
    renderResults(results,null);

}

document.getElementById('calculateButton').addEventListener('click',clickHandler);