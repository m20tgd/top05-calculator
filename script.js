//Create a calculator object that stores all the required functions and variables 
//for the app to work
const calculator = {

    //Create a variable to store the display element
    display : document.querySelector('#display'),

    //Create a variable to store the display value
    displayValue : 00000000,
    //Create setter so that the display is updated when a new displayValue is set
    set displayValue(value){
        this.display.innerText = value;
    },

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
    }
}

//--------------------------------------
//------------Event Listeners-----------
//--------------------------------------

//Create node list of all number buttons and iterate through them and add event listeners
const numberBtns = document.querySelectorAll('.numberBtn');
console.log(numberBtns);
for (let button of numberBtns){
    button.addEventListener('click', numberPress);
}


//Create callback function that updates display with the pressed number.
//Called when a number button is pressed.
function numberPress(){
    calculator.displayValue = this.innerText;
}
