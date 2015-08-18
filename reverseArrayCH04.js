/////////////////////////////////////////////////////////////////////////////
//The first, reverseArray, takes an array as argument and produces a new array 
//that has the same elements in the inverse order. The second, reverseArrayInPlace, 
//does what the reverse method does: it modifies the array given as argument 
//in order to reverse its elements. Neither may use the standard reverse method.
//dbryant 18aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////

function reverseArray(arr){
    
    var reversedArr = [];
    
    for(i=1; i<=arr.length; i++) {
        reversedArr.push(arr[arr.length - i]);
        
        
    }
    //console.log(reversedArr);
    }
 
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arr){
    
    
    var halfLength = arr.length;
    
    if(halfLength%2 === 0) { //length is even
        halfLength = halfLength/2;
    }
    else {halfLength = (halfLength/2) - 0.5;}
    
  for(i=0; i<=halfLength; i++)
  {
    var temp = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = arr[i] ;
   arr[i] = temp;
  }
  
}


reverseArrayInPlace([1, 2, 3, 4, 5]);
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


// → ["C", "B", "A"];
//var arrayValue = [1, 2, 3, 4, 5];

//console.log(arrayValue);
// → [5, 4, 3, 2, 1]
