const numberBtn = document.querySelectorAll(".number-btn");
const btnAC = document.querySelector('#AC');
const btnPosneg = document.querySelector('#Posneg');
const btnPercent = document.querySelector('#Percent');
const operatorBtn = document.querySelectorAll(".operator-btn")
const btnPeriod = document.querySelector('#period');
const display = document.querySelector(".display")
const equalsBtn = document.querySelector("#equalOperator")


let operand1 = ""
let operand2 = ""
let operator = ""
let result;
let operatorClicked = false

numberBtn.forEach(button => {
    button.addEventListener("click", () => {

        let toScreen = button.textContent

        if(!operatorClicked){
            operand1 += toScreen
        }else{
            operand2 += toScreen
        }
        

        displayDisplay(toScreen)

    })
});

btnAC.addEventListener("click",clearDisplay)

operatorBtn.forEach(operators =>{

    operators.addEventListener("click", () =>{
        switch(operators.id){
            case "addOperator":
                operator = "Addition"
                console.log(operator)
                break;
            case "subtractOperator":
                operator = "Subtract"
                console.log(operator)
                break;
            case "multiplyOperator":
                operator = "Multiply"
                console.log(operator)
                break;
            case "divideOperator":
                operator = "Divide"
                console.log(operator)
                break;
        }

        
        operatorClicked = true;

        clearDisplay();
    })
})


equalsBtn.addEventListener("click",() =>{
    switch(operator){
        case "Addition":
            result = add(parseFloat(operand1), parseFloat(operand2))
            break;
        case "Subtract":
            result = subtract(parseFloat(operand1), parseFloat(operand2))
            break;
        case "Multiply":
            result = multiply(parseFloat(operand1), parseFloat(operand2))
            break;
        case "Divide":
            result = divide(parseFloat(operand1), parseFloat(operand2)).toFixed(2)
            break;
    }

    clearDisplay()
    displayDisplay(result)
    operand1 = ""
    operand2 = ""
    result = ""
    operatorClicked = false
    
})





function displayDisplay(toScreen){
    display.textContent += toScreen
}

function clearDisplay(){
    display.textContent = ""
}



function add(num1, num2){
    return num1 + num2
}


function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num2 !== 0 ? num1 / num2 : "Error";  // Avoid division by zero
}
