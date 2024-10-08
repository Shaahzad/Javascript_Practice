
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

// Q11 What is the purpose of strict mode in JavaScript, and how do you enable it?
// 'use strict'
// x = 10;
// console.log(x);
// function hello(){
//     console.log(this)
// }
// hello()
// 
// let public = 24;
// console.log(public);
// function hello(){
//     x= 10;
//     console.log(x)
// }
// hello()
// console.log(x)

// Q12 What are JavaScript template literals, and how do they work?

// const Name = 'shahzad';
// const lastname = 'memon';
// const FullName = `My Name Is ${Name} ${lastname}`
// console.log(FullName)


// function Hello(Fname, Lname){
//    console.log(`My Name Is ${Fname} ${Lname}`)
// }
// const Name = 'shahzad'
// const LastName = 'Memon'
// Hello(Name,LastName)


// Q13 Explain the concept of prototypal inheritance in JavaScript.


// const personPrototype = {
//     greet: function(){
//         console.log(`Hello, My Name Is ${this.Name}`)
//     }
// }

// const person1 = Object.create(personPrototype)
// person1.Name = "shahzad"
// person1.greet()


// function Person (Name,age){
//     this.Name = Name;
//     this.age = age;
// }

// Person.prototype.greet = function(){
//     console.log(`Hello, My Name Is ${this.Name} and I am ${this.age} years old`)
// }

// const Person1 = new Person("shahzad", 24)
// const Person2 = new Person("Hafiz", 24)

// Person1.greet()
// Person2.greet()

// Q14 What is the purpose of the async/await syntax in JavaScript?

// async function fetchData(){
//     try {
//         const Data = await fetch('https://jsonplaceholder.typicode.com/users/')
//         const result = await Data.json()
//         console.log(result)    
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/users/')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

// fetchData()


// Q15  How do you handle errors in JavaScript using try/catch blocks?

// async function fetchData(){
//     try {
//         const Data = await fetch('https://jsonplaceholder.typicode.com/users/')
//         console.log(Data)
//         let result = await Data.json()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()


// Advance Javascript

// What are JavaScript generators, and how do they work? Can you provide an example?

// function *generate(val){
//     for(let i = 0; i < val.length; i++){
//         if(val[i] === 3){
//             continue
//         }
//         yield val[i]
//     }
// }

// const arr = [1,2,3,4,5]
// const Result = generate(arr)
// // console.log(Result.next().value)
// // console.log(Result.next().value)
// // console.log(Result.next().value)
// // console.log(Result.next().value)
// console.log(Result.next())
// console.log(Result.next())
// console.log(Result.next())
// console.log(Result.next())

// Q1 What are higher-order functions in JavaScript, and can you provide an example?

// const arr = [1,2,3,4,5]

// const maparr = arr.map((element)=>{
//      return element * 2    
// })

// console.log(maparr)

// const filterarr = arr.filter((element)=>{
//     return element > 2
// })

// console.log(filterarr)

// const Reducearr = arr.reduce((a,b)=>{
//    return  a+b
// },0)

// console.log(Reducearr)


// function multiply(factor){
//     return function(num){
//        return num * factor
//     }
// }

// const multiplyByTwo = multiply(2)
// const multiplyByThree = multiply(3)

// console.log(multiplyByTwo(5))
// console.log(multiplyByThree(5))


// Q2 Explain how JavaScript's call(), apply(), and bind() methods work. How are they different?

// const person = {
//     firstName: 'Shahzad',
//     lastName: 'Memon',
//     fullName: function(){
//         console.log(this.firstName + ' ' + this.lastName)
//     }
// }
// const person2 = {
//     firstName: 'Hafiz',
//     lastName: 'Shahzad',
// }

// person.fullName()
// person.fullName.call(person2)

// function sum(a,b){
//     console.log(a + b)
// }

// sum.apply(null, [2,3])

// const person = {
//     FirstName: 'Shahzad',
//     LastName: 'Memon',
//     FullName: function(){
//         console.log(this.FirstName + ' ' + this.LastName)
//     }
// }

// const person2 = {
//     FirstName: 'Hafiz',
//     LastName: 'Shahzad',
// }

// const fullName = person.FullName.bind(person2)
// fullName()


// const person1 = {
//     Name: "shahzad",
//     greet: function(greeting, greeting2){
//         console.log(greeting + " " + greeting2 + " " + this.Name)
//     }
// }


// const person2 = {
//     Name: "Hafiz",
// }

// person1.greet.call(person2, 'Hello')
// person1.greet.apply(person2, ['hello', 'Good Morning'])
// const boundgreet = person1.greet.bind(person2, 'Hello')
// boundgreet('Good Morning')


// Q3 Explain the concept of closures and how they are used in event handlers or callbacks.

// function outerFunction(name){
//     return function innerFunction(name1){
//       console.log(`outer function ${name}`)
//       console.log(`inner function ${name1}`)
//     }
// }

// const closurefunction = outerFunction("shahzad")
// closurefunction("hafiz")

// function fetchData(url){
//     setTimeout(()=>{
//         console.log(`fetching data ${url}`)
//     },1000)
// }
// fetchData('https://jsonplaceholder.typicode.com/users/')


// Q4  What is the difference between deep cloning and shallow cloning in JavaScript? How can you implement each?

// const original = {
//     name: 'shahzad',
//     age: 25,
//     address: {
//         city: 'karachi',
//         country: 'pakistan'
//     }
// }

// const shallowcopy = Object.assign({}, original)

// shallowcopy.address.city = 'lahore'

// console.log(original.address.city)
// console.log(shallowcopy.address.city)

// const original = {
//     name: 'shahzad',
//     age: 25,
//     address: {
//         city: 'karachi',
//         country: 'pakistan'
//     }
// }

// const obj1 = Object.assign({}, original)
// obj1.name = 'hafiz'
// console.log(obj1)
// console.log(original)

// const original = {
//     name: 'shahzad'
// }

// const obj1 = Object.assign({}, original)
// obj1.name = 'hafiz'
// console.log(obj1)
// console.log(original)


//  Advanced 
//  What are higher-order functions in JavaScript, and can you provide an example? ✅
// Explain how JavaScript's call(), apply(), and bind() methods work. How are they different? ✅
// Explain the concept of closures and how they are used in event handlers or callbacks. ✅
// What is the difference between deep cloning and shallow cloning in JavaScript? How can you implement each? ✅
// What are JavaScript generators, and how do they work? Can you provide an example?
// What are proxies in JavaScript, and how can you use them to intercept and customize operations on objects?
// Explain the concept of the "event delegation" model in JavaScript.
// What is the difference between synchronous and asynchronous execution in JavaScript? How does the event loop manage this?
// What is memoization in JavaScript, and how can you implement it to optimize performance?
// What are Web Workers, and how do they help with JavaScript concurrency?
// Explain the module pattern in JavaScript. How does it help in organizing code?
// What is currying in JavaScript, and why would you use it?
// How does the JavaScript garbage collection mechanism work? What are weak references, and how do they relate to memory management?
// What is the Temporal Dead Zone in JavaScript, and how does it relate to variable declarations?
// What are WeakMaps and WeakSets in JavaScript? How do they differ from regular Map and Set objects? 


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
// What is the purpose of strict mode in JavaScript, and how do you enable it? ✅
// What are JavaScript template literals, and how do they work? ✅
// Explain the concept of prototypal inheritance in JavaScript. ✅
// What is the purpose of the async/await syntax in JavaScript? ✅
// How do you handle errors in JavaScript using try/catch blocks? ✅


