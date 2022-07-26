console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
  return function (plusnumber) {
    return num + plusnumber;
  };
}

const plus2 = plus(2);
