function $(selector){
    return document.querySelector(selector);
}

const subtotal = $("#subtotal");
const taxRate = $("#taxRate");
const salesTax = $("#salesTax");
const total = $("#total");


function processEntries(){

    const subtotal = parseFloat(document.querySelector("#subtotal").value);
    const taxRate = parseFloat(document.querySelector("#taxRate").value);
    
    if (subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        return;
    }
        
    if (taxRate <= 0 || taxRate >= 12) {
        alert('Tax Rate must be > 0 and < 12');
        return;
    }
                
    const salesTax = subtotal * (taxRate/100);
    const total = subtotal + parseFloat(salesTax);

    document.querySelector("#salesTax").value = salesTax.toFixed(2);
    document.querySelector("#total").value = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
    
    const subtotal = document.querySelector("#subtotal");
    subtotal.focus();

    const taxRate = document.querySelector("#taxRate");

    const calculate = document.querySelector("#calculate");
    calculate.addEventListener("click", function() {
        processEntries();
        subtotal.focus();
    });

    const clear = document.querySelector("#clear");
    clear.addEventListener("click", function() {
        document.querySelector("#subtotal").value = '';
        document.querySelector("#taxRate").value = '';
        document.querySelector("#salesTax").value = '';
        document.querySelector("#total").value = '';
        subtotal.focus();
    })

    function clearTextBox(textBox){
        textBox.value = '';
    }

    subtotal.addEventListener("click", function() {
        clearTextBox(subtotal);
    });

    taxRate.addEventListener("click", function() {
        clearTextBox(taxRate);
    })
});