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

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(nums) {
  // First attempt
  // let result = 1;
  
  // function helper(nums) {
  //     if (nums.length === 0) return 0;
      
  //     result *= nums[0];
  //     return helper(nums.slice(1));
      
  // }
  // helper(nums)
  // return result;
  
  // Second attempt
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
  
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 0) return 0;
  return num +  recursiveRange(num - 1);
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(word){
  // First attempt
  // let result = '';
  // function helper(letters) {
  //   if (letters.length === 0) return "";
  //   result += letters[letters.length-1];
  //   return helper(letters.slice(0, letters.length-1));
  // }
  // helper(word);
  // return result;

  // Second attempt
  if (word.length <= 1) return word;
	return reverse(word.slice(1)) + word[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));

  return false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false