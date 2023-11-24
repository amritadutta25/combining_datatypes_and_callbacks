//================================
//Common programming principles
//================================

// Read this article on programming principles, focus on the following nine:

// DRY
// KISS
// Avoid creating a YAGNI
// Do the simplest thing that could possibly work
// Don't make me think
// Write code for the maintainer
// Single responsibility principle
// Avoid premature optimization
// Separation of concerns

// Write a ~1 sentence summary for each one
// DRY: Don't write a piece of code again and again, that is, avoid repetition. Instead use constructs like loops, functions etc.

//KISS: Keep the code simple and readable. It is easier to write and debug.

//Avoid creating a YAGNI: Only write code for the functionality you need, nothing extra.

//Do the simplest thing that could possibly work: Don't try to write complex work. try to write a simple code that will do the work. This makes it easy to debug and modify.

//Don't make me think: Write simple and readable code so that other people can understand what the code is doing with minimal effort.

// Write code for the maintainer: Add comments and write the code in a simple way so that in future you or someone new maintaining the code will not have difficulty understanding it.

//Single responsibility principle: A part of code such as a function or class should do only one single task. Create separate code components for separate tasks.

//Avoid premature optimization: First ensure the code is working as expected before trying to go into optimization. Once code is working (maybe be slow) then focus on optimizing it.

//Separation of concerns: Divide the code into different sections with each section pertaining to a separate functionality.


// Which ones surprise you (if any)?
//Avoid premature optimization principle was a surprise because I always assumed it was important not just to make the code work but make it work in an optimized way.

// Which one is currently giving you the most struggle?
//Write code for maintainer is difficult to implement because when I am writing the code it doesn't come naturally to me that other people looking at it might not understand. Because when I am writing the code I have been thinking about it for a long time but when someone new is looking at it for the first time, the code might not be easy to understand at first.


//=================
// Commenting Code
//=================
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// This is a function to calculate the sum of even numbers in a Fibonnaci series starting from 1 to the number(limit) passed as an argument to the function. Fibonnaci series is a series of numbers where the current number is the sum of previous two numbers.

// function f taking a parameter called l
const f = l => {

    // initializing es, p, c and n variables with intial value
    // es keeps track of the sum, p is the previous number, c is the current number and n is the next number
    let es = 0, p = 0, c = 1, n = 0

    // looping through all numbers from 1 to l
    while (c <= l) {
      // n(next number) = sum of previous two numbers, that is, c(current) + p(previous)
      n = c + p;

      // c(current) is updated to n(next), p(previous) is updated to c(current). This is doen to move forward in the series where the next number is the sum of current number plus previous number
      [c, p] = [n, c]

      //add the c(current  numbers) if it is even or else add 0 to the total sum
      es += (c % 2 === 0) ? c : 0
    }
    // return the sum of even numbers in the fibonacci series
    return es
  }
  
console.log(f(55))

const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
console.log(f2(55))

// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

//Function name could have been 'fibonacciEvenSum' - for finding sum of even numbers in a Fibonacci series.
// f2 function has variables names which is readbale and easily understood for the context of the code

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

//f2 because it has better variable names which makes it easy to understand the functionality and it more readable.

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

// const f = l => {
//     let es = 0, p = 0, c = 1, n = 0
//     while (c <= l) {
//       n = c + p
//       [c, p] = [n, c]
//       es += (c % 2 === 0) ? c : 0
//     }
//     return es
//   }
  
//   console.log(f(55))

//Yes the semi colon is necessary because without it the interpreter thinks the line to be n = c + p[c, p] = [n, c]. This gives a SyntaxError of invalid left-hand side in assignment.

