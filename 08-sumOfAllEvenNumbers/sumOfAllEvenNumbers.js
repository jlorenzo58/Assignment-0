function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var counter=0;
  for(let i=0; i<nums.length;i++){
    if(nums[i]%2==0){
      counter++;
    }
  }
  return counter;
}

console.log(sumOfAllEvenNumbers([5,5,5,5,5]));

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;