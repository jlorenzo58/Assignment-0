function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  totalCount=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]==i){
      totalCount++;
    }
  }
return totalCount;
}

console.log(countOfAllIndexMatchingNumbers([0,1,2,5,4]));

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;