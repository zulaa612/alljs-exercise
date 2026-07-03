/* ============================================================
   LESSON 6 â€” LOOPS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: for / while, % , Math.floor, strings, if. NO arrays.
   Each function RETURNS its answer (a number, string, or boolean).

   Run:  node 6-loops.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Sum to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n.
// your code here

// console.log(sumTo(5));
// TEST 1:  sumTo(5)    ->  15
// TEST 2:  sumTo(1)    ->  1
// TEST 3:  sumTo(10)   ->  55

// ----- 2. Count multiples of 4 -----
// Write `countFours(max)` that RETURNS how many numbers 1..max divide by 4.
// your code here
function countFours(max){
    count = 0;
    for (i = 1; i <= max; i++){
        if ( i % 4 === 0){
            count++;
        }
    }
    return count;
}
console.log(countFours(20));
console.log(countFours(7));
console.log(countFours(3));

// console.log(countFours(20));
// TEST 1:  countFours(20)  ->  5
// TEST 2:  countFours(7)   ->  1
// TEST 3:  countFours(3)   ->  0

// ----- 3. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n.
// your code here


// console.log(factorial(5));
// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(1)  ->  1

// ----- 4. Power without ** -----
// Write `power(base, exp)` that RETURNS base multiplied by itself exp times,
// using a loop. (power(2,3) = 8.) exp is 0 or more; exp 0 -> 1.
// your code here


// console.log(power(2, 3));
// TEST 1:  power(2, 3)   ->  8
// TEST 2:  power(5, 2)   ->  25
// TEST 3:  power(7, 0)   ->  1

// ----- 5. Count the digits -----
// Write `digitCount(n)` (n >= 0) that RETURNS how many digits n has,
// using Math.floor(n / 10) in a loop.
// your code here

// console.log(digitCount(7384));
// TEST 1:  digitCount(7384)  ->  4
// TEST 2:  digitCount(50)    ->  2
// TEST 3:  digitCount(0)     ->  1

// ----- 6. Sum of digits -----
// Write `digitSum(n)` that RETURNS the sum of n's digits.
// your code here

// console.log(digitSum(1234));
// TEST 1:  digitSum(1234)  ->  10
// TEST 2:  digitSum(999)   ->  27
// TEST 3:  digitSum(5)     ->  5

// ----- 7. Count a letter -----
// Write `countLetter(text, letter)` that RETURNS how many times letter
// appears in text.
// your code here

// console.log(countLetter("banana", "a"));
// TEST 1:  countLetter("banana", "a")  ->  3
// TEST 2:  countLetter("hello", "l")   ->  2
// TEST 3:  countLetter("dog", "z")     ->  0

// ----- 8. Reverse a string -----
// Write `reverse(text)` that RETURNS text backwards, building it in a loop.
// your code here

// console.log(reverse("code"));
// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"

// ----- 9. Count vowels -----
// Write `countVowels(text)` that RETURNS how many vowels (a,e,i,o,u) are in text.
// your code here

// console.log(countVowels("javascript"));
// TEST 1:  countVowels("javascript")  ->  3
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0

// ----- 10. Is it prime? -----
// Write `isPrime(n)` (n >= 2) that RETURNS true when n has no divisor
// between 2 and n-1.
// your code here

// console.log(isPrime(13));
// TEST 1:  isPrime(13)  ->  true
// TEST 2:  isPrime(15)  ->  false
// TEST 3:  isPrime(2)   ->  true

// ----- 11. Steps to zero -----
// Write `stepsToZero(n)`. While n > 0: if even, halve it; if odd, subtract 1.
// RETURN the number of steps to reach 0.
// your code here

// console.log(stepsToZero(14));
// TEST 1:  stepsToZero(14)  ->  6
// TEST 2:  stepsToZero(8)   ->  4
// TEST 3:  stepsToZero(1)   ->  1

// ----- 12. Number palindrome -----
// Write `isNumPalindrome(n)` (n >= 0) that RETURNS true when n reads the same
// forwards and backwards. Build the reverse with a loop, then compare.
// your code here

// console.log(isNumPalindrome(121));
// TEST 1:  isNumPalindrome(121)  ->  true
// TEST 2:  isNumPalindrome(123)  ->  false
// TEST 3:  isNumPalindrome(7)    ->  true