// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// personList = [person, {
//     firstName: 'Jane',
//     lastName: 'Doe'
// }, {
//         firstName: 'Jack',
//         lastName: 'Doe'
//     }, {
//         firstName: 'Justin',
//         lastName: 'Smith'
//     }];

// console.log(personList[0]);


// message = 'Hello World';

// showMesssage(message);


// let state = "LA";
// let taxPercent;

// if (state === "CA") {
//     taxPercent = 7.25;
// }

// else if (state === "LA") {
//     taxPercent = 9.25;
// }

// console.log(taxPercent);


// shortcut for if/else (ternary operator)
// 3 conditions
// price = 15;

// let message = (price > 10) ? 'expensive' : 'cheap';

// showMesssage(message);


// for loop
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

//while loop

// let count = 1;

// while (count < 5) {
//     console.log(count);
//     count++;
// }


let myfunction = function logMessage(message, anotherMessage) {
    console.log(message, anotherMessage);
    console.log(message);
    console.log(anotherMessage);

}

// myfunction('Test', 'Another Test'); // Test Another Test
// myfunction('John'); // John undefined



// function getSecretCode(value) {
//     let code = value * 42;
//     return code;
// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode); // 84

// console.log(code); // 84


// let key = 42;

// function getSecretCode(value) {

//     let keyGenerator = function () {
//         let key = 12;
//         console.log('in keyGenerator: ', key);
//         return key;
//     }

//     let code = value * keyGenerator();
//     console.log(' in getSecretCode: ', key);
//     return code;
// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode); // 24

changePercentOff(32);

// let mySymbol = Symbol();

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false,
//     message: 'Hello World',
//     [mySymbol]: 'secretInformation',
//     showInfo: function (realAge) {
//         showMesssage(this.name + ' is ' + realAge + ' years old');
//     }
// };

// person.showInfo(100)

// console.log(typeof person.showInfo)

// let message = 'Hello';

// function changeMessage(message) {
//     message = 'Hi!';
//     return message;
// }

// message = changeMessage(message);

// showMesssage(message); // Hello

// console.log(message); // Hi!


// let person = {
//     name: "John",
//     age: 32,
//     partTime: false,
// };

// function incrementAge(person) {
//     person.age++;
// }

// incrementAge(person);
// console.log(person.age); // 33
// showMesssage(person.age); // 33


// let now = new Date();
// showMesssage(now.toDateString());

// console.log(Math.random()); // 42


// let numstr = "100";

// stringtoNumber = Number.parseFloat(numstr);

// console.log(typeof stringtoNumber); // 10

// Styling the Webpage with JavaScript

// Showing and Hiding DOM Elements

const header = document.getElementById('message');

header.style.color = '#00000';
header.style.fontWeight = '900';

const button = document.getElementById('see-review');

button.addEventListener('click', function () {
    console.log('click');
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'Close Review';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'See Review';
    }
});


const values = ['a', 'b', 'c'];

// console.log(Array.isArray(values));
// console.log(values[0]); //a
// console.log(values[1]); //b
// console.log(values[2]); //c
// console.log(values[3]); //undefined

//push -- add to the end of the array
values.push('d', 'e', 'f');
console.log(values); // d

//pop -- remove from the end of the array
const last = values.pop();
console.log(last); // d
console.log(values); // a,b,c

//shift -- remove from the beginning of the array
const first = values.shift();
console.log(first); // a

//unshift --  add to the beginning of the array
values.unshift('a');
console.log(values); // a,b,c