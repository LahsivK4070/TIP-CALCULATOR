var billText = document.querySelector(".amt");
var tipText = document.querySelector(".custom");
var noOfPeopleText = document.querySelector(".no-of-people");
var tipAmtText = document.querySelector(".amount-display");
var perPersonText = document.querySelector(".total-display");

document.querySelector(".btn-1").addEventListener("click", btnClick);
document.querySelector(".btn-2").addEventListener("click", btnClick);
document.querySelector(".btn-3").addEventListener("click", btnClick);
document.querySelector(".btn-4").addEventListener("click", btnClick);
document.querySelector(".btn-5").addEventListener("click", btnClick);

document.querySelector(".custom").addEventListener("input", function () {
    Calculate(Number(tipText.value) / 100);
})

function btnClick() {
    
    var tipRate = this.innerHTML;
    if (tipRate == "5%") {
        Calculate(0.05);
    }
    else if (tipRate == "10%") {
        Calculate(0.10);
    }
    else if (tipRate == "15%") {
        Calculate(0.15);
    }
    else if (tipRate == "25%") {
        Calculate(0.25);
    }
    else if (tipRate == "50%") {
        Calculate(0.50);
    }
}


function Calculate(tipPercent) {

    if (noOfPeopleText.value == "") {
        document.querySelector(".error").style.visibility = "visible";
    }
    else {
        document.querySelector(".error").style.visibility = "hidden";

        var tipAmtPerPerson = (Number(billText.value) * Number(tipPercent)) / Number(noOfPeopleText.value);
        var totalAmtPerPerson = (Number(billText.value) / Number(noOfPeopleText.value)) + tipAmtPerPerson;

        tipAmtText.value = "$" + (Math.round(tipAmtPerPerson * 100) / 100);
        perPersonText.value = "$" + (Math.round(totalAmtPerPerson * 100) / 100);
    }

}

document.querySelector(".btn-reset").addEventListener("click", function () {
    billText.value = "";
    noOfPeopleText.value = "";
    tipText.value = "";
    tipAmtText.value = "$0.00";
    perPersonText.value = "$0.00";
})