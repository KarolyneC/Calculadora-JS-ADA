const previousOperationText = document.querySelector ("#previous-operation");
const currentOperationText = document.querySelector ("#current-operation");
const buttons = document.querySelectorAll ("#buttons-container button");

class Calculator {
    constructor (previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";

    }

    addDigit(digit) {
        console.log(digit);

        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }
        
        this.currentOperation = digit;
        this.updateScreen()
    }

    processOperation(operation) {

        if (this.currentOperationText.innerText === "" && operation !== "C") {

            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            
            return;
        }
        
        let operationValue;
        const previous = +this.previousOperationText.innerText;
        const current = +this.currentOperationText.innerText;

        switch(operation) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "-";
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);    
            default:
                return;
        }
    }

    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null) {
       
        console.log(operationValue, operation, current, previous)
    }

}

const calc = new Calculator (previousOperationText, currentOperationText);

buttons.forEach ((btn) =>{
    btn.addEventListener ("click", (e) =>  {
       const value = e.target.innerText; 

       if (+value >= 0 || value === ".") {
        calc.addDigit(value);
       } else {
        calc.processOperation(value);
       }
    });
});