/////////////////////////////////////////////////////////////////////////////
//Write a function arrayToList that builds up a data structure like the 
//previous one when given [1, 2, 3] as argument, and write a listToArray 
//function that produces an array from a list. Also write the helper functions 
//prepend, which takes an element and a list and creates a new list that adds the 
//element to the front of the input list, and nth, which takes a list and a number 
//and returns the element 
//at the given position in the list, or undefined when there is no such element.
//
//If you haven’t already, also write a recursive version of nth.
//dbryant 19aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////




function arrayToList(arr) {
    
    for(i=arr.length-1; i>=0; i--)
    var list = {
  value: arr[i],
  rest:  list };
  console.log( list, list.rest);
  }

    



// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
