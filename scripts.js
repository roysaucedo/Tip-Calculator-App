let billTotal = document.getElementById('bill');
let tip5Selected = document.getElementById('5-percent');
let tip10Selected = document.getElementById('10-percent');
let tip15Selected = document.getElementById('15-percent');
let tip20Selected = document.getElementById('10-percent');
let peopleTotal = document.getElementById('num-people');
let tipAmountTotal = document.getElementById('tip-amount');
let tipPerPersonTotal = document.getElementById('tip-per-person');
let calcBtn = document.getElementById('calc-btn');


console.log(billTotal.value)

// Tip Amount Formula = Bill * Tip Percent



function calcTipAmount(){
    // let tipOutput = billTotal.value * 
    let tipOutput = billTotal.value;

    tipAmountTotal.textContent = '$' + tipOutput * ;

    tipPerPersonTotal.textContent = '$' + tipOutput/peopleTotal.value;
}

// Tip/Person Formula = Total Tip Amount / Num of People

function calcTotalPerPerson(){

}

calcBtn.addEventListener("click", calcTipAmount);
calcBtn.addEventListener("click", calcTotalPerPerson);