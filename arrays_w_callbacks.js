//1. Make a function add that takes two arguments (numbers) and sums them together

function add(x,y)
{
    return x + y
}

// 2. Make a function subtract that takes two arguments (numbers) and subtracts them

function subtract(x,y)
{
    return x - y
}

//3. Make a function multiply that takes two arguments and multiplies them
function multiply(x,y)
{
    return x*y
}

//4. Make a function divide that takes two arguments and divides them
function divide(x,y)
{
    return x/y
}

//5.Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback)

function calculate(num1, num2, operates)
{
    //6.Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
    const result = operates(num1, num2)
    return result
}

//7. Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(1, 2, add))
console.log(calculate(1, 2, subtract))
console.log(calculate(1, 2, multiply))
console.log(calculate(1, 2, divide))