// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane
// Then we check if Dane is an exact match to Mary then,
// we would console.log 'Hi Mary!'
// If Dane is not an exact match to Mary
// We would console.log 'How do you do?'
// We would console.log 'How do you do?' because Dane is not an exact match to Mary


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We have a variable called secret
//  We have a variable called code and set it to be 123
//  If code is an exact match for 123, then secret would equal 'super' and code would equal 123 muliplied by 2
// If code 123 is greater than 250 then the variable secret would equal 'duper'
// then we would console.log(secret)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We have a variable isStudent that equals true
// We have a variable age that we set to equal thirty-four
// We have a variable zip that is set to number 55407
// if isStudent is a absolutely true and 55407 is greater than 80000 then we 
// would console.log 'You're a student on the West Coast!'
// or else if isStudent is an exact match or 34 < 30 then
// we would console.log(' What are your hobbies?' )
// otherwise if isStudent is an exact match to true than
//we would console.log(' Welcome to Prime')
// if none of these conditions are true
// We would console.log( ' How about the weather?')
// We would console.log( 'Welcome to Prime!' because isStudent is true!)

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// fix colorOne = purple. The instructions say colorOne and colorTwo = 'purple'. 
// It should read console.log( ' colorOne = purple and colorTwo =purple ' )

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// It should read let time = 4;
const time = 4;

//It should read if (temp > 39 && time >= 4) 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

It should read if (age >= minAge) {
  console.log('enter')
}
// We would delete the console.log 'no entry' becuase it is not mentioned in the problem
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

