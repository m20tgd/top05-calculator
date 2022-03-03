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
    selectedOperator : null,

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
        //Reset the calculator if the last button pressed was equals as a new calculation
        //is being started
        if (this.lastBtnType === 'equals'){
            this.clear();
        }
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
        //Check to see if the last button pressed was anything other than a number, 
        //if it was, then the calculation can be skipped and just the operator type will be changed.
        if (this.lastBtnType === 'number'){
                //If this is the first operator button pressed and selectedOperator is null, 
                //set it to '+' 
                if (this.selectedOperator === null){
                    this.selectedOperator = '+';
                }
                //Set operandB to the display value, operate on it using the previously 
                //selected operator and assign 
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
        //Return with no action if selectedOperator is null
        if (this.selectedOperator === null) return;

        if (this.lastBtnType != 'equals'){
            //Set operandB to the display value, operate on it using the previously 
            //selected operator  and assign 
            //the result to operandA and display this in the display.
            this.operandB = this.display.innerText;
            this.operandA =this.operate(this.operandA, this.operandB, this.selectedOperator);
            this.display.innerText = this.operandA;
        }
        //If the equals button was pressed last time, just repeat the calculation with the same 
        //operator and operandB.
        else{
            this.operandA =this.operate(this.operandA, this.operandB, this.selectedOperator);
            this.display.innerText = this.operandA;
        }
        this.lastBtnType = 'equals'
    },

    //Create a function to reset all of the variables
    clear(){
        this.display.innerText = '0';
        this.currentNumber = '0';
        this.lastBtnType = null;
        this.operandA = '0';
        this.operandB = '0';
        this.selectedOperator = null;
    },
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
equalsBtn.addEventListener('click', equalsPress);
//Create callback function that passes the operator value to the calculator
function equalsPress(){
    calculator.equalsPress();
}

//Create a variable for the clear button
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearPress);
//Create a function that calls the clear function of the calculator
function clearPress(){
    calculator.clear();
}
