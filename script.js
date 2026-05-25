
//******************** Calculator *********************

function add() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result = a + b;

    document.getElementById("calcResult").innerHTML =
    "Answer: " + result;
}

function subtract() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result = a - b;

    document.getElementById("calcResult").innerHTML =
    "Answer: " + result;
}

function multiply() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result = a * b;

    document.getElementById("calcResult").innerHTML =
    "Answer: " + result;
}

function divide() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result = a / b;

    document.getElementById("calcResult").innerHTML =
    "Answer: " + result;
}


//****************** BMI Checker *******************

function checkBMI() {

    let weight = 
    Number(document.getElementById("weight").value);

    let height =
    Number(document.getElementById("height").value);

    let bmi =
    weight / (height * height);


    let category;

    if (bmi < 18.5) {

        category = "Underweight";

    }

    else if (bmi < 25) {

        category = "Normal";

    }

    else {

        category = "Overweight";

    }


    document.getElementById("bmiResult").innerHTML =
    "Your BMI is " + bmi.toFixed(2) +  // to show only 2 decimal places
    " (" + category + ")";
}


//****************** Unit Converter *******************

function cmToM() {

    let value =
    Number(document.getElementById("unitInput").value);

    let result = value / 100;

    document.getElementById("unitResult").innerHTML =
    result + " metre";

}

function mToCm() {

    let value =
    Number(document.getElementById("unitInput").value);

    let result = value * 100;

    document.getElementById("unitResult").innerHTML =
    result + " cm";

}

function mToKm(){

    let value =
    Number(document.getElementById("unitInput").value);

    let result = value / 1000;

    document.getElementById("unitResult").innerHTML =
    result + " km";

}

function kmToM() {

    let value =
    Number(document.getElementById("unitInput").value);

    let result = value * 1000;

    document.getElementById("unitResult").innerHTML = 
    result + " metre";
}


//****************** Income Tax Calculator *******************

function calculateTax() {

    let income =
    Number(document.getElementById("income").value);

    let tax;

    if (income <= 5000) {
        tax = income * 0.05;
    }

    else if (income <= 10000) {
        tax = income * 0.10;
    }

    else {
        tax = income * 0.15;
    }

    document.getElementById("taxResult").innerHTML =
    "Your tax is RM " + tax.toFixed(2);
    
}

