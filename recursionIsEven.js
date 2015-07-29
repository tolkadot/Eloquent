function isEven(x) {
  if (x == 1 || x <0)
    return false;
  else if (x === 0){
      return true;
  }
  else {
    x=isEven(x-2);
    console.log(x)
  }
}

console.log(isEven(30));
// → 8
