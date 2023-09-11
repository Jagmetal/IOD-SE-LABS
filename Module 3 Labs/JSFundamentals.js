
printSection("1");

//1. What are the results of these expressions? (answer first, then use console.log() to check)//
"" + 1 + 0 // Answer is 10 as it includes a string at the start.//
"" - 1 + 0 // Answer is -1 as it includes a string at the start which determines the data type?//
true + false //Apparently true is converted to 1 and false is converted to 0. Answer: 1//
!true //The ! is a negation operator which converts true into false.//
6 / "3" // Since a number has been used at the start and a arithmetic has been used it converts the string to a number. Answer: 2//
"2" * "3" // arithmetic has been used and it converts the string to a number? answer: 6.//
4 + 5 + "px" // The number equation is done which is 9 and adds the string at the end. Answer: 9px//
"$" + 4 + 5 // Since a string is at the start it converts the number type to a string. Answer: $45//
"4" - 2 // When the - arithmetic is used it converts the string to a number? Answer: 2//
"4px" - 2 //4px cannot be changed into a number as it has string characters. Answer: NaN//
" -9 " + 5 // Since a + arithmetic is used and a string is at the start, it converts the number type to a string. Answer: -9 5//
" -9 " - 5 // A - arithmetic is used which converts the string into a number type. Answer: -14.//
null + 1 // Null has no value in a arithmetic? Answer: 1//
undefined + 1 // When you use a + arithmetic with undefined it converts it to NaN.//
undefined == null // Undefined and nulls value is the same. Answer: True//
undefined === null // Undefined and null data type is different. Answer: False//
" \t \n" - 2 // - converts string to a number, the string characters have no value. Answer: -2//


printSection(2);

//2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?//

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four // It converts into string, the correct process would be using number type. Answer: 34//
let multiplication = three * four // Answer: 12 //
let division = three / four // Answer: 0.75 //
let subtraction = three - four // Answer: -1 //
let lessThan1 = three < four // True //
let lessThan2 = thirty < four // it would be best to convert the string into a number. As this string execedes the unicode values?//

console.log(lessThan1);

printSection(3);
// 3. Which of the following console.log messages will print? Why? //

if (0) console.log('#1 zero is true') //0 has no value, it will not be printed.//
if ("0") console.log('#2 zero is true') //Since "0" is non empty string, which can be considered a true value. It will print true//
if (null) console.log('null is true') //Null is a false value so it will not be printed//
if (-1) console.log('negative is true') // -1 is a non 0 number, it will print true//
if (1) console.log('positive is true') // 1 is a non 0 number, it will print true//

printSection(4);

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?//
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}

let result2 = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;

console.log(result2);

printSection(5);
//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.//
function getGreeting(name) {
    return 'Hello ' + name + '!';
}

const expressionFunction = function (name) {
    return 'Hello' + name + '!';
}

const arrowFunction = (name) => 'Hello' + name + '!';

const arrowFunctionWithBlock = (name) => {
    return 'Hello' + name + '!';
}

console.log(arrowFunction("Jag"));
console.log(expressionFunction("Jag"));
console.log(arrowFunctionWithBlock("Jag"));

printSection(6);

/*6. a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */

const westley = {
    name: 'Westley',
    numFingers: 5
};
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
};

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    /*getCatchPhrase(person) {
      if (person.numFingers === 6) {
        return "You killed my father. Prepare to die!";
      } else {
        return 'Nice to meet you.';
      }
    }*/
    getCatchPhrase: person => {
        if (person.numFingers == 6) {
            return "You killed my father. Prepare to die!"
        }
        else { return "Nice to meet you." }
    }
};

inigo.greeting(westley);
inigo.greeting(rugen);

printSection(7);

/*7. The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.*/

const basketballGame = {
    score: 0,
    foulcount: 3,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score);
        return this;
    },
    fulltime() {
        console.log('Full-time score is ' + this.score);
        return this;
    },
    foul() {
        this.foulcount++;
        return this;
    },
};

console.log(basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fulltime().foul());

printSection(8);

/*8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.*/

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const auckland = {
    name: 'Auckland',
    population: 333666999,
    state: 'NZ',
    founded: '3rd June 2023',
    timezone: 'New Zealand/Auckland'
}

function printObjectProperties(obj) {
    for (let property in obj) {
        console.log(property + ':' + obj[property]);
    }
}
printObjectProperties(auckland);
printObjectProperties(sydney);

printSection(9);

/*9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let moreSports = ['Judo', 'Boxing'];

//teamSports = teamSports.concat(moreSports);//
moreSports = { ...teamSports };
teamSports.push('Kickboxing');
teamSports.unshift('Waterpolo');




let dog2 = dog1
dog2 = 'Evil Dog';

let cat2 = { ...cat1 };
cat2.name = 'Evil Cat';

console.log(cat1);
console.log(cat2);
console.log(dog2);
console.log(dog1);
console.log(moreSports);
console.log(teamSports);

printSection(10);

/*10. The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.candrive = function () {
        return this.age >= 16;
    };
}

const person1 = new Person("Devil", 66);
console.log(person1.candrive());
const person2 = new Person("Angel", 33);
console.log(person2.candrive());

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 16;
    }
}

const person3 = new PersonClass("Demi", 99);
console.log(person3.canDrive());
































function printSection(sectionNumber) {
    console.log("-------------------------------------------------------------");
}