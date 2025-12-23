
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


// Q1
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }

//   sayHi();

// Q2
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

// Q3
// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };

//   console.log(shape.diameter());
//   console.log(shape.perimeter());

// Q4
// console.log(+true)
// console.log(!'Lydia')

// Q5

// const bird = {
//     size: 'small',
//   };

//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };
// console.log(mouse.bird.size)
// console.log(mouse[bird.size])
// console.log(mouse[bird["size"]] )

// Q6

// let c = { 
//     greeting: 'Hey!' 
// };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);
// console.log(c.greeting);


// Q7

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// Q8

// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }

//     constructor({ newColor = 'green' } = {}) {
//       this.newColor = newColor;
//     }
//   }

//   const freddie = new Chameleon({ newColor: 'purple' });
//   console.log(freddie.colorChange('orange'));

// Q9

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);


// Q10

// function bark() {
//     console.log('Woof!');
//   }

//   bark.animal = 'dog';
//   bark.fruit = 'apple';
//   console.log(bark.animal,bark.fruit);


// Q11

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };

//   console.log(member.getFullName());

// Q12

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah = Person('Sarah', 'Smith');

//   console.log(lydia);
//   console.log(sarah);



// Q13

// What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling


// Q14

// All object have prototypes.


// Q15

// function sum(a, b) {
//     return a + b;
//   }

// console.log(sum(1, '2'))


// Q16

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);


// Q17

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }

//   const person = 'Lydia';
//   const age = 21;

//   getPersonInfo`${person} is ${age} years old`;

// Q18

// function checkAge(data) {
//     if (data === {age: 18}) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }

//   checkAge({ age: 18 });


// Q19

// function getAge(...args) {
//     console.log(typeof args);
//   }

//   getAge(21,23,25);


// Q20

// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
//   }

//   getAge();



// Q21

// const sum = eval('10*10+5');
// console.log(sum);

// Q22

// sessionStorage.setItem('cool_secret', 123);

// A: Forever, the data doesn't get lost.
// B: When the user closes the tab.
// C: When the user closes the entire browser, not only the tab.
// D: When the user shuts off their computer.


// Q23

// var num = 8;
// var num = 10;

// console.log(num);

// Q24

// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty('1');
// obj.hasOwnProperty(1);
// set.has('1');
// set.has(1);


// Q25

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);


// Q26

// The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.
// A: true
// B: false
// C: it depends


// Q27

// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }

// Q28

// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!';
//   };

//   const name = 'Lydia';

//   console.log(name.giveLydiaPizza())

// Q29

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// console.log(a,b,c)

// Q30

// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();


// Q31

/* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> */


// Q32

/* <div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div> */

// Q33

// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));


// Q34

// function sayHi() {
//     return (() => 0)();
//   }

//   console.log(typeof sayHi());

// Q35

// Which of these values are falsy?
// 0;
// new Number(0);
// ('');
// (' ');
// new Boolean(false);
// undefined;

// There are 8 falsy values:

// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.


// Q36

// console.log(typeof typeof 1)


// Q37

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);


// Q38

// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       (x = 1), (y = 2);
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();


// Q39

// Everything in JavaScript is either a...
// A: primitive or object
// B: function or object
// C: trick question! only objects
// D: number or object
// JavaScript only has primitive types and objects.
// Primitive types are boolean, null, undefined, bigint, number, string, and symbol.
// What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that 'foo'.toUpperCase() evaluates to 'FOO' and does not result in a TypeError. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. String, and then immediately discard the wrapper after the expression evaluates. All primitives except for null and undefined exhibit this behavior.


// Q40

// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );

// Q41
// console.log(!!null)
// console.log(!!'')
// console.log(!!1)

// Q42
// setInterval(() => console.log('Hi'), 1000);


// Q43
// console.log([...'Lydia'])

// Q44
// function* generator(i) {
//   yield i;
//   yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);

// Q45
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// Q46
// let person = { name: 'Lydia' };
// const members = [person];
// person = null;

// console.log(members);

// Q47
// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

// Q48
// console.log(3 + 4 + '5');

// // Q49
// const num = parseInt('7*6', 10);
// console.log(num)

// Q50
// let result = [1, 2, 3].map(num => {
//   if (typeof num === 'number') return;
//   return num * 2;
// });

// console.log(result)

// Q51
// function getInfo(member, year) {
//   member.name = 'Lydia';
//   year = '1998';
// }

// const person = { name: 'Sarah' };
// const birthYear = '1997';

// getInfo(person, birthYear);

// console.log(person, birthYear);


// Q52

// function greeting() {
//   throw 'Hello world!';
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log('It worked!', data);
//   } catch (e) {
//     console.log('Oh no an error:', e);
//   }
// }

// sayHi();


// Q53
// function Car() {
//   this.make = 'Lamborghini';
//   return { make: 'Maserati' };
// }

// const myCar = new Car();
// // console.log(myCar)
// console.log(myCar.make);

// Q54

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

// Q55
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Dog.prototype.bark = function() {
//   console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog('Mara');

// pet.bark();

// delete Dog.prototype.bark;

// pet.bark();


// Q56
// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);

// Q57

// counter.js
// let counter = 10;
// export default counter;

// // index.js
// import myCounter from './counter';

// myCounter += 1;

// console.log(myCounter);

// An imported module is read-only: you cannot modify the imported module. Only the module that exports them can change its value.

// When we try to increment the value of myCounter, it throws an error: myCounter is read-only and cannot be modified.



// Q58

// const name = 'Lydia';
// age = 21;

// console.log(delete name);
// console.log(delete age);

// The delete operator returns a boolean value: true on a successful deletion, else it'll return false. However, variables declared with the var, const, or let keywords cannot be deleted using the delete operator.

// The name variable was declared with a const keyword, so its deletion is not successful: false is returned. When we set age equal to 21, we actually added a property called age to the global object. You can successfully delete properties from objects this way, also the global object, so delete age returns true.

// Q59

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);


// Q60

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

// Q61

// const person = { name: 'Lydia' };

// Object.defineProperty(person, 'age', { value: 21 });

// console.log(person);
// console.log(Object.keys(person));


// Q62

// const settings = {
//   username: 'lydiahallie',
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ['level', 'health']);
// console.log(data);


// Q63

// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);


// Q64

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);


// Q65

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));


// Q66

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// class Labrador extends Dog {
//   // 1
//   constructor(name, size) {
//     this.size = size;
//   }
//   // 2
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
//   // 3
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
//   // 4
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }

// };

// Q67

// index.js
// console.log('running index.js');
// import { sum } from './sum.js';
// console.log(sum(1, 2));

// // sum.js
// console.log('running sum.js');
// export const sum = (a, b) => a + b;

// Q68

// console.log(Number(2) === Number(2));
// console.log(Boolean(false) === Boolean(false));
// console.log(Symbol('foo') === Symbol('foo'));

// Q69

// const name = 'Lydia Hallie';
// console.log(name.padStart(13));
// console.log(name.padStart(2));


// Q70

// console.log('🥑' + '💻');


// Q71

// function* startGame() {
//   const answer = yield 'Do you love JavaScript?';
//   if (answer !== 'Yes') {
//     return "Oh wow... Guess we're done here";
//   }
//   return 'JavaScript loves you back ❤️';
// }

// const game = startGame();
// console.log(game.next().value); // Do you love JavaScript?
// console.log(game.next("Yes").value); // JavaScript loves you back ❤️


// Q72

// console.log(String.raw`Hello\nworld`);

// Q73

// async function getData() {
//   return await Promise.resolve('I made it!');
// }

// const data = getData();
// console.log(data);


// Q74

// function addToList(item, list) {
//   return list.push(item);
// }

// const result = addToList('apple', ['banana']);
// console.log(result);



// Q75

// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);


// Q76

// const { firstName: myName } = { firstName: 'Lydia' };

// console.log(firstName);

// Q77

// Is this a pure function?
// function sum(a, b) {
//   return a + b;
// }
// A: Yes
// B: No


// Q78

// const add = () => {
//   const cache = {};
//   return num => {
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     } else {
//       const result = num + 10;
//       cache[num] = result;
//       return `Calculated! ${result}`;
//     }
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));


// Q79

// const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

// for (let item in myLifeSummedUp) {
//   console.log(item);
// }

// for (let item of myLifeSummedUp) {
//   console.log(item);
// }


// Q80

// const list = [1 + 2, 1 * 2, 1 / 2];
// console.log(list);



// Q81
// function sayHi(name) {
//   return `Hi there, ${name}`;
// }

// console.log(sayHi());


// Q82

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);


// Q83

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// let city = person.city;
// city = 'Amsterdam';

// console.log(person);

// Q84

// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21));


// Q85

// fetch('https://www.website.com/api/user/1')
//   .then(res => res.json())
//   .then(res => console.log(res));


// Q86

// function getName(name) {
//   const hasName = 
// };




// Q87
// var str = 'I Want Pizza'

// var indexing = str.charAt(0)

// console.log(indexing)

// console.log('I want pizza'[0])


// Q88

// function sum(num1, num2 = num1) {
//   console.log(num1 + num2);
// }

// sum(10);


// Q89

// module.js
// export default () => 'Hello world';
// export const name = 'Lydia';

// // index.js
// import * as data from './module';

// console.log(data);


// Q90


// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);
// console.log(typeof Person);

// Q91

// let newList = [1, 2, 3].push(4);

// console.log(newList.push(5));



// Q92

// function giveLydiaPizza() {
//   return 'Here is pizza!';
// }

// const giveLydiaChocolate = () =>
//   "Here's chocolate... now go hit the gym already.";

// console.log(giveLydiaPizza.prototype);
// console.log(giveLydiaChocolate.prototype);


// Q93

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y);
// }


// Q94

// function getItems(fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange")


// Q95

// function nums(a, b) {
//   if (a > b) console.log('a is bigger');
//   else console.log('b is bigger');
//   return
//   a + b;
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));


// Q96

// class Person {
//   constructor() {
//     this.name = 'Lydia';
//   }
// }

// Person = class AnotherPerson {
//   constructor() {
//     this.name = 'Sarah';
//   }
// };

// const member = new Person();
// console.log(member.name);


// Q97

// const info = {
//   [Symbol('a')]: 'b',
// };

// console.log(info);
// console.log(Object.keys(info));


// Q98

// const getList = ([x, ...y]) => [x, y]
// const getUser = user => ({name: user.name, age: user.age})

// const list = [1, 2, 3, 4]
// const user = { name: "Lydia", age: 21 }

// console.log(getList(list))
// console.log(getUser(user))


// Q99

// const name = 'Lydia';

// console.log(name());


// Q100

// 🎉✨ This is my 100th question! ✨🎉

// const output = `${[] && 'Im'}possible!
// You should${'' && `n't`} see a therapist after so much JavaScript lol`;
// console.log(output)


// Q101

// const one = false || {} || null;
// const two = null || false || '';
// const three = [] || 0 || true;

// console.log(one, two, three);


// Q102

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//   myPromise().then(res => console.log(res));
//   console.log('second');
// }

// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }

// firstFunction();
// secondFunction();

// Q103

// const set = new Set();

// set.add(1);
// set.add('Lydia');
// set.add({ name: 'Lydia' });

// for (let item of set) {
//   console.log(item + 2);
// }


// Q104
// console.log(Promise.resolve(5))


// Q105

// function compareMembers(person1, person2 = person) {
//   if (person1 !== person2) {
//     console.log('Not the same!');
//   } else {
//     console.log('They are the same!');
//   }
// }

// const person = { name: 'Lydia' };

// compareMembers(person);


// Q106

// const colorConfig = {
//   red: true,
//   blue: false,
//   green: true,
//   black: true,
//   yellow: false,
// };

// const colors = ['pink', 'red', 'blue'];

// console.log(colorConfig.colors[1]);


// Q107

// console.log('❤️' === '❤️');


// Q108

// Which of these methods modifies the original array?
// const emojis = ['✨', '🥑', '😍'];

// emojis.map(x => x + '✨');
// emojis.filter(x => x !== '🥑');
// emojis.find(x => x !== '🥑');
// emojis.reduce((acc, cur) => acc + '✨');
// emojis.slice(1, 2, '✨');
// emojis.splice(1, 2, '✨');


// Q109

// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = '🍝';

// console.log(food);
// console.log(info);


// Q110

// JSON.parse();
// A: Parses JSON to a JavaScript value
// B: Parses a JavaScript object to JSON
// C: Parses any JavaScript value to JSON
// D: Parses JSON to a JavaScript object only



// Q111

// let name = 'Lydia';

// function getName() {
//   console.log(name);
//   let name = 'Sarah';
// }

// getName();


// Q112

// function* generatorOne() {
//   yield ['a', 'b', 'c'];
// }

// function* generatorTwo() {
//   yield* ['a', 'b', 'c'];
// }

// const one = generatorOne();
// const two = generatorTwo();

// console.log(one.next().value);
// console.log(two.next().value);


// Q113

// console.log(`${(x => x)('I love')} to program`);


// Q114

// let config = {
//   alert: setInterval(() => {
//     console.log('Alert!');
//   }, 1000),
// };

// config = null;


// Q115

// const myMap = new Map();
// const myFunc = () => 'greeting';

// myMap.set(myFunc, 'Hello world!');

// //1
// console.log(myMap.get('greeting'))
// //2
// console.log(myMap.get(myFunc))
// //3
// console.log(myMap.get(() => 'greeting'))
// console.log(myMap)

// Q116

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// const changeAge = (x = { ...person }) => (x.age += 1);
// const changeAgeAndName = (x = { ...person }) => {
//   x.age += 1;
//   x.name = 'Sarah';
// };

// changeAge(person);
// changeAgeAndName();

// console.log(person);


// Q117

// function sumValues(x, y, z) {
//   return x + y + z;
// }

// console.log(sumValues(...[1, 2, 3])
// )


// Q118

// let num = 1;
// const list = ['🥳', '🤠', '🥰', '🤪'];

// console.log(list[(num += 1)]);


// Q119

// const person = {
//   firstName: 'Lydia',
//   lastName: 'Hallie',
//   pet: {
//     name: 'Mara',
//     breed: 'Dutch Tulip Hound',
//   },
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.pet?.name);
// console.log(person.pet?.family?.name);
// console.log(person.getFullName?.());
// console.log(member.getLastName?.());


// Q120

// const groceries = ['banana', 'apple', 'peanuts'];

// if (groceries.indexOf('banana')) {
//   console.log('We have to buy bananas!');
// } else {
//   console.log(`We don't have to buy bananas!`);
// }


// Q121

// const config = {
//   languages: [],
//   set language(lang) {
//     return this.languages.push(lang);
//   },
// };

// console.log(config.language);


// Q122

// const name = 'Lydia Hallie';

// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');


// Q123

// const add = x => y => z => {
//   console.log(x, y, z);
//   return x + y + z;
// };

// add(4)(5)(6);


// Q124

// async function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield Promise.resolve(i);
//   }
// }

// (async () => {
//   const gen = range(1, 3);
//   for await (const item of gen) {
//     console.log(item);
//   }
// })();


// Q125

// const myFunc = ({ x, y, z }) => {
//   console.log(x, y, z);
// };

// myFunc(1, 2, 3);


// Q126

// function getFine(speed, amount) {
//   const formattedSpeed = new Intl.NumberFormat('en-US', {
//     style: 'unit',
//     unit: 'mile-per-hour'
//   }).format(speed);

//   const formattedAmount = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }).format(amount);

//   return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
// }

// console.log(getFine(130, 300))


// Q127

// const spookyItems = ['👻', '🎃', '🕸'];
// ({ item: spookyItems[3] } = { item: '💀' });

// console.log(spookyItems);


// Q128

// const Name = 'Lydia Hallie';
// const age = 21;

// console.log(Number.isNaN(Name));
// console.log(Number.isNaN(age));

// console.log(isNaN(Name));
// console.log(isNaN(age));


// Q129

// const randomValue = 21;

// function getInfo() {
//   console.log(typeof randomValue);
//   const randomValue = 'Lydia Hallie';
// }

// getInfo();


// Q130

// const myPromise = Promise.resolve('Woah some cool data');

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();


// Q131

// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

// console.log(emojis.flat(1));

// Q132

// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);


// Q133

// const myPromise = Promise.resolve(Promise.resolve('Promise'));

// function funcOne() {
//   setTimeout(() => console.log('Timeout 1!'), 0);
//   myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//   console.log('Last line 1!');
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(`${res} 2!`)
//   setTimeout(() => console.log('Timeout 2!'), 0);
//   console.log('Last line 2!');
// }

// funcOne();
// funcTwo();


// Q134

// sum.js
// export default function sum(x) {
//   return x + x;
// }

// // index.js
// import * as sum from './sum';



// Q135

// const handler = {
//   set: () => console.log('Added a new property!'),
//   get: () => console.log('Accessed a property!'),
// };

// const person = new Proxy({}, handler);

// person.name = 'Lydia';
// person.name;

// Q136

// const person = { name: 'shahzad'}

// Object.seal(person);


// Q137

// const person = {
//   name: 'Lydia Hallie',
//   address: {
//     street: '100 Main St',
//   },
// };

// Object.freeze(person);
// console.log(person.address.street = '200 Main St');
// console.log(person.name = 'Sarah');
// console.log(person)


// Q138

// const add = x => x + x;

// function myFunc(num = 2, value = add(num)) {
//   console.log(num, value);
// }

// myFunc();
// myFunc(3);


// Q139


// class Counter {
//   #number = 10

//   increment() {
//     this.#number++
//   }

//   getNum() {
//     return this.#number
//   }
// }

// const counter = new Counter()
// counter.increment()

// console.log(counter.increment())


// Q140

// const teams = [
//   { name: 'Team 1', members: ['Paul', 'Lisa'] },
//   { name: 'Team 2', members: ['Laura', 'Tim'] },
// ];

// function* getMembers(members) {
//   for (let i = 0; i < members.length; i++) {
//     yield members[i];
//   }
// }

// function* getTeams(teams) {
//   for (let i = 0; i < teams.length; i++) {
//     yield* getMembers(teams[i].members);
//   }
// }

// const obj = getTeams(teams);
// // obj.next(); // { value: "Paul", done: false }
// // obj.next(); // { value: "Lisa", done: false }
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());


// Q141

// const person = {
//   name: 'Lydia Hallie',
//   hobbies: ['coding'],
// };

// function addHobby(hobby, hobbies = person.hobbies) {
//   hobbies.push(hobby);
//   return hobbies;
// }

// addHobby('running', []);
// addHobby('dancing');
// addHobby('baking', person.hobbies);

// console.log(person.hobbies);


// Q142

// class Bird {
//   constructor() {
//     console.log("I'm a bird. 🦢");
//   }
// }

// class Flamingo extends Bird {
//   constructor() {
//     console.log("I'm pink. 🌸");
//     super();
//   }
// }

// const pet = new Flamingo();


// Q143

// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// console.log(emojis.length)


// Q144

// const person = {
//   name: "Lydia Hallie",
//   age: 21
// }

// function* getPerson() {
//   yield person
// }

// const gen = getPerson();
// console.log(gen.next().value)


// Q145

// let count = 0;
// const nums = [0, 1, 2, 3];

// nums.forEach(num => {
// 	if (num) count += 1
// })

// console.log(count)




// Q146

// function getFruit(fruits) {
// 	console.log(fruits?.[1]?.[1])
// }

// getFruit([['🍊', '🍌'], ['🍍']])
// getFruit()
// getFruit([['🍍'], ['🍊', '🍌']])



// Q147

// class Calc {
// 	constructor() {
// 		this.count = 0 
// 	}

// 	increase() {
// 		this.count++
// 	}
// }

// const calc = new Calc()
// new Calc().increase()

// console.log(calc.count)


// Q148

// const user = {
// 	email: "e@mail.com",
// 	password: "12345"
// }

// const updateUser = ({ email, password }) => {
// 	if (email) {
// 		Object.assign(user, { email })
// 	}

// 	if (password) {
// 		user.password = password
// 	}

// 	return user
// }

// const updatedUser = updateUser({ email: "new@email.com", password: "54321" })

// console.log(updatedUser === user)

// Q149

// const fruit = ['🍌', '🍊', '🍎']

//  fruit.slice(0, 1)
//  fruit.splice(0, 1)
//  fruit.unshift('🍇')

// console.log(fruit)


// Q150

// const animals = {};
// let dog = { emoji: '🐶' }
// let cat = { emoji: '🐈' }

// animals[dog] = { ...dog, name: "Mara" }
// animals[cat] = { ...cat, name: "Sara" }

// console.log(animals[dog])


// Q151

// const user = {
// 	email: "my@email.com",
// 	updateEmail: email => {
// 		this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)


// Q152

// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4])
// 	return [res1, res2]
// }

// runPromises()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))


// Q153

// const keys = ["name", "age"]
// const values = ["Lydia", 22]

// const method = "fromEntries"
// console.log(Object[method](keys.map((_, i) => {return [keys[i], values[i]]})))


// Q154

// const createMember = ({ email, address = {}}) => {
// 	const validEmail = /.+\@.+\..+/.test(email)
// 	if (!validEmail) throw new Error("Valid email pls")

// 	return {
// 		email,
// 		address: address ? address : null
// 	}
// }

// const member = createMember({ email: "my@email.com" })
// console.log(member)


// Q155

// let randomValue = { name: "Lydia" }
// randomValue = 23

// if (!typeof randomValue === "string") {

// 	console.log("It's not a string!")

// } else {
// 	console.log("Yay it's a string!")
// }


// function Variables(){
// var a = 1;
// let b = 2;
// const c = 3;
// }

// console.log(a)
// console.log(b)
// console.log(c)

// Variables()


// if (true) {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }

// console.log(a)
// console.log(b)
// console.log(c)


// function outer (){
//   let count = 0;
//    return function inner (){
//     count += 1;
//     return count
//   }
// }

// const counter = outer()

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())



// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hi 1")
//   }, 1000)
// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Hi 2")
//     reject("hi 2")
//   }, 3000)
// })

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hi 3")
//     // reject("Hi 3")
//   }, 5000)
// })



// const res1 = p1.then((value) => {
//   console.log(value)
// })

// const res2 = p2.then((value) => {
//   console.log(value)
// })
// const res3 = p3.then((value) => {
//   console.log(value)
// })

// const resolve_all = Promise.all([p1, p2, p3])

// resolve_all
//   .then((values) => {
//     console.log("All resolved:", values)
//   })
//   .catch((err) => {
//     console.log("One of the promises rejected:", err)
//   })


// async function HandleAllPromise(){
//   try {
//     const results = await Promise.all([p1, p2, p3])
//     console.log(results)
//   } catch (error) {
//     console.log("One of the promises rejected:", error)
//   }
// }

// HandleAllPromise()

// function flatten(arr) {

//   // let result = []

//   // for (let i = 0; i < arr.length; i++) {

//   //   if (Array.isArray(arr[i])) {
//   //     result = result.concat(flatten(arr[i]))
//   //   }
//   //   else{
//   //     result.push(arr[i])
//   //   }
//   // }
//   //   return result
// }

// const res = flatten([1, [2, [3, 4], 5]]) // [1, 2, 3, 4, 5]

// console.log(res)


// const flatten = (ary) => ary.reduce((a, b) => 
//   a.concat(Array.isArray(b) ? flatten(b) : b), 
//   [])

// console.log(flatten([1, [2, [3, 4], 5]]))

// console.log(a); // undefined
// var a = 10;

// (function () {
//   console.log(b);
//   let b = 20;
// })();

// function accessoutside() {
//   var b = 20;
//   let c = 20;
//   const d = 30;
// };

// // console.log(b)
// console.log(c)
// console.log(d)
// accessoutside()


// {
//   var b = 20;
//   let c = 20;
//   const d = 30;
// }

// console.log(b)
// console.log(c)
// console.log(d)

// Explain closures with a real-world use case.
// Hint: Private variables, factory functions, memoization.


// function outer(){
//   let count = 0;

// return function inner(){
//   count++
//   console.log(count)
// }
// }


// const counter = outer()

// counter()
// counter()
// counter()



// Intersection of Two Arrays

// const nums1 = [1,2,2,1]
// const nums2 = [2,2]

// const Intersection = nums1.filter(value => nums2.includes(value))
// console.log(new Set(Intersection))

// Union of Two Arrays

// const nums1 = [1,2,3]
// const nums2 = [3,4,5]

// const Union = [...new Set([...nums1, ...nums2])]
// console.log(Union)

// Intersection of Two Arrays II

// const nums1 = [1,2,2,1]
// const nums2 = [2,2]

// const Intersection = nums1.filter(value => nums2.includes(value))
// console.log(new Set(Intersection))

// const arr1 = [1,2,3]
// const arr2 = [3,4,5]

// function RemoveDuplicates (num1,num2){
//   return new Set([...num1,...num2])
// }
// const result = RemoveDuplicates(arr1,arr2)
// console.log(result)


// console.log("Start")

// setTimeout(()=>{
// console.log("Timeout")
// },0)

// Promise.resolve().then(()=>{
// console.log("Promise")
// })

// console.log("End")


// var a = 50


// const obj = {
//   firstName: "shahzad",
//   getName: function() {
//     console.log(this.firstName)
//      console.log(this.a)
//   }
// }

// obj.getName()



// x = 5

// console.log(x)

"use strict"

// console.log(this)

// function Hi() {
//   console.log(this)
// }
// Hi.call(window)

// console.log(1 + "1");  
// console.log(1 - "1");  
// console.log(1 + +"1");


// let a = {};
// let b = a;
// console.log(a == b, a === b);
// b.name = "JavaScript";
// console.log(a.name);
// console.log(b.name);


// const arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArr = [...new Set(arr)];

// console.log(uniqueArr); // [1, 2, 3, 4, 5]


// var x = 10;
// (function() {
//    console.log(x);
//    var x = 20;
//    console.log(x);
// })();


// console.log(0.1 + 0.2 === 0.3);


// function outer() {
//   var count = 0;
//   return function inner() {
//       count++;
//       console.log(count);
//   };
// }
// const counter = outer();
// counter();
// counter();


// console.log(typeof NaN);
// console.log(NaN == NaN);

// const arr = [1, 2, 3, 4]

// arr.forEach((item,index) => {
//   console.log(item,index)
//   arr.push(item + 1)
//   console.log("?????",arr)
// })

// const Maparr = arr.map((item)=>{
//   return item + 1
// })

// console.log(Maparr)
// console.log(arr)


// const Filterarr = arr.filter((item)=>{
//   return item > 2
// })

// console.log(Filterarr)
// console.log(arr)

// const find = arr.find((item)=>{
//   return item > 2
// })

// console.log(find)
// console.log(arr)



// function reversestring(str) {
// return str.split("").reverse(0).join("")
// }

// console.log(reversestring("shahzad"))


// find max of arr

// function Maxarr(maxarr){

// }

// console.log(Maxarr([1,2,3,4,5,6,7,8,9,10])) 

// let score = "33abc"

// const convert = Number(score)
// console.log(typeof score)
// console.log(typeof convert)
// console.log(convert)

// console.log(true)
// console.log((2 * 5) + 5 % 2)

// console.log(null === undefined)
// console.log(null == undefined)
// console.log(typeof null)
// console.log(typeof undefined)

// const input = document.getElementById("todo-input")
// const btn = document.getElementById("add-btn")
// const list = document.getElementById("todo-list")

// const savedTodo = localStorage.getItem("todos")
// const getTodo = savedTodo ? JSON.parse(savedTodo) : []


// function SaveTodos() {
// localStorage.setItem('Todos', JSON.stringify(getTodo))
// }

// function createTodoNode(todo, index){
// const li = document.createElement('li')

// const checkBox = document.createElement("input")
// checkBox.type = 'checkbox';
// checkBox.checked  = !!getTodo.completed

// savedTodo()


// const textspan = document.createElement('span')
// textspan.textContent = getTodo.text
// textspan.style.margin = '0 8px'
// if(getTodo.completed){
//   textspan.style.textDecoration = 'line-through'
// }

// }

// function render(){
//   list.innerHTML = ''

//   getTodo.forEach((element, index) => {
//     const node = createTodoNode(element, index)
//     list.appendChild(node)
//   });
// }


// function Scope() {
//   // var a = 40
//   // let b = 20
//   // const c = 20
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Scope()

// let a = 200
// if (true) {
// var a = 20
// }
// console.log(a);
// // console.log(b);
// // console.log(c);

// var a = 20
// a = 200
// console.log(a);

// let a = 20
// a = 200
// console.log(a);

// const a = 20
// a = 200
// console.log(a);


// const arr = [1,2,3,4,5,6]

// const modifyarr = arr.map((val)=>{
// return val > 1
// })

// const filterarr = arr.filter((val)=>{
// return val < 4
// })

// const Reducerarr = arr.reduce((curr, acc)=>{
// return acc + curr
// }, 0)


// console.log(Reducerarr);

// let longestSubstring = 'GeeksForGeeks'

// function longSubStr(str) {
//   let start = 0;
//   let end = 0;
//   let maxlength = 0;
//   let Substr = new Set()

//   while (end < str.length) {
//     if(!Substr.has(str[end])){
//       Substr.add(str[end])
//       maxlength = Math.max(maxlength, Substr.size)
//       console.log(Substr.values())
//       end++
//     }else{
//       Substr.delete(str[start])
//       start++
//     }
//   }
//   return maxlength
// }

// console.log(longSubStr(longestSubstring))

// write a function that return the largets number in a given array

// const arr = [1, 2, 3, 4, 50, 6, 7, 80, 9, 10]

// function largestNumber(array) {
//   // return array.reduce((max, current) => {
//   //   return current > max ? current : max;
//   // },0);

//   let Max = array[0]
//   for (let index = 1; index < array.length; index++) {
//     if (array[index] > Max) {
//       console.log(array[index], Max);
//       Max = array[index]
//     }
//   }
//   return Max
// }

// console.log(largestNumber(arr));
// // largestNumber(arr)/

// var Sum = function(a) {
//   console.log(a)
//   var c = 4;
//    return function(b) {
//      console.log(b)
//      return a + b + c;
//    }
// }

// var add5 = Sum(5);
// console.log(add5(3));


// var Sum  = function(a,b,c) {
// return {
//   getSumTwo: function() {
//     return a + b
//   },
//   getSumThree: function() {
//     return a + b + c
//   }
// }
// }

// var add = Sum(5,3,2);
// console.log(add.getSumTwo());
// console.log(add.getSumThree());


// give me some logical interview questions for javascript developers.

// Sure! Here are some logical interview questions for JavaScript developers:

// 1. What is the difference between == and === in JavaScript?

// 2. How does JavaScript handle asynchronous operations? Can you explain the event loop?
// console.log("A"); // goes callstack

// setTimeout(() => console.log("B"), 0); // goes WebApis from Browser CallbackQueue

// Promise.resolve().then(() => console.log("C")); // goes Microtask Queue

// console.log("D"); // goes callstack

// Output order: A D C B

// 3. What are closures in JavaScript? Can you provide an example of how they work?
// function outer() {
//   let counter = 0;

//   function inner() {
//     counter++;
//     console.log(counter);
//   }

//   return inner;
// }

// const count = outer();
// count(); // 1
// count(); // 2
// count(); // 3

// 4. What is hoisting in JavaScript? How does it affect variable and function declarations?

// 5. Can you explain the concept of prototypal inheritance in JavaScript?

// 6. What are promises in JavaScript? How do they help with asynchronous programming?
// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("✅ Operation successful!");
//     } else {
//       reject("❌ Operation failed!");
//     }
//   }, 2000);
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("🔚 Promise finished"));

// 7. What is the difference between var, let, and const in JavaScript?

// 8. How does the 'this' keyword work in JavaScript? Can you provide examples of its behavior in different contexts?

// 9. What are higher-order functions in JavaScript? Can you give an example?

// 10. How would you implement memoization in JavaScript? Can you provide a code example?

// 11. What is the difference between call, apply, and bind methods in JavaScript?

// 12. Can you explain the concept of event delegation in JavaScript?

// 13. How do you handle errors in JavaScript? Can you explain try-catch-finally?

// 14. What are the different ways to create objects in JavaScript?

// 15. Can you explain the concept of currying in JavaScript? Can you provide an example?

// 16. What is the difference between synchronous and asynchronous code in JavaScript?

// 17. How would you optimize the performance of a JavaScript application?

// 18. Can you explain the concept of debouncing and throttling in JavaScript?

// 19. What are modules in JavaScript? How do they help in organizing code?

// 20. Can you explain the concept of event bubbling and event capturing in JavaScript?

// 21. How does garbage collection work in JavaScript?

// 22. What are the different data types in JavaScript?

// 23. Can you explain the concept of immutability in JavaScript? How can you achieve it?

// 24. What is the difference between null and undefined in JavaScript?
// let a;
// console.log(a);

// let b = null;
// console.log(b);

// console.log(typeof undefined); 
// console.log(typeof null);

// console.log(null == undefined); 
// console.log(null === undefined);

// let user = { name: "Ali" };

// console.log(user.age);

// user = null;

// console.log(user.name);

// 25. How would you implement a debounce function in JavaScript? Can you provide a code example?

// 26. What are generators in JavaScript? How do they differ from regular functions?

// 27. Can you explain the concept of the prototype chain in JavaScript?

// 28. How would you implement a deep clone of an object in JavaScript? Can you provide a code example?

// 29. What is the difference between a shallow copy and a deep copy in JavaScript?

// 30. Can you explain the concept of functional programming in JavaScript?

// 31. How does the spread operator work in JavaScript? Can you provide examples of its usage?

// 32. What are the different ways to iterate over an array in JavaScript?

// 33. Can you explain the concept of async/await in JavaScript? How does it improve code readability?

// 34. What is the difference between a callback function and a promise in JavaScript?

// =========  The end ==========

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
//

// const result = findMax([1, 3, 2, 8, 5]);
// console.log(result); // Output: 8}


// console.log([] == ![])
// console.log('5' + 3 - 2);



// const arr = [2, 3, 2, 5, 6, 2, 3];

// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if(obj[arr[i]]){
//     obj[arr[i]] += 1
//   } else {
//     obj[arr[i]] = 1
//   }
// }

// console.log(obj)

// const nums = [1, 2, 2, 3, 4, 4, 5];

// const RemoveDuplicates = new Set(nums)
// console.log(RemoveDuplicates)


// Q3: Find which number appears most often.
// const arr = [1, 3, 3, 2, 3, 1, 1, 1, 2];

// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]] += 1;
//   } else {
//     obj[arr[i]] = 1;
//   } 
// }
// console.log(obj);

// let maxCount = 0;
// let mostFrequentNum = null;

// for (let num in obj) {
//   if (obj[num] > maxCount) {
//     maxCount = obj[num];
//     mostFrequentNum = num;
// }
// }

// console.log(`The number that appears most often is ${mostFrequentNum} (appears ${maxCount} times).`);   

// Q4: Reverse the words, not the characters.
// const str = "hello world from js";

// function ReverseStr(string) {
//  const reverseWord = string.split(" ").reverse().join(" ")
//  console.log(reverseWord)  
// }


// ReverseStr(str)



// Q6: Check if string reads same backward.
// const str = "madam";

// function isPalindrome(string) {
//   const reversedStr = string.split("").reverse().join("");
//   return string === reversedStr;
// }
// console.log(isPalindrome(str));


// find longest substring without repeating characters
// const str = "abcabcbb";

// function longestSubstring(string) {
//   let start = 0;
//   let end = 0;
//   let maxLength = 0;
//   let charSet = new Set();

//   while (end < string.length) {
//     if (!charSet.has(string[end])) {
//       charSet.add(string[end]);
//       maxLength = Math.max(maxLength, charSet.size);
//       end++;
//     } else {
//       charSet.delete(string[start]);
//       start++;
//     }
// }
//   return maxLength;
// }

// console.log(longestSubstring(str));

// Q5: Find the second largest number.
// const arr = [10, 5, 20, 8, 20, 3];

// let highest = -Infinity;
// let secondHighest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] > highest) {
//     secondHighest = highest;
//     highest = arr[i];
//   }
// }

// console.log(`The largest & second largest number is ${highest} ${secondHighest}.`);


// Q7: Merge and remove duplicates, then sort.
// const a = [3, 1, 4];
// const b = [4, 5, 6, 3];

// function mergeAndSort(arr1, arr2) {
// const merge = [...arr1, ...arr2];
// const unique = [...new Set(merge)];
// unique.sort((x, y) => x - y);
// return unique;
// }

// const result = mergeAndSort(a, b);
// console.log(result); 


// Q8: Count vowels (a, e, i, o, u).
// const str = "JavaScript";

// function CountVowels(string) {
// const vovels = "aeiouAEIOU";
// let count = 0;
// for (let char of string) {
//   if (vovels.includes(char)) {
//     count++;
//   }
// }
// return count;
// }
// const result = CountVowels(str)
// console.log(result) 



// const str = "Hello World"
// function CountVovels(string) {
//   const vovels = "aeiouAEIOU"
//   let count = 0;
//   for (const char of string) {
//     if (vovels.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// const s = CountVovels(str)

// console.log(s)

// Q9: One number is missing from sequence 1–10.
// const arr = [1,2,3,4,5,7,8,9,10];


// function findMissingNumber(arr) {
//   const n = 10;
//   const expectedSum = (n * (n + 1)) / 2;
//   console.log(expectedSum);
//   const actualSum = arr.reduce((acc, num) => acc + num, 0);
//   console.log(actualSum);
//   return expectedSum - actualSum;
// }

// const result = findMissingNumber(arr);
// console.log(result);




// Q9: One number is missing from sequence 1–10.
// const arr = [1,2,3,4,6];



// function FindMissingNumber(arr) {
// const n = arr.length + 1;
// const expectedSum = (n * (n + 1)) / 2;
// const actualSum = arr.reduce((acc, num)=> acc + num, 0)
// return expectedSum - actualSum
// }


// const result = FindMissingNumber(arr)
// console.log(result);

// Q10: Flatten nested array completely.
// const arr = [1, [2, [3, 4]], 5];

// function Flatenarray(arr){
// const result = arr.flat(2)
// return result
// }

// const result = Flatenarray(arr)
// console.log(result);

// Remove duplicates without using Set
// const arr = [1,2,2,3,4,4,5]
// function removeDuplicates(arr) {
//   const uniqueArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     if (!uniqueArr.includes(arr[index])) {
//       uniqueArr.push(arr[index]);
//     }
// }
//   return uniqueArr;
// }
// const result = removeDuplicates(arr)
// console.log(result);
//Find missing number from 1 to n
// const arr = [2,3,4,5]


// function findMissingNumber(val) {
// let n = arr.length + 1;
// let expectedSum = (n * (n + 1)) / 2 //15
// let executeValue = val.reduce((acc, curr)=> acc + curr, 0) //12
// return expectedSum - executeValue
// }


// const result = findMissingNumber(arr)
// console.log(result);

// Count vowels in a string
// const str = "JavaScript"

// function countVowels(string) {
// const vowels = 'aeiouAEIOU'
// let count = 0;
// for (const char of string) {
//   if(vowels.includes(char)){
//     count++
//   }
// }
// return count
// }

// const result = countVowels(str)
// console.log(result);

//Reverse a string without using reverse()
// const str = "hello"

// function ReverseStr(String) {

// }

// const result = ReverseStr(str)
// console.log(result);

// let a = [1,2,3];
// let b = a;
// b.push(4);
// console.log(a);
// console.log(typeof null);
// console.log(0.1 + 0.2 === 0.3);

// const arr = [1,2,3,1,4,1,2]
// let obj = {};

// for (let index = 0; index < arr.length; index++) {
//   if(obj[arr[index]]){
//     obj[arr[index]] += 1
//   }else{
//         obj[arr[index]] = 1
//   }
// }
// let maxCount = 0;
// let mostFrequentNum = null;

// for (let num in obj) {
//   if (obj[num] > maxCount) {
//     maxCount = obj[num];
//     mostFrequentNum = num;
// }
// }
// console.log(`The number that appears most often is ${mostFrequentNum} (appears ${maxCount} times).`);   


// const menuData = [
//   {
//     title: "Biryani",
//     price: 200,
//     Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, doloremque?",
//     img: "https://i.ytimg.com/vi/XOFqB3cB7To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASvHRRBUSEjlyWoBidH553BUM6Aw",
//     category: "Lunch"
//   },
//   {
//     title: "Korma",
//     price: 200,
//     Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, doloremque?",
//     img: "https://i.ytimg.com/vi/XOFqB3cB7To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASvHRRBUSEjlyWoBidH553BUM6Aw",
//     category: "Lunch"
//   },
//   {
//     title: "Daal Chawal",
//     price: 200,
//     Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, doloremque?",
//     img: "https://i.ytimg.com/vi/XOFqB3cB7To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASvHRRBUSEjlyWoBidH553BUM6Aw",
//     category: "Lunch"
//   },
//   {
//     title: "Halwa Puri",
//     price: 200,
//     Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, doloremque?",
//     img: "https://i.ytimg.com/vi/XOFqB3cB7To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASvHRRBUSEjlyWoBidH553BUM6Aw",
//     category: "Breakfast"
//   },
//   {
//     title: "Anda Paratha",
//     price: 200,
//     Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, doloremque?",
//     img: "https://i.ytimg.com/vi/XOFqB3cB7To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASvHRRBUSEjlyWoBidH553BUM6Aw",
//     category: "Breakfast"
//   },
//   {
//     title: "Milk Shake",
//     price: 200,
//     Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, doloremque?",
//     img: "https://i.ytimg.com/vi/XOFqB3cB7To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASvHRRBUSEjlyWoBidH553BUM6Aw",
//     category: "Shakes"
//   },
// ]
// window.onload = () => {
//   menu();
// }

// menu()

// function menu(category) {
//   const MenuCardHtml = menuData.filter((menu) => {
//     if (category) {
//       return menu.category.toLowerCase() == category.toLowerCase()
//     } else {
//       return true
//     }
//   }).map((menu) => {
//     const HTMLCard = `<div style="display: flex; justify-content: center; gap: 8px; width:48%;">
//     <img height="200" width="300" src=${menu.img} alt="">
//     <div style="display: flex; flex-direction: column; gap: 0px">
//         <div style="display: flex; justify-content: space-between; align-items: center;">
//             <h4>${menu.title}</h4>
//             <span>${menu.price}</span>
//         </div>
//         <span>${menu.Description}</span>
//     </div>
// </div>
// `
//     return HTMLCard
//   })

//   document.querySelector("#main-container").innerHTML = MenuCardHtml.join(" ")
// }



// const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]

// function SumZeroPair(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log("outer", i);
//     for (let j = i + 1; j < array.length; j++) {
//       console.log("inner", j);
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// console.log(SumZeroPair(arr))


// function Anagram(string1, string2) {
// if(string1.length !== string2.length){
//     return false
//   }

//   let count = {};
//   for (const letter of string1) {
//     count[letter]  = (count[letter] || 0) + 1;
// }
// for (const items of string2) {
//   if(!count[items]){
//     return false
//   }
//   count[items] -= 1
// }
// return true
// }

// const check = Anagram("hello", "llheo")
// console.log(check);



// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// function findDuplicate(arr) {
//   let seen = new Set();
//   let dup = [];

//   for (let num of arr) {
//     if (seen.has(num)) dup.push(num);
//     else seen.add(num);
//   }

//   return dup;
// }

// console.log(findDuplicate([1,2,3,2,4,1])); // [2,1]

// Find Largest Number in Array

// function largestNumber(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest
// }


// console.log(largestNumber([1,2,9,10]))



// for (let index = 1; index <= 15; index++) {
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log("fizzbuzz")
//   }  
//   else if (index % 3 === 0) {
//     console.log("fizz")
//   }
//   else if(index % 5 === 0) {
//     console.log("buzz")
//   }
//   else{
//     console.log(index)
//   }
// }
// const arr = [1,2,3,4,5,6]

// function largestNumberInArray(largnum) {
// let array = largnum[0]
// for (let index = 1; index < largnum.length; index++) {
//   if(largnum[index] > array) {
//     array = largnum[index]
//   }
// }
// return array
// }

// console.log(largestNumberInArray(arr))

// const User = {
//   name: "Shahzad",
//   email: "shahzad@gmail.com"
// }

// const student = User

// student.email = "Memon@gmail.com"
// console.log(User);
// console.log(student);


// let a = 5;

// let b = a;

// b = 6

// console.log(a)
// console.log(b)


// const string = 'Hello'

// const reverseStr = string.split('').reverse().join('')
// console.log(reverseStr) 


// Sum of num in array

// const arr = [1,2,3,4,5,6,7,8,9,10]

// function sumofArray(sumarr) {
// let sum = 0
// for (let index = 0; index < sumarr.length; index++) {
//   sum += sumarr[index]
// }
// return sum
// }
// console.log(sumofArray(arr))



// const products = [
//   {
//     ProductName: "Mobile",
//     Quantity: 2,
//     Price: 20000
//   },
//     {
//     ProductName: "Computer",
//     Quantity: 2,
//     Price: 15000
//   },
//   {
//     ProductName: "Laptop",
//     Quantity: 2,
//     Price: 12000
//   },
// ]

// const productData = products.map((product)=>{
// return product.Quantity * product.Price
// })

// const totalCost = productData.reduce((acc, curr)=> acc + curr, 0)

// console.log(totalCost)


// "Muhammad Shahzad" Ans "M S"

// const name = "Muhammad Shahzad"

// function initials(str) {
//   const words = str.split(" ")
//   let result = ""
//   for (let i = 0; i < words.length; i++) {
//     result += words[i][0].toUpperCase() + " "
//   }
//   return result
// }

// const result = initials(name)
// console.log(result)



// const name = "Muhammad Shahzad"
// function SplitWord(Str){
// const word = Str.split(' ')
// let result = ''
// for (let i = 0; i < word.length; i++) {
//   result += word[i][0].toUpperCase() + " "
// }
// return result
// }
// const result = SplitWord(name)
// console.log(result)



// const MaxArr = [1,2,3,4,5,6,7,8,9,10,5000]

// function MaxVal(val) {
//   let MaxCount = val[0];
//   for (let i = 0; i < val.length; i++) {
//     if (val[i] > MaxCount) {
//       MaxCount = val[i]
//     }
//   }
//   return MaxCount
// }

// const result = MaxVal(MaxArr)
// console.log(result)


// const SumArr = [1,2,3,4,5,6,7,8,9,10]


// function SumOfArray(val) {
//   let Sum = 0;
//   for (let i = 0; i < val.length; i++) {
//     Sum += val[i] 
//   }
//   return Sum
// }

// const result = SumOfArray(SumArr)
// console.log(result)


// const products = [
//   {
//     ProductName: "Mobile",
//     Quantity: 2,
//     Price: 20000
//   },
//     {
//     ProductName: "Computer",
//     Quantity: 2,
//     Price: 15000
//   },
//   {
//     ProductName: "Laptop",
//     Quantity: 2,
//     Price: 12000
//   },
// ]


// const MapData = products.map((val)=> {
//   return val.Quantity * val.Price
// })

// const totalCost = MapData.reduce((acc, curr) => acc + curr, 0)
// console.log(totalCost)


// Remove Duplicates

// const arr = [1,2,2,3,4,4,5]

// function RemoveDuplicates(val) {
// let uniqueValue = [];
// for (let i = 0; i < val.length; i++) {
//     if (!uniqueValue.includes(arr[i])) {
//       uniqueValue.push(arr[i]);
//     }
// }
// return uniqueValue
// }

// const result = RemoveDuplicates(arr)
// console.log(result)


// find missing number


// const arr = [1,2,3,4,5,6,8]

// function MissingNumber(val) {
//   let n = val.length + 1;
//   let SumVal = (n * (n + 1)) / 2
//   let expedtedVal = val.reduce((acc, curr) => acc + curr, 0)
//   return SumVal - expedtedVal
// }

// const result = MissingNumber(arr)
// console.log(result)



// console.log([] == ![]);
// const val = [1, 2, 3] + [4, 5, 6]
// console.log(typeof val);


// let a = { x: 1 };
// let b = a;
// a.x = 5;

// console.log(b.x);

// let a = 5;
// let b = a;

// b = 10

// console.log(a)
// console.log(b)


// console.log(1 == '1');
// console.log(true == 1);
// console.log(false == 0);
// console.log(null == undefined);
// console.log(null == 0);

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }


// const a = (1, 2, 3);
// console.log(a);


// const arr = [1,2,2,3,4,4,5,7,7,8,9,9]


// function RemoveDuplicates(val){
//   let uniquevalue = []; 
// for (let i = 0; i < val.length; i++) {
//   if(!uniquevalue.includes(val[i])){
//     uniquevalue.push(val[i])
//   }
//   }
//   return uniquevalue
// }

// const result = RemoveDuplicates(arr)
// console.log(result)


// const arr = [1,2,3,4,6,7,8]

// function findMissingNumber(val) {
//   let n = val.length + 1
//   let SumVal = (n * (n + 1)) / 2
//   let expectedVal = val.reduce((acc, curr) => acc + curr, 0)
//   return SumVal - expectedVal
// }

// const result = findMissingNumber(arr)
// console.log(result)


// const Name = "Muhammad Shahzad"

// function SplitNameLetter(val) {
//   const word = val.split(' ')
//   let result = ''
//   for (let i = 0; i < word.length; i++) {
//     result += word[i][0].toUpperCase() + ' '
//   }
//   return result
// }


// const result = SplitNameLetter(Name)
// console.log(result)


// console.log("1");

// queueMicrotask(() => console.log("2"));

// Promise.resolve().then(() => console.log("3"));

// console.log("4");


// const arr = [1,2,3,4,5,6]


// const result = arr.map((val, index)=>{
// return val * 2
// })

// console.log(result, "map response")
// console.log(arr, "original array")


// const arr = [1,2,3,4,5,6]


// const result = arr.filter((val, index)=>{
// return val > 2
// })

// console.log(result, "filter response")
// console.log(arr, "original array")


// const arr = [1,2,3,4,5,6]


// const result = arr.reduce((curr, acc)=>{
// return curr + acc
// }, 0)

// console.log(result, "reduce response")
// console.log(arr, "original array")


// const Name = "Muhammad Shahzad"


// function SplitName(val){
// const word = val.split(' ')
// let result = ''
// for (let index = 0; index < word.length; index++) {
// result += word[index][0].toUpperCase() + ' '
// }
// return result
// }

// const result = SplitName(Name)
// console.log(result)


// const arr = [1,2,3,4,5,6]


// function findMissingNumber(val){
//   let n = val.length + 1
//   let SumVal = (n * (n + 1)) / 2
//   let expectedVal = val.reduce((acc, curr) => acc + curr, 0)
//   return SumVal - expectedVal
// }

// const result = findMissingNumber(arr)
// console.log(result)



// Remove duplicates 


// const arr = [1,1,1,1,1,1,]


// const removeduplicates = new Set(arr)
// console.log(removeduplicates)


// const arr = [1,2,3,4,5,6]


// const result = arr.find((val)=>{
// return val > 2
// })

// console.log(result, "find response")
// console.log(arr, "original array")



