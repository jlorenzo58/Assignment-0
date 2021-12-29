function pairSum(nums, target) {
  // Insert code here;
  var temp=false;
  let arr = Array.from(nums);

  arr.forEach(ele1 => {arr.forEach(ele2 =>{
    if(ele1+ele2==target){
      temp=true;
    }
  })
})
  
return temp;
}

console.log(pairSum([33,66,99], 99));

// Do not edit this line;
module.exports = pairSum;