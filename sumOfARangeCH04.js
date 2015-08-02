function range(start, end, step) {
var arr= [];
  if(step === undefined){
  for(var i = start; i<=end; i++){
   arr.push(i);}
  }
  else if(step > 0){
  for(var i = start; i<=end; i+=step){
   arr.push(i);}
  }
  else{
  for(var i = start; i>=end; i+=step){
   arr.push(i);}
  }
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
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
