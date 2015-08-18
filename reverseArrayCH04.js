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
