// printing JS codes

// alert('Hello World!');
// console.log('Hello World!');
// console.error('This is an error');
// console.warn('This is a warning');

// variables

// We use let, const
// The difference between let and const is that in let you can reassign values for example: 
// let age =30;
// age = 31;

// console.log(age);
// this will give an error 
// const age =30;
// age = 31;

// console.log(age); 
// we use let when we know we are going to reassign values.
// we use const when we know we will not reassign variables

// data types 
// strings, numbers, boolean, null, undefined
// const name = 'John';  //string 
// const age = 30; //number 
// const rating =4.5; //number
// const isCool = true; // boolean
// const x = null; // boolean - this is not an object. though the console prints object, think of it as an error.
// const y = undefined; // undefined
// let z; //undefined 

//testing data types 
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// strings
// const name = 'John'; 
// const age = 30;
// Concatenation - strings 
// console.log('My name is' + ' ' + name + 'and I am' + ' ' + age); //old way
// Template String
// console.log('My name is ${name} and I am ${age}'); // new way
// const hello = 'My name is ${name} and I am ${age}';
// console.log(hello);
// NB: this template string did not work for me 
 
// properties and methods 
// a property doesn't have paranthesis. If it does, then it is a method
// a method is a function that is associated with an object 
// const s ='Hello World!';

// console.log(s.length);
// console.log(s.toUpperCase()); // converts to upper case
// console.log(s.toLowerCase()); // converts to lower case
// console.log(s.substring(0, 5)); // substring
// console.log(s.substring(0, 5).toUpperCase()); // converts substring to upper case
// console.log(s.split('')); // splits string into an array
// const m = 'technology, computers, it , code';
// console.log(m.split(', ')); // splits string into an array 

// Comments
// we use // for single line comment and /* */ for multiline comments
/* multi
line
comment */

// Arrays 
// Are variables that hold multiple values
// const numbers = new Array(1,2,3,4,5); // this is a constructor
// console.log(numbers);
// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits);
// console.log(fruits[1]); 
// fruits[3] = 'grapes';// adding items into an array 
// console.log(fruits);
// fruits.push('mangos'); // push items to the end of the array
// console.log(fruits);
// fruits.unshift('strawberries'); // adds items to the beginning of the list
// console.log(fruits);
// fruits.pop();  // takes the last item off
// console.log(fruits);
// console.log(Array.isArray(fruits));  // to check if something is in an array
// console.log(Array.isArray('hello'));  // to check if something is in an array
// console.log(fruits.indexOf('oranges')); // to get the index of a certain value

// Object literals 
// Are key value pairs 
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston', 
//         state: 'MA'
//     }
// }

// console.log(person);
// // alert(person); // not a good way to use it with these stuff 
// console.log(person.firstName); 
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// //destructuring
// // const { firstName, lastName } = person; // pulling out items from the object
// // console.log(firstName);
// const {firstName, lastName, address: {city}} = person;  // pulling out embedded objects
// console.log(city); 
// console.log(firstName);
// // add properties
// person.email = 'john@gmail.com';
// console.log(person);
// // Arrays of objects 
// const todos = [
//     {
//         id: 1, 
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2, 
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3, 
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];
// console.log(todos);
// console.log(todos[1].text);

// // json 
// const todoJSON = JSON.stringify(todos); // converting to JSON
// console.log(todoJSON);

// // LOOPS
// // For 
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }
// for(let i = 0; i < 10; i++){
//     console.log('For loop Number: ' + i);
// }
// // while
// let i = 0;
// while(i < 10){
//     console.log('while loop Number: ' + i);
//     i++;
// }
// // Looping through arrays 
// for(let i = 0; i < todos.length; i++){
//     console.log('For loop Number: ' + i);
// } 
// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }
// for(let todo of todos){
//     console.log(todo);
// }  
// for(let todo of todos){
//     console.log(todo.text);
// }  
// for(let todo of todos){
//     console.log(todo.id);
// }  

// // High order array methods
// // forEach, map, filter
// // forEach
// todos.forEach(function(todo){
//     console.log(todo.text);
// });
// // map
// const todoText = todos.map(function(todo){
//     return todo.text;
// });

// console.log(todoText);
// // filter 
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted == true;
// });

// console.log(todoCompleted);

// const todoCompleted2 = todos.filter(function(todo){
//     return todo.isCompleted == true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted2); // this is really powerful. this is functional programming. 


// Conditionals
// let x = 10;

// if(x == 10){ // === matches the datatypes
//     console.log('x is 10');
// }

// x = 20;
// if(x === 10){ // === matches the datatypes
//     console.log('x is 10');
// }else{
//     console.log('x is NOT 10');
// }

// if(x === 10){ // === matches the datatypes
//     console.log('x is 10');
// } else if(x > 10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }

// x = 10;
// if(x === 10){ // === matches the datatypes
//     console.log('x is 10');
// } else if(x > 10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }

// x = 4;
// if(x === 10){ // === matches the datatypes
//     console.log('x is 10');
// } else if(x > 10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }

// x = 4;
// y = 11;
// if(x > 5 || y > 10){ // === matches the datatypes
//     console.log('x is more than 5 or y is more than 10');
// } 
// x=6;
// if(x > 5 && y > 10){ // === matches the datatypes
//     console.log('x is more than 5 and y is more than 10');
// } 

// Itenary operator 
/*
let x = 9;
let color = x > 10 ? 'red' : 'blue';
console.log(color);
x = 11;
color = x > 10 ? 'red' : 'blue';
console.log(color);

// switches

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
    }

x = 9;
color = x > 10 ? 'red' : 'blue';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
    }

x = 9;
color = 'green';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
    }
*/

// Functions
// function addNum(num1, num2) {
//     console.log(num1 + num2);
// }
// addNum(); // returns NaN - not a number

// function addNums(num1, num2) {
//     console.log(num1 + num2);
// }
// addNums(5, 4);

// function addNums(num1=1, num2=1) {
//     console.log(num1 + num2);
// }
// addNums();

// function addNums(num1=1, num2=1) {
//     console.log(num1 + num2);
// }
// addNums(5, 5); // overwrites existing parameters 

// function addNums(num1=1, num2=1) {
//     return(num1 + num2);
// }
// console.log(addNums(5, 5)); // this is the normal way to use functions. we return then console the statement that calls the function

// let addNums = (num1, num2)=>{
//     return num1 + num2;
// }
// console.log(addNums(5,5));
// // still produces the same results

// addNums = (num1, num2)=>console.log(num1 + num2);
// (addNums(5,5));

// addNums = (num1, num2)=>num1 + num2;
// console.log(addNums(5,5)); // same thing 

// addNums = num1=>num1 + 5;
// console.log(addNums(5)); // same thing 

// OBJECT ORIENTED PROGRAMMING 