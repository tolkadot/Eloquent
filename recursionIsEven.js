function isEven(x) {
  if (x === 1 || x === -1){
  return false;
}
  else if (x === 0){
    return true;
  }
  
  else if (x<0) {
    return isEven(x+2);
  }
  else {
    return isEven(x-2);
  }
}

console.log(isEven(30));
console.log(isEven(-1));
console.log(isEven(-2));
