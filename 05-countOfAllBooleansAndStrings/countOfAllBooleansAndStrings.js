function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var counter=0;
  for(let i=0;i<arr.length;i++){
    if( (typeof arr[i] == "string") || (typeof arr[i] == "boolean")){
      counter++;
    }
  }
  return counter;
}
console.log(countOfAllBooleansAndStrings([8, "hello", undefined, null, false, false, false, false, false]));

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;