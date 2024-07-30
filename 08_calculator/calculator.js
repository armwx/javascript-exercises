const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};
const sum = function(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, val) => acc * val);
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
    if (n < 0) {
        return 'ERR'; // Factorial is not defined for negative arr
    }
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
