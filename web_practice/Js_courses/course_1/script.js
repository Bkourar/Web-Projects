// alert("hey now js master");

// const firstname = 'john';
// const job = 'teacher';
// const birthYear  = 1991;
// const year = 2027;

// const jonas = "I'm " + firstname + ', a ' + (year - birthYear) + ' yeras old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstname}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`just a regulat 
//     string...`);
// console.log('just a regulat \n\ string...');

// const inyear = '1990';
// console.log(Number(inyear), inyear);
// console.log(Number(inyear) + 10);
// console.log(String(23));

// console.log('I am ' + 23 + ' years ');
// console.log('23' - '10' - 3 + 5);
// let n = 1  + 2 + '1';
// console.log(n);
// console.log(typeof n);
// console.log(Boolean(null));

// const fsca = prompt("what your user : emogi ");
// console.log(fsca);


// const bill = 275;

// let tip = (bill >= 50 && bill <= 300) ? ((bill * 15) / 100) : ((bill * 20) / 100);

// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

 'use strict'; // stric syntax

// let y = calc1(10);
// console.log("calc1 = ", y);

// function calc1(birthyear) {
//     let x = birthyear;
//     return x;
// }

// let z = calc2(20);
// console.log("calc2 = ", z);

// const calc2 = function (birthyear) {
//     let x = birthyear;
//     return x;
// }

// const calc1 = birthlyear => birthlyear;
// const age3 = calc1(10);

// console.log("calc1 = ", age3);

// const calc2 = birthlyear => {
//     const cal = birthlyear;
//     return cal;
// }

// let z = calc2(20);
// console.log("calc2 = ", z);


// const frineds = ['hello', 'world', '!'];
// const years = new Array(2000, 2001, 2002);

// console.log(`long frineds is ${frineds.length}`);
// console.log(`long years is ${years.length}`);
// console.log(frineds);
// frineds.push(23);
// console.log(frineds.includes('hello'));
// console.log(frineds.includes('bob'));
// console.log(frineds.includes(23));

// const joans = {
    // firstname: 'jonas',
    // lastname: 'shmedtmann',
    // job: 'teacher',
    // birthyear:100,
    // frineds: ['hello' , 'peter' , 'steven']

    // calAge: function () {
    //     console.log(this);
    //     return joans.birthyear;
    // }
// };

// console.log("jons age1" ,joans.calAge());
// console.log("jons age2" ,joans['calAge']());

// const inter = prompt("what do you want to know about jonas ? choose between firstname lastname, age : ");
// console.log(joans[inter]);


// for (let x = frineds.length - 1; x >= 0; x--) {
//     console.log(frineds[x]);
//     console.log(frineds[(frineds.length - 1) - x]);
//     console.log('---------');
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice !== 6) {
//     console.log(`${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }
// console.log(dice);







/*----------------------{ challanges Js }----------------------*/ 

// let Mark_mass = prompt("what your mass : ");
// let Mark_height = prompt("what your tall : ");
// let john_mass = prompt("what your mass : ");
// let john_height = prompt("what your tall : ");
// let BMI_Mark = (Mark_mass / Mark_height) ** 2;
// let BMI_john = (john_mass / john_height) ** 2;

// console.log("BMImark = ", BMI_Mark);
// console.log("BMIjohn = ", BMI_john);

// if (BMI_Mark > BMI_john) {
    //     console.log(`the BMI mark is hieght`, BMI_Mark);
// } else {
    //     console.log(`the BMI john is hieght`, BMI_john);
// }

//---------------------------------------------------------------------------------------


// const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

// const scoreDolphins = calcAverage(85,54, 41); 
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//             return "No team wins...";
//     }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

//---------------------------------------------------------------------------------------

// const Mark_Miller = {
//     name: 'mark',
//     fullname: 'Mark Miller',
//     mass:7,
//     height:5,
//     bmi:0,
    
//     calcBMI: function (mass, height) {
//         this.mass = mass;
//         this.height = height;
//         this.bmi = (this.mass / this.height) ** 2;
//         return this.bmi;
//     }
// };

// const John_Smith = {
//     name: 'mark',
//     fullname: 'John Smith',
//     mass:7,
//     height:5,
//     bmi:0,
    
//     calcBMI: function (mass, height) {
//         this.mass = mass;
//         this.height = height;
//         this.bmi = (this.mass / this.height) ** 2;
//         return this.bmi;
//     }
// };

// const winer = {
//     bmi_mark:0,
//     bmi_jons:0,
    
//     winer_mark: function (mass1, height1, mass2, height2) {
//         this.bmi_mark = Mark_Miller.calcBMI(mass1, height1);
//         this.bmi_jons = John_Smith.calcBMI(mass2, height2);

//         return this.bmi_jons > this.bmi_mark ? 
//                 `John Smith's BMI ${this.bmi_jons} is higher than Mark Miller's ${this.bmi_mark}!` :
//                 `Mark Miller's BMI ${this.bmi_jons} is higher than John Smith's ${this.bmi_mark}!`;
//     }
// }

// console.log(winer.winer_mark(78, 1.69, 92, 1.95));

//---------------------------------------------------------------------------------------
// /*----------------------{ ERROR CASES Js }----------------------*/

// function test() {
//   console.log(a); // RHS for "a"
// }
// test();
// ReferenceError: a is not defined
// Why?
// Engine tries to read a.
// Searches current scope → not found
// Searches outer scopes → not found
// No such variable
// → RHS failure = ReferenceError

//-------------------------------------------

// function test() {
//   a = 10;   // LHS lookup for "a"
// }
// test();
// console.log(a);  // 10  (global variable created!)
// No error.
// Why?
// Engine tries to assign to a
// Searches all scopes → NOT found (LHS failure)
// NOT in strict mode
// Global scope says: “I will create variable a for you.”
// → Implicit global created.
// This is why sloppy mode is dangerous.
    
//-------------------------------------------

// "use strict";
// function test() {
//   a = 10;   // LHS lookup for "a"
// }
// test();    // ReferenceError
// ReferenceError: a is not defined
// Why?
// Engine tries to assign to a
// Searches all scopes → no a found
// STRICT MODE → cannot create implicit global
// → LHS failure = ReferenceError (same as RHS failure)
    

//-------------------------------------------

// var x = 10;
// x();  // RHS succeeds, but then TypeError
// ypeError: x is not a function
// Reason:
// RHS lookup for x succeeds → finds value 10
// Engine tries to call it as function
// 10 is not callable
// → TypeError


//-------------------------------------------

// var obj = null;
// console.log(obj.name);  // TypeError: Cannot read property 'name' of null
// Why?
// RHS lookup for obj succeeds → obj = null
// Operation tries to access .name
// null cannot have properties
// → TypeError

//-------------------------------------------

// function foo(a) {
//   console.log(a + b); // RHS lookup for "b"
//   b = a;              // LHS lookup for "b"
// }
// foo(2);
// FIRST occurrence: console.log(a + b)
// RHS lookup for a → found (parameter)
// RHS lookup for b → NOT found anywhere
// → ReferenceError
// So execution stops HERE.
// This is why b = a never runs.
// If we remove the failing line:
// function foo(a) {
//   b = a;       // LHS lookup
// }
// foo(2);
// console.log(b);  // 2 (implicit global)
// LHS failure (no b)
// → sloppy mode → global b created