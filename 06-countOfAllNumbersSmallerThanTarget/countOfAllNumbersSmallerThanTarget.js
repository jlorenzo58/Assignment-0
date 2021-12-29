function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var counter =0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]<target){
      counter++;
    }
  }
  return counter;
}

console.log(countOfAllNumbersSmallerThanTarget([9000],22));
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;