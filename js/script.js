let bill = document.getElementById("bill");
let numPeople = document.getElementById("numPeople");
var tip = 0;


/*Início da entrada do valor do Tip*/
function tip5(){
    tip = 5;
    console.log(tip);
}
function tip10(){
    tip = 10;
    console.log(tip);
}
function tip15(){
    tip = 15;
    console.log(tip);
}
function tip25(){
    tip = 25;
    console.log(tip);
}
function tip50(){
    tip = 50;
    console.log(tip);
}
function tipCustom(){
    let tipCustom = document.getElementById("tipCustom").value;

    tip = tipCustom;
    console.log(tip);
}
/*Fim da entrada do valor do Tip*/


function calculate(bill, tip, numPeople){
    let tipAmount = document.getElementById("tip-amount");
    let total = document.getElementById("total");

    let nBill = Number(bill.value)
    let nTip = Number(tip)
    let nNumPeople = Number(numPeople.value)
    
    let billPlusTip = nBill + (nBill * (nTip / 100)); // total
    let billPlusTipPerson = (billPlusTip / nNumPeople).toFixed(2); // total / person
    let finalTip = (billPlusTip - nBill).toFixed(2);
    let finalTipPerson = (finalTip / nNumPeople).toFixed(2); // tip amount / person

    
    if((billPlusTipPerson > 0 && finalTipPerson > 0) && (billPlusTipPerson != Infinity && finalTipPerson != Infinity)){
        tipAmount.innerHTML = finalTipPerson;
        total.innerHTML = billPlusTipPerson;
    }
}

function validate(){
    let peopleError = document.getElementById("error");


    if(numPeople.value == 0){
        peopleError.style.display = "block";
        numPeople.style.cssText = "outline : 0; border: 1px solid red"
    }else{
        peopleError.style.display = "none";
        numPeople.style.cssText = "outline : 0; border: none"
    }
}

function reset(){
    window.location.reload();
}