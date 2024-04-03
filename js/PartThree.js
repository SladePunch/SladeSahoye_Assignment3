function $(selector){
    return document.querySelector(selector);
}

function processEntry(){

    const taxableIncome = parseFloat(document.querySelector("#taxableIncome").value);
    
    if (taxableIncome > 0)
        calculateTax(taxableIncome);
    else
        alert('Number entered must be greater than 0');
}

function calculateTax(taxableIncome){
    const over = [9875, 40125, 85525, 163300, 207350, 518400];
    const taxRate = [0.1, 0.12, 0.22, 0.24, 0.35, 0.37];
    
    let taxOwed = 0;
    let i = 0;

    while (i < over.length && taxableIncome > over[i]) {
        taxOwed += (over[i] - (i === 0 ? 0 : over[i - 1])) * taxRate[i];
        i++;
    }

    taxOwed += (taxableIncome - (i === 0 ? 0 : over[i - 1])) * taxRate[i];

    $("#taxOwed").value = taxOwed.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
      
    const calculate = $("#calculate");
    calculate.addEventListener("click", processEntry);
    
    const taxableIncome = $("#taxableIncome");
    taxableIncome.focus();
});