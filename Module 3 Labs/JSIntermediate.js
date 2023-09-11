printSection(1);

/* 1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */

const str = 'los angeles';
const upper = str.split(" ");

for (var i = 0; i < upper.length; i++) {
    if (upper[i]) {
        upper[i] = upper[i].charAt(0).toUpperCase() + upper[i].slice(1);
    }
}

const str2 = upper.join(" ");
console.log(str2);

printSection(2);

/* 2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator. */

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    }
    return str;
}

const str3 = "This is Jag's truncated string, I will try to make it long for this test. 123";
const maxLength = 12;

const truncated = truncateString(str3, maxLength);
console.log(truncated);

const condTrunc = str3.length > maxLength ? str3.substring(0, maxLength) + "..." : str3;

console.log(condTrunc);



printSection(3);

/* 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */

const animals = ['Tiger', 'Giraffe']

animals.unshift('wolf', 'dog')
animals.push('Gorilla', 'Shark');
animals.sort();

function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
};

replaceMiddleAnimal('Lion');

function findMatchingAnimals(beginsWith) {
    const regex = new RegExp('^' + beginsWith, 'i');
    return animals.filter(animal => regex.test(animal));
}

const matchAnimals = findMatchingAnimals('wo');

console.log(matchAnimals);
console.log(animals);

printSection(4);

/*4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.*/


/*function camelCase(cssProp) {
    const words = cssProp.split('-');
    const camelCased = words.map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camelCased.join('');
}

const cssProp = 'margin-left';
const camelCased = camelCase(cssProp);*/

/*function camelCase(cssProp) {
    const words = cssProp.split('-');
    let camelCased = words[0];
    for (let i = 1; i < words.length; i++) {
        camelCased += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return camelCased
}

const cssProp = 'margin-left';
const camelCased = camelCase(cssProp);

console.log(camelCased);*/

function camelCase(cssProp) {
    const words = cssProp.split('-');
    const camelCased = words.map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camelCased.join('');
}

const cssProp = 'margin-left';
const camelCased = camelCase(cssProp);

console.log(camelCased);

printSection(5);

/*5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following:*/
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

/*We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:*/

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

/*a) Explain why the above code returns the wrong answer

The code is not working because floating-point numbers in javascript are inaccurate, decimal values cannot be defined with accuracy in JS. Leading to rounding error when added together.

b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.*/

function currencyAddition(float1, float2) {
    return parseFloat((float1 + float2).toFixed(2));
}


/*c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns

the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful.*/

function currencyOperation(float1, float2, operation) {
    switch (operation) {
        case '+':
            return currencyAddition(float1, float2);
        case '-':
            return parseFloat((float1 - float2).toFixed(2));
        case '/':
            return parseFloat((float1 / float2).toFixed(2));
        case '*':
            return parseFloat((float1 * float2).toFixed(2));
        default:
            throw new error('Invalid Operation');
    }
}

/*d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:*/

function currencyOperation(float1, float2, operation, numDecimals) {
    const multiplicationFactor = 10 ** numDecimals;

    switch (operation) {
        case '+':
            return parseFloat(((float1 * multiplicationFactor) + (float2 * multiplicationFactor)) / multiplicationFactor).toFixed(numDecimals);
        case '-':
            return parseFloat(((float1 * multiplicationFactor) - (float2 * multiplicationFactor)) / multiplicationFactor).toFixed(numDecimals);
        case '/':
            return parseFloat(((float1 * multiplicationFactor) / (float2 * multiplicationFactor))).toFixed(numDecimals);
        case '*':
            return parseFloat(((float1 * multiplicationFactor) * (float2 * multiplicationFactor)) / (multiplicationFactor * multiplicationFactor)).toFixed(numDecimals);
        default:
            throw new Error('Invalid operation');
    }
}


console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyOperation(0.1, 0.2, '+'));
console.log(0.1 == currencyOperation(0.3, 0.2, '-'));
console.log(0.5 == currencyOperation(0.1, 0.2, '/'));
console.log(0.02 == currencyOperation(0.1, 0.2, '*'));
console.log(0.333 == currencyOperation(1, 3, '/', 3));

printSection(6);

/*6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.*/

function unique(duplicatesArray) {
    return Array.from(new Set(duplicatesArray));
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

printSection(7);

/*7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.*/

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

/*a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.*/

const getBookTitle = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    return book ? book.title : 'Book not found';
}

console.log(getBookTitle(3));
console.log(getBookTitle(4));

/*b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.*/

const getOldbooks = () => {
    return books.filter((book) => book.year < 1950);
};

console.log(getOldbooks());

/*c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.*/

const addGenre = () => {
    return books.map((book) => ({ ...book, genre: 'classic' }));
};

console.log(addGenre());

/*d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.*/

const getTitles = (authorIntial) => {
    return books
        .filter((book) => book.author.startsWith(authorIntial))
        .map((book) => book.title);
}

console.log(getTitles('A'));
console.log(getTitles('H'));


/*e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date.*/

const latestBook = () => {
    let latest = books[0];

    books.forEach((book) => {
        if (book.year > latest.year) {
            latest = book;
        }
    });

    return latest;
};

console.log(latestBook());

printSection(8);

/*8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a) Create a new phoneBookDEF Map to store names beginning with D, E or F

//const phoneBookDEF = new map();

//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

const phoneBookDEF = new Map([
    ['Ocelot', '096345678'],
    ['Snake', '095432769'],
    ['Liquid', '095234678']
]);

//c) Update the phone number for Caroline

phoneBookABC.set('Caroline', '333666999');

/*d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map.*/

function printPhoneBook(contacts) {
    for (const[name, phoneNumber] of contacts) {
        console.log(`${name}: ${phoneNumber}`);
    }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBook = new Map([...phoneBookABC.entries(),...phoneBookDEF.entries()]);

//f) Print out the full list of names in the combined phone book

for (const name of phoneBook.keys()) {
    console.log(name);
}

printSection(9);

// 9. Given the below salaries object, perform the following tasks.

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

//a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
    let total = 0;
    for (let employee in salaries) {
        total += salaries[employee]
    }
    return total;
}

let totalSalaries = sumSalaries(salaries);

console.log(totalSalaries);

/*b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary.*/

function topEarner(salaries) {

    let maxSalary = 0;
    let topEarnerName = "";

    for (let employee in salaries) {
        if (salaries[employee] > maxSalary) {
            maxSalary = salaries[employee];
            topEarnerName = employee;
        }

    }
    return topEarnerName;
}

let highestEarner = topEarner(salaries);
console.log(highestEarner); 

printSection(10);

/*10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a) Print the total number of minutes that have passed so far today

const minutesPassed = today.getHours() * 60 + today.getSeconds();

console.log(minutesPassed + ' minutes passed today!')

//b) Print the total number of seconds that have passed so far today

const secondsPassed = minutesPassed * 60 + today.getSeconds();

console.log(secondsPassed + ' seconds passed today!')

//c) Calculate and print your age as: 'I am x years, y months and z days old'

const birthDate = new Date('1993-10-05')
const ageDate = new Date(today - birthDate);
const years = ageDate.getUTCFullYear() - 1970;
const months = ageDate.getUTCMonth();
const days = ageDate.getUTCDate() - 1;

console.log(`I am ${years} years, ${months} months, and ${days} days old`);

/*d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates.*/

function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

const date1 = new Date('2023-06-17');
const date2 = new Date('2023-10-05');

const daysBetween = daysInBetween(date1, date2);

console.log(`These are the ${daysBetween} days between ${date1.toDateString()} and ${date2.toDateString()}`);









































function printSection(sectionNumber) {
    console.log("-------------------------------------------------------------");
}