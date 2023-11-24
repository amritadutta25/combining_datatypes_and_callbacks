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


//================================
//Function definition placement
//================================

//Good practice is to have function definitions before the functions are called
const bar = () => {
    console.log('bar here');
}

const foo = () => {
    console.log('foo here');
}

bar();
foo();

//==================
//Error Reading
//==================

// foo();

// const foo ()=>{
//     console.log('hi');
// }

//This produces 'SyntaxError: Missing initializer in const declaration'. Variable foo is a 'const' variable which means its value cannot be changed. So while declaring a const variable you have to initiliaze it with a value. 
//Here, a '=' (equal to) operator is missing, hence, it throws a syntax error saying a const variable has not been initialized with a value during declaration.
// Corrected code:

// const foo = ()=>{
//     console.log('hi');
// }
// foo();


//==================================
//Array Methods with Callbacks
//==================================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
//1. Determine if every number is greater than or equal to 0
const everyNum = nums.every((num) => {
    return num >= 0 })
console.log(everyNum)

//2. determine if every word shorter than 8 characters
const everyPanagram = panagram.every((word) => {
    return word.length < 8 })
console.log(everyPanagram)

// Filter
//1. filter the array for numbers less than 4
const filterNums = nums.filter((num) => {
    return num < 4
}) 
console.log(filterNums)

//2. filter words that have an even length
const filterPanagram = panagram.filter((word) => {
    return word.length % 2 === 0
}) 
console.log(filterPanagram)

//Find
//1. Find the first value divisible by 5
const findNums = nums.find((num) => {
    return num%5 === 0
})
console.log(findNums)

//2. find the first word that is longer than 5 characters
const findPanagram = panagram.find((word) => {
    return word.length > 5
})
console.log(findPanagram) // no word has more than 5 characters

//Find Index
//1. find the index of the first number that is divisible by 3
const findIndexNums = nums.findIndex((num) => {
    return num%3 === 0
})
console.log(findIndexNums)


//2. find the index of the first word that is less than 2 characters long
const findIndexPanagram = panagram.findIndex((word) => {
    return word.length < 2
})
console.log(findIndexPanagram)


// For Each
//1. console.log each value of the nums array multiplied by 3
nums.forEach((num) => {
    console.log(num*3)
})

//2.  console.log each word with an exclamation point at the end of it
panagram.forEach((word) => {
    console.log(`${word}!`)
})


//Thought Questions

// What happened to the original array?
// Original array is still the same. It is not altered


//Map
//1. make a new array of each number multiplied by 100

const numArray = nums.map((num) => {
    return num*100
})
console.log(numArray)

//2. make a new array of all the words in all uppercase
const wordArray = panagram.map((word) => {
    return word.toUpperCase()
})
console.log(wordArray)

//Some
//1. Find out if some numbers are divisible by 7
const someNums = nums.some((num) => {
    return num%7 === 0
})
console.log(someNums)

//2. Find out if some words have the letter a in them
const somePanagram = panagram.some((word) => {
    return word.includes('a')
})
console.log(somePanagram)