//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

recursiveReverse = function(arr) {
 var reversedArray = [];

 var addItems = function(orderedArr) {
  if (orderedArr.length > 0) {
   reversedArray.push(orderedArr.pop()); 
    addItems(orderedArr);
  } 
   return;
 }; 

  addItems(arr);

  return reversedArray;
};
