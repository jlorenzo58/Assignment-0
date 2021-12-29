function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var counter = 0;
  for(let i=0;i<nums.length;i++){
    if((nums[i] >= start) && (nums[i] <= end)){
      counter++;
    }
  }
  return counter;
}

console.log(sumOfNumsWithinARange([5,5,5,5,5,5],0,23));
// Do not edit this line;
module.exports = sumOfNumsWithinARange;