// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of  Math.pow()  - do not worry about negative bases and exponents.

function power(base, to) {
  if (to === 0) return 1;
  return base * power(base, to -1);
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four 4!  is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1)
}

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
