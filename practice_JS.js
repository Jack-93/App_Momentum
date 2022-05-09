// // JavaScript,
// // the scripting language used to create dynamic functionality on the web


// // 1. variable: const, let (var not used)
// let a = 5;
// const myName="jack";

// console.log("my name is", myName);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);

// a=6;
// // myName="jaewook";
// // console.log("my name is", myName);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);

// // 2. boolean: binary (1, 0), (true, false)
// // null, undefined
// const nothing = null; // nothing
// let something; // memory use

// console.log(nothing);
// console.log(something);

// // 3. group, array

// const days=["mon","tus","wed","thr","fri","sat","sun"];

// // Get items of array
// console.log(days);
// for(let i=1;i<=7;i++){
//     console.log(days[i-1]);
// }
// days[8]="what dyas";

// // Edit value and index of array

// // Add some values
// console.log(days.indexOf("mon"));

// days.push("what days");
// console.log(days);

// // Shows values and indexes
// days.find(function(value){
//     console.log("Here's are days : ", value);
// });

// days.findIndex(function(value, index){
//     console.log("value is : ", value, " index is : ", index);
// });

// // find index of array you want
// console.log(days.indexOf('mon'));

// // find the length of array (# of array items)
// console.log(days.length);


// // 4. * Object (different items in one category)
// const jack={
//     name:"jack",
//     age:30,
//     height:176+"cm",
//     points:10
// };
// // The Object "jack" is const, but items not
// jack.age=29;

// // Add items (also can insert items)
// jack.sex="male";

// console.log(jack.name);
// console.log(jack.age);
// console.log(jack.height);
// console.log(jack.points);
// console.log(jack.sex);

// // 6. function - incapsulation
// function sayHello(name, express){
//     console.log("Hello my name is", name);
//     console.log(express, "to meet you");
// }
// sayHello("Jack","nice");

// function plus(a,b){
//     return a+b;
// }
// function devide(a,b){
//     return a/b;
// }
// console.log(plus(1,2));
// console.log(devide(4,2));

// // Implemetation in Object
// const Player={
//     name: function(nameOfPlayer){
//         return nameOfPlayer;
//     },
//     age: function(ageOfPlayer){
//         return ageOfPlayer;
//     }
// }
// console.log(Player.name("jack"));
// console.log(Player.age(10));
// // not availalbe example
// // console.log(Player(Player.name("jin"), Player.age(12)));

// // Global, Local value in function
// var x = 10;
// function createFunction1() {
//     var x = 20;
//     return new Function(x); // Local x (=20)
// }
// console.log(createFunction1());

const calc = {
    add: function(a,b){
        return a+b;
    },
    substract: function(a,b){
        return a-b;
    },
    devide: function(a,b){
        return a/b;
    },
    multi: function(a,b,){
        return a*b;
    },
    powers: function(a,b){
        return a**b;
    },
};
const resultOfAdd = calc.add(2,3);
const resultOfSubs = calc.substract(resultOfAdd,1);
console.log(resultOfSubs);
