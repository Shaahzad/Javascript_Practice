
// Q 1   var let const

// var Name = "shahzad"
// let Name = "shahzad"
// const Name = "shahzad"

// console.log(Name)
// console.log("Window Global", window.Name)


// function hello(){
//     var Name = 'shahzad'
//     console.log(Name)
// }
// hello()
// console.log(Name)


// if(true){
//     var Name1 = "shahzad"
//     let Name2 = "shahzad"
//     const Name3 = "shahzad"
//     console.log(Name2)
//     console.log(Name3)
// }

// console.log(Name1)
// console.log(Name2)
// console.log(Name3)


// var Name = 'shahzad'
// let Name = 'shahzad'
// const Name = 'shahzad'

// function hello(){
//     console.log(Name)
//     console.log(window.Name)
// }
// hello()



// Q2   Hoisting

// console.log(Name)

// var Name = "shahzad"

// console.log(Name)

// console.log(Mylet)

// let Mylet = 'shahzad'

// console.log(Mylet)

// hello()
// function hello(){
//     console.log("first")
// }
 
// myfunction()
// var myfunction = function(){
//     console.log("first")
// }
// myfunction()

// Q3   Difference between == and ===


// let a = undefined
// let b = null
// console.log(a == b)
// console.log(a === b)


// let a = true
// let b = false
// console.log(a == b)
// console.log(a === b)


// let a = "5"
// let b =  5
// console.log(a == b)
// console.log(a === b)

// let a = 1
// let b = true
// console.log(a == b)
// console.log(a === b)

// Q4   Arrow Functions


// const person = {
//     Name: "shahzad",
//     greet: ()=>{
//         setTimeout(function(){
//             console.log(this.Name)
//         },1000)
//     }
//     }
// person.greet()


// const person1 = {
//     Name: "shahzad",
//     greet: ()=>{
//     console.log(this.Name)
//     }
//     }
// person1.greet()


// const person2 = {
//     Name: "shahzad",
//     greet: function (){
//         console.log(this.Name)
//     }
//     }
// person2.greet()

// const person3 = {
//     Name: "shahzad",
//     greet: function (){
//         setTimeout(()=>{
//             console.log(this.Name)
//         },0)
//     }
//     }
// person3.greet()


// Q5   Closures

// function counter (){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }
// const count = counter()
// console.log(count())
// console.log(count())
// console.log(count())

// Q6  difference between null and undefined?

// let a = null
// let b = undefined

// console.log(a == b)
// console.log(a === b)
// console.log(typeof a)
// console.log(typeof b)

// Q7   Event Loop


// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 2");
// });

// console.log("End");

// Q8  Promises, and how do you handle asynchronous code in JavaScript?

//  async function fetchdata(){
//     try {
//     let Data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let result = await Data.json()
//     console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchdata()



// Q9  What is the difference between map(), filter(), and reduce()?

// const NewArr = [1,2,3,4,5,6,7,8,9,10]

// const modifyArr = NewArr.map((num)=> num * 2)

// console.log(NewArr)
// console.log(modifyArr)


// const NewArr = [1,2,3,4,5,6,7,8,9,10]

// const FilterArr = NewArr.filter((num)=> num > 5)

// console.log(NewArr)
// console.log(FilterArr)


// const NewArr = [1,2,3,4,5,6,7,8,9,10]

// const OneValue = NewArr.reduce((acc,curr) => {
//  return acc + curr
// },0)

// console.log(NewArr)
// console.log(OneValue)


// Q10 Explain how this keyword works in JavaScript. How does it behave in different contexts?

// const person = {
//     Name: "shahzad",
//     greet: function (){
//         console.log(this.Name)
//     }
// }

// const person2 = {Name: "Hafiz Shahzad"}

// person.greet.call(person2)

// const Name1 = {Name: "shahzad"}
// const Name2 = {Name: "Hafiz Shahzad"}

// function concat () {
//     console.log(this.Name)
// }

// concat.apply(Name1)

// function greet (Arg1, Arg2) {
//    console.log(Arg1 + " " + this.Name  +" "+ Arg2)
// }

// const person = {Name: "Allice"}

// greet.apply(person, ['Hello', 'World'])

// 'use strict'
// const person = {Name: "shahzad"}

// function greet (){
// console.log(this.Name)
// }

// const greet1 = greet.bind(person)
// greet1()



//  Basics 
//  Explain var, let, and const. How are they different?  ✅
// What is hoisting in JavaScript? ✅
// What is the difference between == and ===? ✅
// What is the purpose of arrow functions (=>) in JavaScript? How do they differ from regular functions? ✅
// Explain closures in JavaScript with an example. ✅
// What is the difference between null and undefined? ✅
// How does the JavaScript event loop work? ✅
// What are promises, and how do you handle asynchronous code in JavaScript? ✅
// What is the difference between map(), filter(), and reduce()? ✅
// Explain how this keyword works in JavaScript. How does it behave in different contexts? ✅
// What is the purpose of strict mode in JavaScript, and how do you enable it?
// What are JavaScript template literals, and how do they work?
// Explain the concept of prototypal inheritance in JavaScript.
// What is the purpose of the async/await syntax in JavaScript?
// How do you handle errors in JavaScript using try/catch blocks?
