function greatestCommonDivisor(num1, num2){
    // if you add a "string" or anything exept numbers then it will return a message to add a valid number .
    if(typeof num1!== "number" && typeof num2!=="number")
    return "can you please add a correct number"
    if(num2===0) {
        //we use Math.abs to return any number to positive even if the number is negative
    return Math.abs(num1)
    }
    else {
    num1=Math.abs(num1)
    num2=Math.abs(num2)
    return greatestCommonDivisor(num2,num1%num2)    
    }  
    }