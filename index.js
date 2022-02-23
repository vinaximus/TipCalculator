var buttonsPercent=document.querySelectorAll(".vButton");
var i=0;


// ----------Assign Events-------------

for (i=0;i<buttonsPercent.length;i++) {
    buttonsPercent[i].addEventListener("click", displayTips);
}

document.getElementById("fldPercentage").addEventListener("focusout",displayTipsCustom);
document.getElementById("button-reset").addEventListener("click", function(){
    document.querySelector("#fldBillAmount").value=0;
    document.querySelector("#fldNoOfPeople").value=0;
    document.getElementById("fldPercentage").value=0;
    document.querySelector("#tipAmount").textContent="0.00";
    document.querySelector("#total").textContent="0.00"




})


function displayTips() {
    var billAmount=Number(document.querySelector("#fldBillAmount").value);
    var noOfPeople=Number(document.querySelector("#fldNoOfPeople").value);
    var percent=Number(this.id.slice(7,10));
    showTipsByPercent(percent,noOfPeople,billAmount);
    
    

}

function displayTipsCustom() {
    var billAmount=Number(document.querySelector("#fldBillAmount").value);
    var noOfPeople=Number(document.querySelector("#fldNoOfPeople").value);
    percent=Number(document.getElementById("fldPercentage").value);
    showTipsByPercent(percent,noOfPeople,billAmount);
    
  
}


function showTipsByPercent(percent,noOfPeople,billAmount) {
    
    
    if (noOfPeople<=0) {
        document.querySelector("#fldNoOfPeople").classList.add("textbox--error");
        document.getElementById("errorID").style.visibility="visible";
    } else {
        var tipPerPerson=0;
        var totalPerPerson=0;
        tipPerPerson=((percent/100)*billAmount)/noOfPeople;
        tipPerPerson=Math.round(tipPerPerson*100)/100;
        totalPerPerson=(billAmount+(percent/100)*billAmount)/noOfPeople;
        totalPerPerson=Math.round(totalPerPerson*100)/100;
        document.querySelector("#tipAmount").textContent=tipPerPerson;
        document.querySelector("#total").textContent=totalPerPerson;

        // Remove the error classes if assigned
        document.querySelector("#fldNoOfPeople").classList.remove("textbox--error");
        document.getElementById("errorID").style.visibility="hidden";
    }

}






