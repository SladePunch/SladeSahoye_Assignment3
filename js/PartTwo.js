function $(selector){
    return document.querySelector(selector);
}

const amount = $("#amount");
const quarters = $("#quarters");
const dimes = $("#dimes");
const nickels = $("#nickels");
const pennies = $("#pennies");


function processEntry(){

    const amount = parseInt($("#amount").value);
    
    if (amount >= 0 && amount <= 99) {
        makeChange(amount);
    } else
        alert('Number must be between 0 and 99');
}

function makeChange(amount) {
  
    const denominations = [25, 10, 5, 1];
    const coins = ["quarters", "dimes", "nickels", "pennies"];

    const dollars = Math.floor(amount);
    const cents = Math.round((amount - dollars) * 100);
    let remainingAmount = dollars

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const coin = coins[i];

        const count = Math.floor(remainingAmount / denomination);
        $(`#${coin}`).value = count;

        remainingAmount %= denomination;
    }

    while (totalCoins < dollars) {
        $("#pennies").value = parseInt($("#pennies").value);
        totalCoins++;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    const calculate = $("#calculate");
    calculate.addEventListener("click", processEntry);
});