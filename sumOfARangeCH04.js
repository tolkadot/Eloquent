function range(start, end) {
var arr= [];
  for(var i = start; i<=end; i++){
   arr.push(i);}
  //console.log(arr)
return arr;
}

function sum(numbers){
  var total = 0;
  for(var j=0; j<numbers.length; j++){
  total += numbers[j];
  }
  return total;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
