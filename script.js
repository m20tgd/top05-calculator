//Create a calculator object that stores all the required functions and variables 
//for the app to work
const calculator = {
    //Create a function that receives two numbers (or string numbers) 
    //and returns their sum
    add : function(a,b){
        return parseFloat(a) + parseFloat(b); 
    },
    //Create a function that receives two numbers (or string numbers) 
    //and returns the value of the second subtracted from the first 
    subtract : function(a,b){
        return parseFloat(a) - parseFloat(b);
    },
    //Create a function that receives two numbers (or string numbers) 
    //and returns their product
    multiply : function(a,b){
        return parseFloat(a) * parseFloat(b);
    },
    //Create a function that receives two numbers (or string numbers) 
    //and returns the value of the first value divided by the second
    divide : function(a,b){
        return parseFloat(a) / parseFloat(b);
    },
    //Create function that receives two numbers and an operator and
    //passes the numbers to the relevant function and returns the return value
    operate : function(a,b,operator){
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
