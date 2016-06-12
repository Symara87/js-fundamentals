/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var auspiciousNumbers = [13,4,11,8]
  

var calculateSum = function(iAddYouUp){
    var sum = 0
    for(var i=0; i < iAddYouUp.length; i++){
        // log(luckyNumbers[i])
        // log(luckyNumbers.length)
        sum = sum + iAddYouUp[i]
        
    }
		return sum
  }
  
 
log(calculateSum(auspiciousNumbers))




}
	cnosole.log(calculateSum([])===)


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// my thought process 
// im going to give you an array of numbers. i want you to iterate over every position in the array. as you iterate over each position of the aray (that is less then the length of the array), log its value. look at its value. if the value at position 0 is greater than the value of all the subsequent positions less than the length of the array return it. if not, look the value of position 2. if the value is greater than the values of all the subsequent positions less than the length of the array, return it. continue to to do this until you have found the position of the number that is greatest than all of the other positions 


// var luckyNumbers = [13 ,15, 19, 4, 5, 7, ]

// var maxOfArray = function(){          
//  for(var i = 0; i<luckyNumbers.length; i=i+1){
// 	if(luckyNumbers[i] > i<luckyNumbers.length){
// log(luckyNumbers[i])
//     }
// }
// 	// return luckyNumbers[i]
// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.
var luckyNums = [10,5,4,9,13,56,24] 

var maxOfArray = function(nums){
 { if (nums[0] > nums[1]) { 
  var max = nums[0]
 } 
  else {
  var max = nums[1]
  }
 for(var i = 2; i<nums.length; i=i+1){ 
     var testNum = nums[i] 
     if (testNum > max) { 
         max = testNum
} 
 } return max 
  }
}
log(maxOfArray(luckyNums))

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

var isVowel = function(character){
    var vowels = 'aeiou'
  for(var i = 0; i<vowels.length; i=i+1){
  // log(vowels[i])
            if(character === vowels[i]){
                return true
            }
            
               
            
    } 
        return false 
}    
       
       

log(isVowel("a"))
function isVowel(symbol){
    // YOUR CODE HERE
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
var stringReverse = function(inputString){
	var outputString = " "
    for(var i = inputString.length - 1; i >= 0; i=i-1){
    outputString = outputString + inputString[i]
    }
	return outputString
}
log(stringReverse("your doing great"))

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */



 
   var fizzBuzz = function(someNumber){
     if(someNumber%3 ===0 && someNumber%5 ===0){
    return "fizzBuzz"} 
else if(someNumber%3 === 0){
    return "fizz"
}
else if(someNumber%5 ===0){
  return "buzz"
} 
 else {
  return "."
 }
}
 
 



console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
