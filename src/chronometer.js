// Let's implement the Chronometer class following the below requirements:

// The class (constructor) should not take any arguments.
// The class (constructor) should initialize two properties for each new chronometer object:
// currentTime, with the initial value set to 0.
// intervalId, with the initial value set to null.
// Once done, check the test results and verify that your code is passing the checks.

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  // start() method
  // should be declared on the Chronometer class
  // should receive one argument (printTimeCallback)
  // should increment by 1 the currentTime property every 1 second
  // should invoke the passed printTimeCallback every 1 second
  // When called, the start will begin keeping track of time by running a function in 1-second intervals
  // and incrementing the number of seconds stored in the property currentTime by 1.
  
  // You should use the setInterval method to achieve this. The interval id that is returned by calling
  // setInterval should be assigned to the intervalId property, so this way, we will be able to clear it
  // later on when we need to stop the timer.
  
  // Additionally, the start method should accept a callback function as an argument. Let's name it printTimeCallback.
  // Once start is invoked, the said printTimeCallback function should be executed in 1-second intervals, meaning inside
  // the setInterval. If printTimeCallback is not passed, it should be disregarded (hint: you should check whether the
  //   callback was passed before attempting to run it).
  
  // 💡 Hint 1: Keep in mind, if you pass a function declaration to the setInterval() method
  // (by writing setInterval(function () {/* */})), the keyword this will not refer to the object chronometer,
  // but to the global scope. To enable referencing the chronometer by accessing this, pass a
  // function expression (a so-called arrow function) to the setInterval() method (by writing setInterval(() => {/* */}) instead).


  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  // getMinutes() method
  // should be declared on the Chronometer class
  // should not receive any arguments
  // should return the number of entire minutes passed
  // We're storing the number of seconds elapsed in the currentTime property.
  // First, however, we will need to calculate how many minutes have elapsed.
  
  // The getMinutes method should take no arguments and return the number of
  // minutes that have passed as an integer, as a whole number. To calculate
  // the minutes, divide the current time by 60 and use the Math.floor() method
  // to get a rounded number.

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  // getSeconds() method
  // should be declared on the Chronometer class
  // should not receive any arguments
  // should return the number of entire seconds passed
  // Previously, we implemented the method that returns the
  // number of minutes passed. What if we want to get the number
  // of seconds passed after the start of the current minute?
  
  // The getSeconds method should return the number of seconds
  // that have passed after the start of the current minute.
  
  // For example, if the property currentTime holds 75, getSeconds
  // should return 15. If currentTime holds 210, getSeconds should
  // return 30, and so on.
  
  // You can use the modulo operator (current time % 60) to get the
  // number of remaining seconds.

  getSeconds() {
    return this.currentTime % 60;
  }

  // computeTwoDigitNumber() method
  // should be declared on the Chronometer class
  // should receive one argument (value)
  // should return a string
  // should always return a string of length 2
  // Our stopwatch has a screen that displays the number of
  // minutes and seconds that passed. However, sometimes
  // the getMinutes and getSeconds methods return a single-digit number.
  // Let's create a helper function that will convert any number
  // into a two-digits string representation.
  
  // The computeTwoDigitNumber method should take a value argument,
  // a number, and return a string. The received number should be padded
  // with 0s when the value is a single-digit number.
  
  // For example, if computeTwoDigitNumber is called with the number 7,
  // it should return a string "07". If called with the number 36, it should
  // return a string with the value of "36".
  
  // 💡 Hint: You can achieve this dynamically by using the .slice() method.
  
  // We'll use the computeTwoDigitNumber method in the following iterations
  // to format the values before displaying them on the stopwatch.

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      let numberReceived = value.toString();
      return `0${numberReceived}`; 
    }
    else {
      return value.toString();
    }
  }


//   stop() method
// should be declared on the Chronometer class
// should not receive any arguments
// should call clearInterval
// should clear the existing interval timer
// We can start our chronometer, but we still need
// to implement a method to stop it.

// When invoked, the stop method should clear the interval
// with the id that we had stored in the intervalId property.
// It's as simple as that.

// 💡 Hint: Use clearInterval.

  stop() {
    clearInterval(this.intervalId);
  }
  

//   reset() method
// should be declared on the Chronometer class
// should not receive any arguments
// should reset the value of the currentTime property to 0
// The reset() will reset our chronometer. To do this, we need
// to set the value of the currentTime property back to 0, and that's it!

  reset() {
    this.currentTime = 0;
  }


//   split() method
// should be declared on the Chronometer class
// should not receive any arguments
// should return a string
// should return a string showing the minutes and seconds in the "mm:ss" format
// We might want to extract a formatted timestamp of the time elapsed since the
// chronometer was started. We call this "obtaining the split time".

// The split method should take no arguments, and it should return a string where
// the time since the start is formatted as "mm:ss". Internally, the split method can
// use the previously declared methods getMinutes, getSeconds, and computeTwoDigitNumber.

  split() { 
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
