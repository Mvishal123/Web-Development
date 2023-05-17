/* -----------------sample object------------------- */
// let obj = {
//     1 : {
//         name : "vishal",
//         age : 18,
//         family : ["mahesh", "sathya", "vaibhav"]
//     },
//     2 : {
//         name: "Vaibhav",
//         age : 16,
//         family : ["mahesh", "sathya", "vaibhav"]
//     }
// }

/* ----------------------parseInt-------------------------*/
// console.log(Math.floor(Math.random(2, 20) * 20));
// console.log(Math.ceil(Math.random()*10));

// let a = "123"
// console.log(parseInt(a)); // parseInt changes a string to an integer if the string starts with a number else it return NaN

// let a = '100+';
// let b = '20';

// const newA = parseFloat(a);
// const newB = parseFloat(b);

// console.log(newA + newB);

// --------------------VAR and LET Keyword------------------------
// var a = 12;
// var a = 134;
// console.log(a); //var lets overriding ; let keyword throws error when overridden


// ----------------Object.freeze keyword -> This allows to freeze the mutation of any obj -------------------
// let obj = {
//     name: "Vishal",
//     age: 18
// }
//
// let list = [1, 2, 3, 4, 5];
// Object.freeze(list);
//
// console.log(list)
// Object.freeze(obj);
// console.log(obj.name)

// ------------------Spread operator---------------------------------
// let arr = [1,2,5,6,12,4];
// let arr1 = [12, 34, 423, 1234];
// console.log(Math.max(...arr))
// console.log(...arr, ...arr1);

// Destructuring
let obj = {
    name: "Vishal",
    age: 18,
    family:{
        mom: "Sathya",
        father: "Maheshwaran",
        Brother: "Vaibhav"
    },
    pets: {
        cat1: "Anne",
        cat2: "Snow",
        cat3: "Molly",
        dog1: "Brownie",
        dog2: "Johnny"
    }
}
//
//
// // let {name, age, family, pets} = obj;
// // let {father, mom, Brother} = obj.family;
//
// let {name: vishalsName, age: vishalsAge} = obj;
// let {family:{mom: mother, father: dad, Brother: bro}} = obj
// console.log(mother)
// console.log(dad)
// console.log(bro)
// console.log("Vishal's name is ", vishalsName)
// console.log("Vishal's age is ", vishalsAge)


// Swapping using destructuring
// let a = 12, b = 21;
// [a, b] = [b, a];
//
// console.log(a, b)

// --------------------------------------PROTOTYPES--------------------------------------
// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype,
// making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.


const myDate = new Date();

let ans = Object.getPrototypeOf(myDate);
console.log(obj.hasOwnProperty('family'));



