function countOfAllBooleans(arr) {
  // Insert code here;
  var counter=0;
  for(let i = 0; i < arr.length;i++){
    if(typeof arr[i] == "boolean"){
      counter++;
    }
  }
  return counter;
}

console.log(countOfAllBooleans([true, false, true, false, true, 7]));

// Do not edit this line;
module.exports = countOfAllBooleans;