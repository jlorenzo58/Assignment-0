function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min = nums[0],max=nums[0],sum = 0;
  for(let i=0; i < nums.length; i++){
    if(min>nums[i]){
      min=nums[i];
    }
    if(max<nums[i]){
      max=nums[i];
    }
  }
  return min+max;
}

console.log(sumOfMinimumAndMaximum([5,5,5,5,5,5,5]));
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;