printSection(1);

/*1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1*/

/*function makeCounter() {
    let currentCount = 0;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2


/*b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)*/

/*function makeCounter2(startFrom) {
    let currentCount = startFrom || 0
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter3 = makeCounter2(33);

counter3();
counter3();




/*c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/


/*function makeCounter3(startFrom, incrementBy) {
    let currentCount = startFrom || 0;
    incrementBy = incrementBy || 1;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

let counter4 = makeCounter3(10, 5)

var value = counter4();
console.log('value:', value)

printSection(2);

/*2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?*/

// #4 will be printed out first as it has no setTimeout assigned.
// #3 will be printed next as it has setTimeout assigned but no delay.
// #2 will be printed next as it has setTimeout with 20ms delay.
// #1 will be printed next as it has SetTimeout with 100ms delay.

/*b) Rewrite delayMsg as an arrow function*/

/*setTimeout(() => {
    console.log("Delayed arrow function.");
}, 1000);


/*c) Add a fifth test which uses a large delay time (greater than 10 seconds)*/

//var cancelMsg = setTimeout(delayMsg, 15000, '15 second delayed message?')


/*d) Use clearTimeout to prevent the fifth test from printing at all.*/

/*clearTimeout(cancelMsg);

function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

printSection(3);

3/*. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:

/*a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.*/

/*function debounce(func) {
    var timerId;
    return function () {
        clearTimeout(timerId)
        timerId = setTimeout(func, 1000);
    }

}

function printMe() {
    console.log('printing debounced message')
}
printMe = debounce(printMe);

printMe();
printMe();

/*b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms*/

/*function debounceB(func, ms) {
    var timerId;
    return function () {
        clearTimeout(timerId)
        timerId = setTimeout(func, ms);
    }

}

printMe = debounceB(printMe, 2000);

printMe();
printMe();

/*c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.*/

/*function debounceC(func, ms) {
    var timerId;
    return function (msg) {
        clearTimeout(timerId)
        timerId = setTimeout(func, ms, msg);
    }

}

function printMeMessage(msg) {
    console.log(msg);
}
var printMeC = debounceC(printMeMessage, 3000);

printMeC("I am the answer to C.");

//create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

printSection(4);

/*4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.*/

/*function printFibonacci() {
    let a = 1;
    let b = 1;

    console.log(a);

    const intervalId = setInterval(() => {
        console.log(b);
        const next = a + b;
        a = b;
        b = next;
    }, 1000);
}

printFibonacci();





/*b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing.*/

/*function printFibonacciTimeouts() {
    let a = 1;
    let b = 1;

    console.log(a);

    let count = 1;

    function printNextFibonacci() {
        if (count >= limit) {
            return;
        }

        console.log(b);
        const next = a + b;
        a = b;
        b = next;

        count++;

        setTimeout(printNextFibonacci, 1000);
    }

    printNextFibonacci();

}

printFibonacciTimeouts(10);


/*c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.*/


/*function printFibonacciTimeouts(limit) {
    let a = 1;
    let b = 1;

    console.log(a);

    let count = 1;

    function printNextFibonacci() {
        if (count >= limit) {
            return;
        }

        console.log(b);
        const next = a + b;
        a = b;
        b = next;

        count++;

        setTimeout(printNextFibonacci, 1000);
    }

    printNextFibonacci();

}

printFibonacciTimeouts(3);

printSection(5);


/*5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?*/

/*let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {

        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
setTimeout(car.description, 200); //fails

/*a) Fix the setTimeout call by wrapping the call to car.description() inside a
function*/

/*setTimeout(() => {
    car.description();
}, 200);

//b) Change the year for the car by creating a clone of the original and overriding it

let newCar = { ...car, year: 2022 };

/*c) Does the delayed description() call use the original values or the new values from
b)? Why?*/

//It still calls the original values because setTimeOut does not affect any chnages made to the original object.

/*d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function*/

/*let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);

/*e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)*/

// The changes made to the cloned object will not affect the bound function used in setTimeout.

printSection(6);

/*6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.*/

/*function multiply(a, b) {
console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

/*a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters*/

/*Function.prototype.delay = function (ms) {
    var fn = this;
    return function () {
        var args = arguments;
        setTimeout(function () {
            fn.apply(null, args);
        }, ms);
    };
};

function multiply(a,b) {
    console.log(a * b);
}

multiply.delay(500)(5,5);

/*b) Use apply to improve your solution so that delayed functions can take any number of
parameters*/

/*Function.prototype.delay = function (ms) {
    var fn = this;
    return function () {
        var args = arguments;
        setTimeout(function () {
            fn.apply(null, args);
        }, ms);
    };
};

function multiply() {
    var result = Array.prototype.reduce.call(arguments, function (a, b) {
      return a * b;
    });
    console.log(result);
  }
  

multiply.delay(500)(5,5);

multiply.delay(1000)(2, 3, 4);



/*c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works.*/

/*Function.prototype.delay = function (ms) {
    var fn = this;
    return function () {
        var args = arguments;
        setTimeout(function () {
            fn.apply(null, args);
        }, ms);
    };
};

function multiply() {
    var args = Array.prototype.slice.call(arguments);
    var result = args.reduce(function (accumulator, currentValue) {
        return accumulator * currentValue;
    })
    console.log(result);
}


multiply.delay(500)(5, 5);

multiply.delay(1000)(2, 3, 4);

multiply.delay(1500)(2, 3, 4, 5,);


printSection(7);

/*7. In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something
like [object Object].
However, we can define our own toString methods for custom objects to provide a more
meaningful string representation.
a) Define a custom toString method for the Person object that will format and print
their details*/

/*function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender
}

Person.prototype.tostring = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
}


/*b) Test your method by creating 2 different people using the below constructor function
and printing them*/

//const people1 = new Person('Jimi Hendrix', 27, 'male');
//const people2 = new Person('Dimebag Darrell', 39, 'male');

//console.log(people1.tostring());
//console.log(people2.tostring());

/*c) Create a new constructor function Student that uses call to inherit from Person and
add an extra property cohort*/

/*function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}


/*d) Add a custom toString for Student objects that formats and prints their details. Test
with 2 students.*/

/*function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
};

const student1 = new Student('Jimi Hendrix', 27, 'male', '2023');
const student2 = new Student('Dimebag Darrell', 39, 'male', '2023');

console.log(student1.toString());
console.log(student2.toString());


printSection(8);

/*8. The following DigitalClock class uses an interval to print the time every second once
started, until stopped.*/

/*class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
myClock.start()

/*a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.*/

/*class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix)
        this.precision = precision;
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}



/*b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.*/

/*class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime;
    }
  
    start() {
      const [targetHours, targetMinutes] = this.wakeupTime.split(':').map(Number);
  
      const checkAlarm = () => {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();
  
        if (currentHours === targetHours && currentMinutes === targetMinutes) {
          console.log('Wake Up');
          this.stop();
        } else {
          this.display();
        }
      };
  
      this.timer = setInterval(checkAlarm, 1000);
      checkAlarm();
    }
  }

  printSection(9);

/*9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.

a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below*/

/*b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it*/

//c) Update the testing code to catch rejected promises and print a different message

//d) Try to update the then and catch messages to include the random delay value


/*function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20) + 1;

        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay * 1000);
    });
}

randomDelay()
  .then(delay => console.log(`There was a successful delay of ${delay} seconds.`))
  .catch(delay => console.log(`There was a failure with a delay of ${delay} seconds.`));*/

printSection(10);

/*10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in
the comments before the function.)

a) Write a new version of this function using async/await*/

async function fetchURLDataUsingAsync(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}


//b) Test both functions with valid and invalid URLs

async function test_fetchURLDataUsingAsync() {
    try {
        var records = await fetchURLDataUsingAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(records);
    }
    catch(error) {
        console.error(error.message);
    }
}

test_fetchURLDataUsingAsync();
    
/*c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.*/

async function fetchURLDataUsingAsync(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

async function test_fetchURLDataUsingAsync() {
    try {
        var urls = [
            'https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/todos/3'
        ];

        var promises = urls.map(url => fetchURLDataUsingAsync(url));
        var records = await Promise.all(promises);
        console.log(records);
    } catch (error) {
        console.error(error.message);
    }
}

test_fetchURLDataUsingAsync();





//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",













function printSection(sectionNumber) {
    console.log("-------------------------------------------------------------");
}