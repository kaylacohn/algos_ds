// factorial with a loop
function computeFactorial(num) {
  var result = 1;
  
  for (var i = 2; i <= num; i++) {
    result *= i; 
  }

  return result;
}

// factorial with recursion
function computeFactorial(num) {
  if(num === 1) {
    return 1;
  } else {
    return num * computeFactorial(num - 1);
  }
}
