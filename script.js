//Create a calculator object that stores all the required functions and variables 
//for the app to work
const calculator = {

    //Create a variable to store the display element
    display : document.querySelector('#display'),
    //Create a variable to store the display value
    currentNumber: '0',
    //Create a variable to record last button type and set to null.
    //Options are either 'number', 'operator' or 'equals'
    lastBtnType : null,
    //Create variables to store the operands used for the sums
    operandA : '0',
    operandB : '0',
    //Create a variable to store the selected operator and set to null
    selectedOperator : '+',

    //Create a function that receives two numbers (or string numbers) 
    //and returns their sum
    add(a,b){
        return parseFloat(a) + parseFloat(b); 
    },
    //Create a function that receives two numbers (or string numbers) 
    //and returns the value of the second subtracted from the first 
    subtract(a,b){
        return parseFloat(a) - parseFloat(b);
    },
    //Create a function that receives two numbers (or string numbers) 
    //and returns their product
    multiply(a,b){
        return parseFloat(a) * parseFloat(b);
    },
    //Create a function that receives two numbers (or string numbers) 
    //and returns the value of the first value divided by the second
    divide(a,b){
        return parseFloat(a) / parseFloat(b);
    },
    //Create function that receives two numbers and an operator and
    //passes the numbers to the relevant function and returns the return value
    operate(a,b,operator){
        //Switch the operator and call the relevant function and return value
        switch(operator){
            case '+' : return this.add(a,b);
            case '-' : return this.subtract(a,b);
            case '*' : return this.multiply(a,b);
            case '/' : return this.divide(a,b);
            default : return 'ERROR';
        }
    },

    //Create function that updates display with the pressed number.
    //Called when a number button is pressed.
    numberPress(value){
        //If the last button pressed was a number button, then append the new number to the
        //already existing number
        if (this.lastBtnType === 'number'){
        this.currentNumber= this.currentNumber + value;
        }
        else{ //If the last button pressed is not a number button, then start a new number
            this.currentNumber = value;
        }
        //Update display with new currentNumber
        this.display.innerText = this.currentNumber;
        //Record that the last button pressed was a number button
        this.lastBtnType = 'number';
    },

    //Create a function that is called when an operator button is pressed. It is passed an
    //operator value.
    operatorPress(value){
        //Check to see if the last button pressed was an operator, if it was, then the calculation
        //can be skipped and just the operator type will be changed.
        if (this.lastBtnType != 'operator'){
                //Set operandB to the display value, operate on it using the previously 
                //selected operator ('+' by default) and operandA (0 by default) and assign 
                //the result to operandA and display this in the display.
                this.operandB = this.display.innerText;
                this.operandA =this.operate(this.operandA, this.operandB, this.selectedOperator);
                this.display.innerText = this.operandA;
        }
        //Change selected operator to the on pressed
        this.selectedOperator = value;
        //Show the last button type pressed as operator
        this.lastBtnType = 'operator';
    },

    equalsPress(){
        if (this.lastBtnType != 'equals'){
            //Set operandB to the display value, operate on it using the previously 
            //selected operator ('+' by default) and operandA (0 by default) and assign 
            //the result to operandA and display this in the display.
            this.operandB = this.display.innerText;
            this.operandA =this.operate(this.operandA, this.operandB, this.selectedOperator);
            this.display.innerText = this.operandA;
        }
        else{
            console.log(this.operandB);
            this.operandA =this.operate(this.operandA, this.operandB, this.selectedOperator);
            this.display.innerText = this.operandA;
        }
        this.lastBtnType = 'equals'
    }
}

//--------------------------------------
//------------Event Listeners-----------
//--------------------------------------

//Create node list of all number buttons and iterate through them and add event listeners
const numberBtns = document.querySelectorAll('.numberBtn');
numberBtns.forEach(button => button.addEventListener('click', numberPress));
//Create callback function that passes the button value to the calculator
function numberPress(){
    calculator.numberPress(this.innerText);
}

//Create a node list of all operator buttons and iterate through them and add event listeners
const operatorBtns = document.querySelectorAll('.operatorBtn');
operatorBtns.forEach(button => button.addEventListener('click', operatorPress));
//Create callback function that passes the operator value to the calculator
function operatorPress(){
    calculator.operatorPress(this.innerText);
}

//Create a variable for the equals button
const equalsBtn = document.querySelector('#equalsBtn');
console.log(equalsBtn);
equalsBtn.addEventListener('click', equalsPress);
//Create callback function that passes the operator value to the calculator
function equalsPress(){
    calculator.equalsPress();
}

