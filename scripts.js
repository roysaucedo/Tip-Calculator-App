let billTotal = document.getElementById('bill');
let tip5Selected = document.getElementById('5-percent');
let tip10Selected = document.getElementById('10-percent');
let tip15Selected = document.getElementById('15-percent');
let tip20Selected = document.getElementById('20-percent');
let peopleTotal = document.getElementById('num-people');
let tipAmountTotal = document.getElementById('tip-amount');
let tipPerPersonTotal = document.getElementById('tip-per-person');
let calcBtn = document.getElementById('calc-btn');
let tipPercent = 0;
let calculatedTipAmount = 0;



function set5TipPercentage(){
    tipPercent = .05;
    
};

function set10TipPercentage(){
    tipPercent = .10;
};

function set15TipPercentage(){
    tipPercent = .15;
};

function set20TipPercentage(){
    tipPercent = .2;
};


function calcTipAmount(){
    // Tip Amount Formula = Bill * Tip Percent
    calculatedTipAmount = billTotal.value * tipPercent;
    tipAmountTotal.textContent = '$' + billTotal.value * tipPercent;
};

// Tip/Person Formula = Total Tip Amount / Num of People

function calcTotalPerPerson(){
    tipPerPersonTotal.textContent = '$' + calculatedTipAmount/peopleTotal.value;

};

calcBtn.addEventListener("click", calcTipAmount);
calcBtn.addEventListener("click", calcTotalPerPerson);
tip5Selected.addEventListener("click", set5TipPercentage);
tip10Selected.addEventListener("click", set10TipPercentage);
tip15Selected.addEventListener("click", set15TipPercentage);
tip20Selected.addEventListener("click", set20TipPercentage);