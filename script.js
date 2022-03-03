//Create a calculator object that stores all the required functions and variables 
//for the app to work
const calculator = {

    //Create a variable to store the display element
    display : document.querySelector('#display'),

    //Create a variable to store the display value
    displayValue : 00000000,
    //Create setter so that the display is updated when a new displayValue is set
    set DisplayValue(value){
        this.display.innerText = value;
        this.displayValue = value;
    },

    //Create a bool to record if the last button pressed was a number or not
    numberBtnPressedLast : false,

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

    //Create callback function that updates display with the pressed number.
    //Called when a number button is pressed.
    numberPress(value){
        //If the last button pressed was a number button, then append the new number to the
        //already existing number
        if (calculator.numberBtnPressedLast){
        calculator.DisplayValue = calculator.displayValue + value;
        }
        else{ //If the last button pressed is not a number button, then start a new number
            calculator.DisplayValue = value;
        }
        //Record that the last button pressed was a number button
        calculator.numberBtnPressedLast = true;
    },
}

//--------------------------------------
//------------Event Listeners-----------
//--------------------------------------

//Create node list of all number buttons and iterate through them and add event listeners
const numberBtns = document.querySelectorAll('.numberBtn');
numberBtns.forEach(button => button.addEventListener('click', numberPress));


//Create callback function that updates display with the pressed number.
//Called when a number button is pressed.
function numberPress(){
    calculator.numberPress(this.innerText);
}
