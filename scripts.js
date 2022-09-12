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
let displaySelectedTip = document.getElementById('display-selected-tip');




function set5TipPercentage(){
    tipPercent = .05;
    tip5Selected.classList.add("selected-tip");
    tip10Selected.classList.remove("selected-tip");
    tip15Selected.classList.remove("selected-tip");
    tip20Selected.classList.remove("selected-tip");
    
    
};

function set10TipPercentage(){
    tipPercent = .10;
    tip10Selected.classList.add("selected-tip");
    tip5Selected.classList.remove("selected-tip");
    tip15Selected.classList.remove("selected-tip");
    tip20Selected.classList.remove("selected-tip");
};

function set15TipPercentage(){
    tipPercent = .15;
    tip15Selected.classList.add("selected-tip");
    tip10Selected.classList.remove("selected-tip");
    tip5Selected.classList.remove("selected-tip");
    tip20Selected.classList.remove("selected-tip");
};

function set20TipPercentage(){
    tipPercent = .2;
    tip20Selected.classList.add("selected-tip");
    tip10Selected.classList.remove("selected-tip");
    tip15Selected.classList.remove("selected-tip");
    tip5Selected.classList.remove("selected-tip");
};


function calcTipAmount(){
    // Tip Amount Formula = Bill * Tip Percent
    calculatedTipAmount = billTotal.value * tipPercent;
    tipAmountTotal.textContent = '$' + Math.round((billTotal.value * tipPercent)*100)/100;
};

// Tip/Person Formula = Total Tip Amount / Num of People

function calcTotalPerPerson(){
    // tipPerPersonTotal.textContent = '$' + calculatedTipAmount/peopleTotal.value;
    tipPerPersonTotal.textContent = '$' + Math.round((calculatedTipAmount/peopleTotal.value)*100)/100;
};


calcBtn.addEventListener("click", calcTipAmount);
calcBtn.addEventListener("click", calcTotalPerPerson);
tip5Selected.addEventListener("click", set5TipPercentage);
tip10Selected.addEventListener("click", set10TipPercentage);
tip15Selected.addEventListener("click", set15TipPercentage);
tip20Selected.addEventListener("click", set20TipPercentage);