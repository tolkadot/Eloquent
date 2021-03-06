///////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////




function arrayToList(arr) {
  var list = null;  //set the initial list to null.
    for(i=arr.length-1; i>=0; i--) //count down backwards to nest from the inside out.
     list = {
  value: arr[i], //set the value to the array value
  rest:  list }; // this will nest the list
  console.log( list, list.rest);
  }

   function listToArray(obj) {
    var arr = [];
    console.log( obj.value, obj.rest.value, obj.rest.rest.value);
    for (var node = obj; node; node = node.rest) {
       arr.push(node.value);
        
    }
    return arr;
} 
function prepend(element, list) {
   newlist = listToArray(element);
    console.log(element, list, newlist);
   // newlist = { value : element, rest: newlist};
    
    //console.log(newlist);
    return newlist;
    
}


console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
