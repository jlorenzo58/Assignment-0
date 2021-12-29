function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var counter=0;
  for(let i=0; i<nums.length;i++){
    if(nums[i]%2==1){
      counter++;
    }
  }
  return counter;
}

console.log(sumOfAllOddNumbers([0,1,2,3]));

// Do not edit this line;
module.exports = sumOfAllOddNumbers;