class Calculator {
  constructor(upperDisplay, lowerDisplay) {
    this.upperDisplay = upperDisplay;
    this.lowerDisplay = lowerDisplay;
    this.clear();
  }

  clear() {
    this.previousValue = "";
    this.currentValue = "";
    this.operand = undefined;
  }

  delete() {
    if (this.currentValue === "") return;
    this.currentValue = this.currentValue.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentValue.includes(".")) {
      return;
    }
    this.currentValue = this.currentValue.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentValue === "") return;
    if (this.previousValue !== "") {
      this.compute();
    }
    this.operand = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }

  compute() {
    if (!this.currentValue) return;
    let answer;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operand) {
      case "+":
        answer = prev + current;
        break;
      case "-":
        answer = prev - current;
        break;
      case "×":
        answer = prev * current;
        break;
      case "÷":
        answer = prev / current;
        break;
      default:
        return;
    }
    this.currentValue = answer;
    this.previousValue = "";
    this.operand = undefined;
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const numberDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if(isNaN(numberDigits)){
        integerDisplay = '';
    }else{
        integerDisplay = numberDigits.toLocaleString('en', {maximumFractionDigits : 0});
    }
    if(decimalDigits != null){
        return `${numberDigits}.${decimalDigits}`;
    }else{
        return integerDisplay;
    }
  }

  updateDisplay() {
    this.lowerDisplay.innerText = this.getDisplayNumber(this.currentValue);
    if (this.operand != null) {
      this.upperDisplay.innerText = `${this.getDisplayNumber(this.previousValue)} ${this.operand}`;
    } else {
      this.upperDisplay.innerText = '';
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteAll = document.querySelector("[data-all-clear]");
const equalButton = document.querySelector("[data-equal]");
const upperOutput = document.querySelector("[data-upper-output]");
const lowerOutput = document.querySelector("[data-lower-output]");
const deleteButton = document.querySelector("[data-delete]");

const calculator = new Calculator(upperOutput, lowerOutput);

numberButtons.forEach((node) => {
  node.addEventListener("click", () => {
    calculator.appendNumber(node.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((node) => {
  node.addEventListener("click", () => {
    calculator.chooseOperation(node.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

deleteAll.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
