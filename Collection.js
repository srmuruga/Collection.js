/** 
  * uniteUnique - A function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
  * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
  * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
  */

function uniteUnique(arr) {
  var arr1 = [];
  
  for( var i = 0; i < arguments.length; i++){
    for(var j = 0; j < arguments[i].length; j++){
      if(arr1.indexOf(arguments[i][j]) === -1){
        arr1.push(arguments[i][j]);
      }
    }
  }
  return arr1;
}

/** 
 * diffArray - Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 * In other words, return the symmetric difference of the two arrays.
 */


function diffArray(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
  }
  for(var j = 0; j < arr2.length; j++){
    if(arr1.indexOf(arr2[j])=== -1){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

/**
 * sumPrimes - Sums all the prime numbers up to and including the provided number.
 * The provided number may not be a prime.
 */
 
function sumPrimes(num) {
  var count;
  var sum = 0;
  for(var i = 2; i <= num; i++){
    count = 0;
    for(var j = 1; j < i; j++){
      if(i % j === 0){
        count++;        
      }
    }    
    if (count === 1){
      sum += i;
    }
  }
  return sum;
}
/**
 * myReplace - Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * Preserve the case of the original word when you are replacing it. 
 */
function myReplace(str, before, after) {
  var arr = [];
  arr = str.split(" ");
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i]===before){
      if(arr[i].charCodeAt(0) <= 90){
        var up = after.substr(0,1).toUpperCase();
        var rest = after.substr(1);
        after = up+rest;
        arr[i] = after;
      }
      else{
        arr[i] = after;
      }
    }
  }
  str = arr.join(" ");
  return str;
}